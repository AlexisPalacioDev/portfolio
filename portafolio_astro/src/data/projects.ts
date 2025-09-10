export interface ProjectItem {
  title: string;
  description: string;
  technologies: string[];
  image?: string; // optional fallback image
  github?: string;
  demo?: string; // used for live preview
  category?: string;
  status?: 'Activo' | 'Completado' | string;
}

export const projects: ProjectItem[] = [
  {
    title: 'Carl Jung AI',
    description: 'Plataforma educativa que genera contenido formativo basado en arquetipos de Carl Jung.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Supabase', 'OpenAI'],
    demo: 'https://carljung.app/home',
    github: '#',
    category: 'Full-Stack',
    status: 'Activo',
  },
  {
    title: 'BunnyGymWear',
    description: 'E‑commerce con panel en Telegram que automatiza creación de productos y publicaciones en Instagram.',
    technologies: ['Astro', 'Tailwind CSS', 'Supabase', 'n8n', 'Telegram API'],
    demo: 'https://bunnygymwear.com',
    image: 'https://picsum.photos/seed/bunnygym/800/450',
    category: 'E-commerce',
    status: 'Completado',
  },
  {
    title: 'To‑Do Automation Challenge',
    description: 'App de tareas con IA: corrige texto, detecta idioma y gestiona tareas vía n8n y Supabase.',
    technologies: ['Next.js', 'Supabase', 'n8n', 'OpenAI'],
    demo: 'https://todo-automation-challenge.vercel.app/',
    image: 'https://picsum.photos/seed/todo-automation/800/450',
    category: 'Full-Stack',
    status: 'Activo',
  },
  {
    title: 'Restobelge',
    description: 'Landing page para restaurante con diseño web responsivo (WordPress).',
    technologies: ['WordPress', 'CSS3', 'JavaScript'],
    demo: 'http://restobelgetest.lovestoblog.com/',
    image: 'https://picsum.photos/seed/restobelge/800/450',
    category: 'Frontend',
    status: 'Completado',
  },
  {
    title: 'Portfolio Personal',
    description: 'Sitio web personal con tecnologías modernas y diseño responsive.',
    technologies: ['Astro', 'React', 'Tailwind CSS', 'Framer Motion'],
    demo: 'https://alexispalaciodev.github.io/portfolio/',
    github: 'https://github.com/alexispalaciodev',
    category: 'Frontend',
    status: 'Activo',
  },
];
