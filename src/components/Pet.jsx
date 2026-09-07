export default function Pet({ stage, reaction }) {
  const evolved = stage !== 'BABY'
  return <div className={`pet-wrap nvda-pet ${reaction ? 'pet-tapped' : ''}`} role="img" aria-label="A cute white and green NVDA Chipling with amber eyes">
    <svg className="pet" viewBox="0 0 520 500" aria-hidden="true">
      <defs>
        <radialGradient id="ivory" cx="38%" cy="25%"><stop stopColor="#fffdf4"/><stop offset=".55" stopColor="#f3dfc4"/><stop offset="1" stopColor="#b9895f"/></radialGradient>
        <radialGradient id="amberEye" cx="40%" cy="35%"><stop stopColor="#fff4b6"/><stop offset=".28" stopColor="#ffc14b"/><stop offset=".65" stopColor="#b94808"/><stop offset="1" stopColor="#170b05"/></radialGradient>
        <linearGradient id="armor" x1="0" x2="1" y2="1"><stop stopColor="#4e6117"/><stop offset=".45" stopColor="#17240c"/><stop offset="1" stopColor="#090b08"/></linearGradient>
        <linearGradient id="goldTrim" x1="0" x2="1"><stop stopColor="#ffe172"/><stop offset=".45" stopColor="#d88d1e"/><stop offset="1" stopColor="#60320d"/></linearGradient>
        <filter id="softShadow"><feDropShadow dx="0" dy="12" stdDeviation="12" floodColor="#000" floodOpacity=".48"/></filter>
        <filter id="eyeGlow"><feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="#ff9e27" floodOpacity=".8"/></filter>
      </defs>
      <ellipse cx="262" cy="454" rx="148" ry="29" fill="#080503" opacity=".64"/>
      <g filter="url(#softShadow)">
        <path d="M394 336c72-28 91 38 53 65-28 20-64 1-49-25 10-17 33-8 25 8" fill="none" stroke="url(#armor)" strokeWidth="48" strokeLinecap="round"/>
        <path d="M438 351l25-17-2 31 25 8-27 15 2 29-25-18" fill="url(#ivory)" stroke="#8b622f" strokeWidth="5"/>
        <ellipse cx="262" cy="349" rx="126" ry="111" fill="url(#ivory)" stroke="#7d542d" strokeWidth="6"/>
        <ellipse cx="195" cy="431" rx="49" ry="31" fill="url(#ivory)" stroke="#744b26" strokeWidth="6"/><ellipse cx="329" cy="431" rx="49" ry="31" fill="url(#ivory)" stroke="#744b26" strokeWidth="6"/>
        <path d="M173 419l-13 21M194 421l-6 25M312 421l5 25M334 419l13 21" stroke="#a66d37" strokeWidth="5" strokeLinecap="round"/>
        <path d="M154 331q-54 30-31 79" fill="none" stroke="url(#ivory)" strokeWidth="35" strokeLinecap="round"/><path d="M367 331q54 30 31 79" fill="none" stroke="url(#ivory)" strokeWidth="35" strokeLinecap="round"/>
        <path d="M139 311q122 62 244 0l-16 83q-106 47-210 0Z" fill="url(#armor)" stroke="url(#goldTrim)" strokeWidth="7"/>
        <path d="M156 327q105 35 209 0" fill="none" stroke="#71921d" strokeWidth="8" opacity=".7"/>
        <path d="M106 195 48 131q5 93 49 125M414 195l58-64q-5 93-49 125" fill="url(#armor)" stroke="#aa741f" strokeWidth="7"/>
        <path d="m74 153 22 19 14 56-31-18Z M446 153l-22 19-14 56 31-18Z" fill="#92d20f"/>
        <path d="M83 241C56 166 92 81 163 57c61-22 134-22 195 0 71 24 107 109 80 184-21 58-87 98-178 98S104 299 83 241Z" fill="url(#ivory)" stroke="#704823" strokeWidth="7"/>
        <path d="M109 136 84 63l71 45M411 136l25-73-71 45" fill="url(#ivory)" stroke="#75491f" strokeWidth="7" strokeLinejoin="round"/>
        <path d="m116 116-17-34 39 31M404 116l17-34-39 31" fill="#4d6813"/>
        <path d="M146 87 167 24l29 65 39-78 25 82 48-72 2 80 67-48-28 82" fill="url(#ivory)" stroke="#81552b" strokeWidth="6" strokeLinejoin="round"/>
        <path d="m222 76 30 14-22 37 42-15-23 49" fill="#2f8c20" stroke="#226118" strokeWidth="3"/>
        <path d="M132 174q39-37 79-3M309 171q40-34 79 3" fill="none" stroke="#4c321f" strokeWidth="8" strokeLinecap="round"/>
        <ellipse cx="171" cy="224" rx="53" ry="65" fill="#281207" stroke="url(#goldTrim)" strokeWidth="9" filter="url(#eyeGlow)"/><ellipse cx="349" cy="224" rx="53" ry="65" fill="#281207" stroke="url(#goldTrim)" strokeWidth="9" filter="url(#eyeGlow)"/>
        <ellipse cx="171" cy="228" rx="34" ry="47" fill="url(#amberEye)"/><ellipse cx="349" cy="228" rx="34" ry="47" fill="url(#amberEye)"/>
        <ellipse cx="172" cy="232" rx="14" ry="28" fill="#090503"/><ellipse cx="348" cy="232" rx="14" ry="28" fill="#090503"/>
        <circle cx="154" cy="199" r="13" fill="#fffce8"/><circle cx="332" cy="199" r="13" fill="#fffce8"/><circle cx="183" cy="246" r="6" fill="#ffc96b"/><circle cx="361" cy="246" r="6" fill="#ffc96b"/>
        <ellipse cx="112" cy="275" rx="34" ry="16" fill="#ec947d" opacity=".54"/><ellipse cx="408" cy="275" rx="34" ry="16" fill="#ec947d" opacity=".54"/>
        <path d="M239 275q21 18 42 0M260 272v-8" fill="none" stroke="#58331f" strokeWidth="6" strokeLinecap="round"/>
        <g className="ear-tech"><circle cx="91" cy="222" r="29" fill="#12140d" stroke="url(#goldTrim)" strokeWidth="7"/><circle cx="91" cy="222" r="14" fill="#557b13"/><path d="m84 222 8-8 8 8-8 8Z" fill="#b6ef1a"/><circle cx="429" cy="222" r="29" fill="#12140d" stroke="url(#goldTrim)" strokeWidth="7"/><circle cx="429" cy="222" r="14" fill="#557b13"/><path d="m422 222 8-8 8 8-8 8Z" fill="#b6ef1a"/></g>
        <g className="chest-chip"><path d="m210 338 50-29 50 29-10 67h-80Z" fill="#10130b" stroke="url(#goldTrim)" strokeWidth="7"/><path d="M235 352h51l-26 31-25-14h31" fill="none" stroke="#a9e814" strokeWidth="8" strokeLinejoin="round"/></g>
        {evolved && <path d="M364 325 390 307l18 24-22 23Z" fill="#66a620" stroke="#dba83e" strokeWidth="5"/>}
      </g>
    </svg>
    {reaction && <div className="pet-love" key={reaction.id}><span>♥</span><i>✦</i></div>}
  </div>
}
