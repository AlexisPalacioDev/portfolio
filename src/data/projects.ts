export interface LocalizedCopy {
  es: string;
  en: string;
}

export interface ProjectItem {
  title: LocalizedCopy;
  description: LocalizedCopy;
  technologies: string[];
  image?: string;
  github?: string;
  demo?: string;
  category?: LocalizedCopy;
  status?: LocalizedCopy;
}

export const projects: ProjectItem[] = [
  {
    "title": {
      "es": "Carl Jung AI",
      "en": "Carl Jung AI"
    },
    "description": {
      "es": "Plataforma educativa que genera contenido formativo basado en los arquetipos de Carl Jung.",
      "en": "Educational platform that generates course and lesson content based on Carl Jung archetypes."
    },
    "technologies": [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Supabase",
      "OpenAI"
    ],
    "demo": "https://carljung.app/home",
    "github": "#",
    "category": {
      "es": "Full-Stack",
      "en": "Full-Stack"
    },
    "status": {
      "es": "Activo",
      "en": "Active"
    }
  },
  {
    "title": {
      "es": "BunnyGymWear",
      "en": "BunnyGymWear"
    },
    "description": {
      "es": "E-commerce con panel en Telegram que automatiza la creaci?n de productos y publicaciones en Instagram.",
      "en": "E-commerce with a Telegram admin panel that automates product creation and Instagram posts."
    },
    "technologies": [
      "Astro",
      "Tailwind CSS",
      "Supabase",
      "n8n",
      "Telegram API"
    ],
    "demo": "https://bunnygymwear.com",
    "image": "https://picsum.photos/seed/bunnygym/800/450",
    "category": {
      "es": "E-commerce",
      "en": "E-commerce"
    },
    "status": {
      "es": "Completado",
      "en": "Completed"
    }
  },
  {
    "title": {
      "es": "To-Do Automation Challenge",
      "en": "To-Do Automation Challenge"
    },
    "description": {
      "es": "Aplicaci?n de tareas con IA: corrige texto, detecta idioma y gestiona tareas v?a n8n y Supabase.",
      "en": "To-do app with AI: fixes text, detects language and manages tasks via n8n and Supabase."
    },
    "technologies": [
      "Next.js",
      "Supabase",
      "n8n",
      "OpenAI"
    ],
    "demo": "https://todo-automation-challenge.vercel.app/",
    "image": "https://picsum.photos/seed/todo-automation/800/450",
    "category": {
      "es": "Full-Stack",
      "en": "Full-Stack"
    },
    "status": {
      "es": "Activo",
      "en": "Active"
    }
  },
  {
    "title": {
      "es": "Restobelge",
      "en": "Restobelge"
    },
    "description": {
      "es": "Landing page para restaurante con dise?o web responsivo (WordPress).",
      "en": "Restaurant landing page with responsive web design (WordPress)."
    },
    "technologies": [
      "WordPress",
      "CSS3",
      "JavaScript"
    ],
    "demo": "http://restobelgetest.lovestoblog.com/",
    "image": "https://picsum.photos/seed/restobelge/800/450",
    "category": {
      "es": "Frontend",
      "en": "Frontend"
    },
    "status": {
      "es": "Completado",
      "en": "Completed"
    }
  },
  {
    "title": {
      "es": "Portafolio personal",
      "en": "Personal portfolio"
    },
    "description": {
      "es": "Sitio web personal con tecnolog?as modernas y dise?o responsive.",
      "en": "Personal website with modern technologies and responsive design."
    },
    "technologies": [
      "Astro",
      "React",
      "Tailwind CSS",
      "Framer Motion"
    ],
    "demo": "https://AlexisPalacioDev.github.io/portfolio/",
    "github": "https://github.com/alexispalaciodev",
    "category": {
      "es": "Frontend",
      "en": "Frontend"
    },
    "status": {
      "es": "Activo",
      "en": "Active"
    }
  }
];
