import {
  E2E_JOURNEYS,
  FRONTEND_LINE_COVERAGE,
  TOTAL_UNIT_TESTS,
} from '../productFacts'

/*
 * Every figure here comes from productFacts.ts, which documents the release
 * validation that produced it. Do not hardcode product metrics in this file.
 */
const METRICS = [
  { value: String(TOTAL_UNIT_TESTS), label: 'UNIT TESTS' },
  { value: String(E2E_JOURNEYS), label: 'BROWSER E2E JOURNEYS' },
  { value: FRONTEND_LINE_COVERAGE, label: 'FRONTEND LINE COVERAGE' },
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
