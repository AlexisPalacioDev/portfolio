export type Language = 'es' | 'en';

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

export interface Translation {
  nav: {
    home: string;
    about: string;
    experience: string;
    projects: string;
    contact: string;
  };
  hero: {
    title: string;
    downloadCV: string;
  };
  about: {
    title: string;
    description: string;
    technologies: string;
  };
  experience: {
    title: string;
    roles: {
      backend: string;
      frontend: string;
      fullstack: string;
    };
    dates: {
      current: string;
      previous: string;
    };
  };
  projects: {
    title: string;
    viewProject: string;
    viewSite: string;
  };
  contact: {
    title: string;
    email: string;
    phone: string;
    location: string;
  };
}

export interface Translations {
  es: Translation;
  en: Translation;
}