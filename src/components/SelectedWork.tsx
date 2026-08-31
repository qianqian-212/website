import { useState } from 'react'

const projects = [
  {
    id: 1,
    title: '织构',
    subtitle: 'Enterprise Design System',
    desc: '为千万级用户构建的企业级设计体系，覆盖组件规范、设计语言与协作工作流',
    tags: ['设计系统', 'B端', '组件库'],
    year: '2024',
    coverColor: '#252526',
    accentColor: '#9494FF',
    textOnCover: 'DS',
  },
  {
    id: 2,
    title: '对话',
    subtitle: 'AI Assistant Interface',
    desc: '重新定义人机对话体验，将 AI 能力以最自然的方式呈现给用户',
    tags: ['AI 产品', '移动端', '交互'],
    year: '2024',
    coverColor: '#9494FF',
    accentColor: '#EDEDFF',
    textOnCover: 'AI',
  },
  {
    id: 3,
    title: '明镜',
    subtitle: 'Personal Finance App',
    desc: '个人财务管理应用，让复杂的财务数据变得清晰可读、行动可期',
    tags: ['移动端', '数据可视化', 'C端'],
    year: '2023',
    coverColor: '#BBBCBF',
    accentColor: '#898A8C',
    textOnCover: '¥',
  },
  {
    id: 4,
    title: '数场',
    subtitle: 'Data Visualization Platform',
    desc: '复杂数据的可视化平台，帮助决策者在信息洪流中找到真正重要的信号',
    tags: ['数据可视化', 'B端', 'Dashboard'],
    year: '2023',
    coverColor: '#EBECF0',
    accentColor: '#252526',
    textOnCover: '∿',
  },
]

interface ProjectCardProps {
  project: (typeof projects)[0]
  coverHeight?: number
}

function ProjectCard({ project, coverHeight = 280 }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="card-hover"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Cover */}
      <div
        className="card-cover"
        style={{ height: coverHeight, position: 'relative', overflow: 'hidden', marginBottom: 20 }}
      >
        <div
          className="cover-block"
          style={{
            width: '100%',
            height: '100%',
            background: '#D5D6D9',
            position: 'relative',
          }}
        >
          {/* Hover reveal */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'flex-end',
              padding: 20,
              background: `linear-gradient(to top, rgba(0,0,0,0.25) 0%, transparent 60%)`,
              opacity: hovered ? 1 : 0,
              transition: 'opacity 0.3s ease',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                color: 'white',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              View Case Study →
            </span>
          </div>
        </div>
      </div>

      {/* Meta */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
        <h3
          style={{
            fontSize: 22,
            fontWeight: 600,
            color: '#252526',
            margin: 0,
            letterSpacing: '-0.01em',
          }}
        >
          {project.title}
          <span style={{ fontSize: 14, fontWeight: 400, color: '#898A8C', marginLeft: 8 }}>
            {project.subtitle}
          </span>
        </h3>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            color: '#BBBCBF',
            letterSpacing: '0.04em',
            flexShrink: 0,
            paddingTop: 4,
          }}
        >
          {project.year}
        </span>
      </div>

      <p style={{ fontSize: 14, color: '#898A8C', lineHeight: 1.65, margin: '0 0 16px' }}>
        {project.desc}
      </p>

      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
        {project.tags.map((tag) => (
          <span key={tag} className="tag-pill">
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function SelectedWork() {
  return (
    <section id="work" style={{ padding: '120px 0', borderTop: '1px solid #EBECF0' }}>
      <div className="page-grid">
        {/* Section label */}
        <div style={{ gridColumn: '1 / 13', marginBottom: 64 }}>
          <div className="section-label" style={{ marginBottom: 24 }}>
            <span>01 — Selected Work</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'end' }}>
            <h2
              style={{
                fontSize: 'clamp(36px, 4vw, 52px)',
                fontWeight: 700,
                color: '#252526',
                margin: 0,
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
              }}
            >
              精选作品
            </h2>
            <p
              style={{
                fontSize: 14,
                color: '#898A8C',
                margin: 0,
                maxWidth: 360,
                lineHeight: 1.7,
                textAlign: 'right',
              }}
            >
              以下是近两年内最具代表性的设计项目，涵盖 AI 产品、设计系统与数据可视化等领域。
            </p>
          </div>
        </div>

        {/* Row 1 — asymmetric: large left + small right */}
        <div style={{ gridColumn: '1 / 8' }}>
          <ProjectCard project={projects[0]} coverHeight={340} />
        </div>
        <div style={{ gridColumn: '8 / 13', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <ProjectCard project={projects[1]} coverHeight={240} />
        </div>

        {/* Spacer */}
        <div style={{ gridColumn: '1 / 13', height: 48 }} />

        {/* Row 2 — small left + large right */}
        <div style={{ gridColumn: '1 / 6', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
          <ProjectCard project={projects[2]} coverHeight={220} />
        </div>
        <div style={{ gridColumn: '6 / 13' }}>
          <ProjectCard project={projects[3]} coverHeight={300} />
        </div>

        {/* All projects link */}
        <div style={{ gridColumn: '1 / 13', marginTop: 64, borderTop: '1px solid #EBECF0', paddingTop: 32, display: 'flex', justifyContent: 'flex-end' }}>
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
            查看所有项目 <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
