import { useState, useEffect } from 'react'

function useCounter(target, duration = 1200, suffix = '') {
  const [count, setCount] = useState('0' + suffix)
  useEffect(() => {
    let start = 0
    const step = target / 60
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        start = target
        clearInterval(timer)
      }
      setCount(Math.floor(start) + suffix)
    }, duration / 60)
    return () => clearInterval(timer)
  }, [target, duration, suffix])
  return count
}

function Hero({ scrollTo }) {
  const yrs = useCounter(5, 1200, '+')
  const proj = useCounter(20, 1200, '+')
  const users = useCounter(50, 1400, 'k+')
  const commits = useCounter(847, 1600, '')

  return (
    <div className="hero-render">
      <div className="hero-prompt">~/portfolio — node index.js</div>
      <div className="hero-name">
        <span className="r-letter">R</span>AJESH<span className="cursor" />
      </div>
      <div className="hero-role">
        <span className="highlight">const</span> role ={' '}
        <span style={{ color: 'var(--purple)' }}>"MERN Full Stack Developer"</span>
      </div>
      <div className="hero-desc">
        Building high-performance web applications with React, Node.js, MongoDB &amp; Express.
        5+ years shipping products that scale to real users.
      </div>
      <div className="hero-stats">
        <div className="hstat"><span className="hstat-num">{yrs}</span><span className="hstat-label">years experience</span></div>
        <div className="hstat"><span className="hstat-num">{proj}</span><span className="hstat-label">projects shipped</span></div>
        <div className="hstat"><span className="hstat-num">{users}</span><span className="hstat-label">users served</span></div>
        <div className="hstat"><span className="hstat-num">{commits}</span><span className="hstat-label">commits this year</span></div>
      </div>
      <div className="hero-btns">
        <button className="btn-primary" onClick={() => scrollTo('proj-section')}>view_projects()</button>
        <button className="btn-ghost" onClick={() => scrollTo('contact-section')}>hire_me()</button>
      </div>
    </div>
  )
}

export default Hero
