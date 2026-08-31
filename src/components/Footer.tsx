export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid #EBECF0',
        background: '#fff',
      }}
    >
      <div
        className="page-grid"
        style={{ paddingTop: 32, paddingBottom: 40, alignItems: 'center' }}
      >
        {/* Left: identity */}
        <div style={{ gridColumn: '1 / 7' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              flexWrap: 'wrap',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 12,
                color: '#252526',
                letterSpacing: '0.04em',
              }}
            >
              guoguo
            </span>
            <span style={{ color: '#D5D6D9', fontSize: 12 }}>/</span>
            <span style={{ fontSize: 12, color: '#898A8C' }}>UI Designer</span>
            <span style={{ color: '#D5D6D9', fontSize: 12 }}>/</span>
            <span style={{ fontSize: 12, color: '#BBBCBF' }}>
              Product · AI · Interaction
            </span>
          </div>
        </div>

        {/* Right: year + back to top */}
        <div
          style={{
            gridColumn: '7 / 13',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            gap: 32,
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              color: '#BBBCBF',
              letterSpacing: '0.06em',
            }}
          >
            © 2026
          </span>
          <a
            href="#"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              color: '#898A8C',
              textDecoration: 'none',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#252526')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#898A8C')}
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  )
}
