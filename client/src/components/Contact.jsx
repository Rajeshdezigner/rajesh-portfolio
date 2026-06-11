import { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'sending' | 'success' | 'error'
  const [statusMsg, setStatusMsg] = useState('')

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async () => {
    const { name, email, message } = form

    if (!name || !email || !message) {
      setStatus('error')
      setStatusMsg('// Error: all fields are required')
      return
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setStatus('error')
      setStatusMsg('// Error: invalid email address')
      return
    }

    setStatus('sending')
    setStatusMsg('// dispatching message...')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })
      const data = await res.json()

      if (data.success) {
        setStatus('success')
        setStatusMsg('✓ Message delivered! I\'ll reply within 24 hours.')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
        setStatusMsg(`// Error: ${data.error || 'Something went wrong'}`)
      }
    } catch {
      setStatus('error')
      setStatusMsg('// Send failed — please email me directly at rajeshmerndev@gmail.com')
    }
  }

  return (
    <div className="contact-wrap">
      <div className="contact-info">
        <div className="avail-badge">
          <span className="avail-dot" />
          Open to Work — Immediate Join
        </div>
        <div style={{ height: 8 }} />
        <div className="c-row"><span className="c-label">email</span><span className="c-val"><a href="mailto:rajeshmerndev@gmail.com">rajeshmerndev@gmail.com</a></span></div>
        <div className="c-row"><span className="c-label">phone</span><span className="c-val"><a href="tel:+919626231757" style={{ color: 'var(--text)', textDecoration: 'none' }}>+91 96262 31757</a></span></div>
        <div className="c-row"><span className="c-label">location</span><span className="c-val">Chennai, Tamil Nadu, India</span></div>
        <div className="c-row"><span className="c-label">github</span><span className="c-val"><a href="https://github.com/rajesh-merndev" target="_blank" rel="noopener">github.com/rajesh-merndev</a></span></div>
        <div className="c-row"><span className="c-label">linkedin</span><span className="c-val"><a href="https://linkedin.com/in/rajesh-mern" target="_blank" rel="noopener">linkedin.com/in/rajesh-mern</a></span></div>
        {/* <div className="c-row"><span className="c-label">portfolio</span><span className="c-val"><a href="https://rajeshdev.netlify.app" target="_blank" rel="noopener">rajeshdev.netlify.app</a></span></div> */}
      </div>

      <div className="contact-form">
        <div className="cf-field">
          <label className="cf-label">// name</label>
          <input
            className="cf-input"
            name="name"
            type="text"
            placeholder="your_name"
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div className="cf-field">
          <label className="cf-label">// email</label>
          <input
            className="cf-input"
            name="email"
            type="email"
            placeholder="your@email.com"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div className="cf-field">
          <label className="cf-label">// message</label>
          <textarea
            className="cf-input"
            name="message"
            rows={4}
            placeholder="Let's build something together..."
            value={form.message}
            onChange={handleChange}
          />
        </div>
        <button
          className="cf-btn"
          onClick={handleSubmit}
          disabled={status === 'sending'}
        >
          {status === 'sending' ? 'sending...' : status === 'success' ? '✓ message_sent()' : 'sendMessage()'}
        </button>
        {status && (
          <div className={`cf-status ${status}`}>{statusMsg}</div>
        )}
      </div>
    </div>
  )
}

export default Contact
