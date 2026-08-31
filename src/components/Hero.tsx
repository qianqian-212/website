
export default function Hero() {
  return (
    <section
      id="hero"
      style={{ position: 'relative', overflow: 'hidden', background: '#fff' }}
    >
      <div
        className="page-grid"
        style={{
          minHeight: '100vh',
          gridTemplateRows: 'auto 1fr auto',
          rowGap: 0,
          paddingTop: 0,
          paddingBottom: 0,
        }}
      >
        {/* Top bar */}
        <div
          style={{
            gridColumn: '1 / 8',
            gridRow: 1,
            paddingTop: 40,
            paddingBottom: 24,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '0.1em',
              color: '#BBBCBF',
              textTransform: 'uppercase',
            }}
          >
            Portfolio 2026
          </span>
        </div>
        <div
          className="hide-mobile"
          style={{
            gridColumn: '8 / 13',
            gridRow: 1,
            paddingTop: 40,
            paddingBottom: 24,
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            gap: 24,
          }}
        >
          {['产品设计', '交互', 'AI'].map((t) => (
            <span
              key={t}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                color: '#BBBCBF',
                letterSpacing: '0.04em',
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Main content — left */}
        <div
          style={{
            gridColumn: '1 / 7',
            gridRow: 2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingBottom: 40,
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              color: '#BBBCBF',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: 32,
            }}
          >
            001 — Introduction
          </div>

          <h1
            style={{
              fontSize: 'clamp(52px, 6vw, 80px)',
              fontWeight: 700,
              color: '#252526',
              lineHeight: 1.05,
              margin: '0 0 8px',
              letterSpacing: '-0.02em',
            }}
          >
            果果
          </h1>
          <p
            style={{
              fontSize: 'clamp(20px, 2.5vw, 32px)',
              color: '#BBBCBF',
              margin: '0 0 40px',
              fontWeight: 300,
              letterSpacing: '0.02em',
            }}
          >
            Guoguo
          </p>

          <p
            style={{
              fontSize: 16,
              color: '#575859',
              lineHeight: 1.75,
              maxWidth: 480,
              margin: '0 0 40px',
            }}
          >
            专注于产品设计与用户体验，热爱将复杂系统转化为清晰的界面体验。
            擅长 AI 产品、设计系统和交互设计。
          </p>

          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['产品设计', '交互设计', 'AI 产品', '设计系统'].map((tag) => (
              <span key={tag} className="tag-pill">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Avatar — right, spans all rows */}
        <div
          className="hero-avatar"
          style={{
            gridColumn: '7 / 13',
            gridRow: '1 / 4',
            background: '#D5D6D9',
          }}
        />

        {/* Bottom bar */}
        <div
          style={{
            gridColumn: '1 / 7',
            gridRow: 3,
            paddingBottom: 40,
            borderTop: '1px solid #EBECF0',
            paddingTop: 24,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              color: '#BBBCBF',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            Scroll to explore
          </span>
          <span style={{ color: '#BBBCBF', fontSize: 16 }}>↓</span>
        </div>
      </div>
    </section>
  )
}
