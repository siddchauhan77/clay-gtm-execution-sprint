# Safe Handoff Test Results

Run date: 2026-10-28

Mode: local simulation only

| Test | Input | Duplicate handling | Failure handling | Simulated CRM result | Processing time |
| --- | ---: | --- | --- | --- | ---: |
| First run | 26 rows | 1 duplicate removed | 1 enrichment conflict failed closed | 5 inserted | 42.441 ms |
| Safe rerun | 26 rows | 1 duplicate removed | Same conflict failed closed | 0 inserted, 5 unchanged | 3.856 ms |
| Failure recovery | 26 rows | 1 duplicate removed | Conflict preserved as `unknown`; 0 failures | 0 inserted, 5 unchanged | 2.838 ms |

## Cost boundary

Local processing cost: $0

Clay credits or other provider cost: `unknown_not_measured`

## Routing boundary

Four records route to the simulated `founder_demand_pilot` queue.

One record routes to the simulated `career_networking` queue.

Nineteen or twenty records stay on hold depending on the recovery state.

## External-state boundary

No external CRM, enrichment provider, sequencer, email account, or contact was changed.

## Raw logs

- [First run](first-run.json)
- [Safe rerun](safe-rerun.json)
- [Failure recovery](failure-recovery.json)
- [Simulated CRM state](simulated-crm.json)
