import { motion } from 'framer-motion';

const contactInfo = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Email',
    value: 'alexis26-93@live.com',
    link: 'mailto:alexis26-93@live.com'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: 'Teléfono',
    value: '+57 321 655 1350',
    link: 'tel:+573216551350'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Ubicación',
    value: 'Medellín, Colombia',
    link: null
  }
];

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    url: 'https://www.linkedin.com/in/poisoneddog/',
    color: 'hover:text-blue-600'
  },
  {
    name: 'GitHub',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    url: 'https://github.com/alexispalaciodev',
    color: 'hover:text-gray-800 dark:hover:text-gray-200'
  },
  {
    name: 'Portfolio',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    url: 'https://alexispalaciodev.github.io/portfolio/',
    color: 'hover:text-blue-500'
  }
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding section-contact">
      {/* Minimal background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full opacity-3" 
             style={{background: 'radial-gradient(circle, var(--accent-primary) 0%, transparent 70%)'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-20 h-20 rounded-full opacity-3"
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
            <span className="neo-inset px-8 py-4 rounded-3xl text-lg font-medium text-neo-secondary" style={{background: 'var(--section-contact)'}}>
              📞 Hablemos
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            <span className="text-accent">Contacto</span>
          </h2>
          <p className="text-xl text-neo-muted max-w-3xl mx-auto">
            ¿Tienes un proyecto en mente? ¡Hablemos y creemos algo increíble juntos!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="neo-card neo-elevated"
            style={{background: 'var(--section-contact)'}}
          >
            <h3 className="text-2xl font-bold mb-8 text-neo-primary flex items-center gap-4">
              <div className="w-12 h-12 neo-inset rounded-2xl flex items-center justify-center text-2xl" style={{background: 'var(--section-contact)'}}>
                ✉️
              </div>
              Envíame un mensaje
            </h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-neo-primary mb-3">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="w-full neo-inset px-4 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300 text-neo-primary"
                    style={{background: 'var(--section-contact)'}}
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-neo-primary mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full neo-inset px-4 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300 text-neo-primary"
                    style={{background: 'var(--section-contact)'}}
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-neo-primary mb-3">
                  Asunto
                </label>
                <input
                  type="text"
                  className="w-full neo-inset px-4 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300 text-neo-primary"
                  style={{background: 'var(--section-contact)'}}
                  placeholder="¿En qué puedo ayudarte?"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-neo-primary mb-3">
                  Mensaje
                </label>
                <textarea
                  rows={6}
                  className="w-full neo-inset px-4 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300 resize-none text-neo-primary"
                  style={{background: 'var(--section-contact)'}}
                  placeholder="Cuéntame sobre tu proyecto..."
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                className="w-full neo-btn-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Enviar Mensaje
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="neo-card neo-elevated" style={{background: 'var(--section-contact)'}}>
              <h3 className="text-2xl font-bold mb-8 text-neo-primary flex items-center gap-4">
                <div className="w-12 h-12 neo-inset rounded-2xl flex items-center justify-center text-2xl" style={{background: 'var(--section-contact)'}}>
                  📍
                </div>
                Información de contacto
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-12 h-12 neo-elevated rounded-2xl flex items-center justify-center text-accent" style={{background: 'var(--section-contact)'}}>
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-neo-primary mb-1">
                        {info.title}
                      </h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-neo-muted hover:text-accent transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-neo-muted">
                          {info.value}
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="neo-card neo-elevated" style={{background: 'var(--section-contact)'}}>
              <h3 className="text-xl font-bold mb-6 text-neo-primary flex items-center gap-4">
                <div className="w-10 h-10 neo-inset rounded-xl flex items-center justify-center text-lg" style={{background: 'var(--section-contact)'}}>
                  🔗
                </div>
                Sígueme en
              </h3>
              
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 neo-elevated rounded-2xl flex items-center justify-center text-neo-muted hover:text-accent transition-all duration-300"
                    style={{background: 'var(--section-contact)'}}
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="neo-card neo-elevated" style={{background: 'var(--section-contact)'}}>
              <h3 className="text-xl font-bold mb-4 text-neo-primary flex items-center gap-4">
                <div className="w-10 h-10 neo-inset rounded-xl flex items-center justify-center text-lg" style={{background: 'var(--section-contact)'}}>
                  ⏰
                </div>
                Disponibilidad
              </h3>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                <span className="text-neo-muted">
                  Disponible para nuevos proyectos
                </span>
              </div>
              <div className="mt-4 neo-inset p-4 rounded-2xl" style={{background: 'var(--section-contact)'}}>
                <p className="text-sm text-neo-muted">
                  <strong className="text-neo-primary">Modalidad:</strong> Remoto / Híbrido<br />
                  <strong className="text-neo-primary">Ubicación:</strong> Medellín, Colombia
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}