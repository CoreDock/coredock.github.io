import { GITHUB_URL } from '../site'

export function SiteFooter() {
  return (
    <footer>
      <div className="container">
        <div>© {new Date().getFullYear()} CoreDock. All rights reserved.</div>
        <div>
          <a href={GITHUB_URL}>GitHub</a>
        </div>
      </div>
    </footer>
  )
}
