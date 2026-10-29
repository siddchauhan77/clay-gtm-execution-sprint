# Hiring Proof: GTM Engineering Without a Prior GTME Title

**Evidence-first one-pager | October 28, 2026**

## The claim

I have not held the formal title "GTM Engineer." I have built and documented account research, qualification logic, an account-specific commercial hypothesis, a GTM pilot, and a **local simulation** of normalize → deduplicate → validate → human review → route → CRM upsert. I am seeking a team where I can apply this workflow to real business systems and measure production outcomes.

## Inspectable evidence

| Capability | Artifact | Boundary |
| --- | --- | --- |
| Research judgment | [25 → 8 → 5 ranking](../projects/01-lead-list-and-rank-targets.md) and [account dataset](../data/target-accounts-v2.csv) | Original scoring values and source snapshot dates were not retained |
| Provenance and prioritization | [Versioned scoring methodology](../data/scoring-methodology.md) and [source register](../data/source-register.csv) | New rubric, not recovered historic scores |
| Technical safety | [Simulation code](../automation/gtm-pipeline.mjs) and [test run logs](../evidence/runs/run-summary.md) | Local test only, not live CRM/API execution |
| Commercial judgment | [Wooqer account brief](../projects/02-90-second-account-brief.md) | Hypothesis; no customer confirmation |
| Campaign design | [30-day GTM plan](../projects/03-side-hustle-gtm-plan.md) and [landing page](../landing-page/index.html) | Outreach, meetings and revenue pending |

[Visual portfolio](https://clay-gtm-portfolio.vercel.app) · [Combined case study](combined-case-study.md)

## My 30-second introduction

"My background is in data and AI consulting, analytics, and content-led go-to-market work. Recently I built a Clay portfolio sprint: I narrowed 25 accounts to five, wrote an account-specific growth hypothesis, and implemented a local workflow that normalizes and deduplicates records, applies human approval, routes records, and logs simulated CRM updates. The rerun created zero duplicate inserts. I am not presenting this as a production integration. I want to use these skills on a live team and prove the impact with real outcomes."

## Four entry routes supported by public examples

1. **Sales / SDR → workflow operator → GTME.** Fermin Andujar automated tedious BDR account research and eventually joined The Kiln; Marielle Camba moved from SDR into a Clay partner agency. [Fermin interview](https://www.youtube.com/watch?v=kiI1jeWGwjU&t=1413s), [Marielle account](https://www.linkedin.com/posts/mariellecamba_gtm-sdr-bdr-activity-7346096163088932864-UZEJ).
2. **Copywriting / content → outbound systems → agency → GTME.** Anuj Patel learned cold outreach to win copy clients and then joined a GTM agency. [Anuj account](https://www.linkedin.com/posts/anujkumarpatel_a-quick-story-on-how-i-became-a-gtm-engineer-activity-7397623576494866432-4sIZ).
3. **Product / design → problem discovery and prototyping → GTME.** Spencer Chemtob carried stakeholder research, product requirements and prototype thinking into GTM work at Clay. [Spencer account](https://www.linkedin.com/posts/chemtob_excited-to-share-that-i-recently-joined-the-activity-7341185199172370434-gcDg).
4. **Sales / marketing + technical tools → GTM systems.** Umer Ishaq combined sales context with programming and systems learning. [Umer account](https://www.linkedin.com/posts/umer-ishaq_how-i-became-a-gtm-engineer-i-did-my-activity-7447583239197577216-6xUU).

Individual first-person accounts. Not proof of population-wide success rates or any course's causal effect.

## The interview exercise to practice

Ambiguous prompt: "We have accounts in a CSV. Find the good ones, clean up the records, and prepare the CRM handoff."

Do not rush to a workflow diagram. Ask:
- What qualifies an account? Which signals are mandatory versus optional?
- What is the canonical account key? How are website domains normalized?
- How do missing, contradictory and stale fields affect eligibility?
- Is the action draft-only, test-CRM, or production? Who approves a write?
- What must the run log show on the first run, rerun and recovery?

Then demonstrate a small sample, a failure case, a rerun, and an operator-facing summary. **Never label a simulated integration as live.**

## The outreach package

**Recipient:** GTME hiring manager, agency founder, RevOps / Growth Systems lead, or relevant deployment operator.

**Suggested note:**
"I saw your team is building [specific GTM workflow]. I haven't held the GTME title, but I built a related research-to-routing project: 25 accounts prioritized, with deduplication, review gates, an idempotent test-CRM rerun and visible run logs. Here's the 60-second overview [portfolio link]. Curious which part of your GTM workflow is hardest to make reliable today?"

Replace the placeholder with a verified team-specific observation before sending.

## Role searches by responsibility

- **Outbound systems:** GTM Engineer; Sales Automation Specialist; GTM Systems Engineer; Growth Systems; Revenue Automation.
- **Data and process:** RevOps Analyst; GTM Operations; Marketing Operations; Business Systems Analyst; Revenue Systems.
- **Customer deployment:** Implementation Consultant; GTM Deployment Strategist; Technical Solutions Consultant; AI Enablement / Deployment.

### Next demonstrated result

A single real-world or sandboxed approved CRM integration with test records, no unintended sends, an explainable run log, and reproducible tests. Then use the already-published portfolio for targeted operator conversations.

**Boundary:** Hiring results are not guaranteed. No production CRM, real outreach, customer outcome, or revenue is established by the existing sprint.
