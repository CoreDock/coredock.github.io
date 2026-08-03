import { WindowChrome } from './WindowChrome'

const CONTAINERS = ['coredock-db', 'coredock-backend', 'coredock-frontend']

/**
 * Width of the container-name column, in characters. Padding uses
 * non-breaking spaces so the "Started" column stays aligned in HTML.
 */
const NAME_COLUMN = 19
const NBSP = '\u00A0'

/** The `docker compose up -d` transcript shown next to the hero copy. */
export function Terminal() {
  return (
    <div className="terminal">
      <WindowChrome title="coredock — bash" />
      <div className="term-body">
        <div>
          <span className="prompt">$</span> <span className="bright">docker compose up -d</span>
        </div>
        <div className="out">[+] Running 3/3</div>
        {CONTAINERS.map((name) => (
          <div key={name}>
            <span className="ok">{NBSP}✓</span>{' '}
            <span className="out">Container {name.padEnd(NAME_COLUMN, NBSP)}Started</span>
          </div>
        ))}
        <div className="term-gap" />
        <div className="bright">Application running.</div>
        <div>
          <a href="#quickstart">http://localhost:5174</a>
        </div>
      </div>
    </div>
  )
}
