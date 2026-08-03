type WindowChromeProps = {
  /** Text shown centred in the title bar, e.g. a shell name or a URL. */
  title: string
}

/** Decorative title bar shared by the terminal and the screenshot frame. */
export function WindowChrome({ title }: WindowChromeProps) {
  return (
    <div className="term-bar">
      <span className="dot" />
      <span className="dot" />
      <span className="dot" />
      <span className="title">{title}</span>
    </div>
  )
}
