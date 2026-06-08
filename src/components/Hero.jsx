import { profile } from '../data'
import { Star, ArrowUpRight } from './Icons'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__glow hero__glow--1" />
      <div className="hero__dots" aria-hidden="true" />
      <Star className="hero__star" size={42} />

      <div className="container hero__inner">
        <p className="hero__greeting">{profile.greeting}</p>

        <h1 className="hero__title">
          <span>{profile.tagline[0]}</span>
          <span className="hero__title-row">
            <span className="hero__rings" aria-hidden="true">
              <i />
              <i />
            </span>
            {profile.tagline[1]}
          </span>
        </h1>

        <p className="hero__intro">{profile.intro}</p>

        <div className="hero__actions">
          <a href="#contact" className="btn btn--solid">
            Let's Talk <ArrowUpRight />
          </a>
          <a href="#work" className="btn btn--ghost">
            View Work
          </a>
        </div>
      </div>
    </section>
  )
}
