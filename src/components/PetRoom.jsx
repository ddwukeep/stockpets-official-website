import Pet from './Pet.jsx'

export default function PetRoom({ pet, reaction, levelUp }) {
  return <div className="room"><div className="window"><span>today</span><div className="sun"/><svg viewBox="0 0 100 32" aria-hidden="true"><path d="M2 27 18 22 31 25 47 13 60 18 76 8 98 3"/></svg></div><div className="shelf"><i/><i/></div><div className="room-glow"/>
    <Pet stage={pet.stage} reaction={reaction}/>
    <div className="bowl"><span>SP</span></div><div className="ball">✦</div>
    {levelUp && <div className="level-up">Level up!<small>{pet.stage}</small></div>}
  </div>
}
