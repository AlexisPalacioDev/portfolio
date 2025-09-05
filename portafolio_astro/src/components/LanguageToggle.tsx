import { motion } from 'framer-motion';
import type { Language } from '../types';

interface LanguageToggleProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export default function LanguageToggle({ currentLang, onLanguageChange }: LanguageToggleProps) {
  const toggleLanguage = () => onLanguageChange(currentLang === 'es' ? 'en' : 'es');

  return (
    <motion.button
      onClick={toggleLanguage}
      className="neo-chip font-medium"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${currentLang === 'es' ? 'English' : 'Spanish'}`}
    >
      {currentLang.toUpperCase()}
    </motion.button>
  );
}
