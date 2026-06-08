import { projects } from '../data'
import { Star, ArrowUpRight } from './Icons'

export default function Portfolio() {
  return (
    <section id="work" className="portfolio">
      <div className="container">
        <div className="portfolio__head">
          <h2 className="portfolio__title">
            PORTFOLIO <Star className="portfolio__star" size={40} />
          </h2>
        </div>

        <div className="portfolio__grid">
          {projects.map((p, i) => (
            <a
              key={p.title}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className={`card-project card-project--${i % 3 === 0 ? 'tall' : 'reg'} accent-${p.accent} ${p.image ? 'has-image' : ''}`}
            >
              <div className="card-project__thumb">
                {p.image && (
                  <img
                    className="card-project__img"
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    onError={(e) => {
                      // No file dropped in yet — reveal the gradient fallback.
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                )}
                <span className="card-project__badge">{p.category}</span>
                <span className="card-project__arrow">
                  <ArrowUpRight size={20} />
                </span>
              </div>
              <div className="card-project__meta">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
