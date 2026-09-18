const STORAGE_KEY = 'theme-color'

export const THEME_COLORS = [
  { id: 'blue', label: 'Blue', swatch: '#1e40af' },
  { id: 'purple', label: 'Purple', swatch: '#7c3aed' },
  { id: 'green', label: 'Green', swatch: '#059669' },
  { id: 'orange', label: 'Orange', swatch: '#ea580c' },
  { id: 'pink', label: 'Pink', swatch: '#db2777' },
  { id: 'black', label: 'Black', swatch: '#111111' },
  { id: 'cyan', label: 'Cyan', swatch: '#06b6d4' },
  { id: '91ae6e', label: '#91AE6E', swatch: '#91AE6E' },
  { id: '249d8f', label: '#249D8F', swatch: '#249D8F' },
  { id: 'c7d3c0', label: '#C7D3C0', swatch: '#C7D3C0' },
  { id: 'b4d3d9', label: '#B4D3D9', swatch: '#B4D3D9' },
]

const DEFAULT_THEME = THEME_COLORS[0].id

export function getStoredTheme() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return THEME_COLORS.some((color) => color.id === stored) ? stored : DEFAULT_THEME
  } catch {
    return DEFAULT_THEME
  }
}

export function applyTheme(themeId) {
  document.documentElement.setAttribute('data-theme', themeId)
}

export function setStoredTheme(themeId) {
  try {
    localStorage.setItem(STORAGE_KEY, themeId)
  } catch {
    // storage unavailable (private browsing, disabled cookies) - theme still applies for this load
  }
  applyTheme(themeId)
}
