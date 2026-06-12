import React from 'react';
 
function ReadMe() {
  return (
    <div className="rm-root">

      {/* Title Bar */}
      <div className="rm-titlebar">
        <div className="rm-dot r"></div>
        <div className="rm-dot y"></div>
        <div className="rm-dot g"></div>
        <span className="rm-tabname">
          <span>rajesh</span>/portfolio › README.md
        </span>
      </div>

      {/* Body */}
      <div className="rm-body">

        {/* Prompt */}
        <div className="rm-prompt">
          <span className="user">rajesh</span>
          <span className="at">@</span>
          <span className="dir">dev</span>
          <span className="sym">$</span>
          <span className="cmd">cat README.md</span>
          <span className="cursor"></span>
        </div>

        {/* Header */}
        <div className="rm-h1">
          <span className="accent">Rajesh</span>.
          <span className="rm-h1-sub"> / MERN Full Stack Developer</span>
        </div>
        <div className="rm-tagline">
          Building scalable web applications · Clean APIs · Modern UIs
        </div>

        {/* Badges */}
        <div className="rm-badges">
          <span className="rm-badge b-green">● open-to-work</span>
          <span className="rm-badge b-blue">React · Node.js · MongoDB</span>
          <span className="rm-badge b-amber">5+ yrs experience</span>
          <span className="rm-badge b-purple">Chennai · Remote OK</span>
        </div>

        {/* system.info */}
        <div className="rm-section">
          <div className="rm-sec-label">system.info</div>
          <div className="rm-file-block">
            <div className="rm-file-header">
              <span>📄</span>
              <span className="fname">profile</span>
              <span className="fext">.json</span>
            </div>
            <div className="rm-file-body">
              <span className="punc">{'{'}</span><br />
              &nbsp;&nbsp;<span className="key">"name"</span><span className="punc">:</span>{'         '}
              <span className="str">"Rajesh M"</span><span className="punc">,</span><br />
              &nbsp;&nbsp;<span className="key">"role"</span><span className="punc">:</span>{'         '}
              <span className="str">"MERN Full Stack Developer"</span><span className="punc">,</span><br />
              &nbsp;&nbsp;<span className="key">"experience"</span><span className="punc">:</span>{'   '}
              <span className="str">"5+ Years"</span><span className="punc">,</span><br />
              &nbsp;&nbsp;<span className="key">"location"</span><span className="punc">:</span>{'     '}
              <span className="str">"Chennai, India 🇮🇳"</span><span className="punc">,</span><br />
              &nbsp;&nbsp;<span className="key">"availability"</span><span className="punc">:</span>{' '}
              <span className="str">"30 Days"</span><span className="punc">,</span><br />
              &nbsp;&nbsp;<span className="key">"workMode"</span><span className="punc">:</span>{'     '}
              <span className="punc">['</span>
              <span className="str">"Remote"</span><span className="punc">,</span>{' '}
              <span className="str">"Hybrid"</span><span className="punc">,</span>{' '}
              <span className="str">"On-Site"</span>
              <span className="punc">]</span><br />
              <span className="punc">{'}'}</span>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="rm-section">
          <div className="rm-sec-label">quick stats</div>
          <div className="rm-grid-2">
            <div className="rm-stat-card">
              <div className="stat-key">projects shipped</div>
              <div className="stat-val">10+</div>
              <div className="stat-sub">↑ 2 this year</div>
            </div>
            <div className="rm-stat-card">
              <div className="stat-key">users served</div>
              <div className="stat-val">50k+</div>
              <div className="stat-sub">across all platforms</div>
            </div>
            <div className="rm-stat-card">
              <div className="stat-key">api uptime</div>
              <div className="stat-val">99.9%</div>
              <div className="stat-sub">production grade</div>
            </div>
            <div className="rm-stat-card">
              <div className="stat-key">lighthouse score</div>
              <div className="stat-val">94</div>
              <div className="stat-sub">avg across projects</div>
            </div>
          </div>
        </div>

        {/* Stack Config */}
        <div className="rm-section">
          <div className="rm-sec-label">stack.config</div>
          <div className="rm-file-block">
            <div className="rm-file-header">
              <span>⚙️</span>
              <span className="fname">stack</span>
              <span className="fext">.yaml</span>
            </div>
            <div className="rm-file-body">
              <div className="rm-stack-grid">
                <div className="rm-stack-col">
                  <div className="rm-stack-col-hd">frontend</div>
                  <div className="rm-stack-item">React.js</div>
                  <div className="rm-stack-item">Next.js</div>
                   <div className="rm-stack-item">Redux</div>
                  <div className="rm-stack-item">Tailwind</div>
                </div>
                <div className="rm-stack-col">
                  <div className="rm-stack-col-hd">backend</div>
                  <div className="rm-stack-item">Node.js</div>
                  <div className="rm-stack-item">Express.js</div>
                  <div className="rm-stack-item">GraphQL</div>
                  <div className="rm-stack-item">REST APIs</div>
                 </div>
                <div className="rm-stack-col">
                  <div className="rm-stack-col-hd">database</div>
                  <div className="rm-stack-item">MongoDB</div>
                  <div className="rm-stack-item">Redis</div>
                  <div className="rm-stack-item">MySQL</div>
                  <div className="rm-stack-item">PostgreSQL</div>
                </div>
                <div className="rm-stack-col">
                  <div className="rm-stack-col-hd">devops</div>
                  <div className="rm-stack-item">Docker</div>
                  <div className="rm-stack-item">AWS</div>
                  <div className="rm-stack-item">GitHub CI/CD</div>
                  <div className="rm-stack-item">Vercel</div>
                  <div className="rm-stack-item">Netlify</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Wins */}
        <div className="rm-section">
          <div className="rm-sec-label">key wins</div>
          <div className="rm-file-block">
            <div className="rm-file-header">
              <span>📋</span>
              <span className="fname">wins</span>
              <span className="fext">.log</span>
            </div>
            <div className="rm-file-body">
              <div className="rm-wins">
                <div className="rm-win-row">
                  <span className="tick">✓</span>
                  Page load cut by <span className="hi">&nbsp;42%&nbsp;</span> — React lazy loading + Redis caching
                </div>
                <div className="rm-win-row">
                  <span className="tick">✓</span>
                  Auth for <span className="hi">&nbsp;50,000+ users&nbsp;</span> — JWT + OAuth 2.0 · zero breaches
                </div>
                <div className="rm-win-row">
                  <span className="tick">✓</span>
                  APIs serving <span className="hi">&nbsp;10k concurrent requests&nbsp;</span> at 99.9% uptime
                </div>
                <div className="rm-win-row">
                  <span className="tick">✓</span>
                  Real-time chat at <span className="hi">&nbsp;&lt;50ms latency&nbsp;</span> · 2,000 concurrent users
                </div>
                <div className="rm-win-row">
                  <span className="tick">✓</span>
                  Monolith → microservices · deploy time <span className="hi">&nbsp;2hr → 12min&nbsp;</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="rm-section">
          <div className="rm-sec-label">projects/</div>

          <div className="rm-project-row">
            <span className="rp-icon">◈</span>
            <div className="rp-info">
              <div className="rp-name">Employee Management</div>
              <div className="rp-tags">
                <span className="rp-tag">React</span>
                <span className="rp-tag">Node.js</span>
                <span className="rp-tag">MongoDB</span>
               </div>
            </div>
            <div className="rp-stat">
              5k+ Employees<br />
              <span className="live">● live</span>
            </div>
          </div>

          <div className="rm-project-row">
            <span className="rp-icon">◈</span>
            <div className="rp-info">
              <div className="rp-name">ecommerce-platform</div>
              <div className="rp-tags">
                <span className="rp-tag">Next.js SSR</span>
                <span className="rp-tag">Express</span>
                <span className="rp-tag g">Stripe</span>
                <span className="rp-tag p">+40% perf</span>
              </div>
            </div>
            <div className="rp-stat">
              99.9% uptime<br />
              <span className="live">● live</span>
            </div>
          </div>

          <div className="rm-project-row">
            <span className="rp-icon">◈</span>
            <div className="rp-info">
              <div className="rp-name">realtime-chat</div>
              <div className="rp-tags">
                <span className="rp-tag">Socket.IO</span>
                <span className="rp-tag">Redis</span>
                <span className="rp-tag">JWT</span>
                <span className="rp-tag o">&lt;50ms</span>
              </div>
            </div>
            <div className="rp-stat">
              2k concurrent<br />
              <span className="live">● live</span>
            </div>
          </div>

          <div className="rm-project-row">
            <span className="rp-icon">◈</span>
            <div className="rp-info">
              <div className="rp-name">saas-dashboard</div>
              <div className="rp-tags">
                <span className="rp-tag">D3.js</span>
                <span className="rp-tag">RBAC</span>
                <span className="rp-tag p">Kanban</span>
                <span className="rp-tag">REST</span>
              </div>
            </div>
            <div className="rp-stat">
              500+ teams<br />
              <span className="live">● live</span>
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="rm-section">
          <div className="rm-sec-label">experience.log</div>
          <div className="rm-timeline">
            <div className="rm-tl-item active">
                 <div className="rm-tl-year">2025 – Present</div>
              <div className="rm-tl-role">MERN Stack Developer · Freelance</div>
              <div className="rm-tl-org">4+ client projects</div>
            </div>
            <div className="rm-tl-item">
           
              <div className="rm-tl-year">2024 – Present</div>
              <div className="rm-tl-role">Frontend Developer</div>
              <div className="rm-tl-org">Synthesis Health Soft · Chennai</div>
            </div>
            <div className="rm-tl-item">
              <div className="rm-tl-year"> 2022 –  2024</div>
              <div className="rm-tl-role">UI - Ux Designer</div>
              <div className="rm-tl-org">IO Ready · Malaysia (Remote)</div>
            </div>
            <div className="rm-tl-item">
              <div className="rm-tl-year"> 2021 –  2022</div>
              <div className="rm-tl-role">Web Designer 
</div>
              <div className="rm-tl-org"> Spider Web India . Bangalore (Remote) 
</div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="rm-section">
          <div className="rm-sec-label">contact.config</div>
          <div className="rm-file-block">
            <div className="rm-file-header">
              <span>📡</span>
              <span className="fname">contact</span>
              <span className="fext">.json</span>
            </div>
            <div className="rm-file-body">
              <div className="rm-contact-row">
                <span className="rc-key">"email"</span>
                <span className="rc-val">rajeshmerndev@gmail.com</span>
              </div>
              <div className="rm-contact-row">
                <span className="rc-key">"github"</span>
                <span className="rc-val">github.com/rajesh-merndev</span>
              </div>
              <div className="rm-contact-row">
                <span className="rc-key">"linkedin"</span>
                <span className="rc-val">linkedin.com/in/rajesh-mern</span>
              </div>
            
              <div className="rm-contact-row">
                <span className="rc-key">"phone"</span>
                <span className="rc-val">+91 96262 31757</span>
              </div>
            </div>
          </div>
        </div>

        {/* Deployment Status */}
        <div className="rm-section">
          <div className="rm-sec-label">deployment.status</div>
          <div className="rm-file-block">
            <div className="rm-file-header">
              <span>🚀</span>
              <span className="fname">status</span>
              <span className="fext">.sh</span>
            </div>
            <div className="rm-file-body">
              <span className="cmt"># runtime loop</span><br />
              <span className="kw">while</span>
              <span className="punc"> (</span>
              <span className="var">career</span>
              <span className="punc">.</span>
              <span className="fn">isActive</span>
              <span className="punc">()) {'{'}</span><br />
              &nbsp;&nbsp;<span className="fn">learn</span><span className="punc">();</span>
              &nbsp;&nbsp;<span className="fn">build</span><span className="punc">();</span>
              &nbsp;&nbsp;<span className="fn">improve</span><span className="punc">();</span><br />
              <span className="punc">{'}'}</span><br /><br />
              <span className="cmt">
                Portfolio ............ <span className="grn">LIVE</span>
              </span><br />
              <span className="cmt">
                API .................. <span className="grn">OPERATIONAL</span>
              </span><br />
              <span className="cmt">
                Learning ............. <span className="grn">ACTIVE</span>
              </span><br />
              <span className="cmt">
                Availability ......... <span className="var">30 Days </span>
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="rm-footer">
          <span>© 2026 Rajesh</span>
          <span>Built with React &amp; Node.js · <span className="ver">v5.1.0</span></span>
        </div>

      </div>
    </div>
  );
}

export default ReadMe;