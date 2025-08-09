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
      body: $('body')
    };

    this.settings = {
      theme: localStorage.getItem("theme") || "dark",
      colorblind: localStorage.getItem("colorblind") === "true"
    };

    this.init();
  }

  init() {
    this.initializeTheme();
    this.initializeAnimations();
    this.setupEventListeners();
    this.updateFooterYear();
  }

  initializeTheme() {
    this.elements.html.attr("data-theme", this.settings.theme);
    if (this.settings.colorblind) {
      this.elements.html.attr("data-colorblind", "true");
    }
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
