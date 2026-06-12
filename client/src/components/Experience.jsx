const EXPERIENCE = [
  {
  dates: 'Jan 2022 → Present',
  branch: 'main branch',
  branchColor: 'var(--green)',
  role: 'Senior MERN Full Stack Developer',
  company: 'Synthesis Health Soft — Chennai',
  bullets: [
    'Designed and scaled healthcare platforms handling thousands of daily transactions',
    'Built reusable React architecture reducing development effort across multiple modules',
    'Implemented secure REST APIs, JWT authentication, RBAC and audit logging',
    'Automated deployments using Docker and CI/CD pipelines, reducing release time significantly',
  ],
},
{
  dates: 'May 2020 → Dec 2021',
  branch: 'feature branch',
  branchColor: 'var(--orange)',
  role: 'MERN Stack Developer',
  company: 'IO Ready — Malaysia (Remote)',
  bullets: [
    'Developed end-to-end SaaS products from requirement gathering to production deployment',
    'Integrated payment gateways, email services, SMS notifications and third-party APIs',
    'Optimized MongoDB queries and backend services for improved performance and scalability',
    'Collaborated with UI/UX teams to transform complex workflows into intuitive user experiences',
  ],
},
{
  dates: 'Apr 2019 → Apr 2020',
  branch: 'initial commit',
  branchColor: 'var(--purple)',
  role: 'Frontend Developer',
  company: 'Spider Web India — Bengaluru (Remote)',
  bullets: [
    'Crafted responsive business websites with pixel-perfect UI implementation',
    'Converted design mockups into production-ready interfaces using modern frontend practices',
    'Improved website performance, accessibility and cross-browser compatibility',
    'Established reusable component patterns that accelerated future project delivery',
  ],
},
]

function Experience() {
  return (
    <div className="timeline">
      {EXPERIENCE.map((exp, i) => (
        <div className="tl-item" key={i}>
          <div className="tl-dates">
            {exp.dates} · <span style={{ color: exp.branchColor }}>{exp.branch}</span>
          </div>
          <div className="tl-role">{exp.role}</div>
          <div className="tl-company">{exp.company}</div>
          <ul className="tl-bullets">
            {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Experience
