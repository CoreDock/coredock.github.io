import { GITHUB_URL } from '../site'

export function SiteFooter() {
  return (
    <footer>
      <div className="container">
        <div>© {new Date().getFullYear()} CoreDock. All rights reserved.</div>
        <div className="footer-links">
          <a href="/license/">License</a>
          <a href="/terms/">Terms</a>
          <a href="/refund-policy/">Refund Policy</a>
          <a href="mailto:coredock@outlook.com">Contact</a>
          <a href={GITHUB_URL}>GitHub</a>
        </div>
      </div>
    </footer>
  )
}
