import { motion } from 'framer-motion';
import { TechIcon } from './icons/TechIcons';
import SitePreview from './SitePreview';
import { projects as projectsData } from '../data/projects';
import { useLanguage } from '../utils/useLanguage';
import FadeText from './FadeText';

const categories = ['Todos', 'Full-Stack', 'Frontend', 'E-commerce'];

export default function Projects() {
  const lang = useLanguage();
  const isEN = lang === 'en';
  return (
    <section className="section-container">
      <div className="section-content">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="modern-heading text-4xl lg:text-5xl mb-6"><FadeText text={isEN ? 'Featured Projects' : 'Proyectos Destacados'} /></h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--neo-muted)' }}>
            <FadeText text={isEN ? 'A selection of my most notable work and innovative solutions' : 'Una selección de mis trabajos más destacados y soluciones innovadoras'} />
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button key={category} className="neo-chip">
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="neo-card h-full flex flex-col">
                <div className="relative mb-6">
                  <SitePreview url={project.demo || project.github} fallbackImage={project.image} title={project.title} />
                  <div className="absolute top-3 right-3">
                    <span className="neo-chip text-xs">{project.status}</span>
                  </div>
                </div>
                <div className="flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="modern-subheading text-xl" style={{ color: 'var(--neo-text)' }}>{project.title}</h3>
                    <span className="neo-chip text-xs flex-shrink-0">{project.category}</span>
                  </div>
                  <p className="mb-6 flex-1" style={{ color: 'var(--neo-muted)' }}>
                    <FadeText text={isEN ?
                      (project.title === 'Carl Jung AI' ? 'Educational platform that generates course and lesson content based on Carl Jung archetypes.' :
                       project.title === 'BunnyGymWear' ? 'E‑commerce with a Telegram admin panel that automates product creation and Instagram posts.' :
                       project.title === 'To‑Do Automation Challenge' ? 'To‑do app with AI: fixes text, detects language and manages the task via n8n and Supabase.' :
                       project.title === 'Restobelge' ? 'Restaurant landing page with responsive web design.' :
                       project.description)
                      : project.description} />
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="neo-chip" title={tech} aria-label={tech}>
                        <TechIcon name={tech} size={28} />
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="neo-btn">{isEN ? 'Code' : 'Código'}</a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="neo-btn">Demo</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center">
          <motion.a
            href="https://github.com/alexispalaciodev"
            target="_blank"
            rel="noopener noreferrer"
            className="neo-btn inline-flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FadeText text={isEN ? 'See more projects on GitHub' : 'Ver más proyectos en GitHub'} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
