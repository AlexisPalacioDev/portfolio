import { useState, useEffect } from 'react';
import Header from './Header';
import type { Language } from '../types';

export default function HeaderWrapper() {
  const [currentLang, setCurrentLang] = useState<Language>('es');

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
  };

  return (
    <Header 
      currentLang={currentLang}
      onLanguageChange={handleLanguageChange}
    />
  );
}