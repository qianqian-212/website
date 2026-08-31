export default function Thinking() {
  return (
    <section id="thinking" style={{ padding: '120px 0', borderTop: '1px solid #EBECF0' }}>
      <div className="page-grid">
        {/* Section label */}
        <div style={{ gridColumn: '1 / 13', marginBottom: 64 }}>
          <div className="section-label">
            <span>05 — Thinking</span>
          </div>
        </div>

        {/* Header */}
        <div style={{ gridColumn: '1 / 8' }}>
          <h2
            style={{
              fontSize: 'clamp(32px, 3.5vw, 48px)',
              fontWeight: 700,
              color: '#252526',
              margin: '0 0 24px',
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
            }}
          >
            思考与观察
          </h2>
          <p style={{ fontSize: 16, color: '#898A8C', lineHeight: 1.75, margin: 0, maxWidth: 480 }}>
            关于设计、技术与世界的零散思考。这里的内容尚在积累中，稍后见。
          </p>
        </div>

        {/* Empty state — editorial placeholder */}
        <div style={{ gridColumn: '1 / 13', marginTop: 80 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 2,
            }}
          >
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                style={{
                  height: 220,
                  background: i === 2 ? '#F4F4FF' : '#FAFAFA',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: 28,
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 10,
                    color: '#D5D6D9',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}
                >
                  Coming Soon
                </div>
                <div>
                  <div
                    style={{
                      height: 1,
                      background: '#EBECF0',
                      marginBottom: 12,
                    }}
                  />
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 11,
                      color: '#D5D6D9',
                      letterSpacing: '0.06em',
                    }}
                  >
                    {['设计系统思考', 'AI × Design', '用户体验观察'][i - 1]}
                  </div>
                </div>
                {/* Large background number */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: -20,
                    right: 20,
                    fontFamily: 'var(--font-mono)',
                    fontSize: 120,
                    fontWeight: 700,
                    color: '#EBECF0',
                    lineHeight: 1,
                    userSelect: 'none',
                    pointerEvents: 'none',
                  }}
                >
                  {String(i).padStart(2, '0')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
