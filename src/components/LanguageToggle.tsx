import { motion } from 'framer-motion';
import type { Language } from '../types';
import translations from '../data/translations';

interface LanguageToggleProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export default function LanguageToggle({ currentLang, onLanguageChange }: LanguageToggleProps) {
  const toggleLanguage = () => onLanguageChange(currentLang === 'es' ? 'en' : 'es');
  const ariaLabel = currentLang === 'es'
    ? translations.es.controls.language.switchToEnglish
    : translations.en.controls.language.switchToSpanish;

  return (
    <motion.button
      onClick={toggleLanguage}
      className="neo-chip font-medium"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={ariaLabel}
    >
      {currentLang.toUpperCase()}
    </motion.button>
  );
}
