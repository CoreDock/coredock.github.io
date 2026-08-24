import type { ReactNode } from 'react'
import {
  BACKEND_TESTS,
  E2E_JOURNEYS,
  FRONTEND_LINE_COVERAGE,
  FRONTEND_TESTS,
  TOTAL_UNIT_TESTS,
} from '../productFacts'

type Module = {
  name: string
  body: ReactNode
}

const MODULES: Module[] = [
  {
    name: 'AUTH',
    body: 'JWT authentication with refresh token rotation, registration, login and password reset flows. Wired end to end, backend to React.',
  },
  {
    name: 'DOCKER',
    body: (
      <>
        3 containers — db, backend, frontend — with separate development and production
        configurations. <span className="module-code">docker compose up -d</span> and you're
        running.
      </>
    ),
  },
  {
    name: 'CI/CD',
    body: 'GitHub Actions pipeline: linting, full test suite, build checks and dependency audit on every push.',
  },
  {
    name: 'TESTING',
    body: (
      <>
        {TOTAL_UNIT_TESTS} unit tests — {BACKEND_TESTS} backend, {FRONTEND_TESTS} frontend — plus{' '}
        {E2E_JOURNEYS} browser E2E journeys, all passing. Frontend line coverage is{' '}
        {FRONTEND_LINE_COVERAGE}. Ready to extend with your own cases.
      </>
    ),
  },
  {
    name: 'SECURITY',
    body: 'Hardened Django settings, environment-based secrets, and a pre-launch security checklist.',
  },
  {
    name: 'DOCS',
    body: 'Task-based documentation. Every guide ends with a working, verifiable result.',
  },
]

export function IncludedModules() {
  return (
    <section id="included">
      <div className="container">
        <div className="kicker">WHAT'S INCLUDED</div>
        <h2>Everything a production app starts with</h2>
        <p className="section-sub">
          Every module is wired, tested and documented. Not a demo — the same foundation you would
          build yourself, minus the weeks.
        </p>
        <div className="modules">
          {MODULES.map((module) => (
            <div className="module" key={module.name}>
              <h3>{module.name}</h3>
              <p>{module.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
