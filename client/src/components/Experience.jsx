const EXPERIENCE = [
  {
    dates: 'Jan 2022 → present',
    branch: 'main branch',
    branchColor: 'var(--green)',
    role: 'Senior MERN Full Stack Developer',
    company: 'Nittany Creative Services — Chennai',
    bullets: [
      'Architected React + Node.js apps serving 10,000+ daily active users',
      'Cut page load time 42% via React lazy loading + Redis caching',
      'Shipped real-time features (Socket.io) boosting engagement 28%',
      'Led code reviews, CI/CD pipelines, and mentored 2 junior devs',
    ],
  },
  {
    dates: 'May 2020 → Dec 2021',
    branch: 'freelance branch',
    branchColor: 'var(--orange)',
    role: 'MERN Stack Developer',
    company: 'Freelance / Contract — Chennai',
    bullets: [
      'Delivered 8+ full-stack apps across healthcare, e-commerce & education',
      'Integrated Razorpay, Stripe, Nodemailer, and Twilio APIs',
      'Maintained 90+ Google PageSpeed scores across all projects',
    ],
  },
  {
    dates: 'Apr 2019 → Apr 2020',
    branch: 'initial commit',
    branchColor: 'var(--purple)',
    role: 'Web Designer & Frontend Developer',
    company: 'Creative Agency — Chennai',
    bullets: [
      'Built 15+ responsive websites — HTML5, CSS3, Bootstrap, JavaScript',
      'Reduced avg page size 30%, improved Core Web Vitals across portfolio',
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
