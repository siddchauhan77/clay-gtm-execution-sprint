# Safe Handoff Simulation

This local workflow extends the research project into a testable operating path:

`normalize → deduplicate → validate → human review → route → simulated CRM upsert → log`

## What it proves

• Domains normalize before matching.

• Duplicate domains do not create duplicate CRM records.

• `unknown` stays distinct from zero.

• Conflicting enrichment fails closed.

• Only `approved` and `network_only` records reach the simulated CRM.

• Reruns use normalized domain as the idempotency key.

• Processing time and local processing cost are logged.

## What it does not prove

• No real CRM connection exists.

• No Clay credits, vendor charges, or contact-level data were measured.

• No campaign was sent.

• No response, meeting, pipeline, or revenue result exists.

## Verification commands

```bash
node automation/gtm-pipeline.mjs \
  --run-id first-run \
  --reset-crm \
  --append-fixture automation/fixtures/duplicate-wooqer.csv \
  --crm evidence/runs/simulated-crm.json \
  --log evidence/runs/first-run.json

node automation/gtm-pipeline.mjs \
  --run-id safe-rerun \
  --append-fixture automation/fixtures/duplicate-wooqer.csv \
  --crm evidence/runs/simulated-crm.json \
  --log evidence/runs/safe-rerun.json

node automation/gtm-pipeline.mjs \
  --run-id failure-recovery \
  --append-fixture automation/fixtures/duplicate-wooqer.csv \
  --recovery automation/fixtures/revnue-recovery.csv \
  --crm evidence/runs/simulated-crm.json \
  --log evidence/runs/failure-recovery.json
```

The duplicate and recovery files are labeled fixtures. They exist to test behavior, not to represent a production run.
