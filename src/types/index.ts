export type Language = 'es' | 'en';

export type SkillCategoryKey = 'automation' | 'backend' | 'frontend' | 'infra' | 'tools';

export interface NavLink {
  href: string;
  label: string;
}

export interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export interface NavLinksProps {
  mobile?: boolean;
  onClose?: () => void;
}

export interface ControlsProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onThemeToggle: () => void;
  mobile?: boolean;
}

export interface LayoutProps {
  title: string;
  description?: string;
}

export interface HighlightBlock {
  title: string;
  description: string;
}

export interface StatItem {
  number: string;
  label: string;
}

export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
  tech: string[];
}

export interface Translation {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    home: string;
    about: string;
    experience: string;
    projects: string;
    contact: string;
  };
  header: {
    logoInitials: string;
    logoLabel: string;
    homeAria: string;
  };
  hero: {
    subtitle: string;
    techHeading: string;
    profileRole: string;
    profileAlt: string;
  };
  about: {
    sectionLabel: string;
    storyTitle: string;
    skillsTitle: string;
    heading: {
      regular: string;
      highlight: string;
    };
    paragraphs: string[];
    highlights: {
      frontend: HighlightBlock;
      backend: HighlightBlock;
      automation: HighlightBlock;
    };
    skillCategories: Record<SkillCategoryKey, string>;
    stats: StatItem[];
  };
  experience: {
    title: string;
    items: ExperienceItem[];
  };
  projects: {
    title: string;
    description: string;
    filters: string[];
    githubLabel: string;
    demoLabel: string;
    cta: string;
  };
  sitePreview: {
    empty: string;
    open: string;
    alt: string;
  };
  contact: {
    title: string;
    subtitle: string;
    infoTitle: string;
    copyEmail: string;
    copyPhone: string;
    copied: string;
    composeEmail: string;
    whatsapp: string;
    callPhone: string;
    location: string;
    availability: string;
    resumeTitle: string;
    resumeCta: string;
    resumeFile: string;
    networksTitle: string;
    whatsappMessage: string;
  };
  controls: {
    themeToggle: string;
    language: {
      switchToEnglish: string;
      switchToSpanish: string;
    };
    menu: {
      open: string;
      close: string;
    };
  };
  footer: {
    copyright: string;
  };
}

export interface Translations {
  es: Translation;
  en: Translation;
}
