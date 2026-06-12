const PROJECTS = [
  {
    num: '// project_01.jsx',
    name: 'Employee Management System',
    desc: 'Full-stack HR platform with role-based access (admin, manager, employee), attendance tracking, leave management, payroll summary, and real-time notifications.',
    stack: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT', 'Tailwind CSS'],
    metric: '→ RBAC security · 500+ employees',
    github: '#',
    demo: '#',
  },
  {
    num: '// project_02.jsx',
    name: 'E-Commerce Platform',
    desc: 'SSR-enabled store with cart, wishlist, admin dashboard, order tracking & automated email notifications. 40% faster than SPA.',
    stack: ['Next.js', 'Redux', 'Express', 'MongoDB', 'Stripe'],
    metric: '→ 40% perf boost · 99.9% uptime',
    github: '#',
    demo: '#',
  },
  {
    num: '// project_03.jsx',
    name: 'Real-Time Chat Application',
    desc: 'Scalable chat with rooms, file sharing, read receipts, and online indicators. Redis-backed for sub-50ms delivery.',
    stack: ['React', 'Socket.io', 'Redis', 'Node.js', 'MongoDB'],
    metric: '→ 2,000 concurrent users · <50ms latency',
    github: '#',
    demo: '#',
  },
  {
    num: '// project_04.jsx',
    name: 'SaaS Task Dashboard',
    desc: 'Multi-workspace Kanban tool with drag-and-drop, analytics charts, role-based access & Slack integration.',
    stack: ['React', 'D3.js', 'Node.js', 'MongoDB', 'JWT'],
    metric: '→ 500+ active teams · RBAC security',
    github: '#',
    demo: '#',
  },
]

function Projects() {
  return (
    <div className="proj-grid">
      {PROJECTS.map((p) => (
        <div className="proj-card" key={p.num}>
          <div className="proj-num">{p.num}</div>
          <div className="proj-name">{p.name}</div>
          <div className="proj-desc">{p.desc}</div>
          <div className="proj-stack">
            {p.stack.map(t => <span className="stack-tag" key={t}>{t}</span>)}
          </div>
          <div className="proj-metric">{p.metric}</div>
          <div className="proj-links">
            <a className="proj-link" href={p.github} target="_blank" rel="noopener noreferrer">⌥ GitHub</a>
            <a className="proj-link" href={p.demo} target="_blank" rel="noopener noreferrer">⊙ Live Demo</a>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Projects