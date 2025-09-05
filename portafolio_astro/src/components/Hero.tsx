import { motion } from 'framer-motion';
import { TechIcon } from './icons/TechIcons';

export default function Hero() {
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
            <div className="mb-6">
              <span className="neo-chip">Disponible para nuevos proyectos</span>
            </div>

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
              Desarrollador Full-Stack
            </motion.p>

            <motion.p
              className="text-lg max-w-2xl lg:max-w-none mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Construyo experiencias digitales modernas y funcionales. Especializado en desarrollo web con más de 4 años de experiencia en tecnologías frontend y backend.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <motion.a href="#projects" className="neo-btn" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                Ver Proyectos
              </motion.a>
              <motion.a href="#contact" className="neo-btn" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                Contacto
              </motion.a>
            </motion.div>

            <motion.div className="mt-16 pt-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.8 }}>
              <p className="text-sm mb-4" style={{ color: 'var(--neo-muted)' }}>
                Tecnologías principales
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                {['PHP', 'JavaScript', 'React', 'CakePHP', 'MySQL', 'Tailwind CSS'].map((tech) => (
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
                <img src="/profile.png" alt="Alexis Palacio - Desarrollador Full-Stack" className="w-20 h-20 rounded-full object-cover" />
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
