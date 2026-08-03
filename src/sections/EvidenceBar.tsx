import { FRONTEND_LINE_COVERAGE, TOTAL_TESTS } from '../productFacts'

/*
 * Every figure here comes from productFacts.ts, which documents the command
 * that produced it. Do not hardcode a number in this file.
 */
const METRICS = [
  { value: String(TOTAL_TESTS), label: 'AUTOMATED TESTS' },
  { value: FRONTEND_LINE_COVERAGE, label: 'FRONTEND LINE COVERAGE' },
  { value: '1', label: 'COMMAND TO RUN' },
  { value: 'Every push', label: 'DEPENDENCY AUDIT' },
]

export function EvidenceBar() {
  return (
    <div className="evidence-bar">
      <div className="container evidence-grid">
        {METRICS.map((metric) => (
          <div className="evidence-item" key={metric.label}>
            <div className="evidence-value">{metric.value}</div>
            <div className="evidence-label">{metric.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
