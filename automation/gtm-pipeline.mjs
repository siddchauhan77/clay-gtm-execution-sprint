import fs from 'node:fs'
import path from 'node:path'
import { performance } from 'node:perf_hooks'

const args = process.argv.slice(2)

if (args.includes('--help')) {
  console.log(`Usage: node automation/gtm-pipeline.mjs [options]

Options:
  --input <csv>             Input account data
  --append-fixture <csv>    Append a labeled test fixture
  --recovery <csv>          Apply recovery values by normalized domain
  --crm <json>              Simulated CRM state file
  --log <json>              Run log file
  --run-id <id>             Stable run identifier
  --reset-crm               Start from an empty simulated CRM state
  --help                    Show this help without changing files`)
  process.exit(0)
}

function valueAfter(flag, fallback = null) {
  const index = args.indexOf(flag)
  return index >= 0 ? args[index + 1] : fallback
}

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..')
const inputPath = path.resolve(root, valueAfter('--input', 'data/target-accounts-v2.csv'))
const fixturePath = valueAfter('--append-fixture')
const recoveryPath = valueAfter('--recovery')
const crmPath = path.resolve(root, valueAfter('--crm', 'evidence/runs/simulated-crm.json'))
const logPath = path.resolve(root, valueAfter('--log', 'evidence/runs/run.json'))
const runId = valueAfter('--run-id', `run-${Date.now()}`)
const resetCrm = args.includes('--reset-crm')

function parseCsv(text) {
  const rows = []
  let row = []
  let field = ''
  let quoted = false
  for (let i = 0; i < text.length; i += 1) {
    const char = text[i]
    const next = text[i + 1]
    if (char === '"' && quoted && next === '"') {
      field += '"'
      i += 1
    } else if (char === '"') {
      quoted = !quoted
    } else if (char === ',' && !quoted) {
      row.push(field)
      field = ''
    } else if ((char === '\n' || char === '\r') && !quoted) {
      if (char === '\r' && next === '\n') i += 1
      row.push(field)
      if (row.some((cell) => cell !== '')) rows.push(row)
      row = []
      field = ''
    } else {
      field += char
    }
  }
  if (field || row.length) {
    row.push(field)
    rows.push(row)
  }
  const [headers, ...data] = rows
  return data.map((cells) => Object.fromEntries(headers.map((header, index) => [header, cells[index] ?? ''])))
}

function normalizeDomain(value) {
  return value.trim().toLowerCase().replace(/^https?:\/\//, '').replace(/^www\./, '').replace(/\/$/, '')
}

function loadCsv(filePath) {
  return parseCsv(fs.readFileSync(filePath, 'utf8'))
}

function loadJson(filePath, fallback) {
  return fs.existsSync(filePath) ? JSON.parse(fs.readFileSync(filePath, 'utf8')) : fallback
}

function stableRecord(record) {
  return {
    account: record.account,
    domain: record.normalized_domain,
    route: record.commercial_route,
    review_status: record.review_status,
    career_networking_value: record.career_networking_value,
    evidence_status: record.enrichment_status,
    source_ids: record.source_ids,
    score_status: record.commercial_score_status,
  }
}

const startedAt = new Date().toISOString()
const started = performance.now()
let records = loadCsv(inputPath)

if (fixturePath) records = records.concat(loadCsv(path.resolve(root, fixturePath)))

if (recoveryPath) {
  const overrides = new Map(loadCsv(path.resolve(root, recoveryPath)).map((record) => [normalizeDomain(record.domain), record]))
  records = records.map((record) => overrides.get(normalizeDomain(record.domain)) ?? record)
}

const normalized = records.map((record) => ({ ...record, normalized_domain: normalizeDomain(record.domain) }))
const unique = new Map()
const duplicates = []

for (const record of normalized) {
  if (!record.normalized_domain) {
    duplicates.push({ account: record.account, reason: 'missing_domain' })
    continue
  }
  if (unique.has(record.normalized_domain)) {
    duplicates.push({ account: record.account, domain: record.normalized_domain, reason: 'duplicate_normalized_domain' })
    continue
  }
  unique.set(record.normalized_domain, record)
}

const failed = []
const held = []
const routed = []

for (const record of unique.values()) {
  if (record.enrichment_status === 'conflict') {
    failed.push({ account: record.account, domain: record.normalized_domain, reason: 'enrichment_conflict' })
  } else if (!['approved', 'network_only'].includes(record.review_status)) {
    held.push({ account: record.account, domain: record.normalized_domain, reason: `review_status:${record.review_status}` })
  } else {
    routed.push(record)
  }
}

const crm = resetCrm ? { schema: 'simulated-test-crm-v1', records: {} } : loadJson(crmPath, { schema: 'simulated-test-crm-v1', records: {} })
const inserted = []
const updated = []
const unchanged = []

for (const record of routed) {
  const key = record.normalized_domain
  const next = stableRecord(record)
  const previous = crm.records[key]
  if (!previous) {
    crm.records[key] = next
    inserted.push(key)
  } else if (JSON.stringify(previous) === JSON.stringify(next)) {
    unchanged.push(key)
  } else {
    crm.records[key] = next
    updated.push(key)
  }
}

const finishedAt = new Date().toISOString()
const log = {
  run_id: runId,
  mode: 'simulation_only',
  started_at: startedAt,
  finished_at: finishedAt,
  processing_time_ms: Number((performance.now() - started).toFixed(3)),
  local_processing_cost_usd: 0,
  clay_or_provider_cost_usd: 'unknown_not_measured',
  input_rows: records.length,
  normalized_unique_records: unique.size,
  duplicates_removed: duplicates.length,
  routed_records: routed.length,
  held_records: held.length,
  failed_records: failed.length,
  crm_inserted: inserted.length,
  crm_updated: updated.length,
  crm_unchanged: unchanged.length,
  duplicates,
  failed,
  inserted,
  updated,
  unchanged,
  boundary: 'No external CRM, enrichment provider, sequencer, or contact was changed.',
}

fs.mkdirSync(path.dirname(crmPath), { recursive: true })
fs.mkdirSync(path.dirname(logPath), { recursive: true })
fs.writeFileSync(crmPath, `${JSON.stringify(crm, null, 2)}\n`)
fs.writeFileSync(logPath, `${JSON.stringify(log, null, 2)}\n`)
console.log(JSON.stringify(log, null, 2))
