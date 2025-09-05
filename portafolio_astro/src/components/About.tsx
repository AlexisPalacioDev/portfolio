import { motion } from 'framer-motion';
import { TechIcon } from './icons/TechIcons';

const skills = [
  { name: 'HTML5', level: 95, category: 'Frontend' },
  { name: 'CSS3', level: 95, category: 'Frontend' },
  { name: 'JavaScript', level: 90, category: 'Frontend' },
  { name: 'React', level: 75, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 90, category: 'Frontend' },
  { name: 'PHP', level: 88, category: 'Backend' },
  { name: 'CakePHP', level: 85, category: 'Backend' },
  { name: 'MySQL', level: 85, category: 'Backend' },
  { name: 'Git', level: 85, category: 'Tools' },
  { name: 'n8n', level: 80, category: 'Tools' }
];

const stats = [
  { number: '4+', label: 'Años de Experiencia' },
  { number: '15+', label: 'Proyectos Completados' },
  { number: '10+', label: 'Tecnologías' },
  { number: '3', label: 'Empresas' }
];

export default function About() {
  return (
    <section className="section-container">
      <div className="section-content">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="neo-chip">Sobre mí</span>
          <h2 className="modern-heading text-4xl lg:text-5xl mb-6 mt-4" style={{ color: 'var(--neo-text)' }}>
            Desarrollador <span className="text-gradient">Apasionado</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--neo-muted)' }}>
            Construyo soluciones web modernas y funcionales con más de 4 años de experiencia
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="space-y-8">
            <div className="neo-card">
              <h3 className="modern-subheading text-2xl mb-6" style={{ color: 'var(--neo-text)' }}>
                Mi Historia
              </h3>
              <div className="space-y-4" style={{ color: 'var(--neo-muted)' }}>
                <p>
                  Soy un desarrollador Full-Stack con <strong>4+ años de experiencia</strong> creando soluciones web desde interfaces de usuario hasta sistemas backend robustos.
                </p>
                <p>
                  Actualmente me especializo en desarrollo backend con <strong>PHP y CakePHP</strong>, mientras mantengo un enfoque integral en tecnologías frontend modernas.
                </p>
                <p>
                  Mi pasión es crear aplicaciones que no solo funcionen bien, sino que también ofrezcan una experiencia de usuario excepcional y código mantenible.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <div className="neo-inset p-4 rounded-[var(--neo-radius)]">
                  <h4 className="font-semibold mb-2" style={{ color: 'var(--neo-text)' }}>Frontend</h4>
                  <p className="text-sm" style={{ color: 'var(--neo-muted)' }}>HTML5 · CSS3 · JavaScript · React · Tailwind CSS</p>
                </div>
                <div className="neo-inset p-4 rounded-[var(--neo-radius)]">
                  <h4 className="font-semibold mb-2" style={{ color: 'var(--neo-text)' }}>Backend</h4>
                  <p className="text-sm" style={{ color: 'var(--neo-muted)' }}>PHP 7+ · CakePHP 4.6 · MySQL · Clean Code</p>
                </div>
                <div className="neo-inset p-4 rounded-[var(--neo-radius)]">
                  <h4 className="font-semibold mb-2" style={{ color: 'var(--neo-text)' }}>Herramientas</h4>
                  <p className="text-sm" style={{ color: 'var(--neo-muted)' }}>Git · Docker · n8n · Shopify · WordPress</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
            <div className="neo-card">
              <h3 className="modern-subheading text-2xl mb-6" style={{ color: 'var(--neo-text)' }}>
                Habilidades Técnicas
              </h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div key={skill.name} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1, duration: 0.4 }} viewport={{ once: true }}>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-3">
                        <span className="neo-chip neo-chip-sm" title={skill.category}>{skill.category}</span>
                        <span className="flex items-center gap-2 font-medium" style={{ color: 'var(--neo-text)' }}>
                          <TechIcon name={skill.name} />
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm font-semibold" style={{ color: 'var(--neo-text)' }}>{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 neo-inset rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        style={{ height: '100%', background: 'linear-gradient(90deg, #ff6b6b, #ffd93d, #6bcb77, #4d96ff)' }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="neo-card text-center">
              <div className="text-3xl font-bold mb-1" style={{ color: 'var(--neo-text)' }}>{stat.number}</div>
              <div className="text-sm" style={{ color: 'var(--neo-muted)' }}>{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
