import { GITHUB_URL } from '../site'

/*
 * Launch switch. Two edits take the card from pre-launch to selling:
 *   1. PRICE — replace 'Coming soon' with the final amount, e.g. '$149'.
 *   2. CHECKOUT_URL — set the Polar checkout link.
 * The live markup below is already written; nothing else needs to change.
 */
const PRICE = 'Coming soon'
const CHECKOUT_URL: string | null = null

const INCLUDED = [
  'Full source code, documented',
  'Lifetime updates via private repository',
  'License key and invoice by email',
  'Start building the same day',
]

export function Pricing() {
  return (
    <section id="pricing">
      <div className="container">
        <div className="kicker">PRICING</div>
        <h2>One purchase. No subscription.</h2>
        <p className="section-sub">
          Payments, invoices and taxes are handled securely by Polar, our merchant of record.
        </p>
        <div className="price-card">
          <div className="plan">COREDOCK FOUNDATION</div>
          <div className="amount">{PRICE}</div>
          <div className="terms">
            One-time payment · Use in unlimited personal and client projects
          </div>
          <ul className="checks">
            {INCLUDED.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          {CHECKOUT_URL ? (
            <>
              <a className="btn btn-block" href={CHECKOUT_URL}>
                Get CoreDock →
              </a>
              <div className="price-note">One-time purchase. Lifetime updates.</div>
            </>
          ) : (
            <a className="btn btn-ghost btn-block" href={GITHUB_URL}>
              Launching soon — follow on GitHub
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
