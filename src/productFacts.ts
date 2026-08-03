/**
 * Verified product metrics — the single source of truth for every number the
 * landing states publicly. Import from here; never retype a figure inline.
 *
 * Nothing in this file may be estimated. Each value below was produced by the
 * command next to it, run against django-react-production-starter on
 * 2026-08-03. Re-run all three before every release and update this file:
 *
 *   docker compose exec -T backend pytest -q       -> 101 passed
 *   cd frontend && npm run test -- --run           -> 170 passed (16 files)
 *   cd frontend && npm run test:coverage -- --run  -> Lines 87.56% (669/764)
 *
 * Backend coverage is deliberately absent. pytest-cov is not part of the
 * product's dependencies, so neither a backend figure nor a combined
 * backend+frontend figure can be measured — and therefore neither is claimed.
 */

export const BACKEND_TESTS = 101
export const FRONTEND_TESTS = 170
export const TOTAL_TESTS = BACKEND_TESTS + FRONTEND_TESTS

/** v8 line coverage of the frontend suite. Frontend only — see note above. */
export const FRONTEND_LINE_COVERAGE = '87.56%'
