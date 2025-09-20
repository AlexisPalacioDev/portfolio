import { motion } from 'framer-motion';
import { TechIcon } from './icons/TechIcons';
import { useLanguage } from '../utils/useLanguage';
import translations from '../data/translations';
import FadeText from './FadeText';

export default function Experience() {
  const lang = useLanguage();
  const experience = translations[lang].experience;

  return (
    <section id="experience" className="section-container">
      <div className="section-content">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="modern-heading text-4xl lg:text-5xl">
            <FadeText text={experience.title} />
          </h2>
        </motion.div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {experience.items.map((exp, index) => (
            <motion.div
              key={`${exp.title}-${exp.company}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="neo-card"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold" style={{ color: 'var(--neo-text)' }}>
                    {exp.title}
                  </h3>
                  <p style={{ color: 'var(--neo-muted)' }}>
                    {exp.company} ? {exp.location}
                  </p>
                </div>
                <div className="text-sm" style={{ color: 'var(--neo-muted)' }}>
                  {exp.period}
                </div>
              </div>

              <ul className="mt-4 list-disc list-inside" style={{ color: 'var(--neo-muted)' }}>
                {exp.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex}>
                    <FadeText text={bullet} />
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {exp.tech.map((tech) => (
                  <span key={tech} className="neo-chip neo-chip-sm" title={tech} aria-label={tech}>
                    <TechIcon name={tech} />
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
