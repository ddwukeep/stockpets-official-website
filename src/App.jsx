import Header from './components/Header.jsx'
import PetRoom from './components/PetRoom.jsx'
import PetControls from './components/PetControls.jsx'
import PetStats from './components/PetStats.jsx'
import GrowthStages from './components/GrowthStages.jsx'
import MarketMood from './components/MarketMood.jsx'
import { usePetState } from './hooks/usePetState.js'

export default function App() {
  const { pet, reaction, levelUp, cooldowns, away, interact } = usePetState()
  return <><div className="top-shell" id="home"><Header/><main className="hero"><section className="intro"><span className="eyebrow">Your little market companion</span><h1>Raise your<br/><em>little market</em><br/>companion.</h1><p>Feed it. Play with it.<br/>Watch it grow with the market.</p><div className="intro-mood"><span>Market mood</span><b><i/> Sunny &amp; steady</b></div></section><section className="pet-zone" id="pet">{away && <div className="welcome-back">Someone has been waiting for you.</div>}<PetRoom pet={pet} reaction={reaction} levelUp={levelUp}/><PetControls onAction={interact} cooldowns={cooldowns}/></section><PetStats pet={pet}/></main><a className="scroll-cue" href="#how">See how we grow <span>↓</span></a></div>
    <main className="second-screen"><GrowthStages current={pet.stage}/><MarketMood/><section className="story" id="about"><span>03 / Our little story</span><h2>The market moves.<br/>Your friend stays.</h2><p>StockPets turns the ups, downs, and in-betweens into a small world you can care for—one happy tap at a time.</p><div className="story-loop">Adopt <i>→</i> care <i>→</i> grow <i>→</i> return</div></section></main><footer><a className="brand" href="#home">StockPets</a><p>Small paws. Long horizons.</p><span>Made for good days &amp; wobbly ones.</span></footer></>
}
