import nvdaEgg from '../assets/nvda-egg-v2.png'
import nvdaBaby from '../assets/nvda-baby-v2.png'
import nvdaGrowing from '../assets/nvda-growing-v2.png'
import nvdaEvolved from '../assets/nvda-evolved-v2.png'

const stages = [
  { name: 'Egg', image: nvdaEgg },
  { name: 'Baby', image: nvdaBaby },
  { name: 'Growing', image: nvdaGrowing },
  { name: 'Evolved', image: nvdaEvolved },
]

export default function GrowthJourney() {
  return (
    <section className="growth-journey" aria-labelledby="growth-title">
      <div className="growth-inner">
        <header className="growth-header">
          <span>The evolution journey</span>
          <h2 id="growth-title">How StockPets Grow</h2>
          <p>Every StockPet starts small. Raise it, bond with it, and watch it evolve.</p>
        </header>

        <div className="evolution-track">
          {stages.map((stage) => (
            <article className="evolution-stage" key={stage.name}>
              <img
                src={stage.image}
                alt={`NVDA StockPet ${stage.name.toLowerCase()} evolution stage`}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
