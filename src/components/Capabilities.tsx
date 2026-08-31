import { useState } from 'react'

const categories = [
  {
    id: 'product',
    label: '产品',
    en: 'Product',
    desc: '从用户洞察出发，推动产品从模糊概念走向清晰落地。覆盖全流程的产品设计工作。',
    skills: [
      { name: '用户研究', level: 90 },
      { name: '信息架构', level: 88 },
      { name: '交互设计', level: 95 },
      { name: '原型制作', level: 92 },
      { name: '用户测试', level: 80 },
    ],
    highlight: '主导过 3 款千万级 DAU 产品的设计方向',
  },
  {
    id: 'visual',
    label: '视觉',
    en: 'Visual',
    desc: '以克制的视觉语言建立品牌认知，在规范与创意之间保持平衡。',
    skills: [
      { name: '界面设计', level: 95 },
      { name: '品牌视觉', level: 82 },
      { name: '插画设计', level: 75 },
      { name: '排版设计', level: 88 },
      { name: '动效设计', level: 78 },
    ],
    highlight: '建立并维护多套品牌视觉体系',
  },
  {
    id: 'design-system',
    label: '设计系统',
    en: 'Design System',
    desc: '构建可扩展、可协作、有生命力的设计系统。让设计决策沉淀为可复用的资产。',
    skills: [
      { name: '组件设计', level: 95 },
      { name: 'Token 体系', level: 90 },
      { name: '文档编写', level: 85 },
      { name: '版本管理', level: 80 },
      { name: '团队协作', level: 88 },
    ],
    highlight: '独立主导 2 套企业级设计系统落地',
  },
  {
    id: 'ai',
    label: 'AI',
    en: 'AI',
    desc: '在 AI 与设计的交叉地带探索新的交互范式，将技术能力以最人性的方式呈现。',
    skills: [
      { name: 'AI 产品设计', level: 88 },
      { name: 'Prompt Engineering', level: 82 },
      { name: 'AI 辅助设计', level: 90 },
      { name: '对话界面设计', level: 85 },
      { name: '多模态交互', level: 75 },
    ],
    highlight: '设计了 2 款 AI 对话产品的核心体验',
  },
  {
    id: 'skills',
    label: '工具技能',
    en: 'Skills',
    desc: '熟练使用主流设计与开发工具，具备一定的前端开发能力，便于与工程师紧密协作。',
    skills: [
      { name: 'Figma', level: 98 },
      { name: 'Framer', level: 85 },
      { name: 'HTML / CSS', level: 78 },
      { name: 'React (基础)', level: 65 },
      { name: 'After Effects', level: 72 },
    ],
    highlight: 'Figma Community 文件累计 1000+ 重复使用',
  },
]

export default function Capabilities() {
  const [activeId, setActiveId] = useState('product')
  const active = categories.find((c) => c.id === activeId)!

  return (
    <section id="capabilities" style={{ padding: '120px 0', borderTop: '1px solid #EBECF0' }}>
      <div className="page-grid">
        {/* Section label */}
        <div style={{ gridColumn: '1 / 13', marginBottom: 64 }}>
          <div className="section-label">
            <span>03 — Capabilities</span>
          </div>
        </div>

        {/* Header row */}
        <div style={{ gridColumn: '1 / 7', marginBottom: 48 }}>
          <h2
            style={{
              fontSize: 'clamp(32px, 3.5vw, 48px)',
              fontWeight: 700,
              color: '#252526',
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
              margin: 0,
            }}
          >
            我能做什么
          </h2>
        </div>
        <div
          style={{
            gridColumn: '8 / 13',
            marginBottom: 48,
            display: 'flex',
            alignItems: 'flex-end',
          }}
        >
          <p style={{ fontSize: 14, color: '#898A8C', lineHeight: 1.7, margin: 0 }}>
            点击下方分类，查看我在各个领域的能力与代表性成果。
          </p>
        </div>

        {/* Tab bar */}
        <div
          style={{
            gridColumn: '1 / 13',
            display: 'flex',
            gap: 0,
            borderBottom: '1px solid #EBECF0',
            marginBottom: 56,
            overflowX: 'auto',
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveId(cat.id)}
              className={`capability-tab${activeId === cat.id ? ' active' : ''}`}
              style={{ marginRight: 40 }}
            >
              {cat.label}
              <span
                style={{
                  marginLeft: 6,
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10,
                  color: activeId === cat.id ? '#898A8C' : '#BBBCBF',
                }}
              >
                {cat.en}
              </span>
            </button>
          ))}
        </div>

        {/* Content panel */}
        <div style={{ gridColumn: '1 / 5', paddingRight: 24 }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              color: '#BBBCBF',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: 20,
            }}
          >
            {active.en}
          </div>
          <p style={{ fontSize: 15, color: '#575859', lineHeight: 1.75, margin: '0 0 32px' }}>
            {active.desc}
          </p>
          <div
            style={{
              background: '#F7F7FF',
              borderLeft: '3px solid #9494FF',
              padding: '16px 20px',
              fontSize: 13,
              color: '#575859',
              lineHeight: 1.65,
            }}
          >
            {active.highlight}
          </div>
        </div>

        <div style={{ gridColumn: '5 / 13' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {active.skills.map((skill) => (
              <div key={skill.name}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: 8,
                    alignItems: 'center',
                  }}
                >
                  <span style={{ fontSize: 14, color: '#252526', fontWeight: 500 }}>
                    {skill.name}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 11,
                      color: '#BBBCBF',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {skill.level}%
                  </span>
                </div>
                <div
                  style={{
                    height: 2,
                    background: '#EBECF0',
                    borderRadius: 2,
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      height: '100%',
                      width: `${skill.level}%`,
                      background: skill.level >= 90 ? '#9494FF' : '#252526',
                      borderRadius: 2,
                      transition: 'width 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Capability grid detail */}
          <div
            style={{
              marginTop: 48,
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 2,
            }}
          >
            {['发现问题', '定义方向', '设计方案', '验证迭代', '落地交付', '持续优化'].map(
              (step, i) => (
                <div
                  key={step}
                  style={{
                    padding: '20px 16px',
                    background: i % 2 === 0 ? '#FAFAFA' : '#F4F4FF',
                    fontSize: 12,
                    color: '#575859',
                    textAlign: 'center',
                    fontFamily: 'var(--font-mono)',
                    letterSpacing: '0.04em',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 10,
                      color: '#BBBCBF',
                      marginBottom: 4,
                      letterSpacing: '0.08em',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  {step}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
