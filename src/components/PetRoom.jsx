import Pet from './Pet.jsx'

export default function PetRoom({ pet, reaction, levelUp, onPet }) {
  return <div className="room"><div className="amber-haze"/><div className="spark-field" aria-hidden="true"><i/><i/><i/><i/><i/><i/><i/></div><div className="room-glow"/>
    <button className="pet-button" type="button" onClick={onPet} aria-label="Pet your NVDA companion"><Pet reaction={reaction}/></button>
    {levelUp && <div className="level-up">Level up!<small>{pet.stage}</small></div>}
  </div>
}
