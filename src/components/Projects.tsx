import { motion } from 'framer-motion';
import { TechIcon } from './icons/TechIcons';
import SitePreview from './SitePreview';
import { projects as projectsData } from '../data/projects';
import { useLanguage } from '../utils/useLanguage';
import translations from '../data/translations';
import FadeText from './FadeText';

export default function Projects() {
  const lang = useLanguage();
  const copy = translations[lang].projects;

  return (
    <section className="section-container">
      <div className="section-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="modern-heading text-4xl lg:text-5xl mb-6">
            <FadeText text={copy.title} />
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--neo-muted)' }}>
            <FadeText text={copy.description} />
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="flex flex-wrap gap-2">
            {copy.filters.map((category) => (
              <button key={category} className="neo-chip">
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projectsData.map((project, index) => {
            const title = project.title[lang];
            const description = project.description[lang];
            const category = project.category?.[lang];
            const status = project.status?.[lang];

            return (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="neo-card h-full flex flex-col">
                  <div className="relative mb-6">
                    <SitePreview url={project.demo || project.github} fallbackImage={project.image} title={title} />
                    {status && (
                      <div className="absolute top-3 right-3">
                        <span className="neo-chip text-xs">{status}</span>
                      </div>
                    )}
                  </div>
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="modern-subheading text-xl" style={{ color: 'var(--neo-text)' }}>
                        {title}
                      </h3>
                      {category && <span className="neo-chip text-xs flex-shrink-0">{category}</span>}
                    </div>
                    <p className="mb-6 flex-1" style={{ color: 'var(--neo-muted)' }}>
                      <FadeText text={description} />
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="neo-chip" title={tech} aria-label={tech}>
                          <TechIcon name={tech} size={28} />
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 flex items-center gap-3">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="neo-btn">
                        {copy.githubLabel}
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="neo-btn">
                        {copy.demoLabel}
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.a
            href="https://github.com/alexispalaciodev"
            target="_blank"
            rel="noopener noreferrer"
            className="neo-btn inline-flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FadeText text={copy.cta} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
