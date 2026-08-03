const EXCLUSIONS = [
  'Your business logic and domain models',
  'UI design for your specific product',
  'Hosting or cloud infrastructure costs',
  'Third-party API integrations specific to your use case',
]

export function NotIncluded() {
  return (
    <section id="honest">
      <div className="container">
        <div className="kicker">WHAT'S NOT INCLUDED</div>
        <h2>What CoreDock is not</h2>
        <p className="section-sub">
          A foundation is not a finished product. You bring the product.
        </p>
        <ul className="notlist">
          {EXCLUSIONS.map((item) => (
            <li key={item}>
              <span>—</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
