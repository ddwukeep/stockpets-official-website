import nvdaPetHero from '../nvda-pet-hero.png.png'

export default function Pet({ reaction }) {
  return <div className={`pet-wrap nvda-pet ${reaction ? 'pet-tapped' : ''}`}>
    <img className="pet" src={nvdaPetHero} alt="NVDA StockPet sitting in a glowing eggshell on its platform" draggable="false"/>
    {reaction && <div className="pet-love" key={reaction.id}><span>♥</span><i>✦</i></div>}
  </div>
}
