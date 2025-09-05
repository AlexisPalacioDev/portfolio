import { motion } from 'framer-motion';

interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export default function MobileMenuButton({ isOpen, onClick }: MobileMenuButtonProps) {
  return (
    <motion.button
      className="md:hidden p-2"
      onClick={onClick}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle menu"
    >
      <div className="w-6 h-6 flex flex-col justify-around">
        <span 
          className={`block h-0.5 w-6 bg-text dark:bg-text-dark transition-transform duration-300 ${
            isOpen ? 'rotate-45 translate-y-2' : ''
          }`} 
        />
        <span 
          className={`block h-0.5 w-6 bg-text dark:bg-text-dark transition-opacity duration-300 ${
            isOpen ? 'opacity-0' : ''
          }`} 
        />
        <span 
          className={`block h-0.5 w-6 bg-text dark:bg-text-dark transition-transform duration-300 ${
            isOpen ? '-rotate-45 -translate-y-2' : ''
          }`} 
        />
      </div>
    </motion.button>
  );
}