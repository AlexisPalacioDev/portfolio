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
});