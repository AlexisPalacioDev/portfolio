import { useEffect, useState } from 'react';
import { useLanguage } from '../utils/useLanguage';
import translations from '../data/translations';

interface ThemeToggleProps {
  onToggle: () => void;
}

export default function ThemeToggle({ onToggle }: ThemeToggleProps) {
  const [isDark, setIsDark] = useState(false);
  const lang = useLanguage();
  const label = translations[lang].controls.themeToggle;

  useEffect(() => {
    try {
      const current = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
      setIsDark(current === 'dark');
    } catch {}
  }, []);

  const handleChange = () => {
    setIsDark((v) => !v);
    onToggle();
  };

  return (
    <label className="neo-toggle-label" title={label}>
      <span className="neo-toggle">
        <input
          type="checkbox"
          className="neo-toggle-state"
          checked={isDark}
          onChange={handleChange}
          aria-label={label}
        />
        <span className="neo-toggle-indicator" />
        <span className="neo-toggle-icon neo-toggle-icon--sun" aria-hidden>
          <svg width="16" height="16" viewBox="0 0 24 24" role="img">
            <circle cx="12" cy="12" r="4" fill="none" stroke="var(--neo-text)" strokeWidth="1.5" />
            <g stroke="var(--neo-text)" strokeWidth="1.5" strokeLinecap="round">
              <path d="M12 2v2" />
              <path d="M12 20v2" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="M4.93 4.93l1.41 1.41" />
              <path d="M17.66 17.66l1.41 1.41" />
              <path d="M4.93 19.07l1.41-1.41" />
              <path d="M17.66 6.34l1.41-1.41" />
            </g>
          </svg>
        </span>
        <span className="neo-toggle-icon neo-toggle-icon--moon" aria-hidden>
          <svg width="16" height="16" viewBox="0 0 24 24" role="img">
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" fill="none" stroke="var(--neo-text)" strokeWidth="1.5" />
          </svg>
        </span>
      </span>
    </label>
  );
}
