import { useState, useEffect } from 'react'

const COMMANDS = ['cat package.json', 'npm run dev', 'git status', 'node server.js']

function About() {
  const [typedCmd, setTypedCmd] = useState('')
  const [cmdIdx, setCmdIdx] = useState(0)

  useEffect(() => {
    let charIdx = 0
    const cmd = COMMANDS[cmdIdx % COMMANDS.length]
    setTypedCmd('')

    const typeTimer = setInterval(() => {
      charIdx++
      setTypedCmd(cmd.slice(0, charIdx))
      if (charIdx >= cmd.length) {
        clearInterval(typeTimer)
        setTimeout(() => {
          setTypedCmd('')
          setCmdIdx(i => i + 1)
        }, 2000)
      }
    }, 80)

    return () => clearInterval(typeTimer)
  }, [cmdIdx])

  return (
    <div className="terminal">
      <div className="term-titlebar">
        <div className="tdot" style={{ background: '#ff5f57' }} />
        <div className="tdot" style={{ background: '#febc2e' }} />
        <div className="tdot" style={{ background: '#28c840' }} />
        <span className="term-name">rajesh@portfolio:~$</span>
      </div>
      <div className="term-body">
        <div><span className="tprompt">❯ </span><span className="tcmd">whoami</span></div>
        <div><span className="tout">→ </span><span className="tkey">Rajesh</span><span className="tout"> // MERN Full Stack Dev · 5+ yrs · Chennai</span></div>

        <div style={{ marginTop: 6 }}><span className="tprompt">❯ </span><span className="tcmd">cat skills.json</span></div>
        <div><span className="tout">{'{'}</span></div>
        <div><span className="tout">&nbsp;&nbsp;</span><span className="tkey">"frontend"</span><span className="tout">: </span><span className="tval">["React","Next.js","TypeScript","Redux","Tailwind"]</span><span className="tout">,</span></div>
        <div><span className="tout">&nbsp;&nbsp;</span><span className="tkey">"backend"</span><span className="tout">: &nbsp;</span><span className="tval">["Node.js","Express","GraphQL","REST","WebSockets"]</span><span className="tout">,</span></div>
        <div><span className="tout">&nbsp;&nbsp;</span><span className="tkey">"database"</span><span className="tout">: </span><span className="tval">["MongoDB","Redis","MySQL","PostgreSQL"]</span><span className="tout">,</span></div>
        <div><span className="tout">&nbsp;&nbsp;</span><span className="tkey">"devops"</span><span className="tout">: &nbsp;</span><span className="tval">["Docker","AWS","Git","Netlify","Vercel","CI/CD"]</span></div>
        <div><span className="tout">{'}'}</span></div>

        <div style={{ marginTop: 6 }}><span className="tprompt">❯ </span><span className="tcmd">git log --oneline -3</span></div>
        <div><span className="tkey">a7f3c2e</span><span className="tout"> feat: shipped MediCare portal to 5k+ users</span></div>
        <div><span className="tkey">d91b4a0</span><span className="tout"> perf: cut API response time by 42% via Redis</span></div>
        <div><span className="tkey">2f08e1c</span><span className="tout"> feat: real-time chat @ 2k concurrent via Socket.io</span></div>

        <div style={{ marginTop: 6 }}><span className="tprompt">❯ </span><span className="tcmd">node -e "console.log(process.env.AVAILABILITY)"</span></div>
        <div><span className="tok">✓ Open to Senior MERN Roles // Immediate Join</span></div>

        <div style={{ marginTop: 6 }}>
          <span className="tprompt">❯ </span>
          <span className="tcmd">{typedCmd}</span>
          <span className="ttyping" />
        </div>
      </div>
    </div>
  )
}

export default About
