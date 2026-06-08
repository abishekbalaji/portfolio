import { awards } from '../data'

export default function Awards() {
  return (
    <section className="awards">
      <div className="container">
        <div className="section-label">
          <span className="dot" /> Recognition
        </div>
        <h2 className="section-heading">Awards &amp; Recognitions</h2>

        <div className="awards__grid">
          {awards.map((a) => (
            <div className="award" key={a.title}>
              <span className="award__year">{a.year}</span>
              <div className="award__body">
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
