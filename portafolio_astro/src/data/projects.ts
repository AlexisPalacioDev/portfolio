export interface ProjectItem {
  title: { es: string; en: string };
  description: { es: string; en: string };
  technologies: string[];
  image?: string; // optional fallback image
  github?: string;
  demo?: string; // used for live preview
  category?: string;
  status?: 'Activo' | 'Completado' | string;
}

export const projects: ProjectItem[] = [
  {
    title: {
      es: 'Carl Jung AI',
      en: 'Carl Jung AI'
    },
    description: {
      es: 'Plataforma educativa que genera contenido formativo basado en arquetipos de Carl Jung.',
      en: 'Educational platform that generates course and lesson content based on Carl Jung archetypes.'
    },
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Supabase', 'OpenAI'],
    demo: 'https://carljung.app/home',
    github: '#',
    category: 'Full-Stack',
    status: 'Activo',
  },
  {
    title: {
      es: 'BunnyGymWear',
      en: 'BunnyGymWear'
    },
    description: {
      es: 'E‑commerce con panel en Telegram que automatiza creación de productos y publicaciones en Instagram.',
      en: 'E‑commerce with a Telegram admin panel that automates product creation and Instagram posts.'
    },
    technologies: ['Astro', 'Tailwind CSS', 'Supabase', 'n8n', 'Telegram API'],
    demo: 'https://bunnygymwear.com',
    image: 'https://picsum.photos/seed/bunnygym/800/450',
    category: 'E-commerce',
    status: 'Completado',
  },
  {
    title: {
      es: 'To‑Do Automation Challenge',
      en: 'To‑Do Automation Challenge'
    },
    description: {
      es: 'App de tareas con IA: corrige texto, detecta idioma y gestiona tareas vía n8n y Supabase.',
      en: 'To‑do app with AI: fixes text, detects language and manages the task via n8n and Supabase.'
    },
    technologies: ['Next.js', 'Supabase', 'n8n', 'OpenAI'],
    demo: 'https://todo-automation-challenge.vercel.app/',
    image: 'https://picsum.photos/seed/todo-automation/800/450',
    category: 'Full-Stack',
    status: 'Activo',
  },
  {
    title: {
      es: 'Restobelge',
      en: 'Restobelge'
    },
    description: {
      es: 'Landing page para restaurante con diseño web responsivo (WordPress).',
      en: 'Restaurant landing page with responsive web design (WordPress).'
    },
    technologies: ['WordPress', 'CSS3', 'JavaScript'],
    demo: 'http://restobelgetest.lovestoblog.com/',
    image: 'https://picsum.photos/seed/restobelge/800/450',
    category: 'Frontend',
    status: 'Completado',
  },
  {
    title: {
      es: 'Portfolio Personal',
      en: 'Personal Portfolio'
    },
    description: {
      es: 'Sitio web personal con tecnologías modernas y diseño responsive.',
      en: 'Personal website with modern technologies and responsive design.'
    },
    technologies: ['Astro', 'React', 'Tailwind CSS', 'Framer Motion'],
    demo: 'https://alexispalaciodev.github.io/portfolio/',
    github: 'https://github.com/alexispalaciodev',
    category: 'Frontend',
    status: 'Activo',
  },
];
