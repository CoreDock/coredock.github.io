import { Logo } from '../components/Logo'

const CHECKOUT_URL =
  'https://buy.polar.sh/polar_cl_YjWHEk1o6KVULCwsfyKBExUq7ek9ebjnwGkcq4Y5Rl6'

export function SiteNav() {
  return (
    <nav>
      <div className="container">
        <Logo />

        <div className="links">
          <a href="#included">What's included</a>
          <a href="#quickstart">Quick start</a>
          <a href="#pricing">Pricing</a>

          <a
            className="btn"
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy now
          </a>
        </div>
      </div>
    </nav>
  )
}