import { WindowChrome } from '../components/WindowChrome'

/**
 * Hidden until a real screenshot exists — see SHOW_PRODUCT_SCREENSHOT in
 * App.tsx. The image must be an actual capture of the running application,
 * never a mockup: the section's whole claim is that it is not one.
 */
export function ProductScreenshot() {
  return (
    <section id="proof">
      <div className="container">
        <div className="kicker">SEE IT RUNNING</div>
        <h2>This is what you get</h2>
        <p className="section-sub">
          Not a mockup. The application CoreDock ships, running locally after one command.
        </p>
        <div className="screenshot">
          <WindowChrome title="localhost:5174" />
          <img src="/screenshot_app.png" alt="CoreDock application running locally" />
        </div>
      </div>
    </section>
  )
}
