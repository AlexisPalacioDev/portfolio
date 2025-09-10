import { motion } from 'framer-motion';
import { TechIcon } from './icons/TechIcons';
import { useLanguage } from '../utils/useLanguage';
import FadeText from './FadeText';

export default function Hero() {
  const lang = useLanguage();
  const isEN = lang === 'en';
  return (
    <section className="min-h-[70vh] relative">
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Content */}
          <motion.div
            className="flex-1 lg:pr-12 text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Removed availability chip for cleaner hero */}

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 leading-tight whitespace-nowrap"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Alexis Palacio
            </motion.h1>

            <motion.p
              className="text-2xl lg:text-3xl font-light mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <FadeText text={isEN ? 'Full‑Stack Developer | n8n Automation' : 'Desarrollador Full‑Stack | Automatización con n8n'} />
            </motion.p>
            {/* Summary paragraph removed */}

            {/* Removed CTA buttons (Ver Proyectos / Contacto) */}

            <motion.div className="mt-16 pt-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.8 }}>
              <p className="text-sm mb-4" style={{ color: 'var(--neo-muted)' }}>
                <FadeText text={isEN ? 'Key technologies' : 'Tecnologías principales'} />
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                {['n8n', 'Supabase', 'PHP', 'CakePHP', 'Node.js', 'Docker'].map((tech) => (
                  <span key={tech} className="neo-chip" title={tech} aria-label={tech}>
                    <TechIcon name={tech} size={28} />
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Profile */}
          <motion.div
            className="flex-1 flex justify-center lg:justify-end mt-16 lg:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="neo-card flex items-center gap-4">
              <div className="neo-avatar">
                <img src="/profile.png" alt="Alexis Palacio - Desarrollador Full-Stack" width="80" height="80" className="w-20 h-20 rounded-full object-cover" />
              </div>
              <div>
                <div className="text-xl font-semibold">Alexis Palacio</div>
                <div style={{ color: 'var(--neo-muted)' }}>Full-Stack Developer</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

