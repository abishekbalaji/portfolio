import { useState } from 'react'
import { expertise } from '../data'
import { Plus } from './Icons'

export default function Expertise() {
  const [active, setActive] = useState(0)

  return (
    <section className="expertise">
      <div className="container">
        <div className="section-label">
          <span className="dot" /> Services
        </div>
        <h2 className="section-heading">Expertise Solutions</h2>

        <div className="accordion">
          {expertise.map((item, i) => {
            const open = active === i
            return (
              <div
                key={item.no}
                className={`accordion__item ${open ? 'is-open' : ''}`}
                onClick={() => setActive(open ? -1 : i)}
              >
                <div className="accordion__head">
                  <span className="accordion__no">{item.no}</span>
                  <h3 className="accordion__title">{item.title}</h3>
                  <span className="accordion__icon">
                    <Plus size={20} />
                  </span>
                </div>
                <div className="accordion__body">
                  <div className="accordion__body-inner">
                    <p>{item.desc}</p>
                    <div className="tag-row">
                      {item.tags.map((t) => (
                        <span key={t} className="tag">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
