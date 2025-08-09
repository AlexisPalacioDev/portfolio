class PortfolioApp {
  constructor() {
    // Cache DOM elements
    this.elements = {
      html: $("html"),
      header: $("#header"),
      backToTopBtn: $("#back-to-top"),
      themeToggle: $("#theme-toggle"),
      cbToggle: $("#cb-toggle"),
      mobileMenuBtn: $('.mobile-menu-btn'),
      navList: $('.nav-list'),
      body: $('body'),
      languageToggle: $("#language-toggle")
    };

    this.settings = {
      theme: localStorage.getItem("theme") || "dark",
      colorblind: localStorage.getItem("colorblind") === "true",
      language: localStorage.getItem("language") || "es"
    };

    this.translations = {
      es: {
        meta: {
          title: "Alexis Palacio | Desarrollador Full-Stack",
          description: "Desarrollador Full-Stack especializado en PHP, WordPress y Shopify"
        },
        nav: {
          home: "Inicio",
          about: "Sobre mí",
          experience: "Experiencia",
          projects: "Proyectos",
          contact: "Contacto"
        },
        hero: {
          role: "Desarrollador Full-Stack",
          contact: {
            email: "Correo",
            phone: "Teléfono",
            location: "Medellín, Colombia"
          }
        },
        about: {
          title: "Resumen Profesional",
          description: "Desarrollador con <strong>4+ años de experiencia</strong> en desarrollo web frontend y backend...",
          technologies: "Tecnologías"
        },
        experience: {
          title: "Experiencia",
          period: {
            current: "Diciembre 2024 - Actualidad",
            previous: "Enero 2021 - Diciembre 2024",
            kgumi: "Enero 2021 - Diciembre 2024",
            carljung: "Julio 2023 - Septiembre 2023",
            wiptool: "Marzo 2020 - Diciembre 2020"
          },
          roles: {
            backend: "Backend PHP Developer | iMometrics",
            frontend: "Frontend Developer | K Gumi SAS",
            fullstack: "Full-Stack Developer | Carl Jung AI",
            wiptool: "Frontend Developer | Wiptool"
          },
          preview: {
            frontend: "Desarrollo frontend con HTML, CSS y JavaScript",
            fullstack: "Desarrollo full-stack de plataforma educativa con Next.js y Supabase",
            wiptool: "Desarrollo frontend con integración de Mapbox API"
          },
          descriptions: {
            frontend1: "Desarrollo de páginas web con <strong>HTML, CSS y JavaScript</strong>",
            frontend2: "Creación de sitios usando <strong>Tailwind CSS</strong>",
            frontend3: "Mantenimiento de sitios web",
            fullstack1: "Integración con <strong>ChatGPT</strong> para contenido",
            fullstack2: "Base de datos con <strong>Supabase</strong>",
            fullstack3: "Frontend con <strong>Next.js</strong> y <strong>React</strong>",
            wiptool1: "Desarrollo de interfaz de usuario",
            wiptool2: "Integración con <strong>API de Mapbox</strong>",
            wiptool3: "Diseño responsivo",
            backend1: "Desarrollo de aplicaciones internas usando <strong>CakePHP 4.6</strong> y <strong>PHP 7+</strong>",
            backend2: "Trabajo con bases de datos <strong>MySQL</strong>",
            backend3: "Automatización con <strong>n8n</strong>"
          },
          technologies: "Tecnologías:",
          viewMore: "Ver más"
        },
        projects: {
          title: "Proyectos Destacados",
          carljung: {
            title: "Carl Jung AI",
            description: "Plataforma educativa que genera contenido formativo basado en los arquetipos de Carl Jung."
          },
          poisoned: {
            title: "PoisoneD Merch - E-commerce",
            items: [
              "Tienda online personalizada con Shopify",
              "Personalización de tema <strong>Dawn</strong>",
              "Diseño responsivo y optimizado",
              "Gestión de inventario y productos"
            ]
          },
          portfolio: {
            title: "Portfolio Personal",
            items: [
              "Diseño responsivo mobile-first",
              "Optimización de imágenes y carga",
              "Interfaz limpia y profesional"
            ]
          },
          viewProject: "Ver Proyecto",
          viewSite: "Ver Sitio",
          technologies: "Tecnologías:"
        },
        contact: {
          title: "Contacto",
          info: "Información de Contacto",
          email: "Correo:",
          phone: "Teléfono:",
          location: "Ubicación:"
        },
        education: {
          title: "Educación",
          degree: "Tecnólogo en Desarrollo de Software",
          institution: "Tecnológico de Antioquia",
          period: "2016 - 2020",
          completed: "8/10 semestres completados",
          certifications: "Certificaciones",
          certList: [
            "React - The Complete Guide - Udemy (2023)",
            "JavaScript Algorithms and Data Structures - freeCodeCamp (2022)",
            "Responsive Web Design - freeCodeCamp (2021)"
          ]
        },
        skills: {
          title: "Habilidades Técnicas",
          levels: {
            basic: "Básico",
            intermediate: "Intermedio",
            advanced: "Avanzado"
          }
        },
        footer: {
          name: "Alexis Palacio",
          role: "Desarrollador Full-Stack | PHP, JavaScript, WordPress, Shopify",
          rights: "© {year} Alexis Palacio. Todos los derechos reservados."
        }
      },
      en: {
        meta: {
          title: "Alexis Palacio | Full-Stack Developer",
          description: "Full-Stack Developer specialized in PHP, WordPress and Shopify"
        },
        nav: {
          home: "Home",
          about: "About",
          experience: "Experience",
          projects: "Projects",
          contact: "Contact"
        },
        hero: {
          role: "Full-Stack Developer",
          contact: {
            email: "Email",
            phone: "Phone",
            location: "Medellin, Colombia"
          }
        },
        about: {
          title: "Professional Summary",
          description: "Developer with <strong>4+ years of experience</strong> in frontend and backend web development...",
          technologies: "Technologies"
        },
        experience: {
          title: "Experience",
          period: {
            current: "December 2024 - Present",
            previous: "January 2021 - December 2024",
            kgumi: "January 2021 - December 2024",
            carljung: "July 2023 - September 2023",
            wiptool: "March 2020 - December 2020"
          },
          roles: {
            backend: "Backend PHP Developer | iMometrics",
            frontend: "Frontend Developer | K Gumi SAS",
            fullstack: "Full-Stack Developer | Carl Jung AI",
            wiptool: "Frontend Developer | Wiptool"
          },
          preview: {
            frontend: "Frontend development with HTML, CSS and JavaScript",
            fullstack: "Full-stack development of educational platform with Next.js and Supabase",
            wiptool: "Frontend development with Mapbox API integration"
          },
          descriptions: {
            frontend1: "Web development with <strong>HTML, CSS and JavaScript</strong>",
            frontend2: "Site creation using <strong>Tailwind CSS</strong>",
            frontend3: "Website maintenance",
            fullstack1: "Integration with <strong>ChatGPT</strong> for content",
            fullstack2: "Database with <strong>Supabase</strong>",
            fullstack3: "Frontend with <strong>Next.js</strong> and <strong>React</strong>",
            wiptool1: "User interface development",
            wiptool2: "Integration with <strong>Mapbox API</strong>",
            wiptool3: "Responsive design",
            backend1: "Internal applications development using <strong>CakePHP 4.6</strong> and <strong>PHP 7+</strong>",
            backend2: "Work with <strong>MySQL</strong> databases",
            backend3: "Process automation with <strong>n8n</strong>"
          },
          technologies: "Technologies:",
          viewMore: "View more"
        },
        projects: {
          title: "Featured Projects",
          carljung: {
            title: "Carl Jung AI",
            description: "Educational platform that generates training content based on Carl Jung's archetypes."
          },
          poisoned: {
            title: "PoisoneD Merch - E-commerce",
            items: [
              "Custom online store with Shopify",
              "Customization of <strong>Dawn</strong> theme",
              "Responsive and optimized design",
              "Inventory and product management"
            ]
          },
          portfolio: {
            title: "Personal Portfolio",
            items: [
              "Mobile-first responsive design",
              "Image and loading optimization",
              "Clean and professional interface"
            ]
          },
          viewProject: "View Project",
          viewSite: "View Site",
          technologies: "Technologies:"
        },
        contact: {
          title: "Contact",
          info: "Contact Information",
          email: "Email:",
          phone: "Phone:",
          location: "Location:"
        },
        education: {
          title: "Education",
          degree: "Software Development Technology",
          institution: "Technological Institute of Antioquia",
          period: "2016 - 2020",
          completed: "8/10 semesters completed",
          certifications: "Certifications",
          certList: [
            "React - The Complete Guide - Udemy (2023)",
            "JavaScript Algorithms and Data Structures - freeCodeCamp (2022)",
            "Responsive Web Design - freeCodeCamp (2021)"
          ]
        },
        skills: {
          title: "Technical Skills",
          levels: {
            basic: "Basic",
            intermediate: "Intermediate",
            advanced: "Advanced"
          }
        },
        footer: {
          name: "Alexis Palacio",
          role: "Full-Stack Developer | PHP, JavaScript, WordPress, Shopify",
          rights: "© {year} Alexis Palacio. All rights reserved."
        }
      }
    };

    this.init();
  }

  init() {
    this.initializeTheme();
    this.initializeAnimations();
    this.setupEventListeners();
    this.updateFooterYear();
    this.initializeLanguage();
  }

  initializeTheme() {
    this.elements.html.attr("data-theme", this.settings.theme);
    if (this.settings.colorblind) {
      this.elements.html.attr("data-colorblind", "true");
    }
  }

  initializeLanguage() {
    document.documentElement.lang = this.settings.language;
    this.elements.languageToggle.text(this.settings.language.toUpperCase() === 'ES' ? 'EN' : 'ES');
    this.updateTranslations();
  }

  setupEventListeners() {
    // Scroll handler
    $(window).on("scroll", () => this.handleScroll());

    // Theme toggle
    this.elements.themeToggle.on("click", () => this.toggleTheme());

    // Colorblind toggle
    this.elements.cbToggle.on("click", () => this.toggleColorblind());

    // Mobile menu
    this.setupMobileMenu();

    // Smooth scroll
    this.setupSmoothScroll();

    // Back to top
    this.elements.backToTopBtn.on("click", (e) => this.scrollToTop(e));

    // Add language toggle
    this.elements.languageToggle.on("click", () => this.toggleLanguage());
  }

  handleScroll() {
    const scrolled = $(window).scrollTop() > 100;
    this.elements.header.toggleClass("scrolled", scrolled);
    this.elements.backToTopBtn.toggleClass("show", scrolled > 300);
  }

  toggleTheme() {
    const newTheme = this.settings.theme === "light" ? "dark" : "light";
    this.settings.theme = newTheme;
    this.elements.html.attr("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    
    const $icon = this.elements.themeToggle.find('i');
    $icon.toggleClass('fa-sun fa-moon');
  }

  toggleColorblind() {
    this.settings.colorblind = !this.settings.colorblind;
    this.elements.html.attr("data-colorblind", this.settings.colorblind);
    localStorage.setItem("colorblind", this.settings.colorblind);
  }

  toggleLanguage() {
    this.settings.language = this.settings.language === 'es' ? 'en' : 'es';
    localStorage.setItem('language', this.settings.language);
    document.documentElement.lang = this.settings.language;
    
    // Update button text
    this.elements.languageToggle.text(this.settings.language === 'es' ? 'EN' : 'ES');
    
    // Update translations
    this.updateTranslations();
    
    // Update CV link
    this.updateCVLink();
  }

  updateTranslations() {
    const currentTranslations = this.translations[this.settings.language];
    const currentYear = new Date().getFullYear();
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const keys = element.dataset.i18n.split('.');
      let value = currentTranslations;
      
      for (const key of keys) {
        value = value[key];
      }
      
      if (value) {
        if (element.tagName === 'META') {
          element.setAttribute('content', value);
        } else {
          // Replace {year} placeholder with actual year
          const finalText = value.replace('{year}', currentYear);
          element.textContent = finalText;
        }
      }
    });
  }

  updateCVLink() {
    const cvLink = document.querySelector('.download-cv');
    if (cvLink) {
      cvLink.href = `assets/cv/CV-AlexisPalacio-${this.settings.language.toUpperCase()}.pdf`;
    }
  }

  setupMobileMenu() {
    this.elements.mobileMenuBtn.on('click', (e) => {
      e.stopPropagation();
      this.toggleMobileMenu();
    });

    $('.nav-link, .download-cv').on('click', () => this.closeMobileMenu());

    $(document).on('click', (e) => {
      if (!$(e.target).closest('.nav').length) {
        this.closeMobileMenu();
      }
    });

    this.elements.body.on('touchmove', (e) => {
      if (this.elements.body.hasClass('menu-open')) {
        e.preventDefault();
      }
    });
  }

  toggleMobileMenu() {
    this.elements.mobileMenuBtn.toggleClass('active');
    this.elements.navList.toggleClass('active');
    this.elements.body.toggleClass('menu-open');
  }

  closeMobileMenu() {
    this.elements.mobileMenuBtn.removeClass('active');
    this.elements.navList.removeClass('active');
    this.elements.body.removeClass('menu-open');
  }

  setupSmoothScroll() {
    $('a[href^="#"]').on("click", (e) => {
      const targetId = $(e.currentTarget).attr("href");
      if (targetId === "#") return;

      e.preventDefault();
      this.scrollToElement(targetId);
    });
  }

  scrollToElement(targetId) {
    const $target = $(targetId);
    if ($target.length) {
      const headerHeight = this.elements.header.outerHeight();
      $("html, body").animate(
        { scrollTop: $target.offset().top - headerHeight },
        500
      );
    }
  }

  scrollToTop(e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 500);
  }

  initializeAnimations() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    $(".animate").each(function () {
      observer.observe(this);
    });
  }

  updateFooterYear() {
    $("#year").text(new Date().getFullYear());
  }
}

// Initialize app
$(function() {
  window.portfolioApp = new PortfolioApp();
});
