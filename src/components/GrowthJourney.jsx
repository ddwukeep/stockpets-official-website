import nvdaEgg from '../assets/nvda-egg-v2.png'
import nvdaBaby from '../assets/nvda-baby-v2.png'
import nvdaGrowing from '../assets/nvda-growing-v2.png'
import nvdaEvolved from '../assets/nvda-evolved-v2.png'
import aaplPet from '../assets/aapl-pet-v2.png'
import msftPet from '../assets/msft-pet-v2.png'
import amznPet from '../assets/amzn-pet-v2.png'
import googlPet from '../assets/googl-pet-v2.png'

const stages = [
  { name: 'Egg', image: nvdaEgg },
  { name: 'Baby', image: nvdaBaby },
  { name: 'Growing', image: nvdaGrowing },
  { name: 'Evolved', image: nvdaEvolved },
]

const moreStockPets = [
  { name: 'AAPL', image: aaplPet },
  { name: 'MSFT', image: msftPet },
  { name: 'AMZN', image: amznPet },
  { name: 'GOOGL', image: googlPet },
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

        <div className="growth-row-separator" role="separator">
          <span>More StockPets. A bigger future.</span>
        </div>

        <div className="evolution-track evolution-track-more">
          {moreStockPets.map((pet) => (
            <article className="evolution-stage" key={pet.name}>
              <img src={pet.image} alt={`${pet.name} StockPet`} />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
