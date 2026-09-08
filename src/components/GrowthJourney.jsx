import nvdaEgg from '../assets/nvda-egg.png'
import nvdaBaby from '../assets/nvda-baby.png'
import nvdaGrowing from '../assets/nvda-growing.png'
import nvdaEvolved from '../assets/nvda-evolved.png'

const stages = [
  { name: 'Egg', copy: 'A new beginning.', image: nvdaEgg },
  { name: 'Baby', copy: 'Small steps. Big possibilities.', image: nvdaBaby },
  { name: 'Growing', copy: 'Getting stronger every day.', image: nvdaGrowing },
  { name: 'Evolved', copy: 'Stronger. Smarter. Brighter future.', image: nvdaEvolved },
]

export default function GrowthJourney() {
  return <section className="growth-journey" aria-labelledby="growth-title"><div className="growth-atmosphere" aria-hidden="true"><i/><i/><i/><i/><i/><i/><i/><i/></div><div className="growth-inner"><header className="growth-header"><span>The evolution journey</span><h2 id="growth-title">How StockPets Grow</h2><p>Every StockPet starts small. Raise it, bond with it, and watch it evolve.</p></header><div className="evolution-track">{stages.map((stage, index) => <article className={`evolution-stage evolution-stage-${index + 1}`} key={stage.name}><div className="stage-number">Stage {index + 1}</div><div className="evolution-art"><div className="art-orbit" aria-hidden="true"/><img src={stage.image} alt={`NVDA StockPet ${stage.name.toLowerCase()} evolution stage`}/></div><div className="evolution-copy"><h3>{stage.name}</h3><p>{stage.copy}</p></div>{index < stages.length - 1 && <div className="evolution-connector" aria-hidden="true"><span>→</span></div>}</article>)}</div><footer className="growth-closing"><div aria-hidden="true"/><strong>Raise. Bond. Evolve.</strong><p>The market moves. Your StockPet grows with you.</p></footer></div></section>
}
