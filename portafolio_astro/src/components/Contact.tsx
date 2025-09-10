import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { MailIcon, LocationIcon, GlobeIcon } from './icons/UiIcons';
import { TechIcon } from './icons/TechIcons';
import { useLanguage } from '../utils/useLanguage';
import FadeText from './FadeText';

export default function Contact() {
  const lang = useLanguage();
  const isEN = lang === 'en';
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const email = 'alexis26-93@live.com';
  const phoneDisplay = '+57 321 655 1350';
  const phoneDigits = '573216551350';

  const copyText = async (text: string, which: 'email' | 'phone') => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.left = '-9999px';
        document.body.appendChild(ta);
        ta.focus();
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }
      if (which === 'email') {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 1500);
      } else {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 1500);
      }
    } catch {}
  };
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
                <li className="flex items-center gap-3 flex-wrap">
                  <span className="flex items-center gap-2"><MailIcon /> {email}</span>
                  <button
                    type="button"
                    className="neo-chip neo-chip-sm"
                    onClick={() => copyText(email, 'email')}
                    aria-label={isEN ? 'Copy email' : 'Copiar correo'}
                    title={isEN ? 'Copy email' : 'Copiar correo'}
                  >
                    {copiedEmail ? (isEN ? 'Copied ✓' : 'Copiado ✓') : (isEN ? 'Copy' : 'Copiar')}
                  </button>
                </li>
                <li className="flex items-center gap-3 flex-wrap">
                  <span className="flex items-center gap-2">📞 {phoneDisplay}</span>
                  <button
                    type="button"
                    className="neo-chip neo-chip-sm"
                    onClick={() => copyText(phoneDisplay.replace(/\s+/g, ''), 'phone')}
                    aria-label={isEN ? 'Copy phone' : 'Copiar teléfono'}
                    title={isEN ? 'Copy phone' : 'Copiar teléfono'}
                  >
                    {copiedPhone ? (isEN ? 'Copied ✓' : 'Copiado ✓') : (isEN ? 'Copy' : 'Copiar')}
                  </button>
                  <a
                    href={`https://wa.me/${phoneDigits}?text=${encodeURIComponent(isEN ? 'Hi Alexis, I saw your portfolio.' : 'Hola Alexis, vi tu portafolio.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neo-chip neo-chip-sm"
                    aria-label={isEN ? 'Open WhatsApp' : 'Abrir WhatsApp'}
                    title="WhatsApp"
                  >
                    🟢 WhatsApp
                  </a>
                </li>
                <li className="flex items-center gap-2"><LocationIcon /> Medellín, Colombia</li>
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
