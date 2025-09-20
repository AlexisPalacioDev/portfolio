import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { TechIcon } from './icons/TechIcons';
import { useLanguage } from '../utils/useLanguage';
import translations from '../data/translations';
import FadeText from './FadeText';
import type { SkillCategoryKey } from '../types';

interface SkillItem {
  name: string;
  level: number;
  category: SkillCategoryKey;
}

const skills: SkillItem[] = [
  { name: 'n8n', level: 90, category: 'automation' },
  { name: 'Supabase', level: 85, category: 'backend' },
  { name: 'MySQL', level: 85, category: 'backend' },
  { name: 'PHP', level: 88, category: 'backend' },
  { name: 'CakePHP', level: 85, category: 'backend' },
  { name: 'Node.js', level: 80, category: 'backend' },
  { name: 'Python', level: 75, category: 'backend' },
  { name: 'Next.js', level: 70, category: 'frontend' },
  { name: 'React', level: 75, category: 'frontend' },
  { name: 'Tailwind CSS', level: 90, category: 'frontend' },
  { name: 'HTML5', level: 95, category: 'frontend' },
  { name: 'CSS3', level: 95, category: 'frontend' },
  { name: 'Docker', level: 70, category: 'infra' },
  { name: 'Git', level: 85, category: 'tools' },
  { name: 'Shopify', level: 70, category: 'tools' },
  { name: 'WordPress', level: 75, category: 'tools' },
  { name: 'Figma', level: 70, category: 'tools' }
];

const HIGHLIGHT_ORDER: Array<'frontend' | 'backend' | 'automation'> = ['frontend', 'backend', 'automation'];

export default function About() {
  const lang = useLanguage();
  const about = translations[lang].about;
  const skillCategoryLabels = about.skillCategories;

  return (
    <section className="section-container">
      <div className="section-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="neo-chip">
            <FadeText text={about.sectionLabel} />
          </span>
          <h2 className="modern-heading text-4xl lg:text-5xl mb-6 mt-4" style={{ color: 'var(--neo-text)' }}>
            {about.heading.regular}{' '}
            <span className="text-gradient">{about.heading.highlight}</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="neo-card">
              <h3 className="modern-subheading text-2xl mb-6" style={{ color: 'var(--neo-text)' }}>
                {about.storyTitle}
              </h3>
              <div className="space-y-4" style={{ color: 'var(--neo-muted)' }}>
                {about.paragraphs.map((text, index) => (
                  <p key={index}>
                    <FadeText text={text} />
                  </p>
                ))}
              </div>

              <div className="mt-8 space-y-4">
                {HIGHLIGHT_ORDER.map((key) => {
                  const highlight = about.highlights[key];
                  return (
                    <div key={key} className="neo-inset p-4 rounded-[var(--neo-radius)]">
                      <h4 className="font-semibold mb-2" style={{ color: 'var(--neo-text)' }}>
                        {highlight.title}
                      </h4>
                      <p className="text-sm" style={{ color: 'var(--neo-muted)' }}><FadeText text={highlight.description} /></p>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="neo-card">
              <h3 className="modern-subheading text-2xl mb-6" style={{ color: 'var(--neo-text)' }}>
                {about.skillsTitle}
              </h3>
              <div className="space-y-6">
                {skills.map((skill, index) => {
                  const categoryLabel = skillCategoryLabels[skill.category];
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-3">
                          <span className="neo-chip neo-chip-sm" title={categoryLabel}>
                            {categoryLabel}
                          </span>
                          <span className="flex items-center gap-2 font-medium" style={{ color: 'var(--neo-text)' }}>
                            <TechIcon name={skill.name} />
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm font-semibold" style={{ color: 'var(--neo-text)' }}>
                          {skill.level}%
                        </span>
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
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-6"
        >
          {about.stats.map((stat) => (
            <div key={stat.label} className="neo-card text-center">
              <Counter text={stat.number} className="text-3xl font-bold mb-1" />
              <div className="text-sm" style={{ color: 'var(--neo-muted)' }}>{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Counter({ text, className = '', duration = 1200 }: { text: string; className?: string; duration?: number }) {
  const [display, setDisplay] = useState('0');
  const ref = useRef<HTMLDivElement | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const m = text.trim().match(/^(\d+)(.*)$/);
    const target = m ? parseInt(m[1], 10) : 0;
    const suffix = m ? m[2] : '';
    if (!ref.current || !('IntersectionObserver' in window)) {
      setDisplay(text);
      return;
    }
    const el = ref.current;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const start = performance.now();
          const step = (now: number) => {
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            const val = Math.round(eased * target);
            setDisplay(`${val}${suffix}`);
            if (t < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [text, duration]);

  return (
    <div ref={ref} className={className} style={{ color: 'var(--neo-text)' }}>
      {display}
    </div>
  );
}
