import { Logo } from '../components/Logo'

export function SiteNav() {
  return (
    <nav>
      <div className="container">
        <Logo />
        <div className="links">
          <a href="#included">What's included</a>
          <a href="#quickstart">Quick start</a>
          <a href="#pricing">Pricing</a>
          <a className="btn" href="#pricing">
            Launching soon
          </a>
        </div>
      </div>
    </nav>
  )
}
