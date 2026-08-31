const workExperience = [
  {
    period: '2023 — 现在',
    company: '某科技公司',
    role: 'Senior Product Designer',
    desc: '负责核心 AI 产品的设计方向，主导设计系统建设，带领 4 人设计团队',
  },
  {
    period: '2021 — 2023',
    company: '某互联网公司',
    role: 'UI Designer',
    desc: '负责移动端产品体验设计，参与数据可视化平台的从零到一',
  },
  {
    period: '2019 — 2021',
    company: '某初创公司',
    role: 'Junior Designer',
    desc: '完成从视觉到交互的全链路设计工作，建立品牌视觉体系',
  },
]

const basicInfo = [
  { label: 'Location', value: '上海，中国' },
  { label: 'Education', value: '视觉传达设计 · 本科' },
  { label: 'Languages', value: '中文 / English' },
  { label: 'Tools', value: 'Figma · Framer · Cursor' },
]

export default function About() {
  return (
    <section id="about" style={{ padding: '120px 0', borderTop: '1px solid #EBECF0' }}>
      <div className="page-grid">
        {/* Section label */}
        <div style={{ gridColumn: '1 / 13', marginBottom: 64 }}>
          <div className="section-label">
            <span>02 — About</span>
          </div>
        </div>

        {/* Photo placeholder */}
        <div
          style={{
            gridColumn: '1 / 5',
            position: 'relative',
          }}
        >
          <div
            style={{
              width: '100%',
              aspectRatio: '3/4',
              background: '#D5D6D9',
            }}
          />

          {/* Basic info below photo */}
          <div style={{ marginTop: 24 }}>
            {basicInfo.map((item) => (
              <div
                key={item.label}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  padding: '10px 0',
                  borderBottom: '1px solid #EBECF0',
                  gap: 16,
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 10,
                    color: '#BBBCBF',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    flexShrink: 0,
                  }}
                >
                  {item.label}
                </span>
                <span style={{ fontSize: 13, color: '#575859' }}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bio & experience */}
        <div style={{ gridColumn: '5 / 13', paddingLeft: 16 }}>
          {/* Bio */}
          <div style={{ marginBottom: 64 }}>
            <h2
              style={{
                fontSize: 'clamp(32px, 3.5vw, 48px)',
                fontWeight: 700,
                color: '#252526',
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
                margin: '0 0 32px',
              }}
            >
              设计师、思考者，
              <br />
              也是永远的学习者。
            </h2>
            <p
              style={{
                fontSize: 16,
                color: '#575859',
                lineHeight: 1.85,
                margin: '0 0 16px',
                maxWidth: 560,
              }}
            >
              我是果果，一名专注于产品设计与用户体验的 UI 设计师。过去 6 年里，我在 B 端企业产品、AI 对话界面与移动端应用之间穿梭，深信好的设计是无声的沟通。
            </p>
            <p
              style={{
                fontSize: 16,
                color: '#575859',
                lineHeight: 1.85,
                margin: 0,
                maxWidth: 560,
              }}
            >
              我热衷于将复杂的系统逻辑转化为清晰可用的界面，也对设计与 AI 的交叉领域充满好奇。工作之外，我喜欢摄影、读书与漫长的城市漫步。
            </p>
          </div>

          {/* Work Experience */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                color: '#BBBCBF',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: 24,
              }}
            >
              Work Experience
            </div>

            {workExperience.map((job, i) => (
              <div
                key={i}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '160px 1fr',
                  gap: 24,
                  padding: '28px 0',
                  borderTop: i === 0 ? '1px solid #EBECF0' : 'none',
                  borderBottom: '1px solid #EBECF0',
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 11,
                      color: '#BBBCBF',
                      letterSpacing: '0.04em',
                      marginBottom: 8,
                    }}
                  >
                    {job.period}
                  </div>
                  <div style={{ fontSize: 13, color: '#898A8C' }}>{job.company}</div>
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 15,
                      fontWeight: 600,
                      color: '#252526',
                      marginBottom: 8,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {job.role}
                  </div>
                  <div style={{ fontSize: 13, color: '#898A8C', lineHeight: 1.65 }}>{job.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
