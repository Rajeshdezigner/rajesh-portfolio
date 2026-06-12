import { useEffect, useRef } from 'react'

const SKILLS = [
  { name: 'React.js',   level: 95, cat: 'frontend' },
  { name: 'Node.js',    level: 93, cat: 'backend'  },
  { name: 'Express.js', level: 92, cat: 'backend'  },
  { name: 'MongoDB',    level: 90, cat: 'database' },
  { name: 'Redux',      level: 88, cat: 'frontend' },
   { name: 'Next.js',    level: 80, cat: 'frontend' },
  { name: 'REST API',   level: 97, cat: 'backend'  },
  { name: 'GraphQL',    level: 72, cat: 'backend'  },
  { name: 'Redis',      level: 75, cat: 'database' },
  { name: 'Docker',     level: 70, cat: 'devops'   },
  { name: 'AWS',        level: 65, cat: 'devops'   },
]

function Skills() {
  const gridRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.skill-fill').forEach(bar => {
            setTimeout(() => bar.classList.add('loaded'), 100)
          })
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.2 }
    )
    if (gridRef.current) observer.observe(gridRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="skills-grid" ref={gridRef}>
      {SKILLS.map(skill => (
        <div className="skill-item" key={skill.name}>
          <div className="skill-name-row">
            <span className="skill-name">{skill.name}</span>
            <span className="skill-pct">{skill.level}%</span>
          </div>
          <div className="skill-bar">
            <div className="skill-fill" style={{ '--w': `${skill.level}%` }} />
          </div>
          <div className="skill-cat">{skill.cat}</div>
        </div>
      ))}
    </div>
  )
}

export default Skills
