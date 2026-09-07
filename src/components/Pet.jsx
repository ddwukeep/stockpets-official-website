export default function Pet({ stage, reaction }) {
  const isBuddy = stage !== 'BABY'
  const isLegend = stage === 'LEGEND'
  return <div className={`pet-wrap ${reaction ? `react-${reaction.type}` : ''} stage-${stage.toLowerCase()}`} role="img" aria-label={`A happy ${stage.toLowerCase()} StockPet`}>
    {isLegend && <div className="crown"><i/><i/><i/></div>}
    <svg className="pet" viewBox="0 0 330 310" aria-hidden="true">
      <defs><linearGradient id="fur" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#ffc77b"/><stop offset="1" stopColor="#ee7e5b"/></linearGradient><linearGradient id="belly" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#fff4d9"/><stop offset="1" stopColor="#f6d7af"/></linearGradient></defs>
      <ellipse className="pet-shadow" cx="165" cy="279" rx="93" ry="19"/>
      <path className="tail" d="M254 210c44-18 52 26 25 34-17 5-29-5-19-17 7-9 19-2 13 5"/>
      <path className="ear" d="M88 90C63 70 63 35 78 25c27 12 43 37 42 62Z"/><path className="ear" d="M242 90c25-20 25-55 10-65-27 12-43 37-42 62Z"/>
      <path className="inner-ear" d="M84 70c-9-11-10-25-4-31 12 8 20 19 24 34Z"/><path className="inner-ear" d="M246 70c9-11 10-25 4-31-12 8-20 19-24 34Z"/>
      <ellipse className="body" cx="165" cy="196" rx={isBuddy ? 91 : 83} ry={isBuddy ? 91 : 83}/><ellipse className="belly" cx="165" cy="215" rx="53" ry="55"/>
      <ellipse className="foot" cx="112" cy="265" rx="30" ry="17"/><ellipse className="foot" cx="218" cy="265" rx="30" ry="17"/>
      <path className="arm" d="M87 191q-35 17-23 48"/><path className="arm right" d="M243 191q35 17 23 48"/>
      <ellipse className="face" cx="165" cy="126" rx="105" ry="86"/>
      <path className="tuft" d="M132 47q20-35 34 0 20-35 34 3"/>
      <g className="eyes"><ellipse cx="124" cy="126" rx="19" ry="25"/><ellipse cx="206" cy="126" rx="19" ry="25"/><circle cx="117" cy="117" r="7"/><circle cx="199" cy="117" r="7"/></g>
      <ellipse className="blush" cx="92" cy="158" rx="19" ry="9"/><ellipse className="blush" cx="238" cy="158" rx="19" ry="9"/>
      <path className="mouth" d="M151 154q14 15 28 0M165 153v-5"/>
      {isBuddy && <g className="bandana"><path d="M106 178q59 25 118 0l-12 34q-47 18-94 0Z"/><circle cx="165" cy="199" r="12"/><path d="m159 199 6-6 6 6-6 6Z"/></g>}
    </svg>
    {reaction && <div className="reaction" key={reaction.id}>{reaction.type === 'pet' && <span>♥</span>}{reaction.label}</div>}
    {reaction?.type === 'feed' && <div className="snack">●</div>}
    {reaction?.type === 'play' && <div className="toy">★</div>}
    {reaction?.type === 'pet' && <div className="heart-particles"><i>♥</i><i>♥</i><i>♥</i></div>}
  </div>
}
