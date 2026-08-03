/** The CoreDock wordmark: an open arc closed by a solid block. */
export function Logo() {
  return (
    <div className="logo">
      <svg width="30" height="29" viewBox="0 0 66 64" role="img" aria-label="CoreDock logo">
        <path
          className="logo-arc"
          d="M 51.9 15.3 A 26 26 0 1 0 51.9 48.7"
          fill="none"
          strokeWidth="9"
          strokeLinecap="round"
        />
        <rect className="logo-block" x="48" y="24" width="16" height="16" />
      </svg>
      <span>CoreDock</span>
    </div>
  )
}
