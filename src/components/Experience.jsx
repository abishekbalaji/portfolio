import { useState } from 'react'
import { experience } from '../data'

export default function Experience() {
  const [active, setActive] = useState(0)
  const item = experience[active]

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-label">
          <span className="dot" /> Career
        </div>
        <h2 className="section-heading">Professional Experience</h2>

        <div className="experience__grid">
          <div className="experience__list">
            {experience.map((e, i) => (
              <button
                key={e.company}
                className={`experience__tab ${active === i ? 'is-active' : ''}`}
                onClick={() => setActive(i)}
              >
                <span>{e.company}</span>
                <small>{e.period}</small>
              </button>
            ))}
          </div>

          <div className="experience__panel">
            <span className="experience__period">{item.period}</span>
            <h3 className="experience__role">{item.role}</h3>
            <p className="experience__company">{item.company}</p>
            <ul className="experience__points">
              {item.points.map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
