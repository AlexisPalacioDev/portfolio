import { motion } from 'framer-motion';
import type { NavLinksProps } from '../types';
import { HomeIcon, UserIcon, BriefcaseIcon, FolderIcon, MailSmallIcon } from './icons/UiIcons';
import { useLanguage } from '../utils/useLanguage';
import translations from '../data/translations';
import FadeText from './FadeText';

function renderIcon(href: string) {
  switch (href) {
    case '#home':
      return <HomeIcon />;
    case '#about':
      return <UserIcon />;
    case '#experience':
      return <BriefcaseIcon />;
    case '#projects':
      return <FolderIcon />;
    case '#contact':
      return <MailSmallIcon />;
    default:
      return null;
  }
}

export default function NavLinks({ mobile = false, onClose = () => {} }: NavLinksProps) {
  const lang = useLanguage();
  const nav = translations[lang].nav;
  const items = [
    { href: '#home', label: nav.home },
    { href: '#about', label: nav.about },
    { href: '#experience', label: nav.experience },
    { href: '#projects', label: nav.projects },
    { href: '#contact', label: nav.contact }
  ];

  const ulClass = mobile
    ? 'flex flex-col items-center gap-3'
    : 'inline-flex items-center gap-2 flex-nowrap whitespace-nowrap justify-center';

  return (
    <ul className={ulClass}>
      {items.map(({ href, label }) => (
        <motion.li key={href}>
          <motion.a
            href={href}
            className="neo-chip neo-chip-sm inline-flex items-center gap-2 whitespace-nowrap"
            onClick={onClose}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
          >
            {renderIcon(href)}
            <FadeText text={label} />
          </motion.a>
        </motion.li>
      ))}
    </ul>
  );
}
