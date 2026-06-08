import { about, stats, profile } from '../data'
import { Star } from './Icons'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about__inner">
        <div className="section-label">
          <span className="dot" /> About Me
        </div>

        <h2 className="about__heading">
          {about.heading[0]} <br />
          <span className="accent-text">{about.heading[1]}</span>
          <Star className="about__star" size={34} />
        </h2>

        <div className="about__grid">
          <div className="about__photo">
            <div className="about__photo-inner">
              {/* Drop your own photo at /public/profile.jpg to replace this avatar */}
              <span className="about__monogram">AB</span>
            </div>
          </div>

          <div className="about__copy">
            {about.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            <div className="about__stats">
              {stats.map((s) => (
                <div key={s.label} className="stat">
                  <div className="stat__value">{s.value}</div>
                  <div className="stat__label">{s.label}</div>
                </div>
              ))}
            </div>

            <a href={profile.socials.github} target="_blank" rel="noreferrer" className="about__link">
              See my GitHub →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
