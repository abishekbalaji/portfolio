import { profile, nav } from '../data'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__col">
            <h4>About</h4>
            <p>{profile.role} crafting fast, scalable and secure web applications.</p>
            <p className="footer__muted">{profile.location}</p>
          </div>

          <div className="footer__col">
            <h4>Navigation</h4>
            <ul>
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href}>{n.label}</a>
                </li>
              ))}
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Connect</h4>
            <ul>
              <li>
                <a href={profile.socials.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={profile.socials.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a href={profile.socials.website} target="_blank" rel="noreferrer">
                  Website
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Get in touch</h4>
            <a className="footer__email" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <p className="footer__muted">{profile.phone}</p>
          </div>
        </div>

        <div className="footer__bignamewrap">
          <h2 className="footer__bigname">ABISHEK</h2>
        </div>

        <div className="footer__bottom">
          <span>© {year} {profile.name}. All rights reserved.</span>
          <span>Built with React.</span>
        </div>
      </div>
    </footer>
  )
}
