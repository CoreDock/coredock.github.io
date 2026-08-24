/**
 * Verified product metrics — the single source of truth for every number the
 * landing states publicly. Import from here; never retype a figure inline.
 *
 * Nothing in this file may be estimated. The values below were verified during
 * the CoreDock v2.3.0 release freeze on 2026-08-24:
 *
 *   backend checkout suite                -> 678 passed
 *   frontend Vitest suite                 -> 224 passed (20 files)
 *   Playwright browser journeys           -> 5 passed
 *   frontend line coverage                -> 88.47%
 *
 * The backend development container executes 448 tests and skips 230
 * repository-level guards because those guards inspect files outside the
 * container mount. From a complete checkout, as CI/release validation runs it,
 * all 678 backend tests execute.
 *
 * Backend coverage is deliberately absent. No combined backend+frontend
 * coverage figure is claimed.
 */

export const BACKEND_TESTS = 678
export const FRONTEND_TESTS = 224
export const TOTAL_UNIT_TESTS = BACKEND_TESTS + FRONTEND_TESTS
export const E2E_JOURNEYS = 5

/** Frontend line coverage from the v2.3.0 release validation. */
export const FRONTEND_LINE_COVERAGE = '88.47%'
