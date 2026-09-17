import { useEffect, useRef, useState } from 'react'

const parse = (value) => {
  const match = String(value).match(/^([^\d]*)([\d,]+(?:\.\d+)?)(.*)$/)
  if (!match) return { prefix: '', number: 0, suffix: value, decimals: 0 }
  const [, prefix, rawNumber, suffix] = match
  const decimals = rawNumber.includes('.') ? rawNumber.split('.')[1].length : 0
  return { prefix, number: parseFloat(rawNumber.replace(/,/g, '')), suffix, decimals }
}

const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t))

function AnimatedCounter({ value, duration = 1600 }) {
  const { prefix, number, suffix, decimals } = parse(value)
  const [display, setDisplay] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()

          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1)
            setDisplay(number * easeOutExpo(progress))
            if (progress < 1) requestAnimationFrame(tick)
          }

          requestAnimationFrame(tick)
          observer.disconnect()
        }
      },
      { threshold: 0.4 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [number, duration])

  const formatted = decimals > 0 ? display.toFixed(decimals) : Math.round(display).toLocaleString()

  return (
    <span ref={ref}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  )
}

export default AnimatedCounter
