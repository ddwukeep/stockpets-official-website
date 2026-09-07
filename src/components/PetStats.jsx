const Stat = ({ label, value }) => <div className="stat"><div><span>{label}</span><b>{value}%</b></div><div className="stat-track"><i style={{ width: `${value}%` }}/></div></div>
export default function PetStats({ pet }) {
  const nextAt = pet.level * 30
  return <aside className="stats"><div className="level"><span>LV.</span><strong>{String(pet.level).padStart(2, '0')}</strong><em>{pet.stage}</em></div><Stat label="Hunger" value={pet.hunger}/><Stat label="Happiness" value={pet.happiness}/><Stat label="Love" value={pet.love}/><div className="xp">{pet.xp} / {nextAt} XP</div></aside>
}
