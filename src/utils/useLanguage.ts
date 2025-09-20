import { useEffect, useState } from 'react';
import type { Language } from '../types';

export const LANG_EVENT = 'language-change';

export function getInitialLanguage(): Language {
  if (typeof localStorage !== 'undefined') {
    const saved = localStorage.getItem('language');
    if (saved === 'en' || saved === 'es') return saved;
  }
  if (typeof navigator !== 'undefined') {
    const nav = navigator.language || (navigator as any).userLanguage || 'es';
    return nav.toLowerCase().startsWith('en') ? 'en' : 'es';
  }
  return 'es';
}

export function useLanguage(): Language {
  const [lang, setLang] = useState<Language>(getInitialLanguage());

  useEffect(() => {
    const onCustom = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail === 'en' || detail === 'es') setLang(detail);
    };
    const onStorage = (e: StorageEvent) => {
      if (e.key === 'language') {
        const v = e.newValue as Language | null;
        if (v === 'en' || v === 'es') setLang(v);
      }
    };
    document.addEventListener(LANG_EVENT, onCustom as EventListener);
    window.addEventListener(LANG_EVENT, onCustom as EventListener);
    window.addEventListener('storage', onStorage);
    // ensure <html lang> reflects current value
    document.documentElement.setAttribute('lang', lang);
    return () => {
      document.removeEventListener(LANG_EVENT, onCustom as EventListener);
      window.removeEventListener(LANG_EVENT, onCustom as EventListener);
      window.removeEventListener('storage', onStorage);
    };
  }, [lang]);

  return lang;
}
