import { motion } from 'framer-motion';
import { useState } from 'react';
import type { HeaderProps } from '../types';
import NavLinks from './NavLinks';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import MobileMenuButton from './MobileMenuButton';

export default function Header({ currentLang, onLanguageChange }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = () => {
    const event = new CustomEvent('toggle-theme');
    document.dispatchEvent(event);
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-background/80 dark:bg-background-dark/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <motion.a 
            href="#home" 
            className="text-2xl font-bold text-primary dark:text-primary-dark"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Go to home"
          >
            AP
          </motion.a>

          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <div className="flex items-center space-x-4">
              <ThemeToggle onToggle={toggleTheme} />
              <LanguageToggle 
                currentLang={currentLang}
                onLanguageChange={onLanguageChange}
              />
            </div>
          </div>

          <MobileMenuButton 
            isOpen={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </nav>

        <motion.div 
          className="md:hidden overflow-hidden"
          initial={false}
          animate={isMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="py-4">
            <NavLinks mobile onClose={closeMenu} />
            <div className="mt-4 flex justify-center space-x-4">
              <ThemeToggle onToggle={toggleTheme} />
              <LanguageToggle 
                currentLang={currentLang}
                onLanguageChange={onLanguageChange}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
