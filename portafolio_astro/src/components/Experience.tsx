import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Backend PHP Developer',
    company: 'iMometrics',
    period: 'Dic 2024 – Actualidad',
    location: 'Medellín, Colombia (Remoto)',
    bullets: [
      'Aplicaciones internas con CakePHP 4.6 y PHP 7+',
      'Mejora continua y buenas prácticas (PSR, SOLID)',
      'MySQL, migraciones y query performance',
      'Automatización con n8n (incluyendo bots de WhatsApp)',
      'Entornos de desarrollo con Docker',
    ],
    tech: ['CakePHP 4.6', 'PHP 7+', 'MySQL', 'Docker', 'Git', 'Composer', 'n8n'],
    current: true,
  },
  {
    title: 'Frontend Developer',
    company: 'K Gumi SAS',
    period: 'Ene 2021 – Dic 2024',
    location: 'Medellín, Colombia',
    bullets: [
      'Sitios y landings con HTML, CSS y JavaScript',
      'Interfaces con Tailwind CSS, enfoque en responsive',
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
      'UI para aplicación web',
      'Integración con API de Mapbox',
      'Rutas de onboarding “app sin app”',
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Mapbox API', 'Git'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding section-experience">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
            📌 Mi Trayectoria
          </span>
          <h2 className="modern-heading text-4xl lg:text-5xl text-gray-900 dark:text-white mt-4">
            Experiencia
          </h2>
        </motion.div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="modern-card"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {exp.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {exp.company} • {exp.location}
                  </p>
                </div>
                <div className="text-sm text-blue-600 dark:text-blue-300 whitespace-nowrap">
                  {exp.period}
                </div>
              </div>

              <ul className="mt-4 list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                {exp.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {exp.tech.map((t, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm">
                    {t}
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

