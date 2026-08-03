const BUILT_FOR = ['SaaS founders', 'Freelancers', 'Agencies', 'Internal business tools']

const NOT_FOR = ['Beginners learning Django', 'WordPress sites', 'No-code projects']

export function AudienceFit() {
  return (
    <section id="fit">
      <div className="container">
        <div className="kicker">WHO IT'S FOR</div>
        <h2>Built for people who ship</h2>
        <p className="section-sub">
          CoreDock assumes you know your stack and want to move. If that's you, this was made for
          you.
        </p>
        <div className="fit-grid">
          <div className="module">
            <h3 className="fit-yes">BUILT FOR</h3>
            <ul className="checks checks-flush">
              {BUILT_FOR.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="module">
            <h3 className="fit-no">NOT FOR</h3>
            <ul className="notlist notlist-flush">
              {NOT_FOR.map((item) => (
                <li key={item}>
                  <span>—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
