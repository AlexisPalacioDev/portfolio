import React from 'react';

interface UiIconProps { size?: number; }
const stroke = 'var(--icon-accent)';

export const MailIcon = ({ size = 20 }: UiIconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-label="Email" role="img" fill="none" stroke={stroke} strokeWidth="1.5">
    <rect x="3" y="5" width="18" height="14" rx="3" />
    <path d="M4 7l8 6 8-6" />
  </svg>
);

export const LocationIcon = ({ size = 20 }: UiIconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-label="Ubicación" role="img" fill="none" stroke={stroke} strokeWidth="1.5">
    <path d="M12 21s7-6 7-11a7 7 0 10-14 0c0 5 7 11 7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

export const GlobeIcon = ({ size = 20 }: UiIconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-label="Globo" role="img" fill="none" stroke={stroke} strokeWidth="1.5">
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c3 4 3 14 0 18M9 3c-2 4-2 14 0 18M15 3c2 4 2 14 0 18" />
  </svg>
);

export const GithubIcon = ({ size = 20 }: UiIconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-label="GitHub" role="img" fill="none" stroke={stroke} strokeWidth="1.5">
    <path d="M12 .8a11.2 11.2 0 00-3.54 21.83c.56.1.77-.24.77-.54l-.01-2.06c-3.14.68-3.8-1.4-3.8-1.4-.51-1.29-1.25-1.64-1.25-1.64-1.02-.7.08-.69.08-.69 1.12.08 1.7 1.15 1.7 1.15 1 .1 1.59-.76 1.59-.76.5-1.04 1.31-1.32 2-1.01.05-.38.2-.72.37-1-2.51-.29-5.15-1.26-5.15-5.63 0-1.24.44-2.26 1.16-3.05-.12-.29-.5-1.47.11-3.07 0 0 .95-.3 3.12 1.16a10.8 10.8 0 015.68 0C18 4.14 18.95 4.45 18.95 4.45c.61 1.6.24 2.78.12 3.07.72.79 1.15 1.81 1.15 3.05 0 4.38-2.64 5.34-5.16 5.62.27.24.45.67.45 1.35l-.01 3.09c0 .3.2.64.78.53A11.2 11.2 0 0012 .8z" />
  </svg>
);

export const LinkedinIcon = ({ size = 20 }: UiIconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-label="LinkedIn" role="img" fill="none" stroke={stroke} strokeWidth="1.5">
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <path d="M8 17v-7M8 7.5h.01M12 17v-4a2 2 0 114 0v4" />
  </svg>
);

export const HomeIcon = ({ size = 16 }: UiIconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-label="Inicio" role="img" fill="none" stroke={stroke} strokeWidth="1.5">
    <path d="M3 11l9-7 9 7" />
    <path d="M5 10v10h14V10" />
  </svg>
);

export const UserIcon = ({ size = 16 }: UiIconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-label="Sobre mí" role="img" fill="none" stroke={stroke} strokeWidth="1.5">
    <circle cx="12" cy="8" r="3.5" />
    <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
  </svg>
);

export const BriefcaseIcon = ({ size = 16 }: UiIconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-label="Experiencia" role="img" fill="none" stroke={stroke} strokeWidth="1.5">
    <rect x="3" y="7" width="18" height="12" rx="2" />
    <path d="M8 7V6a2 2 0 012-2h4a2 2 0 012 2v1" />
  </svg>
);

export const FolderIcon = ({ size = 16 }: UiIconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-label="Proyectos" role="img" fill="none" stroke={stroke} strokeWidth="1.5">
    <path d="M3 7h6l2 2h10v8a3 3 0 01-3 3H6a3 3 0 01-3-3z" />
  </svg>
);

export const MailSmallIcon = MailIcon;
