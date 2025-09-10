import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { TechIcon } from './icons/TechIcons';
import { useLanguage } from '../utils/useLanguage';
import AnimatedText from './AnimatedText';

const skills = [
  { name: 'n8n', level: 90, category: 'Automatización' },
  { name: 'Supabase', level: 85, category: 'Backend' },
  { name: 'MySQL', level: 85, category: 'Backend' },
  { name: 'PHP', level: 88, category: 'Backend' },
  { name: 'CakePHP', level: 85, category: 'Backend' },
  { name: 'Node.js', level: 80, category: 'Backend' },
  { name: 'Python', level: 75, category: 'Backend' },
  { name: 'Next.js', level: 70, category: 'Frontend' },
  { name: 'React', level: 75, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 90, category: 'Frontend' },
  { name: 'HTML5', level: 95, category: 'Frontend' },
  { name: 'CSS3', level: 95, category: 'Frontend' },
  { name: 'Docker', level: 70, category: 'Infra' },
  { name: 'Git', level: 85, category: 'Herramientas' },
  { name: 'Shopify', level: 70, category: 'Herramientas' },
  { name: 'WordPress', level: 75, category: 'Herramientas' },
  { name: 'Figma', level: 70, category: 'Herramientas' },
];

const stats = [
  { number: '4+', label: 'Años de Experiencia' },
  { number: '15+', label: 'Proyectos Completados' },
  { number: '10+', label: 'Tecnologías' },
];

export default function About() {
  const lang = useLanguage();
  const isEN = lang === 'en';
  return (
    <section className="section-container">
      <div className="section-content">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="neo-chip"><AnimatedText text={isEN ? 'About me' : 'Sobre mí'} /></span>
          <h2 className="modern-heading text-4xl lg:text-5xl mb-6 mt-4" style={{ color: 'var(--neo-text)' }}>
            {isEN ? (
              <>Full‑Stack & <span className="text-gradient">n8n Automation</span></>
            ) : (
              <>Full‑Stack y <span className="text-gradient">Automatización con n8n</span></>
            )}
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--neo-muted)' }}>
            <AnimatedText text={isEN
              ? 'Automation with n8n, LLM integration (Ollama, Router) and MCP; end‑to‑end web development.'
              : 'Automatización con n8n, integración de LLMs (Ollama, Router) y MCP; desarrollo web de extremo a extremo.'} />
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
                  {isEN
                    ? (<>
                        Full‑Stack Developer with <strong>4+ years of experience</strong>, focused on <strong>n8n automation</strong> and LLM integration (cloud and local).
                      </>)
                    : (<>Desarrollador Full‑Stack con <strong>4+ años de experiencia</strong>, enfocado en <strong>automatización con n8n</strong> e integración de modelos de lenguaje en nube y local.</>)}
                </p>
                <p>
                  {isEN
                    ? (<>
                        Built <strong>voice agents</strong> connected to external sources via <strong>MCP</strong>; use of <strong>Supabase</strong> for DB, auth and storage; deployments on <strong>AWS</strong>.
                      </>)
                    : (<>Experiencia creando <strong>agentes de voz</strong> y conectándolos a fuentes externas mediante <strong>MCP</strong>; uso de <strong>Supabase</strong> para BD, autenticación y storage; despliegues en <strong>AWS</strong>.</>)}
                </p>
                <p>
                  {isEN
                    ? (<>Solid base in <strong>PHP/CakePHP</strong>, <strong>Node.js</strong>, and modern frontend (React, Tailwind).</>)
                    : (<>Base sólida en <strong>PHP/CakePHP</strong>, <strong>Node.js</strong> y frontend moderno (React, Tailwind).</>)}
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <div className="neo-inset p-4 rounded-[var(--neo-radius)]">
                  <h4 className="font-semibold mb-2" style={{ color: 'var(--neo-text)' }}>{isEN ? 'Frontend' : 'Frontend'}</h4>
                  <p className="text-sm" style={{ color: 'var(--neo-muted)' }}>HTML5 · CSS3 · JavaScript · React · Tailwind CSS · Next.js</p>
                </div>
                <div className="neo-inset p-4 rounded-[var(--neo-radius)]">
                  <h4 className="font-semibold mb-2" style={{ color: 'var(--neo-text)' }}>{isEN ? 'Backend' : 'Backend'}</h4>
                  <p className="text-sm" style={{ color: 'var(--neo-muted)' }}>PHP 7+ · CakePHP 4.6 · Node.js · Python · MySQL · Supabase</p>
                </div>
                <div className="neo-inset p-4 rounded-[var(--neo-radius)]">
                  <h4 className="font-semibold mb-2" style={{ color: 'var(--neo-text)' }}>{isEN ? 'Automation & Infra' : 'Automatización e Infra'}</h4>
                  <p className="text-sm" style={{ color: 'var(--neo-muted)' }}>n8n · REST APIs · Telegram API · MCP · AWS · Docker · Git/GitHub · Shopify · WordPress · Figma</p>
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

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {stats.map((stat) => (
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
            const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
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
