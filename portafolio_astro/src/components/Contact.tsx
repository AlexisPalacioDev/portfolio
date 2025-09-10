import { motion } from 'framer-motion';
import { MailIcon, LocationIcon, GlobeIcon } from './icons/UiIcons';
import { TechIcon } from './icons/TechIcons';
import { useLanguage } from '../utils/useLanguage';
import FadeText from './FadeText';

export default function Contact() {
  const lang = useLanguage();
  const isEN = lang === 'en';
  return (
    <section id="contact" className="section-container">
      <div className="section-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="modern-heading text-4xl lg:text-5xl">
            <FadeText text={isEN ? 'Contact' : 'Contacto'} />
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--neo-muted)' }}>
            <FadeText
              text={isEN
                ? "Got a project in mind? Let's build it together!"
                : '¿Tienes un proyecto en mente? ¡Construyámoslo juntos!'}
            />
          </p>
        </motion.div>

        <div className="grid gap-12 max-w-6xl mx-auto">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="neo-card">
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--neo-text)' }}>
                <FadeText text={isEN ? 'Information' : 'Información'} />
              </h3>
              <ul className="space-y-3" style={{ color: 'var(--neo-muted)' }}>
                <li className="flex items-center gap-2"><MailIcon /> alexis26-93@live.com</li>
                <li className="flex items-center gap-2"><LocationIcon /> Medellín, Colombia</li>
                <li className="flex items-center gap-2">📞 +57 321 655 1350</li>
                <li className="flex items-center gap-2"><GlobeIcon /> {isEN ? 'Available remote / hybrid' : 'Disponible remoto / híbrido'}</li>
              </ul>
            </div>

            <div className="neo-card">
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--neo-text)' }}>
                <FadeText text={isEN ? 'Resume' : 'Currículum'} />
              </h3>
              <a
                href="/AlexisPalacio_ATS.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="neo-btn inline-flex items-center gap-2"
              >
                <FadeText text={isEN ? 'Download CV (PDF)' : 'Descargar CV (PDF)'} />
              </a>
            </div>

            <div className="neo-card">
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--neo-text)' }}>
                <FadeText text={isEN ? 'Networks' : 'Redes'} />
              </h3>
              <div className="flex gap-3">
                <a
                  href="https://github.com/alexispalaciodev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neo-btn inline-flex items-center gap-2"
                >
                  <TechIcon name="GitHub" size={20} /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/poisoneddog/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neo-btn inline-flex items-center gap-2"
                >
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

