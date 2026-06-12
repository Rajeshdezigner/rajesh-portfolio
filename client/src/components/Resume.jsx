import React from 'react';
 
function Resume() {
  return (
    <div className="rs-root">

      {/* Title Bar */}
      <div className="rs-titlebar">
        
        <span className="rs-tabname">
       GET /resume
        </span>
        <button className="rs-dl-btn" onClick={() => window.print()}>
          ↓ download
        </button>
      </div>

      <div className="rs-body">

        {/* Prompt */}
     <div className="rs-prompt">
  <span className="user">mongo</span>
  <span className="at">@</span>
  <span className="dir">career-db</span>
  <span className="sym">$</span>
  <span className="cmd">findOne("rajesh")</span>
  <span className="cursor"></span>
</div>

        {/* Header */}
        <div className="rs-header">
          <div className="rs-header-left">
            <div className="rs-name"><span className="accent">RAJESH</span> M</div>
            <div className="rs-role">  MERN Full Stack Developer</div>
            <div className="rs-sub">5+ Years · Building Scalable Web Applications</div>
          </div>
          <div className="rs-header-right">
            <div className="rs-contact-item">
              <span className="rc-icon">📞</span>
              <a href="tel:+919626231757">+91 96262 31757</a>
            </div>
            <div className="rs-contact-item">
              <span className="rc-icon">✉</span>
              <a href="mailto:rajeshmerndev@gmail.com">rajeshmerndev@gmail.com</a>
            </div>
            <div className="rs-contact-item">
              <span className="rc-icon">📍</span>
              <span>Chennai, Tamil Nadu, India</span>
            </div>
            <div className="rs-contact-item">
              <span className="rc-icon">💼</span>
              <a href="https://linkedin.com/in/rajesh-mern" target="_blank" rel="noopener">
                linkedin.com/in/rajesh-mern
              </a>
            </div>
            <div className="rs-contact-item">
              <span className="rc-icon">🐙</span>
              <a href="https://github.com/rajesh-merndev" target="_blank" rel="noopener">
                github.com/rajesh-merndev
              </a>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="rs-section">
          <div className="rs-sec-label">professional summary</div>
          <div className="rs-file-block">
            <div className="rs-file-header">
              <span className="fname">summary</span>
              <span className="fext">.md</span>
            </div>
            <div className="rs-file-body rs-summary">
              Results-driven MERN Full Stack Developer with <span className="hi">5+ years</span> of hands-on experience
              designing, building, and deploying high-performance web applications. Proficient across the entire
              JavaScript ecosystem — from crafting pixel-perfect React UIs to architecting RESTful and GraphQL APIs
              with Node.js and Express, backed by MongoDB databases. Proven ability to reduce load times by{' '}
              <span className="hi">40%+</span>, increase API throughput, and deliver features that directly impact
              business KPIs. Passionate about clean code, scalable architecture, and Agile collaboration.
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="rs-section">
          <div className="rs-sec-label">core technical skills</div>
          <div className="rs-file-block">
            <div className="rs-file-header">
              <span className="fname">skills</span>
              <span className="fext">.yaml</span>
            </div>
            <div className="rs-file-body">
              {[
                {
                  cat: 'frontend',
                  tags: ['React.js', 'Next.js', 'Redux', 'JavaScript ES6+',  'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap 5'],
                },
                {
                  cat: 'backend',
                  tags: ['Node.js', 'Express.js', 'REST API', 'GraphQL', 'JWT', 'OAuth 2.0', 'Socket.IO', 'WebSockets'],
                },
                {
                  cat: 'database',
                  tags: ['MongoDB', 'Mongoose', 'Redis', 'MySQL', 'PostgreSQL'],
                },
                {
                  cat: 'devops',
                  tags: ['Git / GitHub', 'Docker', 'AWS EC2/S3', 'Netlify', 'Vercel', 'CI/CD', 'JIRA'],
                },
              ].map(({ cat, tags }) => (
                <div className="rs-skill-row" key={cat}>
                  <span className="rs-skill-cat">{cat}</span>
                  <div className="rs-skill-tags">
                    {tags.map(t => <span className="rs-stag" key={t}>{t}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="rs-section">
          <div className="rs-sec-label">key achievements</div>
          <div className="rs-file-block">
            <div className="rs-file-header">
              <span className="fname">wins</span>
              <span className="fext">.log</span>
            </div>
            <div className="rs-file-body">
              {[
                <>Reduced page load by <span className="hi">42%</span> — React lazy loading, code splitting, Redis caching.</>,
                <>REST APIs handling <span className="hi">10,000+ concurrent requests</span> at 99.9% uptime via Node clustering.</>,
                <>Monolith → microservices migration: deploy time cut from <span className="hi">2hr → 12min</span>.</>,
                <>JWT + OAuth 2.0 auth for <span className="hi">50,000+ users</span> — zero security breaches.</>,
                <>Shipped <span className="hi">5+ end-to-end</span> full-stack apps from requirement gathering to production.</>,
              ].map((item, i) => (
                <div className="rs-win-row" key={i}>
                  <span className="tick">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="rs-section">
          <div className="rs-sec-label">experience.log</div>

          <div className="rs-exp-item">
            <div className="rs-exp-top">
              <div>
                <div className="rs-exp-role">  MERN Full Stack Developer</div>
                <div className="rs-exp-company">
                Synthesis Health Soft
                  <span className="rs-exp-loc"> · Chennai, Tamil Nadu</span>
                </div>
              </div>
              <div className="rs-exp-dates">Jan 2022 – Present</div>
            </div>
            <ul className="rs-exp-bullets">
              <li>Architected full-stack apps using React.js, Node.js, Express.js, and MongoDB — <span className="hi">10,000+ daily active users</span>.</li>
              <li>Re-architected front-end with React Hooks & Redux Toolkit — re-renders cut 35%, Lighthouse <span className="hi">62 → 94</span>.</li>
              <li>Designed scalable REST APIs and integrated payment gateways, email APIs, and cloud storage.</li>
              <li>Built real-time features via Socket.IO — boosted user engagement by <span className="hi">28%</span>.</li>
              <li>Mentored 2 junior developers; enforced Git workflows and CI/CD best practices.</li>
            </ul>
          </div>

          <div className="rs-exp-item">
            <div className="rs-exp-top">
              <div>
                <div className="rs-exp-role">MERN Stack Developer</div>
                <div className="rs-exp-company">
                  Freelance / Contract Projects
                  <span className="rs-exp-loc"> · Chennai, Tamil Nadu</span>
                </div>
              </div>
              <div className="rs-exp-dates">May 2020 – Dec 2021</div>
            </div>
            <ul className="rs-exp-bullets">
              <li>Delivered <span className="hi">4+ custom web apps</span> across e-commerce, healthcare, and education sectors.</li>
              <li>Built doctor appointment system with React + Node.js — cut scheduling time by <span className="hi">60%</span>.</li>
              <li>Multi-role auth portal (admin, doctor, patient) with RBAC + JWT security.</li>
              <li>Integrated Razorpay, Stripe, Nodemailer, and Twilio for payments and notifications.</li>
            </ul>
          </div>

          <div className="rs-exp-item">
            <div className="rs-exp-top">
              <div>
                <div className="rs-exp-role">UI UX  Designer </div>
                <div className="rs-exp-company">
             IO Ready  .
                  <span className="rs-exp-loc"> Malaysia (Remote)</span>
                </div>
              </div>
              <div className="rs-exp-dates">Apr 2019 – Apr 2020</div>
            </div>
            <ul className="rs-exp-bullets">
              <li>Designed and coded <span className="hi">15+ responsive websites</span> using HTML5, CSS3, Bootstrap 4, and JavaScript.</li>
              <li>Reduced average page size 30% and improved Core Web Vitals scores across portfolio.</li>
              <li>Built foundation in Git, Node.js scripting, and REST API consumption.</li>
            </ul>
          </div>
        </div>

        {/* Projects */}
        <div className="rs-section">
          <div className="rs-sec-label">projects/</div>
          <div className="rs-proj-grid">

       <div className="rs-proj-card">
  <div className="rs-proj-top">
    <span className="rp-icon">◈</span>
    <div className="rp-name">employee-management</div>
    <span className="rp-live">● live</span>
  </div>
  <div className="rp-stack">
    {['React', 'Node.js', 'MongoDB', 'Express', 'JWT', 'Tailwind CSS'].map(t => (
      <span className="rp-tag" key={t}>{t}</span>
    ))}
  </div>
  <div className="rp-desc">
    Full-stack HR management system with role-based access (admin, manager, employee), 
    attendance tracking, leave management, payroll summary, and real-time 
    notifications — <span className="hi">500+ employees</span>.
  </div>
</div>

            <div className="rs-proj-card">
              <div className="rs-proj-top">
                <span className="rp-icon">◈</span>
                <div className="rp-name">ecommerce-platform</div>
                <span className="rp-live">● live</span>
              </div>
              <div className="rp-stack">
                {['Next.js SSR', 'Express', 'MongoDB', 'Redux', 'Stripe'].map(t => (
                  <span className="rp-tag" key={t}>{t}</span>
                ))}
              </div>
              <div className="rp-desc">
                SSR-enabled store with cart, wishlist, order tracking, admin dashboard, and automated emails — <span className="hi">40% faster</span> than SPAs.
              </div>
            </div>

            <div className="rs-proj-card">
              <div className="rs-proj-top">
                <span className="rp-icon">◈</span>
                <div className="rp-name">realtime-chat</div>
                <span className="rp-live">● live</span>
              </div>
              <div className="rp-stack">
                {['React', 'Socket.IO', 'Redis', 'Node.js', 'MongoDB'].map(t => (
                  <span className="rp-tag" key={t}>{t}</span>
                ))}
              </div>
              <div className="rp-desc">
                Scalable chat with rooms, file sharing, online indicators. Redis-backed for <span className="hi">&lt;50ms</span> delivery at 2,000 concurrent users.
              </div>
            </div>

            <div className="rs-proj-card">
              <div className="rs-proj-top">
                <span className="rp-icon">◈</span>
                <div className="rp-name">saas-dashboard</div>
                <span className="rp-live">● live</span>
              </div>
              <div className="rp-stack">
                {['React', 'Redux', 'D3.js', 'Node.js', 'RBAC'].map(t => (
                  <span className="rp-tag" key={t}>{t}</span>
                ))}
              </div>
              <div className="rp-desc">
                Multi-workspace Kanban with drag-and-drop, RBAC, analytics charts, and Slack integration — <span className="hi">500+ active teams</span>.
              </div>
            </div>

          </div>
        </div>

        {/* Education */}
        <div className="rs-section">
          <div className="rs-sec-label">education</div>
          <div className="rs-file-block">
            <div className="rs-file-header">
              <span className="fname">education</span>
              <span className="fext">.json</span>
            </div>
            <div className="rs-file-body">
              <div className="rs-edu-row">
                <div>
                  <div className="rs-edu-degree">Bachelor of Computer Applications</div>
                  <div className="rs-edu-inst">Bharathidasan University, Tiruchirappalli
</div>
                </div>
               </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="rs-section">
          <div className="rs-sec-label">certifications</div>
          <div className="rs-file-block">
            <div className="rs-file-header">
              <span className="fname">certs</span>
              <span className="fext">.md</span>
            </div>
            <div className="rs-file-body">
              {[
                'MERN Stack Developer Certification — Mango Db Training Program, Chennai (2026)',
                'MongoDB for JS Developers — MongoDB Academy (2025)',
                'React — The Complete Guide — Udemy (Maximilian Schwarzmuller)',
                'AWS Cloud Practitioner Essentials — AWS Training',
              ].map((cert, i) => (
                <div className="rs-cert-row" key={i}>
                  <span className="cert-bullet">▸</span>
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="rs-section">
          <div className="rs-sec-label">additional info</div>
          <div className="rs-info-grid">
            <div className="rs-info-card">
              <div className="rs-info-label">languages</div>
              <div className="rs-info-val">English (Professional)<br />Tamil (Native)</div>
            </div>
          <div className="rs-info-card">
  <div className="rs-info-label">runtime.environment</div>
  <div className="rs-info-val">
    Chennai 🇮🇳<br />
    Relocation Enabled
  </div>
</div>
            <div className="rs-info-card">
              <div className="rs-info-label">availability</div>
              <div className="rs-info-val">
                <span className="avail-dot">●</span>deployment_status : available_in_30_days
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="rs-footer">
          <span>© 2026 Rajesh ·   MERN Full Stack Developer</span>
          <span className="rs-footer-ver">resume v2.0.0</span>
        </div>

      </div>
    </div>
  );
}

export default Resume;