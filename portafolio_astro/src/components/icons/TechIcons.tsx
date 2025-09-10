import React, { useId, useState } from 'react';

type TechName = 'JavaScript' | 'React' | 'PHP' | 'MySQL' | 'Tailwind CSS' | 'CakePHP' | 'Tailwind' | 'JS' | 'TS';

interface TechIconProps {
  name: string;
  size?: number;
}

export function TechIcon({ name, size = 26 }: TechIconProps) {
  const gid = useId().replace(/:/g, '');
  const n = normalize(name);
  const slug = brandSlug(n);
  const [broken, setBroken] = useState(false);
  if (slug && !broken) {
    return (
      <img
        src={`https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${slug}.svg`}
        alt={name}
        width={size}
        height={size}
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer"
        onError={() => setBroken(true)}
        className="tech-icon-brand"
        style={{ display: 'inline-block' }}
      />
    );
  }
  const gradId = `neo-grad-${gid}-${n}`;
  const Gradient = (
    <defs>
      <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#00AFFF" />
        <stop offset="100%" stopColor="#0061FF" />
      </linearGradient>
    </defs>
  );
  const color = `url(#${gradId})` as string;
  if (n === 'PHP') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" aria-label="PHP" role="img">
        {Gradient}
        <ellipse cx="12" cy="12" rx="9" ry="6" fill="none" stroke={color} strokeWidth="1.5" />
        <text x="12" y="14" textAnchor="middle" fontSize="8" fill={color} fontFamily="ui-sans-serif, system-ui">PHP</text>
      </svg>
    );
  }
  if (n === 'CakePHP') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" aria-label="CakePHP" role="img">
        {Gradient}
        <path d="M4 12h16v6c0 1.1-3.6 2-8 2s-8-.9-8-2v-6z" fill="none" stroke={color} strokeWidth="1.4" />
        <path d="M4 12c0-1.5 3.6-3 8-3s8 1.5 8 3" fill="none" stroke={color} strokeWidth="1.4" />
        <rect x="11.2" y="5.5" width="1.6" height="3.2" fill={color} rx="0.8" />
      </svg>
    );
  }
  switch (n) {
    case 'JavaScript':
    case 'JS':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" aria-label="JavaScript" role="img">
          {Gradient}
          <rect x="3" y="3" width="18" height="18" rx="4" fill="none" stroke={color} strokeWidth="1.5" />
          <text x="12" y="15" textAnchor="middle" fontSize="10" fill={color} fontFamily="ui-sans-serif, system-ui">JS</text>
        </svg>
      );
    case 'React':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" aria-label="React" role="img">
          {Gradient}
          <g fill="none" stroke={color} strokeWidth="1.2">
            <ellipse cx="12" cy="12" rx="9" ry="4.5" transform="rotate(0 12 12)" />
            <ellipse cx="12" cy="12" rx="9" ry="4.5" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="9" ry="4.5" transform="rotate(120 12 12)" />
            <circle cx="12" cy="12" r="2" fill={color} />
          </g>
        </svg>
      );
    case 'PHP':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" aria-label="PHP" role="img">
          {Gradient}
          <ellipse cx="12" cy="12" rx="9" ry="6" fill="none" stroke={color} strokeWidth="1.5" />
          <text x="12" y="14" textAnchor="middle" fontSize="8" fill={color} fontFamily="ui-sans-serif, system-ui">PHP</text>
        </svg>
      );
    case 'MySQL':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" aria-label="MySQL" role="img">
          {Gradient}
          <ellipse cx="12" cy="6.5" rx="7" ry="2.5" fill="none" stroke={color} strokeWidth="1.2" />
          <path d="M5 6.5v9c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-9" fill="none" stroke={color} strokeWidth="1.2" />
          <ellipse cx="12" cy="15.5" rx="7" ry="2.5" fill="none" stroke={color} strokeWidth="1.2" />
        </svg>
      );
    case 'Tailwind CSS':
    case 'Tailwind':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" aria-label="Tailwind CSS" role="img">
          {Gradient}
          <path d="M4 10c2-4 6-4 8 0 2 4 6 4 8 0" fill="none" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
          <path d="M4 16c2-4 6-4 8 0 2 4 6 4 8 0" fill="none" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );
    case 'CakePHP':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" aria-label="CakePHP" role="img">
          {Gradient}
          <path d="M4 12h16v6c0 1.1-3.6 2-8 2s-8-.9-8-2v-6z" fill="none" stroke={color} strokeWidth="1.2" />
          <path d="M4 12c0-1.5 3.6-3 8-3s8 1.5 8 3" fill="none" stroke={color} strokeWidth="1.2" />
          <rect x="11.3" y="6" width="1.4" height="3" fill={color} rx="0.7" />
        </svg>
      );
    default:
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" aria-label={name} role="img">
          {Gradient}
          <circle cx="12" cy="12" r="8" fill="none" stroke={color} strokeWidth="1.5" />
          <text x="12" y="15" textAnchor="middle" fontSize="8" fill={color} fontFamily="ui-sans-serif, system-ui">
            {initials(n)}
          </text>
        </svg>
      );
  }
}

function initials(n: string) {
  const parts = n.trim().split(/\s+/);
  const raw = parts.length >= 2 ? parts[0][0] + parts[1][0] : n.slice(0, 2);
  return raw.toUpperCase();
}

function normalize(n: string): TechName | string {
  const t = n.trim().toLowerCase();
  if (['js', 'javascript'].includes(t)) return 'JavaScript';
  if (['react'].includes(t)) return 'React';
  if (t.includes('php')) return 'PHP';
  if (['mysql'].includes(t)) return 'MySQL';
  if (t.includes('tailwind')) return 'Tailwind CSS';
  if (t.includes('cakephp')) return 'CakePHP';
  return n;
}

function brandSlug(n: string): string | null {
  const t = n.trim().toLowerCase();
  const map: Record<string, string> = {
    javascript: 'javascript',
    typescript: 'typescript',
    react: 'react',
    php: 'php',
    mysql: 'mysql',
    docker: 'docker',
    composer: 'composer',
    'n8n': 'n8n',
    tailwind: 'tailwindcss',
    'tailwind css': 'tailwindcss',
    next: 'nextdotjs',
    'next.js': 'nextdotjs',
    nextjs: 'nextdotjs',
    supabase: 'supabase',
    shopify: 'shopify',
    github: 'github',
    git: 'git',
    linkedin: 'linkedin',
    astro: 'astro',
    css3: 'css3',
    html5: 'html5',
    mapbox: 'mapbox',
    openai: 'openai',
    wordpress: 'wordpress',
    telegram: 'telegram',
    instagram: 'instagram',
    whatsapp: 'whatsapp',
    'node.js': 'nodedotjs',
    node: 'nodedotjs',
    nodejs: 'nodedotjs',
    'framer motion': 'framer',
    framer: 'framer',
  };
  // handle variants like 'php 7+', 'cakephp 4.6'
  for (const key of Object.keys(map)) {
    if (t === key || t.startsWith(key)) return map[key];
  }
  return map[t] ?? null;
}
