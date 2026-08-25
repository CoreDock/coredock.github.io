const PRICE = '$59.99'

const CHECKOUT_URL =
  'https://buy.polar.sh/polar_cl_YjWHEk1o6KVULCwsfyKBExUq7ek9ebjnwGkcq4Y5Rl6'

const INCLUDED = [
  'Full source code, documented',
  'Updates included within the v2.x major version',
  'Private repository access and invoice by email',
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

          <a
            className="btn btn-block"
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy CoreDock — $59.99
          </a>

          <div className="price-note">
            Secure checkout by Polar · One-time purchase · Updates included within the v2.x major
            version via private GitHub repository
          </div>
        </div>
      </div>
    </section>
  )
}
