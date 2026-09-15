import { useEffect, useRef } from 'react'

export function SectionFilm({ src, poster, tone = 'blue' }) {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!video || reducedMotion) return undefined

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) video.play().catch(() => {})
      else video.pause()
    }, { rootMargin: '160px 0px', threshold: 0.05 })

    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  return (
    <div className={`section-film section-film--${tone}`} aria-hidden="true">
      <video ref={videoRef} muted loop playsInline preload="metadata" poster={poster} tabIndex="-1">
        <source src={src} type="video/webm"/>
      </video>
    </div>
  )
}
