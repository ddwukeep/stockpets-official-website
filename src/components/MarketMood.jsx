export default function MarketMood() {
  return <section className="mood"><span className="simulated">Simulated market mood</span><div className="mood-title"><div className="mood-sun">☀</div><div><small>Today's mood</small><h2>Golden day</h2></div></div><div className="mood-values"><p><span>Pet energy</span><b>+8%</b></p><p><span>Market vibe</span><b>Optimistic</b></p></div><svg className="mood-line" viewBox="0 0 300 45" preserveAspectRatio="none" aria-hidden="true"><path d="M0 37 35 28 66 32 99 18 130 25 165 11 200 17 235 5 270 12 300 2"/></svg>
  </section>
}
