import { useEffect, useRef, useState } from 'react'
import { CheckIcon } from './icons.jsx'
import { THEME_COLORS, getStoredTheme, setStoredTheme } from '../utils/theme.js'
import './AnnouncementBar.css'

function AnnouncementBar() {
  const [theme, setTheme] = useState(getStoredTheme)
  const [open, setOpen] = useState(false)
  const pickerRef = useRef(null)

  useEffect(() => {
    function onClickOutside(event) {
      if (pickerRef.current && !pickerRef.current.contains(event.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  const handleSelect = (id) => {
    setTheme(id)
    setStoredTheme(id)
    setOpen(false)
  }

  const active = THEME_COLORS.find((color) => color.id === theme) ?? THEME_COLORS[0]

  return (
    <div className="announcement-bar">
      <div className="container announcement-bar-inner">
        <p className="announcement-bar-message">
          🚀 New: Free growth audits this month — <a href="/contact">claim yours</a>
        </p>

        <div className="announcement-color-picker" ref={pickerRef}>
          <button
            type="button"
            className="announcement-color-trigger"
            onClick={() => setOpen((v) => !v)}
            aria-haspopup="listbox"
            aria-expanded={open}
          >
            <span className="announcement-color-swatch" style={{ background: active.swatch }} />
            {active.label}
            <span className={`announcement-color-chevron ${open ? 'is-open' : ''}`}>▾</span>
          </button>

          {open && (
            <ul className="announcement-color-menu" role="listbox">
              {THEME_COLORS.map((color) => (
                <li key={color.id}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={color.id === theme}
                    className="announcement-color-option"
                    onClick={() => handleSelect(color.id)}
                  >
                    <span className="announcement-color-swatch" style={{ background: color.swatch }} />
                    {color.label}
                    {color.id === theme && <CheckIcon size={14} className="announcement-color-check" />}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default AnnouncementBar
