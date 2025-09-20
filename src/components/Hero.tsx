import { motion } from 'framer-motion';
import { TechIcon } from './icons/TechIcons';
import { useLanguage } from '../utils/useLanguage';
import translations from '../data/translations';
import FadeText from './FadeText';

const FEATURED_TECH = ['n8n', 'Supabase', 'HTML5', 'CakePHP', 'JavaScript', 'Docker'];

export default function Hero() {
  const lang = useLanguage();
  const hero = translations[lang].hero;
  const basePath = import.meta.env.BASE_URL ?? '/';
  const normalizedBase = basePath.endsWith('/') ? basePath : `${basePath}/`;
  const profileSrc = `${normalizedBase}profile.jpg`;

  return (
    <section className="min-h-[70vh] relative">
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <motion.div
            className="flex-1 lg:pr-12 text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
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
              <FadeText text={hero.subtitle} />
            </motion.p>

            <motion.div className="mt-16 pt-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.8 }}>
              <p className="text-sm mb-4" style={{ color: 'var(--neo-muted)' }}>
                <FadeText text={hero.techHeading} />
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                {FEATURED_TECH.map((tech) => (
                  <span key={tech} className="neo-chip" title={tech} aria-label={tech}>
                    <TechIcon name={tech} size={28} />
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-1 flex justify-center lg:justify-end mt-8 lg:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="neo-card flex items-center gap-6 p-8">
              <div className="neo-avatar w-32 h-32">
                <img
                  src={profileSrc}
                  alt={hero.profileAlt}
                  width="128"
                  height="128"
                  className="w-32 h-32 rounded-full object-cover"
                />
              </div>
              <div>
                <div className="text-2xl font-semibold mb-2">Alexis Palacio</div>
                <div className="text-lg" style={{ color: 'var(--neo-muted)' }}>{hero.profileRole}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
