import { useRef, useLayoutEffect, useState, useCallback } from 'react'
import { TIERS } from '../data/skills'
import SkillNode from './SkillNode'

export default function TreeCanvas({ skills, statuses, selectedId, onSelect, isUnlockable }) {
  const containerRef = useRef(null)
  const nodeRefs = useRef({})
  const [lines, setLines] = useState([])

  const recomputeLines = useCallback(() => {
    const container = containerRef.current
    if (!container) return
    const containerRect = container.getBoundingClientRect()

    const nextLines = []
    skills.forEach((skill) => {
      const toEl = nodeRefs.current[skill.id]
      if (!toEl) return
      const toRect = toEl.getBoundingClientRect()
      const toX = toRect.left + toRect.width / 2 - containerRect.left
      const toY = toRect.top - containerRect.top

      skill.prereqs.forEach((prereqId) => {
        const fromEl = nodeRefs.current[prereqId]
        if (!fromEl) return
        const fromRect = fromEl.getBoundingClientRect()
        const fromX = fromRect.left + fromRect.width / 2 - containerRect.left
        const fromY = fromRect.bottom - containerRect.top

        nextLines.push({
          id: `${prereqId}->${skill.id}`,
          x1: fromX,
          y1: fromY,
          x2: toX,
          y2: toY,
          active: statuses[prereqId] === 'done',
        })
      })
    })
    setLines(nextLines)
  }, [skills, statuses])

  useLayoutEffect(() => {
    recomputeLines()
    const handle = () => recomputeLines()
    window.addEventListener('resize', handle)
    return () => window.removeEventListener('resize', handle)
  }, [recomputeLines])

  return (
    <div className="tree-canvas" ref={containerRef}>
      <svg className="tree-lines" aria-hidden="true">
        {lines.map((line) => (
          <path
            key={line.id}
            d={`M ${line.x1} ${line.y1} C ${line.x1} ${(line.y1 + line.y2) / 2}, ${line.x2} ${
              (line.y1 + line.y2) / 2
            }, ${line.x2} ${line.y2}`}
            className={line.active ? 'tree-line active' : 'tree-line'}
          />
        ))}
      </svg>

      {TIERS.map((tier) => (
        <div className="tree-tier" key={tier}>
          <div className="tree-tier-label">{tier}</div>
          <div className="tree-tier-row">
            {skills
              .filter((s) => s.tier === tier)
              .map((skill) => (
                <SkillNode
                  key={skill.id}
                  ref={(el) => {
                    if (el) nodeRefs.current[skill.id] = el
                  }}
                  skill={skill}
                  status={statuses[skill.id]}
                  isSelected={selectedId === skill.id}
                  isUnlockable={isUnlockable(skill)}
                  onSelect={onSelect}
                />
              ))}
          </div>
        </div>
      ))}
    </div>
  )
}
