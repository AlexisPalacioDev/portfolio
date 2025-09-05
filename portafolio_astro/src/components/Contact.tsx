import { motion } from 'framer-motion';
import { MailIcon, LocationIcon, GlobeIcon, GithubIcon, LinkedinIcon } from './icons/UiIcons';

export default function Contact() {
  return (
    <section id="contact" className="section-container">
      <div className="section-content">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="modern-heading text-4xl lg:text-5xl">Contacto</h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--neo-muted)' }}>
            ¿Tienes un proyecto en mente? ¡Construyámoslo juntos!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Form */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="neo-card">
            <h3 className="text-2xl font-bold mb-8" style={{ color: 'var(--neo-text)' }}>Envíame un mensaje</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: 'var(--neo-muted)' }}>Nombre</label>
                  <input type="text" className="neo-input" placeholder="Tu nombre" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: 'var(--neo-muted)' }}>Email</label>
                  <input type="email" className="neo-input" placeholder="tu@email.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: 'var(--neo-muted)' }}>Asunto</label>
                <input type="text" className="neo-input" placeholder="¿En qué puedo ayudarte?" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: 'var(--neo-muted)' }}>Mensaje</label>
                <textarea rows={6} className="neo-input resize-none" placeholder="Cuéntame sobre tu proyecto..."></textarea>
              </div>
              <motion.button type="submit" className="w-full neo-btn" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                Enviar Mensaje
              </motion.button>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="space-y-6">
            <div className="neo-card">
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--neo-text)' }}>Información</h3>
              <ul className="space-y-3" style={{ color: 'var(--neo-muted)' }}>
                <li className="flex items-center gap-2"><MailIcon /> alexispalaciodev@gmail.com</li>
                <li className="flex items-center gap-2"><LocationIcon /> Medellín, Colombia</li>
                <li className="flex items-center gap-2"><GlobeIcon /> Disponible remoto / híbrido</li>
              </ul>
            </div>
            <div className="neo-card">
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--neo-text)' }}>Redes</h3>
              <div className="flex gap-3">
                <a href="https://github.com/alexispalaciodev" target="_blank" rel="noopener noreferrer" className="neo-btn inline-flex items-center gap-2">
                  <GithubIcon /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/alexispalaciodev" target="_blank" rel="noopener noreferrer" className="neo-btn inline-flex items-center gap-2">
                  <LinkedinIcon /> LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
