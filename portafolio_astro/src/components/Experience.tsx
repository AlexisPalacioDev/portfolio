import { motion } from 'framer-motion';
import { TechIcon } from './icons/TechIcons';
import { useLanguage } from '../utils/useLanguage';
import AnimatedText from './AnimatedText';

const experiencesES = [
  {
    title: 'Backend PHP Developer',
    company: 'iMometrics',
    period: 'Jun 2024 – Actualidad',
    location: 'Medellín, Colombia (Remoto)',
    bullets: [
      'Desarrollo de aplicaciones internas con CakePHP 4.6 y PHP 7+',
      'Buenas prácticas (PSR, SOLID) y mejora continua',
      'MySQL, migraciones y optimización de consultas',
      'Automatización con n8n (incl. bots de WhatsApp)',
      'Entornos de desarrollo con Docker y Composer',
    ],
    tech: ['CakePHP 4.6', 'PHP 7+', 'MySQL', 'Docker', 'Git', 'Composer', 'n8n'],
    current: true,
  },
  {
    title: 'Frontend Developer',
    company: 'K Gumi SAS',
    period: 'Ene 2021 – May 2024',
    location: 'Medellín, Colombia',
    bullets: [
      'Sitios y landings con HTML, CSS y JavaScript',
      'Interfaces con Tailwind CSS; enfoque en responsive',
      'Mantenimiento y evolución de sitios corporativos',
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'Git'],
  },
  {
    title: 'Frontend Developer',
    company: 'Wiptool',
    period: 'Mar 2020 – Dic 2020',
    location: 'Medellín, Colombia (Remoto)',
    bullets: [
      'Desarrollo de interfaz (UI) para aplicación web',
      'Integración con Mapbox API para mapas',
      'Implementación de diseño responsive y rutas de navegación',
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Mapbox', 'Git'],
  },
  {
    title: 'Freelance – Automatización n8n e Integraciones IA',
    company: 'Proyectos varios',
    period: '2023 – Actualidad',
    location: 'Remoto',
    bullets: [
      'Flujos automatizados con n8n, APIs REST y bots en Telegram/WhatsApp',
      'Creación de agentes de voz y conexión de LLMs mediante MCP',
      'Supabase para autenticación, storage y base de datos',
      'Despliegues en AWS e integraciones con LLMs locales (Ollama, Router)',
      'Proyectos: BunnyGymWear, CarlJung.app, Restobelge, To‑Do Automation Challenge',
    ],
    tech: ['n8n', 'APIs', 'Telegram', 'Supabase', 'AWS', 'Ollama'],
  },
];

const experiencesEN = [
  {
    title: 'Backend PHP Developer',
    company: 'iMometrics',
    period: 'Jun 2024 – Present',
    location: 'Medellín, Colombia (Remote)',
    bullets: [
      'Internal apps with CakePHP 4.6 and PHP 7+',
      'Best practices (PSR, SOLID) and continuous improvement',
      'MySQL, migrations and query optimization',
      'Automation with n8n (incl. WhatsApp bots)',
      'Dev environments with Docker and Composer',
    ],
    tech: ['CakePHP 4.6', 'PHP 7+', 'MySQL', 'Docker', 'Git', 'Composer', 'n8n'],
    current: true,
  },
  {
    title: 'Frontend Developer',
    company: 'K Gumi SAS',
    period: 'Jan 2021 – May 2024',
    location: 'Medellín, Colombia',
    bullets: [
      'Websites and landings with HTML, CSS and JavaScript',
      'Interfaces with Tailwind CSS; responsive focus',
      'Maintenance and evolution of corporate sites',
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'Git'],
  },
  {
    title: 'Frontend Developer',
    company: 'Wiptool',
    period: 'Mar 2020 – Dec 2020',
    location: 'Medellín, Colombia (Remote)',
    bullets: [
      'UI development for a web application',
      'Integration with Mapbox API for maps',
      'Responsive design and navigation routes',
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Mapbox', 'Git'],
  },
  {
    title: 'Freelance – n8n Automation & AI Integrations',
    company: 'Various projects',
    period: '2023 – Present',
    location: 'Remote',
    bullets: [
      'Automated flows with n8n, REST APIs and Telegram/WhatsApp bots',
      'Voice agents and LLM connections through MCP',
      'Supabase for auth, storage and database',
      'Deployments on AWS and local LLM integrations (Ollama, Router)',
      'Projects: BunnyGymWear, CarlJung.app, Restobelge, To‑Do Automation Challenge',
    ],
    tech: ['n8n', 'APIs', 'Telegram', 'Supabase', 'AWS', 'Ollama'],
  },
];

export default function Experience() {
  const lang = useLanguage();
  const exps = lang === 'en' ? experiencesEN : experiencesES;
  return (
    <section id="experience" className="section-container">
      <div className="section-content">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="modern-heading text-4xl lg:text-5xl"><AnimatedText text={lang === 'en' ? 'Experience' : 'Experiencia'} /></h2>
        </motion.div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {exps.map((exp, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="neo-card">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold" style={{ color: 'var(--neo-text)' }}>{exp.title}</h3>
                  <p style={{ color: 'var(--neo-muted)' }}>
                    {exp.company} · {exp.location}
                  </p>
                </div>
                <div className="text-sm" style={{ color: 'var(--neo-muted)' }}>
                  {exp.period}
                </div>
              </div>

              <ul className="mt-4 list-disc list-inside" style={{ color: 'var(--neo-muted)' }}>
                {exp.bullets.map((b, i) => (
                  <li key={i}><AnimatedText text={b} /></li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {exp.tech.map((t, i) => (
                  <span key={i} className="neo-chip neo-chip-sm" title={t} aria-label={t}>
                    <TechIcon name={t} />
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
