import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Resume from './components/Resume'
import ReadMe from './components/ReadMe'
import './styles/global.css'

const SECTIONS = [
  { id: 'hero-section',    file: 'index.jsx',      symbol: 'RajeshPortfolio' },
  { id: 'about-section',   file: 'about.jsx',       symbol: 'AboutTerminal'  },
  { id: 'skills-section',  file: 'skills.jsx',      symbol: 'TechStack'      },
  { id: 'proj-section',    file: 'projects.jsx',    symbol: 'ProjectGrid'    },
  { id: 'exp-section',     file: 'experience.jsx',  symbol: 'CareerTimeline' },
  { id: 'contact-section', file: 'contact.jsx',     symbol: 'ContactSection' },
]

const CODE_COMMENTS = {
  'hero-section':    ['// ─────────────────────────────────────────────────────', '// 📄 index.jsx  — Entry point & Hero', '// Author: Rajesh  |  MERN Full Stack Developer', '// ─────────────────────────────────────────────────────'],
  'about-section':   ['// ─────────────────────────────────────────────────────', '// 👤 about.jsx  — Terminal-style developer profile', '// ─────────────────────────────────────────────────────'],
  'skills-section':  ['// ─────────────────────────────────────────────────────', '// 🛠️  skills.jsx  — Tech stack with proficiency levels', '// ─────────────────────────────────────────────────────'],
  'proj-section':    ['// ─────────────────────────────────────────────────────', '// 💼 projects.jsx  — Production-grade case studies', '// ─────────────────────────────────────────────────────'],
  'exp-section':     ['// ─────────────────────────────────────────────────────', '// 📅 experience.jsx  — Career timeline & git history', '// ─────────────────────────────────────────────────────'],
  'contact-section': ["// ─────────────────────────────────────────────────────", "// 📬 contact.jsx  — Let's build something together", '// ─────────────────────────────────────────────────────'],
}

export default function App() {
  const [activeIdx, setActiveIdx]     = useState(0)
  const [previewMode, setPreviewMode] = useState(false)
  const [activePanel, setActivePanel] = useState('main') // 'main' | 'resume' | 'readme'
  const [clock, setClock]             = useState('')

  // Clock
  useEffect(() => {
    const tick = () => {
      const now = new Date()
      setClock(now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }))
    }
    tick()
    const t = setInterval(tick, 1000)
    return () => clearInterval(t)
  }, [])

  // Preview mode body class
  useEffect(() => {
    document.body.classList.toggle('preview-mode', previewMode)
  }, [previewMode])

  // Keyboard shortcut Ctrl+P
  useEffect(() => {
    const handler = e => {
      if (e.ctrlKey && e.key === 'p') { e.preventDefault(); setPreviewMode(v => !v) }
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [])

  // IntersectionObserver for active section (only when main panel is showing)
  useEffect(() => {
    if (activePanel !== 'main') return
    const observers = []
    SECTIONS.forEach((sec, idx) => {
      const el = document.getElementById(sec.id)
      if (!el) return
      const obs = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) setActiveIdx(idx)
      }, { threshold: 0.25 })
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [activePanel])
// In App.jsx — add a second useEffect just for .reveal elements
useEffect(() => {
  const revealEls = document.querySelectorAll('.reveal')
  if (!revealEls.length) return

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  }, { threshold: 0.1 })

  revealEls.forEach(el => observer.observe(el))
  return () => observer.disconnect()

}, [activePanel]) // ← re-runs every time panel changes
  // Scroll reveal
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
    }, { threshold: 0.05 })
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const scrollTo = id => {
    setActivePanel('main')
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }, 50)
  }

  const openPanel = panel => setActivePanel(panel)

  const active = SECTIONS[activeIdx]
  const currentFile = activePanel === 'resume' ? 'resume.pdf' : activePanel === 'readme' ? 'README.md' : active.file
  const currentSymbol = activePanel === 'resume' ? 'ResumePanel' : activePanel === 'readme' ? 'ReadMePanel' : active.symbol

  const lineNums = Array.from({ length: 200 }, (_, i) => i + 1)

  return (
    <>
      {/* ACTIVITY BAR */}
      <div className="activity-bar">
        <button className="act-icon active" title="Explorer">⎇</button>
        <button className="act-icon" title="Skills" onClick={() => scrollTo('skills-section')}>⌕</button>
        <button className="act-icon" title="Experience" onClick={() => scrollTo('exp-section')}>◈</button>
        <button className="act-icon" title="Projects" onClick={() => scrollTo('proj-section')}>⊞</button>
        <button className="act-icon" style={{ marginTop: 'auto', marginBottom: 8 }} title="Contact" onClick={() => scrollTo('contact-section')}>⊙</button>
      </div>

      {/* SIDEBAR */}
      <div className="sidebar">
        <div className="sidebar-header">Explorer — rajesh-portfolio</div>
        <div className="file-tree">
          <div className="tree-folder">▾ 📁 src</div>
          {SECTIONS.map((sec, i) => (
            <button key={sec.id} className={`tree-file${activePanel === 'main' && activeIdx === i ? ' active' : ''}`} onClick={() => scrollTo(sec.id)}>
              <span className="dot" style={{ background: '#58a6ff' }} />
              <span className="ext-jsx">{sec.file}</span>
            </button>
          ))}
          <div className="tree-folder" style={{ marginTop: 8 }}>▾ 📁 config</div>
          <button className={`tree-file${activePanel === 'readme' ? ' active' : ''}`} onClick={() => openPanel('readme')}>
            <span className="dot" style={{ background: '#3fb950' }} />
            <span className="ext-md">README.md</span>
          </button>
          <div className="tree-folder" style={{ marginTop: 8 }}>▾ 📁 public</div>
          <button className={`tree-file${activePanel === 'resume' ? ' active' : ''}`} onClick={() => openPanel('resume')}>
            <span className="dot" style={{ background: '#d2a8ff' }} />
            <span style={{ color: '#d2a8ff' }}>resume.pdf</span>
          </button>
        </div>
      </div>

      {/* MAIN */}
      <div className="main">

        {/* TITLE BAR */}
        <div className="title-bar">
          <div className="traffic">
            <div className="tl tl-r" />
            <div className="tl tl-y" />
            <div className="tl tl-g" />
          </div>
          <span className="title-path">
            rajesh-portfolio › <span>src</span> › <span>{currentFile}</span>
          </span>
          <div className="title-spacer" />
          <div className="preview-toggle">
            <button className={`ptog-btn${!previewMode ? ' active' : ''}`} onClick={() => setPreviewMode(false)}>⌥ Code</button>
            <button className={`ptog-btn${previewMode ? ' active' : ''}`} onClick={() => setPreviewMode(true)}>⊙ Preview</button>
          </div>
        </div>

        {/* TAB BAR */}
        <div className="tab-bar">
          {SECTIONS.map((sec, i) => (
            <button key={sec.id} className={`tab${activePanel === 'main' && activeIdx === i ? ' active' : ''}`} onClick={() => scrollTo(sec.id)}>
              <span className="tab-icon">🟦</span>{sec.file}
            </button>
          ))}
          <button className={`tab${activePanel === 'readme' ? ' active' : ''}`} style={{ borderLeft: '1px solid var(--border)' }} onClick={() => openPanel('readme')}>
            <span className="tab-icon" style={{ fontSize: 11 }}>📗</span>README.md
          </button>
          <button className={`tab${activePanel === 'resume' ? ' active' : ''}`} onClick={() => openPanel('resume')}>
            <span className="tab-icon" style={{ fontSize: 11 }}>📄</span>resume.pdf
          </button>
        </div>

        {/* BREADCRUMB */}
        <div className="breadcrumb">
          <span className="bc-item">rajesh-portfolio</span>
          <span className="bc-sep">›</span>
          <span className="bc-item">src</span>
          <span className="bc-sep">›</span>
          <span className="bc-item current">{currentFile}</span>
          <span className="bc-sep">›</span>
          <span className="bc-item current">{currentSymbol}</span>
        </div>

        {/* PANEL WRAPPER */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>

          {/* MAIN EDITOR PANEL */}
          {activePanel === 'main' && (
            <div style={{ flex: 1, display: 'flex' }}>
              <div className="editor">
                <div className="line-numbers">
                  {lineNums.map(n => <span key={n} style={{ display: 'block', lineHeight: 1.75 }}>{n}</span>)}
                </div>
                <div className="code-area">

                  {/* HERO */}
                  <div className="section" id="hero-section">
                    {CODE_COMMENTS['hero-section'].map((c, i) => <span key={i} className="cline"><span className="com">{c}</span></span>)}
                    <span className="cline" />
                    <span className="cline"><span className="kw">import</span> <span className="txt">React</span><span className="kw"> from</span> <span className="str"> 'react'</span></span>
                    <span className="cline" />
                    <span className="cline"><span className="kw">const</span> <span className="kw2">RajeshPortfolio</span> <span className="op">=</span> <span className="txt">() </span><span className="op">=&gt;</span> <span className="txt">{'{'}</span></span>
                    <span className="cline">  <span className="kw">return</span> <span className="txt">(</span></span>
                    <span className="cline">    <span className="com">{'/* ↓ RENDERED OUTPUT ↓ */'}</span></span>
                    <div className="render-block reveal"><Hero scrollTo={scrollTo} /></div>
                    <span className="cline">  <span className="txt">)</span></span>
                    <span className="cline"><span className="txt">{'}'}</span></span>
                    <span className="cline"><span className="kw">export default</span> <span className="kw2">RajeshPortfolio</span></span>
                  </div>

                  {/* ABOUT */}
                  <div className="section" id="about-section">
                    <span className="cline" />
                    {CODE_COMMENTS['about-section'].map((c, i) => <span key={i} className="cline"><span className="com">{c}</span></span>)}
                    <span className="cline" />
                    <span className="cline"><span className="kw">const</span> <span className="kw2">AboutTerminal</span> <span className="op">=</span> <span className="txt">() </span><span className="op">=&gt;</span> <span className="txt">{'{'}</span></span>
                    <span className="cline">  <span className="kw">return</span> <span className="txt">(</span></span>
                    <span className="cline">    <span className="com">{'/* ↓ RENDERED OUTPUT ↓ */'}</span></span>
                    <div className="render-block reveal"><About /></div>
                    <span className="cline">  <span className="txt">)</span></span>
                    <span className="cline"><span className="txt">{'}'}</span></span>
                  </div>

                  {/* SKILLS */}
                  <div className="section" id="skills-section">
                    <span className="cline" />
                    {CODE_COMMENTS['skills-section'].map((c, i) => <span key={i} className="cline"><span className="com">{c}</span></span>)}
                    <span className="cline" />
                    <span className="cline"><span className="kw">const</span> <span className="kw2">TechStack</span> <span className="op">=</span> <span className="txt">() </span><span className="op">=&gt;</span> <span className="txt">{'('}</span></span>
                    <span className="cline">  <span className="com">{'/* ↓ RENDERED OUTPUT ↓ */'}</span></span>
                    <div className="render-block reveal"><Skills /></div>
                    <span className="cline"><span className="txt">{')'}</span></span>
                  </div>

                  {/* PROJECTS */}
                  <div className="section" id="proj-section">
                    <span className="cline" />
                    {CODE_COMMENTS['proj-section'].map((c, i) => <span key={i} className="cline"><span className="com">{c}</span></span>)}
                    <span className="cline" />
                    <span className="cline"><span className="kw">const</span> <span className="kw2">ProjectGrid</span> <span className="op">=</span> <span className="txt">() </span><span className="op">=&gt;</span> <span className="txt">{'('}</span></span>
                    <span className="cline">  <span className="com">{'/* ↓ RENDERED OUTPUT ↓ */'}</span></span>
                    <div className="render-block reveal"><Projects /></div>
                    <span className="cline"><span className="txt">{')'}</span></span>
                  </div>

                  {/* EXPERIENCE */}
                  <div className="section" id="exp-section">
                    <span className="cline" />
                    {CODE_COMMENTS['exp-section'].map((c, i) => <span key={i} className="cline"><span className="com">{c}</span></span>)}
                    <span className="cline" />
                    <span className="cline"><span className="kw">const</span> <span className="kw2">CareerTimeline</span> <span className="op">=</span> <span className="txt">() </span><span className="op">=&gt;</span> <span className="txt">{'('}</span></span>
                    <span className="cline">  <span className="com">{'/* ↓ RENDERED OUTPUT ↓ */'}</span></span>
                    <div className="render-block reveal"><Experience /></div>
                    <span className="cline"><span className="txt">{')'}</span></span>
                  </div>

                  {/* CONTACT */}
                  <div className="section" id="contact-section">
                    <span className="cline" />
                    {CODE_COMMENTS['contact-section'].map((c, i) => <span key={i} className="cline"><span className="com">{c}</span></span>)}
                    <span className="cline" />
                    <span className="cline"><span className="kw">const</span> <span className="kw2">ContactSection</span> <span className="op">=</span> <span className="txt">() </span><span className="op">=&gt;</span> <span className="txt">{'('}</span></span>
                    <span className="cline">  <span className="com">{'/* ↓ RENDERED OUTPUT ↓ */'}</span></span>
                    <div className="render-block reveal"><Contact /></div>
                    <span className="cline"><span className="txt">{')'}</span></span>
                    <span className="cline"><span className="kw">export default</span> <span className="kw2">ContactSection</span></span>
                    <span className="cline"><span className="com">GET /next-opportunity

200 OK</span></span>
                    <div style={{ height: 60 }} />
                  </div>

                </div>
              </div>
            </div>
          )}

          {/* RESUME PANEL */}
          {activePanel === 'resume' && <Resume />}

          {/* README PANEL */}
          {activePanel === 'readme' && <ReadMe />}

        </div>{/* end panel wrapper */}
      </div>{/* end main */}

      {/* MINIMAP — only show on main panel */}
      {activePanel === 'main' && (
        <div className="minimap">
          {SECTIONS.map((sec, i) => (
            <button key={sec.id} className={`mm-item${activeIdx === i ? ' active' : ''}`} onClick={() => scrollTo(sec.id)} title={sec.file} />
          ))}
        </div>
      )}

      {/* STATUS BAR */}
      <div className="status-bar">
        <div className="sb-item">⎇ main</div>
        <div className="sb-item">✓ 0 errors</div>
        <div className="sb-item">⚡ MERN Stack</div>
        <div className="sb-right">
          <div className="sb-item">{activePanel === 'resume' ? 'PDF' : activePanel === 'readme' ? 'Markdown' : 'JSX'}</div>
          <div className="sb-item">UTF-8</div>
          <div className="sb-item">Node v20.11</div>
          <div className="sb-item">{clock}</div>
        </div>
      </div>
    </>
  )
}
