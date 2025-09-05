import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Carl Jung AI',
    description: 'Plataforma educativa que genera contenido formativo basado en arquetipos de Carl Jung.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Supabase', 'OpenAI API'],
    image: '🧠',
    github: '#',
    demo: 'https://carljung.app/home',
    category: 'Full-Stack',
    status: 'Activo',
  },
  {
    title: 'PoisoneD Merch',
    description: 'Tienda online personalizada con Shopify para venta de merchandise.',
    technologies: ['Shopify', 'JavaScript', 'CSS3', 'Liquid'],
    image: '🛍️',
    github: '#',
    demo: '#',
    category: 'E-commerce',
    status: 'Completado',
  },
  {
    title: 'Portfolio Personal',
    description: 'Sitio web personal con tecnologías modernas y diseño responsive.',
    technologies: ['Astro', 'React', 'Tailwind CSS', 'Framer Motion'],
    image: '💼',
    github: 'https://github.com/alexispalaciodev',
    demo: 'https://alexispalaciodev.github.io/portfolio/',
    category: 'Frontend',
    status: 'Activo',
  },
];

const categories = ['Todos', 'Full-Stack', 'Frontend', 'E-commerce'];

export default function Projects() {
  return (
    <section className="section-container">
      <div className="section-content">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="neo-chip">Mi trabajo</span>
          <h2 className="modern-heading text-4xl lg:text-5xl mb-6 mt-4">Proyectos Destacados</h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--neo-muted)' }}>
            Una selección de mis trabajos más destacados y soluciones innovadoras
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
          {projects.map((project, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} className="group">
              <div className="neo-card h-full flex flex-col">
                <div className="relative mb-6">
                  <div className="w-full h-48 neo-inset rounded-[var(--neo-radius)] flex items-center justify-center">
                    <div className="text-6xl">{project.image}</div>
                    <div className="absolute top-3 right-3">
                      <span className="neo-chip text-xs">{project.status}</span>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="modern-subheading text-xl" style={{ color: 'var(--neo-text)' }}>{project.title}</h3>
                    <span className="neo-chip text-xs flex-shrink-0">{project.category}</span>
                  </div>
                  <p className="mb-6 flex-1" style={{ color: 'var(--neo-muted)' }}>{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="neo-chip text-sm">{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="neo-btn">Código</a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="neo-btn">Demo</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center">
          <motion.a href="https://github.com/alexispalaciodev" target="_blank" rel="noopener noreferrer" className="neo-btn inline-flex items-center gap-2" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            Ver más proyectos en GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

