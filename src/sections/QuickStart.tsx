const STEPS = [
  { comment: '# 1. Unzip your purchase (or clone your private repo)', command: 'cd coredock' },
  { comment: '# 2. Configure your environment', command: 'cp .env.example .env' },
  { comment: '# 3. Run', command: 'docker compose up -d' },
]

export function QuickStart() {
  return (
    <section id="quickstart">
      <div className="container">
        <div className="kicker">QUICK START</div>
        <h2>Clone to running app in minutes</h2>
        <p className="section-sub">No hidden steps. This is the entire setup.</p>
        <div className="codeblock">
          {STEPS.map((step) => (
            <div key={step.command}>
              <div>
                <span className="c">{step.comment}</span>
              </div>
              <div>
                <span className="prompt">$</span> {step.command}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
