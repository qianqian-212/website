import { useState } from 'react'

const labItems = [
  {
    id: 1,
    title: '汉字解构',
    category: 'Typography',
    tags: ['字体', '实验', '视觉'],
    desc: '探索汉字的几何结构与现代排版之间的张力，将传统字形拆解重组为当代视觉语言',
    coverColor: '#252526',
    coverAccent: '#9494FF',
    coverText: '字',
  },
  {
    id: 2,
    title: '流体系统',
    category: 'Motion',
    tags: ['动态', '生成', '交互'],
    desc: '基于物理规则的流体动画实验，探索界面中有机运动与人类直觉之间的边界',
    coverColor: '#9494FF',
    coverAccent: '#EDEDFF',
    coverText: '∿',
  },
  {
    id: 3,
    title: '格子诗',
    category: 'Generative Art',
    tags: ['生成艺术', '算法', '视觉'],
    desc: '用算法生成汉字排列的视觉图案，每次生成都是一首独特的视觉诗',
    coverColor: '#EBECF0',
    coverAccent: '#252526',
    coverText: '∷',
  },
  {
    id: 4,
    title: '呼吸界面',
    category: 'Interaction',
    tags: ['交互原型', '情感设计', 'Framer'],
    desc: '让界面跟随用户的注意力起伏呼吸，在微交互层面建立情感连接',
    coverColor: '#BBBCBF',
    coverAccent: '#898A8C',
    coverText: '○',
  },
]

function LabCard({ item }: { item: (typeof labItems)[0] }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="card-hover"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Cover */}
      <div className="card-cover" style={{ marginBottom: 18, position: 'relative', overflow: 'hidden' }}>
        <div
          className="cover-block"
          style={{
            height: 200,
            background: '#D5D6D9',
            position: 'relative',
          }}
        >
          {/* Hover overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(0,0,0,0.08)',
              opacity: hovered ? 1 : 0,
              transition: 'opacity 0.3s ease',
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 10,
          color: '#BBBCBF',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          marginBottom: 8,
        }}
      >
        {item.category}
      </div>
      <h3
        style={{
          fontSize: 18,
          fontWeight: 600,
          color: '#252526',
          margin: '0 0 10px',
          letterSpacing: '-0.01em',
        }}
      >
        {item.title}
      </h3>
      <p style={{ fontSize: 13, color: '#898A8C', lineHeight: 1.65, margin: '0 0 14px' }}>
        {item.desc}
      </p>
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
        {item.tags.map((tag) => (
          <span key={tag} className="tag-pill" style={{ fontSize: 11 }}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Lab() {
  return (
    <section id="lab" style={{ padding: '120px 0', borderTop: '1px solid #EBECF0' }}>
      <div className="page-grid">
        {/* Section label */}
        <div style={{ gridColumn: '1 / 13', marginBottom: 64 }}>
          <div className="section-label">
            <span>04 — Lab</span>
          </div>
          <div
            style={{
              marginTop: 24,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
            }}
          >
            <h2
              style={{
                fontSize: 'clamp(32px, 3.5vw, 48px)',
                fontWeight: 700,
                color: '#252526',
                margin: 0,
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
              }}
            >
              实验室
            </h2>
            <p
              style={{
                fontSize: 14,
                color: '#898A8C',
                margin: 0,
                maxWidth: 320,
                lineHeight: 1.7,
                textAlign: 'right',
              }}
            >
              这里是游乐场——存放各种没有客户、没有 deadline 的自由实验。
            </p>
          </div>
        </div>

        {/* Lab grid — 2 + 2 layout */}
        <div style={{ gridColumn: '1 / 7' }}>
          <LabCard item={labItems[0]} />
        </div>
        <div style={{ gridColumn: '7 / 13', paddingTop: 60 }}>
          <LabCard item={labItems[1]} />
        </div>

        <div style={{ gridColumn: '1 / 13', height: 48 }} />

        <div style={{ gridColumn: '1 / 5', paddingTop: 0 }}>
          <LabCard item={labItems[2]} />
        </div>
        <div style={{ gridColumn: '5 / 10', paddingTop: 32 }}>
          <LabCard item={labItems[3]} />
        </div>

        {/* Index note */}
        <div
          style={{
            gridColumn: '10 / 13',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            paddingBottom: 8,
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 64,
              color: '#EBECF0',
              fontWeight: 700,
              lineHeight: 1,
              textAlign: 'right',
            }}
          >
            04
          </div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 10,
              color: '#BBBCBF',
              letterSpacing: '0.08em',
              textAlign: 'right',
              marginTop: 4,
            }}
          >
            EXPERIMENTS
          </div>
        </div>

        {/* Bottom link */}
        <div
          style={{
            gridColumn: '1 / 13',
            marginTop: 64,
            borderTop: '1px solid #EBECF0',
            paddingTop: 32,
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <a
            href="#"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 12,
              color: '#252526',
              textDecoration: 'none',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              transition: 'gap 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.gap = '20px')}
            onMouseLeave={(e) => (e.currentTarget.style.gap = '12px')}
          >
            查看全部实验 <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
