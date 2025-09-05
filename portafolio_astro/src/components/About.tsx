import { motion } from 'framer-motion';

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
  { number: '4+', label: 'Años de Experiencia', icon: '🗓️' },
  { number: '15+', label: 'Proyectos Completados', icon: '✅' },
  { number: '10+', label: 'Tecnologías', icon: '🧰' },
  { number: '3', label: 'Empresas', icon: '🏢' }
];

export default function About() {
  return (
    <section className="section-container bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="section-content">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
              👋 Sobre mí
            </span>
          </motion.div>
          <h2 className="modern-heading text-4xl lg:text-5xl text-gray-900 dark:text-white mb-6">
            Desarrollador <span className="text-gradient">Apasionado</span>
          </h2>
          <p className="modern-body text-xl max-w-3xl mx-auto">
            Construyo soluciones web modernas y funcionales con más de 4 años de experiencia
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="modern-card">
              <h3 className="modern-subheading text-2xl text-gray-900 dark:text-white mb-6">
                Mi Historia
              </h3>
              <div className="space-y-4 modern-body">
                <p>
                  Soy un desarrollador Full-Stack con <strong className="text-blue-600">4+ años de experiencia</strong> creando 
                  soluciones web desde interfaces de usuario hasta sistemas backend robustos.
                </p>
                <p>
                  Actualmente me especializo en desarrollo backend con <strong className="text-blue-600">PHP y CakePHP</strong>, 
                  mientras mantengo un enfoque integral en tecnologías frontend modernas.
                </p>
                <p>
                  Mi pasión es crear aplicaciones que no solo funcionen bien, sino que también ofrezcan 
                  una experiencia de usuario excepcional y código mantenible.
                </p>
              </div>

              {/* Tech Stack Categories */}
              <div className="mt-8 space-y-4">
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Frontend</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    HTML5 · CSS3 · JavaScript · React · Tailwind CSS
                  </p>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Backend</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    PHP 7+ · CakePHP 4.6 · MySQL · Clean Code
                  </p>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Herramientas</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Git · Docker · n8n · Shopify · WordPress
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="modern-card">
              <h3 className="modern-subheading text-2xl text-gray-900 dark:text-white mb-6">
                Habilidades Técnicas
              </h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-sm px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded">
                          {skill.category}
                        </span>
                        <span className="font-medium text-gray-900 dark:text-white">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm font-semibold text-blue-600">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="h-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ delay: index * 0.1 + 0.3, duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="modern-card text-center"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-blue-600 mb-1">{stat.number}</div>
              <div className="text-sm modern-body">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

