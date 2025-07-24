$(function () {
  // Cache DOM elements
  const $html = $("html");
  const $header = $("#header");
  const $backToTopBtn = $("#back-to-top");
  const $themeToggle = $("#theme-toggle");
  const $cbToggle = $("#cb-toggle");
  const $mobileMenuBtn = $('.mobile-menu-btn');
  const $navList = $('.nav-list');
  const $body = $('body');

  // Initialize theme and colorblind settings
  $html.attr("data-theme", localStorage.getItem("theme") || "dark");
  if (localStorage.getItem("colorblind") === "true") {
    $html.attr("data-colorblind", "true");
  }

  // Scroll handler
  $(window).on("scroll", () => {
    const scrolled = $(window).scrollTop() > 100;
    $header.toggleClass("scrolled", scrolled);
    $backToTopBtn.toggleClass("show", scrolled > 300);
  });

  // Smooth scroll
  $('a[href^="#"]').on("click", function (e) {
    const targetId = $(this).attr("href");
    if (targetId === "#") return;

    e.preventDefault();
    const $target = $(targetId);
    if ($target.length) {
      const headerHeight = $header.outerHeight();
      $("html, body").animate(
        { scrollTop: $target.offset().top - headerHeight },
        500
      );
    }
  });

  // Back to Top functionality
  const $backToTop = $("#back-to-top");

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 300) {
      $backToTop.addClass("show");
    } else {
      $backToTop.removeClass("show");
    }
  });

  $backToTop.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 500);
  });

  // Intersection Observer for animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          $(entry.target).addClass("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
  );

  $(".animate").each(function () {
    observer.observe(this);
  });

  // Update year
  $("#year").text(new Date().getFullYear());

  // Language switcher
  const translations = {
    en: {
      download_cv: "Download CV",
      cv_path: "/portfolio/assets/cv/CV-AlexisPalacio-EN.pdf",
    },
    es: {
      download_cv: "Descargar CV",
      cv_path: "/portfolio/assets/cv/CV-AlexisPalacio-ES.pdf",
    },
  };

  let currentLang = "es";

  $("#btn-idioma").on("click", function () {
    currentLang = currentLang === "es" ? "en" : "es";
    $(this).text(currentLang.toUpperCase());
    $html.attr("lang", currentLang);
    updateCV();
  });

  // Theme toggler
  $themeToggle.on("click", () => {
    const newTheme = $html.attr("data-theme") === "light" ? "dark" : "light";
    $html.attr("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  });

  // Colorblind toggler
  $cbToggle.on("click", () => {
    const isCB = $html.attr("data-colorblind") === "true";
    $html[isCB ? "removeAttr" : "attr"]("data-colorblind", "true");
    localStorage.setItem("colorblind", !isCB);
  });

  // CV updater
  function updateCV() {
    const $cvLink = $(".download-cv");
    if ($cvLink.length) {
      $cvLink
        .attr("href", translations[currentLang].cv_path)
        .text(translations[currentLang].download_cv);
    }
  }

  // Initial CV setup
  updateCV();

  // Mobile Menu functionality
  $mobileMenuBtn.on('click', function(e) {
    e.stopPropagation();
    $(this).toggleClass('active');
    $navList.toggleClass('active');
    $body.toggleClass('menu-open');
  });

  // Close menu when clicking a link or outside
  $('.nav-link, .download-cv').on('click', function() {
    $mobileMenuBtn.removeClass('active');
    $navList.removeClass('active');
    $body.removeClass('menu-open');
  });

  $(document).on('click', function(e) {
    if (!$(e.target).closest('.nav').length && $navList.hasClass('active')) {
      $mobileMenuBtn.removeClass('active');
      $navList.removeClass('active');
      $body.removeClass('menu-open');
    }
  });

  // Prevent scroll when menu is open
  $body.on('touchmove', function(e) {
    if ($body.hasClass('menu-open')) {
      e.preventDefault();
    }
  });
});
