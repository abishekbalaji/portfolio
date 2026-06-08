import { marquee } from '../data'
import { Plus } from './Icons'

export default function Marquee() {
  // Repeat the list so the scroll loop is seamless.
  const items = [...marquee, ...marquee, ...marquee, ...marquee]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {items.map((word, i) => (
          <span className="marquee__item" key={i}>
            <Plus size={22} />
            <span>{word}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
