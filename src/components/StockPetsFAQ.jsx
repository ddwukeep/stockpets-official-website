import { useState } from 'react'

const marketSnapshot = [
  ['NVDA', 'NVIDIA', '$142.36', '+3.21%'],
  ['TSLA', 'Tesla', '$248.90', '-1.14%'],
  ['AAPL', 'Apple', '$227.18', '+0.62%'],
  ['MSFT', 'Microsoft', '$415.44', '+0.38%'],
  ['AMZN', 'Amazon', '$186.52', '-0.47%'],
  ['META', 'Meta', '$521.30', '+1.08%'],
  ['GOOGL', 'Alphabet', '$164.72', '-0.22%'],
  ['PLTR', 'Palantir', '$34.16', '+2.76%'],
  ['BTC', 'Bitcoin', '$61,840', '+1.42%'],
  ['ETH', 'Ethereum', '$2,460', '-0.81%'],
]

const faqs = [
  ['What is a StockPet?', 'A StockPet is a virtual pet inspired by a real stock or market asset. You can raise it, care for it, build a bond and watch it grow over time.'],
  ['What does the stock market have to do with my pet?', 'Market activity can influence your StockPet’s mood, reactions and special moments. The market gives it a mood — but your daily interactions give it a life.'],
  ['Does a falling stock hurt my pet?', 'No. StockPets is not designed around “price down = pet gets sick.” Market data is used as a storytelling layer, not a punishment system.'],
  ['Where do memes come in?', 'Markets already create memes, stories and communities. StockPets gives those moments a character. Market events can become reactions, memories and community-created culture around each pet.'],
  ['How much time do I need every day?', 'Just a few minutes. Feed, play, bond and check in. Small daily interactions accumulate into growth, memories and a StockPet that feels increasingly like your own.'],
  ['Can two NVDA StockPets become different?', 'Yes. Same stock, different life. Different care, memories, market moments and future evolution paths can make two StockPets develop differently over time.'],
  ['Why Web3?', 'Everyday actions do not need a blockchain. But when a StockPet develops a unique history, rare evolution or meaningful collectible traits, verifiable digital ownership can matter. The technology stays underneath the experience.'],
  ['Is StockPets a trading or investment game?', 'No. StockPets does not tell you what to buy or turn pet behavior into financial signals. The market provides identity, events and stories — not investment advice.'],
]

export default function StockPetsFAQ() {
  const [openItem, setOpenItem] = useState(0)

  return <section className="stockpets-faq" aria-labelledby="faq-title">
    <div className="faq-ticker-watermark" aria-hidden="true">NVDA · TSLA · AAPL</div>
    <div className="faq-inner">
      <div className="market-snapshot">
        <header className="snapshot-header">
          <span>Market snapshot</span>
          <small>Demo data</small>
        </header>
        <div className="snapshot-list">
          {marketSnapshot.map(([ticker, name, price, change]) => <article className="snapshot-card" key={ticker}>
            <div className="snapshot-symbol"><b>{ticker}</b><small>{name}</small></div>
            <strong>{price}</strong>
            <span className={change.startsWith('+') ? 'snapshot-up' : 'snapshot-down'}>{change}</span>
          </article>)}
        </div>
      </div>

      <header className="faq-intro">
        <span>Understanding StockPets</span>
        <h2 id="faq-title">The short<br/><em>answers.</em></h2>
        <p>Stocks, pets, memes and ownership — explained simply.</p>
      </header>

      <div className="faq-list">
        {faqs.map(([question, answer], index) => {
          const isOpen = openItem === index
          const answerId = `faq-answer-${index + 1}`
          return <article className={`faq-item${isOpen ? ' is-open' : ''}`} key={question}>
            <button type="button" aria-expanded={isOpen} aria-controls={answerId} onClick={() => setOpenItem(index)}>
              <span className="faq-number">{String(index + 1).padStart(2, '0')}</span>
              <span className="faq-question">{question}</span>
              <span className="faq-toggle" aria-hidden="true">{isOpen ? '−' : '+'}</span>
            </button>
            <div className="faq-answer-wrap" id={answerId} aria-hidden={!isOpen}>
              <p>{answer}</p>
            </div>
          </article>
        })}
      </div>

      <footer className="faq-closing">
        <strong>The market gives them a mood.<br/><em>You give them a life.</em></strong>
        <span>Same stocks. Different life.</span>
      </footer>
    </div>
  </section>
}
