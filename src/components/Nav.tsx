import { useState, useEffect } from 'react'

const navItems = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Lab', href: '#lab' },
  { label: 'Thinking', href: '#thinking' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.75)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transform: visible ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        background: 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid #EBECF0',
      }}
    >
      <div
        className="page-grid"
        style={{ height: 56, alignItems: 'center' }}
      >
        <div style={{ gridColumn: '1 / 4', display: 'flex', alignItems: 'center' }}>
          <a
            href="#"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 12,
              color: '#252526',
              textDecoration: 'none',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}
          >
            Guoguo
          </a>
        </div>
        <div
          className="hide-mobile"
          style={{
            gridColumn: '5 / 13',
            display: 'flex',
            justifyContent: 'flex-end',
            gap: 36,
            alignItems: 'center',
          }}
        >
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
