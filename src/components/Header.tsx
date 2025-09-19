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
    <header className="fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-2">
        <div className="neo-inset p-3 rounded-[var(--neo-radius-lg)] overflow-hidden">
          <nav className="flex items-center justify-between">
            <motion.a 
              href="#home" 
              className="neo-chip text-base font-bold"
              whileHover={{ scale: 0.98 }}
              whileTap={{ scale: 0.96 }}
              aria-label="Go to home"
            >
              AP
            </motion.a>

            <div className="hidden lg:flex items-center gap-3 w-full justify-end">
              <div className="flex items-center gap-2">
                <NavLinks />
              </div>
              <div className="flex items-center gap-2">
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
            className="lg:hidden overflow-hidden"
            initial={false}
            animate={isMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="py-3 px-3 neo-inset mt-3 rounded-[var(--neo-radius)]">
              <NavLinks mobile onClose={closeMenu} />
              <div className="mt-3 flex justify-center gap-2">
                <ThemeToggle onToggle={toggleTheme} />
                <LanguageToggle 
                  currentLang={currentLang}
                  onLanguageChange={onLanguageChange}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
