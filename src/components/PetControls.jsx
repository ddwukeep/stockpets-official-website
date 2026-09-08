const controls = [{ type: 'feed', icon: '●', label: 'Feed', xp: '+5 XP' }, { type: 'play', icon: '✦', label: 'Play', xp: '+7 XP' }, { type: 'pet', icon: '♥', label: 'Pet', xp: '+3 XP' }]
export default function PetControls({ onAction, cooldowns }) {
  return <div className="controls" aria-label="Care actions">{controls.map(({ type, icon, label, xp }) => <button key={type} type="button" disabled={cooldowns[type]} onClick={() => onAction(type)}><span className={`control-icon ${type}`}>{icon}</span><strong>{label}</strong><small>{cooldowns[type] ? 'One sec…' : xp}</small></button>)}</div>
}
