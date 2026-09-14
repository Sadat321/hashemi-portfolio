import { useEffect, useRef, useState } from 'react'

export function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const target = useRef({ x: -100, y: -100 })
  const current = useRef({ x: -100, y: -100 })
  const [label, setLabel] = useState('')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (!finePointer) return undefined

    let frame
    const onMove = (event) => {
      target.current = { x: event.clientX, y: event.clientY }
      setVisible(true)
    }
    const onLeave = () => setVisible(false)
    const onOver = (event) => {
      const interactive = event.target.closest('[data-cursor], a, button')
      if (!interactive) {
        setLabel('')
        return
      }
      setLabel(interactive.dataset.cursor || 'OPEN')
    }

    const tick = () => {
      const ease = 0.16
      current.current.x += (target.current.x - current.current.x) * ease
      current.current.y += (target.current.y - current.current.y) * ease
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${target.current.x}px, ${target.current.y}px, 0)`
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0)`
      }
      frame = requestAnimationFrame(tick)
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    document.addEventListener('pointerover', onOver, { passive: true })
    document.documentElement.addEventListener('mouseleave', onLeave)
    frame = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerover', onOver)
      document.documentElement.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <div className={`cursor ${visible ? 'is-visible' : ''} ${label ? 'is-active' : ''}`} aria-hidden="true">
      <span ref={dotRef} className="cursor__dot" />
      <span ref={ringRef} className="cursor__ring"><span>{label}</span></span>
    </div>
  )
}