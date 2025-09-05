import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Backend PHP Developer',
    company: 'iMometrics',
    period: 'Diciembre 2024 - Actualidad',
    location: 'Medellín, Colombia (Remoto)',
    description: [
      'Desarrollo de aplicaciones internas usando CakePHP 4.6 y PHP 7+',
      'Mantenimiento y mejora de código existente siguiendo buenas prácticas',
      'Trabajo con bases de datos MySQL y manejo de migraciones',
      'Automatización de procesos con n8n, incluyendo agentes de WhatsApp',
      'Trabajo con Docker para entornos de desarrollo'
    ],
    technologies: ['CakePHP 4.6', 'PHP 7+', 'MySQL', 'Docker', 'Git', 'Composer', 'n8n'],
    color: 'var(--accent-primary)',
    current: true
  },
  {
    title: 'Frontend Developer',
    company: 'K Gumi SAS',
    period: 'Enero 2021 - Diciembre 2024',
    location: 'Medellín, Colombia',
    description: [
      'Desarrollo de páginas web con HTML, CSS y JavaScript',
      'Creación de sitios para modelos usando Tailwind CSS',
      'Colaboración con el equipo en proyectos web corporativos',
      'Mantenimiento de sitios web existentes'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'Git'],
    color: 'var(--accent-secondary)',
    current: false
  },
  {
    title: 'Frontend Developer',
    company: 'Wiptool',
    period: 'Marzo 2020 - Diciembre 2020',
    location: 'Medellín, Colombia (Remoto)',
    description: [
      'Desarrollo de interfaz de usuario para aplicación web',
      'Integración con API de Mapbox para funcionalidades de mapas',
      'Implementación de rutas de inicio y fin para "experiencia app sin app"',
      'Desarrollo de interfaces responsivas'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Mapbox API', 'Git'],
    color: 'var(--accent-success)',
    current: false
  }
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding section-experience">
      {/* Minimal background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-20 h-20 rounded-full opacity-3" 
             style={{background: 'radial-gradient(circle, var(--accent-primary) 0%, transparent 70%)'}}></div>
        <div className="absolute bottom-1/3 right-1/4 w-16 h-16 rounded-full opacity-3"
             style={{background: 'radial-gradient(circle, var(--accent-success) 0%, transparent 70%)'}}></div>
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block mb-8"
          >
            <span className="neo-inset px-8 py-4 rounded-3xl text-lg font-medium text-neo-secondary" style={{background: 'var(--section-experience)'}}>
              💼 Mi Trayectoria
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            <span className="text-accent">Experiencia</span>
          </h2>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Timeline Line - Hidden on mobile */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full hidden lg:block"
               style={{background: 'linear-gradient(to bottom, var(--accent-primary), var(--accent-secondary), var(--accent-success))', opacity: 0.3}}></div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`lg:flex items-center gap-12 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 z-20">
                  <div className="w-6 h-6 rounded-full neo-elevated flex items-center justify-center" style={{background: 'var(--section-experience)'}}>
                    <div className="w-3 h-3 rounded-full" style={{background: exp.color}}></div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-1/2">
                  <div className="neo-card neo-elevated group hover:scale-105 transition-all duration-500" style={{background: 'var(--section-experience)'}}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-4 h-4 rounded-full shadow-lg" style={{background: exp.color}}></div>
                      <div className="neo-inset px-4 py-2 rounded-2xl" style={{background: 'var(--section-experience)'}}>
                        <span className="text-sm text-neo-muted font-semibold">
                          {exp.period}
                        </span>
                      </div>
                      {exp.current && (
                        <div className="neo-elevated px-3 py-1 rounded-xl" style={{background: 'var(--section-experience)'}}>
                          <span className="text-xs font-bold text-accent">ACTUAL</span>
                        </div>
                      )}
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-neo-primary mb-4">
                      {exp.title}
                    </h3>
                    
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-xl font-bold text-accent">
                        {exp.company}
                      </span>
                      <div className="w-2 h-2 rounded-full bg-neo-secondary/40"></div>
                      <span className="text-neo-muted font-medium">{exp.location}</span>
                    </div>

                    <div className="space-y-3 mb-8">
                      {exp.description.map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1, duration: 0.5 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-4 text-neo-muted"
                        >
                          <div className="w-6 h-6 neo-inset rounded-lg flex items-center justify-center mt-1 flex-shrink-0" style={{background: 'var(--section-experience)'}}>
                            <div className="w-2 h-2 rounded-full" style={{background: exp.color}}></div>
                          </div>
                          <span className="leading-relaxed">{item}</span>
                        </motion.div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="neo-elevated px-4 py-2 rounded-2xl text-sm font-medium text-neo-primary hover:scale-105 transition-transform duration-200"
                          style={{background: 'var(--section-experience)'}}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden lg:block lg:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}