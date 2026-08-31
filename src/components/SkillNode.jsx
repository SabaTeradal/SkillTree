import { forwardRef } from 'react'

const STATUS_LABEL = {
  locked: 'Locked',
  'in-progress': 'In progress',
  done: 'Mastered',
}

const SkillNode = forwardRef(function SkillNode(
  { skill, status, isSelected, isUnlockable, onSelect },
  ref
) {
  return (
    <button
      ref={ref}
      type="button"
      className={`skill-node status-${status} ${isSelected ? 'is-selected' : ''} ${
        isUnlockable ? 'is-unlockable' : ''
      }`}
      onClick={() => onSelect(skill.id)}
      aria-pressed={isSelected}
    >
      <span className="skill-node-name">{skill.name}</span>
      <span className="skill-node-status">{STATUS_LABEL[status]}</span>
    </button>
  )
})

export default SkillNode
