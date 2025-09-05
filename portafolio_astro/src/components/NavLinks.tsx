import { motion } from 'framer-motion';
import type { NavLinksProps, NavLink } from '../types';
import { HomeIcon, UserIcon, BriefcaseIcon, FolderIcon, MailSmallIcon } from './icons/UiIcons';

const navItems: NavLink[] = [
  { href: '#home', label: 'Inicio' },
  { href: '#about', label: 'Sobre mí' },
  { href: '#experience', label: 'Experiencia' },
  { href: '#projects', label: 'Proyectos' },
  { href: '#contact', label: 'Contacto' },
];

export default function NavLinks({ mobile = false, onClose = () => {} }: NavLinksProps) {
  const ulClass = mobile
    ? 'flex flex-col items-center gap-3'
    : 'inline-flex items-center gap-2 flex-nowrap whitespace-nowrap justify-center';
  return (
    <ul className={ulClass}>
      {navItems.map(({ href, label }) => (
        <motion.li key={href}>
          <motion.a
            href={href}
            className="neo-chip neo-chip-sm inline-flex items-center gap-2 whitespace-nowrap"
            onClick={onClose}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
          >
            {href === '#home' && <HomeIcon />}
            {href === '#about' && <UserIcon />}
            {href === '#experience' && <BriefcaseIcon />}
            {href === '#projects' && <FolderIcon />}
            {href === '#contact' && <MailSmallIcon />}
            <span>{label}</span>
          </motion.a>
        </motion.li>
      ))}
    </ul>
  );
}
