describe('PortfolioApp', () => {
  let portfolioApp;
  
  // Mock jQuery and DOM
  beforeEach(() => {
    document.body.innerHTML = `
      <html>
        <body>
          <header id="header"></header>
          <button id="theme-toggle"><i></i></button>
          <button id="cb-toggle"></button>
          <button class="mobile-menu-btn"></button>
          <nav class="nav-list"></nav>
          <button id="back-to-top"></button>
          <div id="year"></div>
        </body>
      </html>
    `;
    
    portfolioApp = new PortfolioApp();
  });

  test('initializes with correct default theme', () => {
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
  });

  test('toggles theme correctly', () => {
    portfolioApp.toggleTheme();
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
    expect(localStorage.getItem('theme')).toBe('light');
  });

  test('toggles colorblind mode correctly', () => {
    portfolioApp.toggleColorblind();
    expect(document.documentElement.getAttribute('data-colorblind')).toBe('true');
    expect(localStorage.getItem('colorblind')).toBe('true');
  });

  test('handles mobile menu toggle', () => {
    portfolioApp.toggleMobileMenu();
    expect(portfolioApp.elements.mobileMenuBtn.hasClass('active')).toBeTruthy();
    expect(portfolioApp.elements.navList.hasClass('active')).toBeTruthy();
    expect(portfolioApp.elements.body.hasClass('menu-open')).toBeTruthy();
  });

  test('updates footer year correctly', () => {
    portfolioApp.updateFooterYear();
    expect(document.getElementById('year').textContent).toBe(new Date().getFullYear().toString());
  });

  // Add new tests for language functionality
  describe('Language functionality', () => {
    beforeEach(() => {
      document.body.innerHTML += `
        <button id="language-toggle">ES</button>
        <h1 data-i18n="title">Título</h1>
        <p data-i18n="description">Descripción</p>
        <a href="assets/cv/CV-AlexisPalacio-ES.pdf" class="download-cv">
          <span data-i18n="download">Descargar CV</span>
        </a>
      `;
    });

    test('initializes with correct default language', () => {
      expect(portfolioApp.settings.language).toBe('es');
      expect(document.documentElement.lang).toBe('es');
    });

    test('toggles language correctly', () => {
      portfolioApp.toggleLanguage();
      expect(portfolioApp.settings.language).toBe('en');
      expect(document.documentElement.lang).toBe('en');
      expect(localStorage.getItem('language')).toBe('en');
    });

    test('updates CV link when language changes', () => {
      portfolioApp.toggleLanguage();
      const cvLink = document.querySelector('.download-cv');
      expect(cvLink.href).toContain('CV-AlexisPalacio-EN.pdf');
    });

    test('translates content when language changes', () => {
      portfolioApp.toggleLanguage();
      const title = document.querySelector('[data-i18n="title"]');
      const description = document.querySelector('[data-i18n="description"]');
      expect(title.textContent).toBe(portfolioApp.translations.en.title);
      expect(description.textContent).toBe(portfolioApp.translations.en.description);
    });
  });
});