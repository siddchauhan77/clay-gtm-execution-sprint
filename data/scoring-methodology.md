# Scoring Methodology

## Evidence boundary

The original project named six scoring dimensions but did not retain the numeric row scores, weights, source URLs, or source dates in the published files.

This document does not recreate missing history. It defines a versioned model for future runs.

## Version 2.0

Adopted: 2026-10-28

Commercial fit uses five weighted dimensions. Career and networking value stays separate because a useful relationship target is not automatically a good sales prospect.

| Commercial dimension | Weight | Question |
| --- | ---: | --- |
| ICP fit | 30% | Does the company match the offer's company, buyer, and problem profile? |
| Trigger strength | 25% | Is there a recent event that changes urgency or timing? |
| Founder-content opportunity | 20% | Is there a specific buyer-education gap worth testing? |
| Ability to pay | 15% | Do verified scale, funding, revenue, or buying signals support a paid test? |
| Reachability | 10% | Is there a credible path to the relevant buyer? |

Score each dimension from 0 to 5 only when evidence exists.

`Commercial score = sum((dimension score / 5) × dimension weight)`

Do not convert `unknown` to 0. Leave the total blank until every required input has evidence or mark the result `incomplete`.

## Separate career and networking value

Rate this field independently:

| Value | Meaning |
| --- | --- |
| High | Strong role, operator, hiring, learning, or portfolio relevance |
| Medium | Useful relationship or benchmark, but not a current priority |
| Low | Little strategic value for the current career direction |
| Unknown | Evidence was not retained or has not been reviewed |

This field must not increase the commercial-fit score.

## Required provenance fields

Each future row should retain:

• Source URL or stable source ID

• Source or snapshot date

• Enrichment status: `complete`, `partial`, `conflict`, or `resolved_as_unknown`

• Human review status: `approved`, `network_only`, `hold`, or `do_not_pitch`

• Scoring version

• Reviewer note

## Current dataset status

The historic 25-account file remains the source record. The companion `target-accounts-v2.csv` adds provenance and routing columns without inventing missing scores or dates.
