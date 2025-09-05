import { motion } from 'framer-motion';
import type { Language } from '../types';

interface LanguageToggleProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export default function LanguageToggle({ currentLang, onLanguageChange }: LanguageToggleProps) {
  const toggleLanguage = () => {
    onLanguageChange(currentLang === 'es' ? 'en' : 'es');
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      className="px-3 py-1 rounded-full bg-primary dark:bg-primary-dark text-white font-medium"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={`Switch to ${currentLang === 'es' ? 'English' : 'Spanish'}`}
    >
      {currentLang.toUpperCase()}
    </motion.button>
  );
}