import { Fragment } from 'react'
import { Terminal } from '../components/Terminal'

const STACK = ['DJANGO 5', 'REACT 19', 'DOCKER', 'CI/CD']

export function Hero() {
  return (
    <header className="hero grid-bg">
      <div className="container hero-inner">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="hl">PRODUCTION FOUNDATION</span>
            {STACK.map((item) => (
              <Fragment key={item}>
                <span className="sep"> · </span>
                <span className="lbl">{item}</span>
              </Fragment>
            ))}
          </div>
          <h1>
            Everything before your first feature.
            <br />
            <span className="dim">Already done.</span>
          </h1>
          <p className="sub">
            Build your product. Skip the infrastructure. CoreDock is the production foundation for
            Django + React applications — authentication, Docker, CI/CD, testing and security,
            solved before you write your first line.
          </p>
          <div className="hero-cta">
            <a className="btn" href="#pricing">
              Launching soon
            </a>
            <a className="btn btn-ghost" href="#included">
              What's included
            </a>
          </div>
          <div className="hero-note">One purchase · Lifetime updates via private repository</div>
        </div>

        <Terminal />
      </div>
    </header>
  )
}
