import { useEffect, useRef, useState } from 'react'
import { navLinks } from '../data/siteContent'
import { BrandMark } from './BrandMark'
import { Icon } from './Icon'

export function Header() {
  const [open, setOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return

    const panel = panelRef.current
    const focusable = panel?.querySelectorAll<HTMLElement>('a, button') ?? []
    focusable[0]?.focus()
    document.body.classList.add('menu-open')

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        window.setTimeout(() => menuButtonRef.current?.focus(), 0)
        return
      }
      if (event.key !== 'Tab' || focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.classList.remove('menu-open')
    }
  }, [open])

  const closeMenu = (restoreFocus = false) => {
    setOpen(false)
    if (restoreFocus) window.setTimeout(() => menuButtonRef.current?.focus(), 0)
  }

  return (
    <header className="site-header">
      <div className="header-inner shell">
        <a className="brand" href="#home" aria-label="Campus Connect home">
          <BrandMark />
          <span>Campus <strong>Connect</strong></span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navLinks.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
        </nav>

        <button
          ref={menuButtonRef}
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label="Open navigation menu"
          onClick={() => setOpen(true)}
        >
          <Icon name="menu" />
        </button>
      </div>

      {open && (
        <div className="menu-overlay" role="presentation" onMouseDown={(event) => {
          if (event.target === event.currentTarget) closeMenu(true)
        }}>
          <div ref={panelRef} className="mobile-panel" id="mobile-navigation" role="dialog" aria-modal="true" aria-label="Navigation menu">
            <div className="mobile-panel-head">
              <span className="brand"><BrandMark /><span>Campus <strong>Connect</strong></span></span>
              <button className="menu-button" type="button" aria-label="Close navigation menu" onClick={() => closeMenu(true)}>
                <Icon name="close" />
              </button>
            </div>
            <nav aria-label="Mobile navigation">
              {navLinks.map((link, index) => (
                <a key={link.href} href={link.href} onClick={() => closeMenu()}>
                  <span>{String(index + 1).padStart(2, '0')}</span>{link.label}
                </a>
              ))}
            </nav>
            <p>Academic capstone project<br />BulSU – Sarmiento Campus</p>
          </div>
        </div>
      )}
    </header>
  )
}
