export function trapFocus(node: Element) {
  const previous = document.activeElement as HTMLElement
  const focusable = () => {
    return Array.from(
      node.querySelectorAll(
        'button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])'
      )
    )
  }
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key !== 'Tab') return

    const currrent = document.activeElement
    const element = focusable()
    const first = element.at(0) as HTMLElement
    const last = element.at(-1) as HTMLElement

    if (event.shiftKey && currrent === first) {
      last.focus()
      event.preventDefault()
    }
    if (!event.shiftKey && currrent === last) {
      first.focus()
      event.preventDefault()
    }
  }
  const r = focusable()[0] as HTMLElement
  r.focus()

  node.addEventListener('keydown', handleKeyDown)
  return {
    destroy() {
      node.removeEventListener('keydown', handleKeyDown)
      previous?.focus()
    },
  }
}
