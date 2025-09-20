import { motion } from 'framer-motion';
import type { Language } from '../types';
import translations from '../data/translations';

interface LanguageToggleProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export default function LanguageToggle({ currentLang, onLanguageChange }: LanguageToggleProps) {
  const toggleLanguage = () => onLanguageChange(currentLang === 'es' ? 'en' : 'es');
  const languageCopy = translations[currentLang].controls.language;
  const ariaLabel = currentLang === 'es'
    ? languageCopy.switchToEnglish
    : languageCopy.switchToSpanish;

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
