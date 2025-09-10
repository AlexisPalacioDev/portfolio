import { useState, useEffect } from 'react';
import Header from './Header';
import type { Language } from '../types';
import { LANG_EVENT, getInitialLanguage } from '../utils/useLanguage';

export default function HeaderWrapper() {
  const [currentLang, setCurrentLang] = useState<Language>(getInitialLanguage());

  useEffect(() => {
    // Initialize language from localStorage
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && (savedLang === 'es' || savedLang === 'en')) {
      setCurrentLang(savedLang);
    }
  }, []);

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
    localStorage.setItem('language', lang);
    document.documentElement.setAttribute('lang', lang);
    document.dispatchEvent(new CustomEvent(LANG_EVENT, { detail: lang }));
  };

  return (
    <Header 
      currentLang={currentLang}
      onLanguageChange={handleLanguageChange}
    />
  );
}
