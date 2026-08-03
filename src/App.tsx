import { SiteNav } from './sections/SiteNav'
import { Hero } from './sections/Hero'
import { EvidenceBar } from './sections/EvidenceBar'
import { AudienceFit } from './sections/AudienceFit'
import { ProductScreenshot } from './sections/ProductScreenshot'
import { IncludedModules } from './sections/IncludedModules'
import { QuickStart } from './sections/QuickStart'
import { NotIncluded } from './sections/NotIncluded'
import { Pricing } from './sections/Pricing'
import { SiteFooter } from './sections/SiteFooter'

/**
 * The "see it running" section stays hidden until a real capture exists.
 * To enable it:
 *   1. Run CoreDock and capture the dashboard (1600px wide is ideal).
 *   2. Save the capture as public/screenshot_app.png.
 *   3. Flip this flag to true.
 */
const SHOW_PRODUCT_SCREENSHOT: boolean = false

function App() {
  return (
    <>
      <SiteNav />
      <Hero />
      <EvidenceBar />
      <AudienceFit />
      {SHOW_PRODUCT_SCREENSHOT && <ProductScreenshot />}
      <IncludedModules />
      <QuickStart />
      <NotIncluded />
      <Pricing />
      <SiteFooter />
    </>
  )
}

export default App
