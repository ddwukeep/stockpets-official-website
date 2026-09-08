import Header from './components/Header.jsx'
import PetRoom from './components/PetRoom.jsx'
import PetDashboard from './components/PetDashboard.jsx'
import GrowthJourney from './components/GrowthJourney.jsx'
import CareSection from './components/CareSection.jsx'
import { usePetState } from './hooks/usePetState.js'

export default function App() {
  const { pet, reaction, levelUp, away, interact } = usePetState()
  return <><div className="top-shell nvda-hero" id="home"><Header/><main className="hero"><section className="intro"><span className="eyebrow">Hatch success!</span><h1>Meet your<br/><em>NVDA pet!</em></h1><p>Same stocks.<br/>Different life.</p><div className="hero-note">Good stocks.<br/>Brighter days.</div></section><section className="pet-zone" id="pet">{away && <div className="welcome-back">Your NVDA pet missed you.</div>}<PetRoom pet={pet} reaction={reaction} levelUp={levelUp} onPet={() => interact('pet')}/><button className="raise-cta" type="button" onClick={() => interact('pet')}>Start raising <span>→</span></button><p className="cta-caption">A new kind of market culture.</p></section><aside className="nvda-card"><div className="stock-title"><div className="nvda-mark">N</div><div><strong>NVDA</strong><small>NVIDIA</small></div></div><div className="stock-price"><strong>$142.36</strong><span>+3.21%</span></div><svg viewBox="0 0 180 45" aria-hidden="true"><path d="M2 39 19 30 35 32 50 20 66 24 84 12 100 16 116 7 132 10 151 2 178 5"/></svg><dl><div><dt>Species</dt><dd>Chipling</dd></div><div><dt>Rarity</dt><dd>Common</dd></div><div><dt>Mood</dt><dd>Curious</dd></div><div><dt>Pet level</dt><dd>Lv. 3</dd></div><div><dt>Growth</dt><dd>60%</dd></div><div><dt>Energy</dt><dd>80%</dd></div><div><dt>Affection</dt><dd>90%</dd></div><div><dt>Market mood</dt><dd className="positive">Bullish</dd></div><div><dt>24h change</dt><dd className="positive">+3.21%</dd></div></dl></aside></main><a className="scroll-cue" href="#how" aria-label="Scroll to learn more"><span>⌄</span></a></div>
    <PetDashboard/><GrowthJourney/><CareSection/><footer><a className="brand" href="#home">StockPets</a><p>Small paws. Long horizons.</p><span>Made for good days &amp; wobbly ones.</span></footer></>
}
