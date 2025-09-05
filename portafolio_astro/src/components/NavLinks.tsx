import { motion } from 'framer-motion';
import type { NavLinksProps, NavLink } from '../types';

const navItems: NavLink[] = [
  { href: '#home', label: 'Inicio' },
  { href: '#about', label: 'Sobre mí' },
  { href: '#experience', label: 'Experiencia' },
  { href: '#projects', label: 'Proyectos' },
  { href: '#contact', label: 'Contacto' },
];

export default function NavLinks({ mobile = false, onClose = () => {} }: NavLinksProps) {
  return (
    <ul className={mobile ? 'flex flex-col space-y-4' : 'flex items-center space-x-8'}>
      {navItems.map(({ href, label }) => (
        <motion.li key={href}>
          <motion.a
            href={href}
            className="text-text dark:text-text-dark hover:text-primary dark:hover:text-primary-dark transition-colors"
            onClick={onClose}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {label}
          </motion.a>
        </motion.li>
      ))}
    </ul>
  );
}