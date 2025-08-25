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
          description: "Desarrollador Full-Stack especializado en PHP, WordPress y Shopify con 4+ años de experiencia en desarrollo web frontend y backend."
        },
        accessibility: {
          changeTheme: "Cambiar tema",
          colorblindMode: "Modo daltónico",
          changeLanguage: "Cambiar idioma",
          openMenu: "Abrir menú",
          backToTop: "Volver al inicio"
        },
        buttons: {
          downloadCV: "Descargar CV",
          viewMore: "Ver más",
          viewProject: "Ver Proyecto",
          viewSite: "Ver Sitio",
          viewCode: "Ver Código",
          backToTop: "Volver Arriba",
          privacyPolicy: "Políticas de Privacidad"
        },
        nav: {
          home: "Inicio",
          about: "Sobre mí",
          experience: "Experiencia",
          projects: "Proyectos",
          contact: "Contacto"
        },
        hero: {
          name: "Alexis Palacio",
          role: "Desarrollador Full-Stack",
          contact: {
            email: "Correo",
            phone: "Teléfono",
            location: "Medellín, Colombia"
          },
          social: {
            linkedin: "LinkedIn",
            github: "GitHub"
          }
        },
        about: {
          title: "Resumen Profesional",
          description: "Desarrollador con <strong>4+ años de experiencia</strong> en desarrollo web frontend y backend. Manejo de <strong>HTML, CSS, JavaScript, PHP</strong> y plataformas como <strong>Shopify y WordPress</strong>. Experiencia creando interfaces de usuario, integrando APIs y desarrollando aplicaciones web. Actualmente especializándome en desarrollo backend con <strong>PHP</strong> y <strong>CakePHP</strong>. Conocimientos en automatización de procesos con <strong>n8n</strong>.",
          technologies: "Tecnologías",
          skills: "Habilidades principales"
        },
        experience: {
          title: "Experiencia",
          period: {
            current: "Diciembre 2024 - Actualidad",
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
            backend1: "Desarrollo de aplicaciones internas usando <strong>CakePHP 4.6</strong> y <strong>PHP 7+</strong>",
            backend2: "Trabajo con bases de datos <strong>MySQL</strong>",
            backend3: "Automatización con <strong>n8n</strong>",
            frontend1: "Desarrollo de páginas web con <strong>HTML, CSS y JavaScript</strong>",
            frontend2: "Creación de sitios usando <strong>Tailwind CSS</strong>",
            frontend3: "Mantenimiento de sitios web",
            fullstack1: "Integración con <strong>ChatGPT</strong> para contenido",
            fullstack2: "Base de datos con <strong>Supabase</strong>",
            fullstack3: "Frontend con <strong>Next.js</strong> y <strong>React</strong>",
            wiptool1: "Desarrollo de interfaz de usuario",
            wiptool2: "Integración con <strong>API de Mapbox</strong>",
            wiptool3: "Diseño responsivo"
          },
          technologies: "Tecnologías:",
          viewMore: "Ver más",
          achievements: "Logros principales",
          responsibilities: "Responsabilidades"
        },
        projects: {
          title: "Proyectos Destacados",
          subtitle: "Algunos de mis trabajos más representativos",
          carljung: {
            title: "Carl Jung AI",
            description: "Plataforma educativa que genera contenido formativo basado en los arquetipos de Carl Jung.",
            features: {
              aiPowered: "AI-Powered",
              educational: "Educativo",
              multiUser: "Multi-usuario"
            }
          },
          poisoned: {
            title: "PoisoneD Merch - E-commerce",
            description: "Tienda online completa con diseño personalizado, gestión de inventario y experiencia de usuario optimizada.",
            features: [
              "Diseño personalizado con tema Dawn",
              "Totalmente responsivo",
              "Gestión completa de inventario"
            ]
          },
          portfolio: {
            title: "Portfolio Personal",
            description: "Sitio web personal moderno y optimizado que muestra mis habilidades y experiencia profesional.",
            features: [
              "Diseño responsive mobile-first",
              "Optimización de rendimiento",
              "Políticas de privacidad completas"
            ]
          },
          viewProject: "Ver Proyecto",
          viewSite: "Ver Sitio",
          technologies: "Tecnologías:",
          status: {
            live: "En Vivo",
            completed: "Completado",
            active: "Activo",
            development: "En Desarrollo"
          },
          actions: {
            visitSite: "Visitar Sitio",
            viewCode: "Ver Código",
            liveDemo: "Demo en Vivo",
            caseStudy: "Caso de Estudio"
          }
        },
        skills: {
          title: "Habilidades Técnicas",
          subtitle: "Tecnologías y herramientas que domino",
          categories: {
            frontend: "Frontend",
            backend: "Backend",
            tools: "Herramientas & Automatización",
            platforms: "Plataformas & CMS"
          },
          levels: {
            basic: "Básico",
            intermediate: "Intermedio",
            advanced: "Avanzado",
            expert: "Experto"
          },
          stats: {
            yearsExperience: "Años de Experiencia",
            technologies: "Tecnologías",
            projectsCompleted: "Proyectos Completados",
            yearsFreelance: "Años Freelance"
          }
        },
        contact: {
          title: "Contacto",
          subtitle: "¿Tienes un proyecto en mente? ¡Hablemos!",
          info: "Información de Contacto",
          email: "Correo:",
          phone: "Teléfono:",
          location: "Ubicación:",
          availability: "Disponible para proyectos freelance",
          response: "Respondo en menos de 24 horas",
          cta: "Contáctame para tu próximo proyecto"
        },
        education: {
          title: "Educación",
          subtitle: "Formación académica y certificaciones",
          degree: "Tecnólogo en Desarrollo de Software",
          institution: "Tecnológico de Antioquia",
          period: "2016 - 2020",
          completed: "8/10 semestres completados",
          certifications: "Certificaciones",
          certList: [
            "React - The Complete Guide - Udemy (2023)",
            "JavaScript Algorithms and Data Structures - freeCodeCamp (2022)",
            "Responsive Web Design - freeCodeCamp (2021)"
          ],
          continuousLearning: "Aprendizaje continuo",
          selfTaught: "Autodidacta en desarrollo web"
        },
        footer: {
          name: "Alexis Palacio",
          role: "Desarrollador Full-Stack | PHP, JavaScript, WordPress, Shopify",
          rights: "© {year} Alexis Palacio. Todos los derechos reservados.",
          madeWith: "Hecho con",
          love: "amor",
          coffee: "café",
          location: "desde Medellín, Colombia",
          social: "Sígueme en redes sociales",
          backToHome: "Volver al Inicio"
        },
        errors: {
          notFound: "Página no encontrada",
          goHome: "Ir al Inicio",
          goBack: "Volver Atrás"
        },
        privacy: {
          title: "Políticas de Privacidad",
          backToHome: "Volver al Inicio"
        }
      },
      en: {
        meta: {
          title: "Alexis Palacio | Full-Stack Developer",
          description: "Full-Stack Developer specialized in PHP, WordPress and Shopify with 4+ years of experience in frontend and backend web development."
        },
        accessibility: {
          changeTheme: "Change theme",
          colorblindMode: "Colorblind mode",
          changeLanguage: "Change language",
          openMenu: "Open menu",
          backToTop: "Back to top"
        },
        buttons: {
          downloadCV: "Download CV",
          viewMore: "View more",
          viewProject: "View Project",
          viewSite: "View Site",
          viewCode: "View Code",
          backToTop: "Back to Top",
          privacyPolicy: "Privacy Policy"
        },
        nav: {
          home: "Home",
          about: "About",
          experience: "Experience",
          projects: "Projects",
          contact: "Contact"
        },
        hero: {
          name: "Alexis Palacio",
          role: "Full-Stack Developer",
          contact: {
            email: "Email",
            phone: "Phone",
            location: "Medellin, Colombia"
          },
          social: {
            linkedin: "LinkedIn",
            github: "GitHub"
          }
        },
        about: {
          title: "Professional Summary",
          description: "Developer with <strong>4+ years of experience</strong> in frontend and backend web development. Proficient in <strong>HTML, CSS, JavaScript, PHP</strong> and platforms like <strong>Shopify and WordPress</strong>. Experience creating user interfaces, integrating APIs and developing web applications. Currently specializing in backend development with <strong>PHP</strong> and <strong>CakePHP</strong>. Knowledge in process automation with <strong>n8n</strong>.",
          technologies: "Technologies",
          skills: "Core skills"
        },
        experience: {
          title: "Experience",
          period: {
            current: "December 2024 - Present",
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
            backend1: "Internal applications development using <strong>CakePHP 4.6</strong> and <strong>PHP 7+</strong>",
            backend2: "Work with <strong>MySQL</strong> databases",
            backend3: "Process automation with <strong>n8n</strong>",
            frontend1: "Web development with <strong>HTML, CSS and JavaScript</strong>",
            frontend2: "Site creation using <strong>Tailwind CSS</strong>",
            frontend3: "Website maintenance",
            fullstack1: "Integration with <strong>ChatGPT</strong> for content",
            fullstack2: "Database with <strong>Supabase</strong>",
            fullstack3: "Frontend with <strong>Next.js</strong> and <strong>React</strong>",
            wiptool1: "User interface development",
            wiptool2: "Integration with <strong>Mapbox API</strong>",
            wiptool3: "Responsive design"
          },
          technologies: "Technologies:",
          viewMore: "View more",
          achievements: "Key achievements",
          responsibilities: "Responsibilities"
        },
        projects: {
          title: "Featured Projects",
          subtitle: "Some of my most representative work",
          carljung: {
            title: "Carl Jung AI",
            description: "Educational platform that generates training content based on Carl Jung's archetypes.",
            features: {
              aiPowered: "AI-Powered",
              educational: "Educational",
              multiUser: "Multi-user"
            }
          },
          poisoned: {
            title: "PoisoneD Merch - E-commerce",
            description: "Complete online store with custom design, inventory management and optimized user experience.",
            features: [
              "Custom design with Dawn theme",
              "Fully responsive",
              "Complete inventory management"
            ]
          },
          portfolio: {
            title: "Personal Portfolio",
            description: "Modern and optimized personal website that showcases my skills and professional experience.",
            features: [
              "Mobile-first responsive design",
              "Performance optimization",
              "Complete privacy policies"
            ]
          },
          viewProject: "View Project",
          viewSite: "View Site",
          technologies: "Technologies:",
          status: {
            live: "Live",
            completed: "Completed",
            active: "Active",
            development: "In Development"
          },
          actions: {
            visitSite: "Visit Site",
            viewCode: "View Code",
            liveDemo: "Live Demo",
            caseStudy: "Case Study"
          }
        },
        skills: {
          title: "Technical Skills",
          subtitle: "Technologies and tools I master",
          categories: {
            frontend: "Frontend",
            backend: "Backend",
            tools: "Tools & Automation",
            platforms: "Platforms & CMS"
          },
          levels: {
            basic: "Basic",
            intermediate: "Intermediate",
            advanced: "Advanced",
            expert: "Expert"
          },
          stats: {
            yearsExperience: "Years of Experience",
            technologies: "Technologies",
            projectsCompleted: "Projects Completed",
            yearsFreelance: "Years Freelance"
          }
        },
        contact: {
          title: "Contact",
          subtitle: "Have a project in mind? Let's talk!",
          info: "Contact Information",
          email: "Email:",
          phone: "Phone:",
          location: "Location:",
          availability: "Available for freelance projects",
          response: "I respond in less than 24 hours",
          cta: "Contact me for your next project"
        },
        education: {
          title: "Education",
          subtitle: "Academic background and certifications",
          degree: "Software Development Technology",
          institution: "Technological Institute of Antioquia",
          period: "2016 - 2020",
          completed: "8/10 semesters completed",
          certifications: "Certifications",
          certList: [
            "React - The Complete Guide - Udemy (2023)",
            "JavaScript Algorithms and Data Structures - freeCodeCamp (2022)",
            "Responsive Web Design - freeCodeCamp (2021)"
          ],
          continuousLearning: "Continuous learning",
          selfTaught: "Self-taught in web development"
        },
        footer: {
          name: "Alexis Palacio",
          role: "Full-Stack Developer | PHP, JavaScript, WordPress, Shopify",
          rights: "© {year} Alexis Palacio. All rights reserved.",
          madeWith: "Made with",
          love: "love",
          coffee: "coffee",
          location: "from Medellin, Colombia",
          social: "Follow me on social media",
          backToHome: "Back to Home"
        },
        errors: {
          notFound: "Page not found",
          goHome: "Go Home",
          goBack: "Go Back"
        },
        privacy: {
          title: "Privacy Policy",
          backToHome: "Back to Home"
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
    this.elements.languageToggle.text(this.settings.language.toUpperCase());
    this.updateTranslations();
    this.updateCVLink();
    this.updateMetaTags();
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

    // Language toggle
    this.elements.languageToggle.on("click", () => this.toggleLanguage());

    // Experience cards expand functionality
    this.setupExperienceCards();
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
    
    // Update button text - always show the NEXT language to switch to
    this.elements.languageToggle.text(this.settings.language === 'es' ? 'EN' : 'ES');
    
    // Update translations
    this.updateTranslations();
    
    // Update CV link
    this.updateCVLink();
    
    // Update meta tags
    this.updateMetaTags();
    
    // Trigger custom event for other components
    const event = new CustomEvent('languageChanged', { 
      detail: { 
        language: this.settings.language,
        translations: this.translations[this.settings.language]
      } 
    });
    document.dispatchEvent(event);
  }

  updateTranslations() {
    const currentTranslations = this.translations[this.settings.language];
    const currentYear = new Date().getFullYear();
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const keys = element.dataset.i18n.split('.');
      let value = currentTranslations;
      
      // Navigate through nested object
      for (const key of keys) {
        if (value && typeof value === 'object' && key in value) {
          value = value[key];
        } else {
          console.warn(`Translation key not found: ${element.dataset.i18n}`);
          return;
        }
      }
      
      if (value) {
        // Handle different element types
        if (element.tagName === 'META') {
          element.setAttribute('content', value);
        } else if (element.tagName === 'TITLE') {
          element.textContent = value;
        } else {
          // Replace placeholders
          const finalText = String(value).replace('{year}', currentYear);
          
          // Check if HTML content should be preserved
          if (element.dataset.i18nHtml === 'true') {
            element.innerHTML = finalText;
          } else {
            element.textContent = finalText;
          }
        }
      }
    });

    // Update download CV button text
    this.updateDownloadButton();
    
    // Update aria-labels
    this.updateAriaLabels();
  }

  updateDownloadButton() {
    const currentTranslations = this.translations[this.settings.language];
    const downloadBtn = document.querySelector('.download-cv');
    if (downloadBtn) {
      const downloadText = currentTranslations.buttons.downloadCV;
      downloadBtn.innerHTML = `<i class="fas fa-download"></i> ${downloadText}`;
    }
  }

  updateAriaLabels() {
    const currentTranslations = this.translations[this.settings.language];
    
    // Update aria-labels for buttons and interactive elements
    const themeToggle = document.getElementById('theme-toggle');
    const cbToggle = document.getElementById('cb-toggle');
    const languageToggle = document.getElementById('language-toggle');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const backToTop = document.getElementById('back-to-top');
    
    if (themeToggle) themeToggle.setAttribute('aria-label', currentTranslations.accessibility.changeTheme);
    if (cbToggle) cbToggle.setAttribute('aria-label', currentTranslations.accessibility.colorblindMode);
    if (languageToggle) languageToggle.setAttribute('aria-label', currentTranslations.accessibility.changeLanguage);
    if (mobileMenuBtn) mobileMenuBtn.setAttribute('aria-label', currentTranslations.accessibility.openMenu);
    if (backToTop) backToTop.setAttribute('aria-label', currentTranslations.accessibility.backToTop);
  }

  updateCVLink() {
    const cvLink = document.querySelector('.download-cv');
    if (cvLink) {
      cvLink.href = `assets/cv/CV-AlexisPalacio-${this.settings.language.toUpperCase()}.pdf`;
    }
  }

  updateMetaTags() {
    const currentTranslations = this.translations[this.settings.language];
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', currentTranslations.meta.description);
    }
    
    // Update title
    document.title = currentTranslations.meta.title;
    
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    
    if (ogTitle) ogTitle.setAttribute('content', currentTranslations.meta.title);
    if (ogDescription) ogDescription.setAttribute('content', currentTranslations.meta.description);
  }

  setupExperienceCards() {
    $('.expand-btn').on('click', function() {
      const card = $(this).closest('.experience-card');
      const content = card.find('.card-content');
      const preview = card.find('.card-preview');
      const isExpanded = card.hasClass('expanded');
      
      if (isExpanded) {
        // Collapse
        content.slideUp(300);
        preview.slideDown(300);
        $(this).find('i').removeClass('fa-chevron-up').addClass('fa-chevron-down');
        $(this).find('span').text('Ver más');
        card.removeClass('expanded');
      } else {
        // Expand
        preview.slideUp(300);
        content.slideDown(300);
        $(this).find('i').removeClass('fa-chevron-down').addClass('fa-chevron-up');
        $(this).find('span').text('Ver menos');
        card.addClass('expanded');
      }
    });
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
            
            // Initialize skill bars animation
            if (entry.target.classList.contains('skills')) {
              this.animateSkillBars();
            }
            
            // Initialize stats counter
            if (entry.target.classList.contains('skills-stats')) {
              this.animateStats();
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    $(".animate").each(function () {
      observer.observe(this);
    });
  }

  animateSkillBars() {
    $('.skill-progress').each(function() {
      const level = $(this).data('level');
      $(this).animate({ width: level + '%' }, 1000);
    });
  }

  animateStats() {
    $('.stat-number').each(function() {
      const finalValue = parseInt($(this).text());
      $(this).text('0');
      
      $({ countNum: 0 }).animate({ countNum: finalValue }, {
        duration: 2000,
        easing: 'swing',
        step: function() {
          $(this).text(Math.floor(this.countNum) + ($(this).text().includes('+') ? '+' : ''));
        },
        complete: function() {
          $(this).text(finalValue + ($(this).text().includes('+') ? '+' : ''));
        }
      });
    });
  }

  updateFooterYear() {
    $("#year").text(new Date().getFullYear());
  }

  // Utility method to get current translations
  getTranslation(key) {
    const keys = key.split('.');
    let value = this.translations[this.settings.language];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return null;
      }
    }
    
    return value;
  }

  // Method to switch language programmatically
  setLanguage(lang) {
    if (lang === 'es' || lang === 'en') {
      this.settings.language = lang;
      localStorage.setItem('language', lang);
      this.initializeLanguage();
    }
  }

  // Get current language
  getCurrentLanguage() {
    return this.settings.language;
  }
}

// Initialize app
$(function() {
  window.portfolioApp = new PortfolioApp();
  
  // Expose some methods globally for external use
  window.changeLanguage = function(lang) {
    if (window.portfolioApp) {
      window.portfolioApp.setLanguage(lang);
    }
  };
  
  window.getCurrentLanguage = function() {
    return window.portfolioApp ? window.portfolioApp.getCurrentLanguage() : 'es';
  };
  
  window.getTranslation = function(key) {
    return window.portfolioApp ? window.portfolioApp.getTranslation(key) : null;
  };
});
