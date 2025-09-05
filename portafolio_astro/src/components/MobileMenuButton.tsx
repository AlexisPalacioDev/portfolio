import { motion } from 'framer-motion';

interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export default function MobileMenuButton({ isOpen, onClick }: MobileMenuButtonProps) {
  const color = 'var(--neo-text)';
  return (
    <motion.button
      className="lg:hidden neo-btn p-0 w-11 h-11 rounded-full relative"
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
      aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
      aria-expanded={isOpen}
    >
      <div className="relative w-6 h-6">
        <span
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 block h-[2px] w-6 rounded transition-transform duration-300 ease-out ${
            isOpen ? 'translate-y-0 rotate-45' : '-translate-y-[6px] rotate-0'
          }`}
          style={{ backgroundColor: color }}
        />
        <span
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 block h-[2px] w-6 rounded transition-opacity duration-200 ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
          style={{ backgroundColor: color }}
        />
        <span
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 block h-[2px] w-6 rounded transition-transform duration-300 ease-out ${
            isOpen ? 'translate-y-0 -rotate-45' : 'translate-y-[6px] rotate-0'
          }`}
          style={{ backgroundColor: color }}
        />
      </div>
    </motion.button>
  );
}
