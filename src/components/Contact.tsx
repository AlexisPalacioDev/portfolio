import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { MailIcon, LocationIcon, GlobeIcon, PhoneIcon } from './icons/UiIcons';
import { TechIcon } from './icons/TechIcons';
import { useLanguage } from '../utils/useLanguage';
import translations from '../data/translations';
import FadeText from './FadeText';

export default function Contact() {
  const lang = useLanguage();
  const t = translations[lang].contact;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const basePath = import.meta.env.BASE_URL ?? '/';
  const normalizedBase = basePath.endsWith('/') ? basePath : `${basePath}/`;
  const resumeHref = `${normalizedBase}${lang === 'en' ? 'AlexisPalacio_ATS_en.pdf' : 'AlexisPalacio_ATS_es.pdf'}`;

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

  const emailButtonLabel = copiedEmail ? t.copied : t.copyEmail;
  const phoneButtonLabel = copiedPhone ? t.copied : t.copyPhone;

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
            <FadeText text={t.title} />
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--neo-muted)' }}>
            <FadeText text={t.subtitle} />
          </p>
        </motion.div>

        <div className="grid gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="neo-card">
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--neo-text)' }}>
                <FadeText text={t.infoTitle} />
              </h3>
              <ul className="space-y-3" style={{ color: 'var(--neo-muted)' }}>
                <li className="flex items-center gap-2 flex-wrap">
                  <span className="flex items-center gap-2">
                    <button
                      type="button"
                      className="neo-chip neo-chip-sm"
                      onClick={() => copyText(email, 'email')}
                      title={t.copyEmail}
                    >
                      {emailButtonLabel}
                    </button>
                    {email}
                  </span>
                  <a
                    href={`mailto:${email}`}
                    className="neo-chip neo-chip-sm inline-flex items-center"
                    title={t.composeEmail}
                  >
                    <MailIcon size={16} />
                  </a>
                </li>
                <li className="flex items-center gap-2 flex-wrap">
                  <span className="flex items-center gap-2">
                    <button
                      type="button"
                      className="neo-chip neo-chip-sm"
                      onClick={() => copyText(phoneDisplay.replace(/\s+/g, ''), 'phone')}
                      title={t.copyPhone}
                    >
                      {phoneButtonLabel}
                    </button>
                    {phoneDisplay}
                  </span>
                  <a
                    href={`https://wa.me/${phoneDigits}?text=${encodeURIComponent(lang === 'en' ? 'Hi Alexis, I saw your portfolio.' : 'Hola Alexis, vi tu portafolio.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neo-chip neo-chip-sm inline-flex items-center"
                    title={t.whatsapp}
                  >
                    <span style={{ filter: 'invert(49%) sepia(85%) saturate(580%) hue-rotate(93deg) brightness(96%) contrast(88%)', display: 'flex', alignItems: 'center' }}>
                      <TechIcon name="WhatsApp" size={16} />
                    </span>
                  </a>
                  <a
                    href={`tel:${phoneDigits}`}
                    className="neo-chip neo-chip-sm inline-flex items-center"
                    title={t.callPhone}
                  >
                    <PhoneIcon size={16} />
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <LocationIcon /> {t.location}
                </li>
                <li className="flex items-center gap-2">
                  <GlobeIcon /> {t.availability}
                </li>
              </ul>
            </div>

            <div className="neo-card">
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--neo-text)' }}>
                <FadeText text={t.resumeTitle} />
              </h3>
              <a
                href={resumeHref}
                target="_blank"
                rel="noopener noreferrer"
                className="neo-btn inline-flex items-center gap-2"
              >
                <FadeText text={t.resumeCta} />
              </a>
            </div>

            <div className="neo-card">
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--neo-text)' }}>
                <FadeText text={t.networksTitle} />
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
