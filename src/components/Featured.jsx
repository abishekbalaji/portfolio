import { featured } from '../data'
import { ArrowUpRight } from './Icons'

export default function Featured() {
  return (
    <section className="featured">
      <div className="container">
        <div className="section-label">
          <span className="dot" /> More Work
        </div>
        <h2 className="section-heading">Featured Projects</h2>

        <div className="featured__grid">
          {featured.map((f) => (
            <a key={f.title} href={f.url} target="_blank" rel="noreferrer" className="card-feature">
              <div className="card-feature__top">
                <span className="card-feature__tag">{f.tag}</span>
                <span className="card-feature__arrow">
                  <ArrowUpRight size={18} />
                </span>
              </div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
