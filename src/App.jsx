import { useMemo, useState } from 'react'
import { INITIAL_SKILLS, STATUS } from './data/skills'
import { useLocalStorage } from './hooks/useLocalStorage'
import TreeCanvas from './components/TreeCanvas'
import DetailPanel from './components/DetailPanel'
import './index.css'

const DEFAULT_STATUSES = Object.fromEntries(
  INITIAL_SKILLS.map((s) => [s.id, STATUS.LOCKED])
)

function isUnlockableFactory(statuses) {
  return (skill) =>
    skill.prereqs.every((id) => statuses[id] === STATUS.DONE)
}

export default function App() {
  const [statuses, setStatuses] = useLocalStorage('skilltree-statuses', DEFAULT_STATUSES)
  const [selectedId, setSelectedId] = useState(null)

  const skillsById = useMemo(
    () => Object.fromEntries(INITIAL_SKILLS.map((s) => [s.id, s])),
    []
  )
  const isUnlockable = useMemo(() => isUnlockableFactory(statuses), [statuses])

  const selectedSkill = selectedId ? skillsById[selectedId] : null
  const selectedLocked = selectedSkill ? !isUnlockable(selectedSkill) : false

  const doneCount = Object.values(statuses).filter((s) => s === STATUS.DONE).length
  const total = INITIAL_SKILLS.length
  const progressPct = Math.round((doneCount / total) * 100)

  function handleSetStatus(id, nextStatus) {
    setStatuses((prev) => ({ ...prev, [id]: nextStatus }))
  }

  function handleReset() {
    setStatuses(DEFAULT_STATUSES)
    setSelectedId(null)
  }

  return (
    <div className="app-shell">
      <header className="app-header">
        <div>
          <p className="eyebrow">Skill Tree</p>
          <h1>Java Learning Roadmap</h1>
        </div>
        <div className="progress-block">
          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${progressPct}%` }} />
          </div>
          <p className="progress-label">
            {doneCount} / {total} skills mastered ({progressPct}%)
          </p>
        </div>
        <button className="reset-button" onClick={handleReset}>
          Reset progress
        </button>
      </header>

      <main className="app-main">
        <TreeCanvas
          skills={INITIAL_SKILLS}
          statuses={statuses}
          selectedId={selectedId}
          onSelect={setSelectedId}
          isUnlockable={isUnlockable}
        />
        <DetailPanel
          skill={selectedSkill}
          status={selectedSkill ? statuses[selectedSkill.id] : null}
          locked={selectedLocked}
          onSetStatus={handleSetStatus}
        />
      </main>
    </div>
  )
}
