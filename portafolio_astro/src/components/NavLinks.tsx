import { motion } from 'framer-motion';
import type { NavLinksProps, NavLink } from '../types';
import { HomeIcon, UserIcon, BriefcaseIcon, FolderIcon, MailSmallIcon } from './icons/UiIcons';
import { useLanguage } from '../utils/useLanguage';
import AnimatedText from './AnimatedText';

function itemsFor(lang: 'es' | 'en'): NavLink[] {
  return lang === 'en'
    ? [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#experience', label: 'Experience' },
        { href: '#projects', label: 'Projects' },
        { href: '#contact', label: 'Contact' },
      ]
    : [
        { href: '#home', label: 'Inicio' },
        { href: '#about', label: 'Sobre mí' },
        { href: '#experience', label: 'Experiencia' },
        { href: '#projects', label: 'Proyectos' },
        { href: '#contact', label: 'Contacto' },
      ];
}

export default function NavLinks({ mobile = false, onClose = () => {} }: NavLinksProps) {
  const lang = useLanguage();
  const ulClass = mobile
    ? 'flex flex-col items-center gap-3'
    : 'inline-flex items-center gap-2 flex-nowrap whitespace-nowrap justify-center';
  return (
    <ul className={ulClass}>
      {itemsFor(lang).map(({ href, label }) => (
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
            <AnimatedText text={label} />
          </motion.a>
        </motion.li>
      ))}
    </ul>
  );
}
