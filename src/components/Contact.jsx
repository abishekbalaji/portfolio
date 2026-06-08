import { profile } from '../data'
import { Star } from './Icons'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact__glow" />
      <div className="container contact__inner">
        <Star className="contact__star" size={36} />
        <h2 className="contact__title">LET'S TALK</h2>
        <a href={`mailto:${profile.email}`} className="contact__email">
          {profile.email}
        </a>
        <div className="contact__row">
          <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
          <span className="contact__sep" />
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <span className="contact__sep" />
          <a href={profile.socials.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
