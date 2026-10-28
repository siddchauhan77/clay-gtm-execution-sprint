# Project 1: Build a Lead List and Rank Your Targets

## Objective

Build a small, qualified prospect list for a real offer, enrich it with useful signals, rank accounts by commercial relevance, and remove accounts that look attractive but are poor targets.

## Offer used

**Founder-Led Demand Content System**

Help B2B SaaS founders turn expertise, customer conversations, product insight, and company knowledge into LinkedIn + newsletter content that supports buyer education and sales conversations.

## ICP

### Company

- B2B SaaS
- Roughly 20–150 employees
- Seed to Series B preferred
- U.S. market or active U.S. expansion
- Complex product requiring buyer education
- Founder still involved in sales or positioning
- Growth / hiring / funding / launch / expansion signals
- Founder content has room to improve

### Buyer

Primary:

- Founder
- CEO
- Co-founder

Secondary:

- Head of Marketing
- VP Marketing
- Head of Growth
- Head of Content

## Clay workflow

```text
Offer
  ↓
ICP
  ↓
Company search
  ↓
25 accounts
  ↓
Enrichment
  ↓
Account scoring
  ↓
8 researched deeper
  ↓
Human judgment
  ↓
5 priority accounts
```

## Enrichment signals

The lead list was enriched with signals tied to priority:

- Headcount growth
- Open jobs
- Funding where available
- Recent company news
- Company size
- Location / market context

The goal was not maximum data. The goal was enough evidence to decide who deserved deeper research.

## Prioritization model

Accounts were evaluated using:

- ICP fit
- Growth / trigger strength
- Founder-content opportunity
- Ability to pay
- Reachability
- Career / portfolio value

### Published scoring boundary

The original published files name the dimensions but do not retain the numeric row scores, weights, source URLs, or enrichment dates.

[Scoring Methodology v2.0](../data/scoring-methodology.md) adds a new commercial model:

- ICP fit: 30%
- Trigger strength: 25%
- Founder-content opportunity: 20%
- Ability to pay: 15%
- Reachability: 10%

Career and networking value stays separate. It cannot raise the commercial-fit score.

Historic scores were not backfilled. Missing values remain `unknown`.

A core lesson emerged:

> A strong company is not automatically a strong prospect.

## Deep-research shortlist

Eight accounts were selected for human-level review:

- Wooqer
- Avo Automation
- Bellwood
- PieCyfer
- Refold AI
- CloudEagle.ai
- Aligned
- Adept

## Disqualification decisions

### Aligned

Strong company, weak target for this offer. The founder-led content motion was already mature, so pitching founder-led content would demonstrate poor account research.

### CloudEagle.ai

Strong founder content already existed. Kept as a benchmark rather than a direct content prospect.

### Adept

Deprioritized because leadership context was less clear than the alternatives.

## Final five

1. Wooqer
2. Avo Automation
3. Bellwood
4. PieCyfer
5. Refold AI

Refold AI was retained primarily as a GTM / networking / career-value target rather than a standard ghostwriting pitch.

## Portfolio evidence created

This project demonstrates:

- ICP definition
- Clay prospecting
- Enrichment
- Prioritization
- Account selection
- Disqualification logic
- GTM judgment

## Safe handoff extension

The research list now passes through a local, simulation-only workflow:

```text
normalize
  ↓
deduplicate by domain
  ↓
validate enrichment state
  ↓
human review gate
  ↓
route by commercial or networking purpose
  ↓
simulated CRM upsert
  ↓
run log
```

Verified test results:

- First run: 26 input rows, 25 unique domains, one duplicate removed, five simulated CRM inserts, one enrichment conflict failed closed
- Safe rerun: zero new inserts, five unchanged records
- Recovery run: disputed values changed to `unknown`, zero failed records, five unchanged CRM records
- Local processing time: 42.441 ms first run, 3.856 ms rerun, 2.838 ms recovery run
- Local processing cost: $0
- Clay or provider cost: unknown and not measured

This proves local control behavior. It does not prove a production CRM integration.

Evidence:

- [Target-account data v2](../data/target-accounts-v2.csv)
- [Source register](../data/source-register.csv)
- [Automation notes](../automation/README.md)
- [Run summary](../evidence/runs/run-summary.md)

## Done criteria

- 25 accounts sourced
- Useful enrichment complete
- Ranking logic defined
- Eight accounts researched deeper
- Final five selected
- One primary account selected for Project 2

**Status: Complete**
