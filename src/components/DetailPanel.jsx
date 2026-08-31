import { STATUS } from '../data/skills'

export default function DetailPanel({ skill, status, locked, onSetStatus }) {
  if (!skill) {
    return (
      <aside className="detail-panel detail-empty">
        <p>Select a skill to see details and update its progress.</p>
      </aside>
    )
  }

  return (
    <aside className="detail-panel">
      <p className="detail-tier">{skill.tier}</p>
      <h2>{skill.name}</h2>
      <p className="detail-description">{skill.description}</p>

      {skill.prereqs.length > 0 && (
        <p className="detail-prereqs">
          Requires: {skill.prereqs.join(', ')}
        </p>
      )}

      {locked ? (
        <p className="detail-locked-note">
          Complete the prerequisites above before starting this skill.
        </p>
      ) : (
        <div className="detail-actions">
          <button
            className={status === STATUS.LOCKED ? 'active' : ''}
            onClick={() => onSetStatus(skill.id, STATUS.LOCKED)}
          >
            Not started
          </button>
          <button
            className={status === STATUS.IN_PROGRESS ? 'active' : ''}
            onClick={() => onSetStatus(skill.id, STATUS.IN_PROGRESS)}
          >
            In progress
          </button>
          <button
            className={status === STATUS.DONE ? 'active' : ''}
            onClick={() => onSetStatus(skill.id, STATUS.DONE)}
          >
            Mastered
          </button>
        </div>
      )}
    </aside>
  )
}
