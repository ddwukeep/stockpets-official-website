import { useEffect, useState } from 'react'
import nvdaPet from '../assets/nvda-pet.png'
import aaplPet from '../assets/aapl-pet.png'
import tslaPet from '../assets/tsla-pet.png'

const StatBar = ({ label, value }) => <div className="dash-stat"><div><span>{label}</span><b>{value}%</b></div><div className="dash-stat-track"><i style={{ width: `${value}%` }}/></div></div>

function MyPetCard({ fullness, happiness, energy, xp, onFeed }) {
  return <article className="dash-card my-pet-card"><header><span>My pet</span><small>#001</small></header><div className="dash-pet-id"><div><strong>NVDA</strong><small>NVIDIA</small></div><b>LV.3</b></div><img src={nvdaPet} alt="NVDA StockPet"/><div className="dash-xp"><span>{xp} / 500 EXP</span><div><i style={{ width: `${xp / 5}%` }}/></div></div><div className="dash-stats"><StatBar label="Happiness" value={happiness}/><StatBar label="Energy" value={energy}/><StatBar label="Fullness" value={fullness}/></div><button className="gold-action" type="button" onClick={onFeed}><span>●</span> Feed</button></article>
}

function PetStage({ onAction, feedback }) {
  return <section className="pet-stage" aria-label="NVDA pet interaction area"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="dash-sparks" aria-hidden="true">{Array.from({ length: 12 }, (_, index) => <i key={index}/>)}</div><div className="pet-speech">To the moon!<span/></div><div className="stage-glow"/><div className="stage-platform"><i/></div><img src={nvdaPet} alt="NVDA StockPet on a glowing platform"/>{feedback && <div className="action-feedback" key={feedback}>{feedback}</div>}<div className="stage-actions"><button type="button" onClick={() => onAction('play')}><b>▶</b><span>Play</span></button><button type="button" onClick={() => onAction('clean')}><b>✦</b><span>Clean</span></button><button type="button" onClick={() => onAction('photo')}><b>▣</b><span>Photo</span></button></div></section>
}

function MarketDataCard() {
  return <article className="dash-card market-card"><header><div><strong>NVDA</strong><small>NVIDIA</small></div><span className="market-chip">N</span></header><div className="dash-price"><strong>$142.36</strong><span>+3.21%</span></div><div className="chart-wrap"><svg viewBox="0 0 360 130" preserveAspectRatio="none" aria-label="Upward NVDA market chart"><defs><linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#79db52" stopOpacity=".3"/><stop offset="1" stopColor="#79db52" stopOpacity="0"/></linearGradient></defs><path className="chart-area" d="M0 112 30 99 57 104 88 75 114 86 143 64 169 71 198 40 226 55 253 31 281 38 310 15 338 23 360 4V130H0Z"/><path className="chart-line" d="M0 112 30 99 57 104 88 75 114 86 143 64 169 71 198 40 226 55 253 31 281 38 310 15 338 23 360 4"/></svg></div><div className="time-filters">{['1D','1W','1M','3M','1Y','ALL'].map(time => <button className={time === '1D' ? 'active' : ''} type="button" key={time}>{time}</button>)}</div><dl className="market-metrics"><div><dt>Market Cap</dt><dd>3.49T</dd></div><div><dt>Volume</dt><dd>218.4M</dd></div><div><dt>P/E Ratio</dt><dd>66.2</dd></div><div><dt>52W High</dt><dd>153.13</dd></div><div><dt>52W Low</dt><dd>39.23</dd></div></dl><button className="stockdex-link" type="button">View on Stockdex <span>→</span></button><p>Same stocks. Different life.</p></article>
}

const collected = [
  { ticker: 'NVDA', name: 'NVIDIA', rarity: 'Rare', image: nvdaPet, active: true },
  { ticker: 'AAPL', name: 'APPLE', rarity: 'Uncommon', image: aaplPet },
  { ticker: 'TSLA', name: 'TESLA', rarity: 'Rare', image: tslaPet },
]
const locked = ['AMZN', 'MSFT', 'GOOGL', 'META', 'BTC']

function StockDex() {
  return <section className="stockdex" id="about"><div className="stockdex-heading"><div><span>Stockdex</span><h3>Collect more StockPets</h3></div><div className="collection-progress"><b>3 <i>/ 100</i></b><span>Collected</span></div></div><div className="dex-grid">{collected.map(pet => <article className={`dex-card ${pet.active ? 'selected' : ''}`} key={pet.ticker}><div className="dex-image"><img src={pet.image} alt={`${pet.ticker} StockPet`}/>{pet.active && <span>Active</span>}</div><div className="dex-meta"><div><strong>{pet.ticker}</strong><small>{pet.name}</small></div><em>{pet.rarity}</em></div></article>)}{locked.map(ticker => <article className="dex-card locked" key={ticker}><div className="dex-image"><div className="pet-silhouette"><i/><b>?</b></div><span className="lock-icon">▣</span></div><div className="dex-meta"><div><strong>{ticker}</strong><small>Locked</small></div><em>Discover</em></div></article>)}</div></section>
}

export default function PetDashboard() {
  const [stats, setStats] = useState({ fullness: 90, happiness: 80, energy: 60, xp: 320 })
  const [feedback, setFeedback] = useState('')
  useEffect(() => { if (!feedback) return undefined; const timer = window.setTimeout(() => setFeedback(''), 1500); return () => window.clearTimeout(timer) }, [feedback])
  const feed = () => { setStats(current => ({ ...current, fullness: Math.min(100, current.fullness + 5), xp: Math.min(500, current.xp + 10) })); setFeedback('Yum! +10 EXP') }
  const action = type => {
    if (type === 'play') { setStats(current => ({ ...current, happiness: Math.min(100, current.happiness + 8) })); setFeedback('Happiness up!') }
    if (type === 'clean') setFeedback('Fresh & clean!')
    if (type === 'photo') setFeedback('Photo ready!')
  }
  return <main className="pet-dashboard" id="how"><div className="dashboard-inner"><header className="dashboard-intro"><span>My StockPet</span><h2>Raise. Collect. Grow.</h2><p>Your stock is alive. Take care of it and watch it grow.</p></header><div className="dashboard-grid"><MyPetCard {...stats} onFeed={feed}/><PetStage onAction={action} feedback={feedback}/><MarketDataCard/></div><StockDex/></div></main>
}
