import { motion } from 'framer-motion';
import { MailIcon, LocationIcon, GlobeIcon } from './icons/UiIcons';
import { TechIcon } from './icons/TechIcons';
import { useLanguage } from '../utils/useLanguage';
import AnimatedText from './AnimatedText';

export default function Contact() {
  const lang = useLanguage();
  const isEN = lang === 'en';
  return (
    <section id="contact" className="section-container">
      <div className="section-content">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="modern-heading text-4xl lg:text-5xl"><AnimatedText text={isEN ? 'Contact' : 'Contacto'} /></h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--neo-muted)' }}>
            <AnimatedText text={isEN ? 'Got a project in mind? Let’s build it together!' : '¿Tienes un proyecto en mente? ¡Construyámoslo juntos!'} />
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Form */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="neo-card">
            <h3 className="text-2xl font-bold mb-8" style={{ color: 'var(--neo-text)' }}><AnimatedText text={isEN ? 'Send me a message' : 'Envíame un mensaje'} /></h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: 'var(--neo-muted)' }}><AnimatedText text={isEN ? 'Name' : 'Nombre'} /></label>
                  <input type="text" className="neo-input" placeholder={isEN ? 'Your name' : 'Tu nombre'} />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: 'var(--neo-muted)' }}><AnimatedText text={'Email'} /></label>
                  <input type="email" className="neo-input" placeholder={isEN ? 'you@email.com' : 'tu@email.com'} />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: 'var(--neo-muted)' }}><AnimatedText text={isEN ? 'Subject' : 'Asunto'} /></label>
                <input type="text" className="neo-input" placeholder={isEN ? 'How can I help?' : '¿En qué puedo ayudarte?'} />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: 'var(--neo-muted)' }}><AnimatedText text={isEN ? 'Message' : 'Mensaje'} /></label>
                <textarea rows={6} className="neo-input resize-none" placeholder={isEN ? 'Tell me about your project...' : 'Cuéntame sobre tu proyecto...'}></textarea>
              </div>
              <motion.button type="submit" className="w-full neo-btn" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <AnimatedText text={isEN ? 'Send Message' : 'Enviar Mensaje'} />
              </motion.button>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="space-y-6">
            <div className="neo-card">
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--neo-text)' }}><AnimatedText text={isEN ? 'Information' : 'Información'} /></h3>
              <ul className="space-y-3" style={{ color: 'var(--neo-muted)' }}>
                <li className="flex items-center gap-2"><MailIcon /> alexis26-93@live.com</li>
                <li className="flex items-center gap-2"><LocationIcon /> Medellín, Colombia</li>
                <li className="flex items-center gap-2">📞 +57 321 655 1350</li>
                <li className="flex items-center gap-2"><GlobeIcon /> {isEN ? 'Available remote / hybrid' : 'Disponible remoto / híbrido'}</li>
              </ul>
            </div>
            <div className="neo-card">
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--neo-text)' }}><AnimatedText text={isEN ? 'Resume' : 'Currículum'} /></h3>
              <a href="/AlexisPalacio_ATS.pdf" target="_blank" rel="noopener noreferrer" className="neo-btn inline-flex items-center gap-2"><AnimatedText text={isEN ? 'Download CV (PDF)' : 'Descargar CV (PDF)'} /></a>
            </div>
            <div className="neo-card">
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--neo-text)' }}><AnimatedText text={isEN ? 'Networks' : 'Redes'} /></h3>
              <div className="flex gap-3">
                <a href="https://github.com/alexispalaciodev" target="_blank" rel="noopener noreferrer" className="neo-btn inline-flex items-center gap-2">
                  <TechIcon name="GitHub" size={20} /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/poisoneddog/" target="_blank" rel="noopener noreferrer" className="neo-btn inline-flex items-center gap-2">
                  <TechIcon name="LinkedIn" size={20} /> LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
