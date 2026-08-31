const contactLinks = [
  { label: 'Email', value: 'hello@guoguo.design', href: 'mailto:hello@guoguo.design', mono: true },
  { label: 'WeChat', value: 'guoguo_design', href: '#', mono: true },
  { label: 'Dribbble', value: '@guoguo', href: '#', mono: false },
  { label: 'LinkedIn', value: 'Guoguo Q.', href: '#', mono: false },
  { label: '即刻', value: '@果果设计', href: '#', mono: false },
]

export default function Contact() {
  return (
    <section id="contact" style={{ padding: '120px 0', borderTop: '1px solid #EBECF0' }}>
      <div className="page-grid">
        {/* Section label */}
        <div style={{ gridColumn: '1 / 13', marginBottom: 64 }}>
          <div className="section-label">
            <span>06 — Contact</span>
          </div>
        </div>

        {/* Statement */}
        <div style={{ gridColumn: '1 / 10', marginBottom: 80 }}>
          <h2
            style={{
              fontSize: 'clamp(36px, 4.5vw, 60px)',
              fontWeight: 700,
              color: '#252526',
              lineHeight: 1.15,
              letterSpacing: '-0.025em',
              margin: '0 0 32px',
            }}
          >
            有好的想法，
            <br />
            我们来聊聊。
          </h2>
          <p
            style={{
              fontSize: 16,
              color: '#898A8C',
              lineHeight: 1.85,
              maxWidth: 520,
              margin: 0,
            }}
          >
            无论是新的设计机会、有趣的合作项目，还是单纯想聊聊设计与 AI 的交叉地带——
            我都很乐意。回复时间通常在 24 小时以内。
          </p>
        </div>

        {/* Contact methods */}
        <div style={{ gridColumn: '1 / 7' }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 10,
              color: '#BBBCBF',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: 20,
            }}
          >
            Contact Methods
          </div>
          {contactLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '20px 0',
                borderTop: i === 0 ? '1px solid #EBECF0' : 'none',
                borderBottom: '1px solid #EBECF0',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'background 0.2s ease',
                paddingLeft: 0,
                paddingRight: 0,
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.paddingLeft = '12px'
                e.currentTarget.style.paddingRight = '12px'
                e.currentTarget.style.background = '#FAFAFA'
                e.currentTarget.style.marginLeft = '-12px'
                e.currentTarget.style.marginRight = '-12px'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.paddingLeft = '0'
                e.currentTarget.style.paddingRight = '0'
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.marginLeft = '0'
                e.currentTarget.style.marginRight = '0'
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  color: '#BBBCBF',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  width: 80,
                  flexShrink: 0,
                }}
              >
                {link.label}
              </span>
              <span
                style={{
                  fontSize: 15,
                  color: '#252526',
                  flex: 1,
                  fontFamily: link.mono ? 'var(--font-mono)' : 'inherit',
                  letterSpacing: link.mono ? '0.02em' : 'inherit',
                }}
              >
                {link.value}
              </span>
              <span style={{ color: '#BBBCBF', fontSize: 14 }}>↗</span>
            </a>
          ))}
        </div>

        {/* Right side — availability status */}
        <div
          style={{
            gridColumn: '8 / 13',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            gap: 24,
          }}
        >
          {/* Availability badge */}
          <div
            style={{
              padding: '24px 28px',
              background: '#F4F4FF',
              borderLeft: '3px solid #9494FF',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: '#9494FF',
                  boxShadow: '0 0 0 3px rgba(148,148,255,0.2)',
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  color: '#9494FF',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                Available
              </span>
            </div>
            <p style={{ fontSize: 14, color: '#575859', lineHeight: 1.65, margin: 0 }}>
              目前对新的全职机会和有趣的自由项目保持开放。如果你有好的想法，欢迎直接联系。
            </p>
          </div>

          {/* Location & timezone */}
          <div style={{ borderTop: '1px solid #EBECF0', paddingTop: 20 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                ['Location', '上海，中国'],
                ['Timezone', 'UTC+8 / CST'],
                ['Response', '通常 24h 内回复'],
              ].map(([k, v]) => (
                <div key={k} style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 10,
                      color: '#BBBCBF',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {k}
                  </span>
                  <span style={{ fontSize: 13, color: '#898A8C' }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
