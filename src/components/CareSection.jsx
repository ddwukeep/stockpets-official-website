import tslaCarePet from '../assets/tsla-care-pet.png'

const actions = [
  {
    name: 'Feed',
    description: 'Keep your StockPet healthy and full of energy.',
    icon: <><path d="M5 11h14l-1.2 5.2A3.6 3.6 0 0 1 14.3 19H9.7a3.6 3.6 0 0 1-3.5-2.8L5 11Z"/><path d="M8 8c0-1.7 1.3-3 3-3M13 8c0-1.7 1.3-3 3-3"/></>,
  },
  {
    name: 'Play',
    description: 'Have fun together and boost its mood.',
    icon: <><circle cx="12" cy="12" r="7"/><path d="m8.5 9 7 6M15.5 9l-7 6"/></>,
  },
  {
    name: 'Bond',
    description: 'Spend time, build trust, and unlock new moments.',
    icon: <path d="M12 19s-7-4.4-7-9a3.7 3.7 0 0 1 6.8-2 3.7 3.7 0 0 1 7.2 2c0 4.6-7 9-7 9Z"/>,
  },
  {
    name: 'Grow',
    description: 'A happier StockPet grows stronger over time.',
    icon: <><path d="M12 20V9"/><path d="M12 12C7 12 5 9.5 5 6c4.6 0 7 2 7 6ZM12 15c4.7 0 7-2.3 7-6-4.5 0-7 2.2-7 6Z"/></>,
  },
]

export default function CareSection() {
  return (
    <section className="care-section" aria-labelledby="care-title">
      <span className="care-watermark" aria-hidden="true">TSLA</span>
      <div className="care-inner">
        <div className="care-scene">
          <div className="care-pet-column">
            <p className="care-note">A happy StockPet<br/>makes a brighter you.</p>
            <div className="care-pet">
              <div className="care-halo" aria-hidden="true"/>
              <img src={tslaCarePet} alt="TSLA StockPet relaxing at home"/>
              <span className="care-bowl" aria-hidden="true"><i/><b>TSLA</b></span>
              <span className="care-toy" aria-hidden="true"><i/><i/><i/></span>
            </div>
          </div>

          <div className="care-content">
            <header className="care-heading">
              <span>How to play</span>
              <h2 id="care-title">Care for your <em>StockPet</em></h2>
              <p>Simple daily actions. A happier StockPet.<br/>Grow together, step by step.</p>
            </header>
            <div className="care-actions">
              {actions.map(({ name, description, icon }, index) => (
                <article className="care-action" key={name}>
                  <span className="care-action-number">0{index + 1}</span>
                  <svg viewBox="0 0 24 24" aria-hidden="true">{icon}</svg>
                  <div><h3>{name}</h3><p>{description}</p></div>
                </article>
              ))}
            </div>
          </div>
        </div>
        <footer className="care-closing">
          <strong>Raise <i>·</i> Bond <i>·</i> Evolve</strong>
          <span>More happy days together.</span>
        </footer>
      </div>
    </section>
  )
}
