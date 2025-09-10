import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { MailIcon, LocationIcon, GlobeIcon } from './icons/UiIcons';
import { TechIcon } from './icons/TechIcons';
import { useLanguage } from '../utils/useLanguage';
import FadeText from './FadeText';

export default function Contact() {
  const lang = useLanguage();
  const isEN = lang === 'en';
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [openEmailMenu, setOpenEmailMenu] = useState(false);
  const [openPhoneMenu, setOpenPhoneMenu] = useState(false);
  const emailItemRef = useRef<HTMLLIElement | null>(null);
  const phoneItemRef = useRef<HTMLLIElement | null>(null);

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

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (openEmailMenu && emailItemRef.current && !emailItemRef.current.contains(target)) {
        setOpenEmailMenu(false);
      }
      if (openPhoneMenu && phoneItemRef.current && !phoneItemRef.current.contains(target)) {
        setOpenPhoneMenu(false);
      }
    };
    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, [openEmailMenu, openPhoneMenu]);
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
                {/* Email row with contextual menu */}
                <li ref={emailItemRef} className="relative flex items-center justify-between gap-3 flex-wrap">
                  <button
                    type="button"
                    className="flex items-center gap-2 hover:opacity-90"
                    onClick={() => setOpenEmailMenu((v) => !v)}
                    aria-haspopup="menu"
                    aria-expanded={openEmailMenu}
                    title={isEN ? 'Email options' : 'Opciones de correo'}
                    style={{ color: 'var(--neo-text)' }}
                  >
                    <MailIcon /> {email}
                  </button>
                  {openEmailMenu && (
                    <div className="absolute right-0 top-full mt-2 neo-inset p-2 rounded-[var(--neo-radius)] z-10">
                      <div className="flex flex-col min-w-[180px]">
                        <a
                          href={`mailto:${email}`}
                          className="neo-btn mb-2"
                        >
                          {isEN ? 'Compose email' : 'Escribir correo'}
                        </a>
                        <button
                          type="button"
                          className="neo-btn"
                          onClick={() => copyText(email, 'email')}
                        >
                          {copiedEmail ? (isEN ? 'Copied ✓' : 'Copiado ✓') : (isEN ? 'Copy email' : 'Copiar correo')}
                        </button>
                      </div>
                    </div>
                  )}
                </li>

                {/* Phone row with contextual menu */}
                <li ref={phoneItemRef} className="relative flex items-center justify-between gap-3 flex-wrap">
                  <button
                    type="button"
                    className="flex items-center gap-2 hover:opacity-90"
                    onClick={() => setOpenPhoneMenu((v) => !v)}
                    aria-haspopup="menu"
                    aria-expanded={openPhoneMenu}
                    title={isEN ? 'Phone options' : 'Opciones de teléfono'}
                    style={{ color: 'var(--neo-text)' }}
                  >
                    📞 {phoneDisplay}
                  </button>
                  {openPhoneMenu && (
                    <div className="absolute right-0 top-full mt-2 neo-inset p-2 rounded-[var(--neo-radius)] z-10">
                      <div className="flex flex-col min-w-[220px]">
                        <a
                          href={`https://wa.me/${phoneDigits}?text=${encodeURIComponent(isEN ? 'Hi Alexis, I saw your portfolio.' : 'Hola Alexis, vi tu portafolio.')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="neo-btn mb-2 inline-flex items-center gap-2"
                        >
                          <TechIcon name="WhatsApp" size={18} /> WhatsApp
                        </a>
                        <a href={`tel:${phoneDigits}`} className="neo-btn mb-2">
                          {isEN ? 'Call' : 'Llamar'}
                        </a>
                        <button
                          type="button"
                          className="neo-btn"
                          onClick={() => copyText(phoneDisplay.replace(/\s+/g, ''), 'phone')}
                        >
                          {copiedPhone ? (isEN ? 'Copied ✓' : 'Copiado ✓') : (isEN ? 'Copy number' : 'Copiar número')}
                        </button>
                      </div>
                    </div>
                  )}
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
