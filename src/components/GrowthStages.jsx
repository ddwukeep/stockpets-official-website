const stages = [{ name: 'Baby', note: 'A tiny beginning', face: '• ᴗ •' }, { name: 'Buddy', note: 'Your loyal pal', face: '• ◡ •' }, { name: 'Legend', note: 'Market royalty', face: '•ᴗ•' }]
export default function GrowthStages({ current }) {
  return <section className="growth" id="how"><div className="section-heading"><span>01 / Grow together</span><h2>Care. Play. Grow.</h2></div><div className="stage-row">{stages.map((stage, index) => <div className={`stage ${current === stage.name.toUpperCase() ? 'current' : ''}`} key={stage.name}><div className={`mini-pet mini-${index}`}>{index === 2 && <b>♛</b>}<span>{stage.face}</span></div><strong>{stage.name}</strong><small>{stage.note}</small>{index < 2 && <i>→</i>}</div>)}</div></section>
}
