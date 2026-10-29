# Clay GTM Execution Sprint

A portfolio case study built from three Handshake AI Skills Studio / Clay projects and extended into an execution-ready GTM campaign.

**Status:** Research and campaign assets are complete. Outreach and results remain pending.

**Review first:** [Combined case study](case-study/combined-case-study.md) · [Campaign landing page](landing-page/index.html) · [Target-account data v2](data/target-accounts-v2.csv) · [Scoring method](data/scoring-methodology.md) · [Safe-handoff test](evidence/runs/run-summary.md)

## Goal

Turn Clay research into public evidence of GTM ability and real market action:

`Offer → ICP → accounts → enrichment → normalize → deduplicate → prioritization → human review → test-CRM routing → account brief → GTM plan → landing page → outreach → results`

This repo documents the work completed so far. The remaining work is real outreach, results tracking, and the final retrospective.

## Evidence boundary

- The original numeric row scores, weights, source URLs, and enrichment dates were not retained in the published project.
- [Scoring Methodology v2.0](data/scoring-methodology.md) is a new, versioned rubric. It is not presented as recovered history.
- Missing source dates and disputed values remain `unknown`. They are not converted to zero.
- The CRM handoff is a local simulation. It does not write to a real CRM or send a campaign.

## Projects

1. [Build a Lead List and Rank Your Targets](projects/01-lead-list-and-rank-targets.md)
2. [Build a 90-Second Account Brief](projects/02-90-second-account-brief.md)
3. [Build a Go-to-Market Plan for Your Side Hustle](projects/03-side-hustle-gtm-plan.md)

## Business / Offer

### Founder-Led Demand Content System

Help B2B SaaS founders turn existing expertise, customer insight, product knowledge, and sales conversations into LinkedIn + newsletter content that supports buyer education, trust, and sales conversations.

The positioning is intentionally broader than generic ghostwriting. The service is framed as a GTM trust and demand system.

## ICP

- B2B SaaS
- Roughly 20–150 employees
- Seed to Series B preferred
- U.S. market or active U.S. expansion
- Complex product that requires buyer education
- Founder still involved in sales, positioning, or market education
- Evidence of growth, hiring, funding, launch, or expansion
- Founder content has room to improve

Primary buyer: Founder / CEO / Co-founder.

## Current funnel

```text
25 accounts sourced
       ↓
8 accounts researched deeper
       ↓
5 priority accounts
       ↓
Wooqer selected for account brief
       ↓
GTM plan
       ↓
Landing page
       ↓
REAL OUTREACH NEXT
```

## Final five

1. Wooqer
2. Avo Automation
3. Bellwood
4. PieCyfer
5. Refold AI

Aligned and CloudEagle.ai were explicitly deprioritized because their founder-led content motion was already mature. Adept was deprioritized because of leadership ambiguity.

## Reviewer shortcuts

- [Live visual portfolio](https://clay-gtm-portfolio.vercel.app): three connected project views and direct evidence links.
- [Hiring proof in one page](case-study/hiring-proof-one-pager.md): capability → source artifact → limitation.
- [Technical workflow source](automation/gtm-pipeline.mjs): local normalize, duplicate handling, approval gate, routing and simulated CRM upsert.
- [Three-run evidence](evidence/runs/run-summary.md): first run, safe rerun and recovery.
- [20 content ideas + two carousel scripts](content/gtme-source-to-content-bank.md): research translated into public teaching assets.

## Repo structure

```text
.
├── README.md / STATUS.md
├── projects/              # three Handshake x Clay project write-ups
├── data/                  # historic list, v2 schema, source register and scoring rules
├── automation/            # local test-CRM simulator and explicit failure fixtures
├── evidence/runs/         # first run, rerun, recovery and simulated CRM logs
├── case-study/            # combined narrative, proof checklist, hiring one-pager
├── content/               # five-source editorial bank and two carousels
├── landing-page/          # campaign source (intake not integrated)
└── assets/                # supporting visuals
```

**Review status:** The public portfolio already links to the underlying CSV, scoring method, source register, Wooqer brief, full campaign plan and simulation logs. Do not describe that as an uncorrected missing-link problem.

## What is complete

- Offer
- ICP
- Clay lead sourcing
- Company enrichment
- Prioritization model
- Human-level research
- Final five accounts
- Wooqer 90-second account brief
- Side-hustle GTM plan
- Campaign landing page
- Versioned scoring and provenance schema
- Local normalize, deduplicate, review, routing, and simulated CRM-upsert test
- Safe rerun and failed-record recovery test

## What is next

- Personalized Wooqer outreach
- Outreach to Avo Automation, Bellwood, PieCyfer, and Refold AI
- Track replies, objections, meetings, opportunities, and revenue
- Publish final results-based case study
- Connect the tested schema to an approved test CRM before any production write

## Portfolio thesis

The evidence is not "I learned Clay."

The evidence is: **I used account data, enrichment, human research, and GTM judgment to move from market definition to prioritized accounts, a specific account hypothesis, and a campaign package ready for real distribution.**
