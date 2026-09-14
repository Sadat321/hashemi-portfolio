import { useRef } from 'react'
import { Icon } from './Icon'

export function Button({
  href,
  children,
  variant = 'primary',
  icon = 'arrowUpRight',
  download = false,
  className = '',
  cursor = 'EXPLORE',
  onClick,
  ariaLabel,
}) {
  const ref = useRef(null)

  const handlePointerMove = (event) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (event.pointerType !== 'mouse') return
    const element = ref.current
    const rect = element.getBoundingClientRect()
    const x = event.clientX - rect.left - rect.width / 2
    const y = event.clientY - rect.top - rect.height / 2
    element.style.setProperty('--magnetic-x', `${x * 0.12}px`)
    element.style.setProperty('--magnetic-y', `${y * 0.16}px`)
  }

  const reset = () => {
    const element = ref.current
    if (!element) return
    element.style.setProperty('--magnetic-x', '0px')
    element.style.setProperty('--magnetic-y', '0px')
  }

  const props = {
    ref,
    className: `button button--${variant} ${className}`,
    onPointerMove: handlePointerMove,
    onPointerLeave: reset,
    onClick,
    'data-cursor': cursor,
    'aria-label': ariaLabel,
  }

  const content = (
    <>
      <span className="button__label">{children}</span>
      {icon && <span className="button__icon"><Icon name={icon} size={18} /></span>}
    </>
  )

  if (!href) return <button type="button" {...props}>{content}</button>

  const external = href.startsWith('http')
  return (
    <a
      href={href}
      download={download || undefined}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      {...props}
    >
      {content}
    </a>
  )
}
