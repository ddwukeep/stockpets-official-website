import { useCallback, useEffect, useRef, useState } from 'react'

const STORAGE_KEY = 'stockpets-pet-v1'
const DEFAULT_PET = { level: 1, xp: 0, hunger: 68, happiness: 62, love: 55, stage: 'BABY', lastVisit: Date.now() }
const ACTIONS = {
  feed: { stat: 'hunger', amount: 14, xp: 5, feedback: 'YUM!' },
  play: { stat: 'happiness', amount: 13, xp: 7, feedback: '+ FUN' },
  pet: { stat: 'love', amount: 11, xp: 3, feedback: '+ LOVE' },
}

function restorePet() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY))
    if (!saved) return { pet: DEFAULT_PET, away: false }
    const elapsedHours = Math.max(0, (Date.now() - saved.lastVisit) / 3600000)
    const hungerLoss = Math.min(25, Math.floor(elapsedHours * 1.5))
    return { pet: { ...DEFAULT_PET, ...saved, hunger: Math.max(20, saved.hunger - hungerLoss), lastVisit: Date.now() }, away: elapsedHours >= 1 }
  } catch { return { pet: DEFAULT_PET, away: false } }
}

export function usePetState() {
  const initial = useRef(null)
  if (!initial.current) initial.current = restorePet()
  const [pet, setPet] = useState(initial.current.pet)
  const [reaction, setReaction] = useState(null)
  const [levelUp, setLevelUp] = useState(false)
  const [cooldowns, setCooldowns] = useState({})

  useEffect(() => { localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...pet, lastVisit: Date.now() })) }, [pet])

  const interact = useCallback((type) => {
    if (cooldowns[type]) return
    const action = ACTIONS[type]
    setCooldowns((current) => ({ ...current, [type]: true }))
    window.setTimeout(() => setCooldowns((current) => ({ ...current, [type]: false })), 900)
    setReaction({ type, label: action.feedback, id: Date.now() })
    window.setTimeout(() => setReaction(null), 850)
    setPet((current) => {
      const totalXp = current.xp + action.xp
      const nextLevel = Math.min(9, Math.floor(totalXp / 30) + 1)
      const nextStage = nextLevel >= 5 ? 'LEGEND' : nextLevel >= 3 ? 'BUDDY' : 'BABY'
      if (nextLevel > current.level) { setLevelUp(true); window.setTimeout(() => setLevelUp(false), 1500) }
      return { ...current, [action.stat]: Math.min(100, current[action.stat] + action.amount), xp: totalXp, level: nextLevel, stage: nextStage }
    })
  }, [cooldowns])

  return { pet, reaction, levelUp, cooldowns, away: initial.current.away, interact }
}
