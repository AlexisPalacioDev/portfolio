// =============================================
//    ELEGANT THEME TRANSITION - LOGO CIRCLE EXPAND
// ============================================

class ElegantThemeTransition {
  constructor() {
    this.overlay = null;
    this.isTransitioning = false;
    this.currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    this.createOverlay();
    this.init();
  }

  init() {
    // Add preload class to prevent transitions on initial load
    document.body.classList.add('preload');
    
    // Remove preload class after a short delay
    setTimeout(() => {
      document.body.classList.remove('preload');
    }, 500);
  }

  createOverlay() {
    if (this.overlay) return;
    
    this.overlay = document.createElement('div');
    this.overlay.className = 'elegant-theme-overlay';
    document.body.appendChild(this.overlay);
  }

  // Create the logo element for center animation
  createCenterLogo(newTheme) {
    const logoContainer = document.createElement('div');
    logoContainer.className = 'center-logo-container';
    
    // Create logo element - using your "AP" logo or favicon
    const logo = document.createElement('div');
    logo.className = `center-logo ${newTheme}`;
    
    // Option 1: Use your favicon
    const faviconImg = document.createElement('img');
    faviconImg.src = 'assets/image/favicon.png';
    faviconImg.alt = 'AP';
    faviconImg.className = 'logo-favicon';
    
    // Option 2: Use text logo (fallback)
    const textLogo = document.createElement('div');
    textLogo.className = 'logo-text';
    textLogo.textContent = 'AP';
    
    // Try favicon first, fallback to text
    faviconImg.onload = () => {
      logo.appendChild(faviconImg);
      textLogo.style.display = 'none';
    };
    
    faviconImg.onerror = () => {
      faviconImg.style.display = 'none';
      textLogo.style.display = 'block';
    };
    
    // Add both for now, CSS will handle display
    logo.appendChild(faviconImg);
    logo.appendChild(textLogo);
    
    logoContainer.appendChild(logo);
    return logoContainer;
  }

  // Create expanding circle effect
  createExpandingCircle(newTheme) {
    const circle = document.createElement('div');
    circle.className = `expanding-circle ${newTheme === 'light' ? 'to-light' : 'to-dark'}`;
    return circle;
  }

  // Main transition method
  async transitionTheme(buttonElement, newTheme) {
    if (this.isTransitioning) return false;
    
    this.isTransitioning = true;
    
    // Add transitioning class to button
    buttonElement.classList.add('transitioning');
    
    // Clear previous overlay content
    this.overlay.innerHTML = '';
    
    // Create expanding circle
    const circle = this.createExpandingCircle(newTheme);
    this.overlay.appendChild(circle);
    
    // Create center logo
    const logoContainer = this.createCenterLogo(newTheme);
    this.overlay.appendChild(logoContainer);
    
    // Show overlay
    this.overlay.classList.add('active');
    
    // Start logo animation
    setTimeout(() => {
      logoContainer.classList.add('animate-in');
    }, 50);
    
    // Start circle expansion
    setTimeout(() => {
      circle.classList.add('expand');
    }, 300);
    
    // Change theme at halfway point
    setTimeout(() => {
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      this.currentTheme = newTheme;
      
      // Update button icon
      this.updateButtonIcon(buttonElement, newTheme);
    }, 800);
    
    // Start logo fade out
    setTimeout(() => {
      logoContainer.classList.add('animate-out');
    }, 1200);
    
    // Clean up
    setTimeout(() => {
      this.overlay.classList.remove('active');
      this.overlay.innerHTML = '';
      buttonElement.classList.remove('transitioning');
      this.isTransitioning = false;
    }, 1600);
    
    return true;
  }

  // Update button icon with smooth transition
  updateButtonIcon(buttonElement, newTheme) {
    const icon = buttonElement.querySelector('i');
    if (!icon) return;
    
    buttonElement.classList.add('icon-changing');
    
    setTimeout(() => {
      icon.className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
      buttonElement.classList.remove('icon-changing');
    }, 200);
  }

  // Get current theme
  getCurrentTheme() {
    return this.currentTheme;
  }

  // Clean up method
  destroy() {
    if (this.overlay && this.overlay.parentNode) {
      this.overlay.parentNode.removeChild(this.overlay);
    }
  }
}

// Initialize elegant theme transition system
window.elegantThemeTransition = new ElegantThemeTransition();

// Enhanced theme toggle integration
function initializeThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');
  if (!themeToggle) {
    console.warn('Theme toggle button not found');
    return;
  }

  // Remove any existing event listeners
  themeToggle.replaceWith(themeToggle.cloneNode(true));
  const newThemeToggle = document.getElementById('theme-toggle');

  newThemeToggle.addEventListener('click', async function(e) {
    e.preventDefault();
    
    const currentTheme = window.elegantThemeTransition.getCurrentTheme();
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    // Prevent multiple rapid clicks
    if (window.elegantThemeTransition.isTransitioning) {
      return;
    }
    
    // Execute the elegant transition
    const success = await window.elegantThemeTransition.transitionTheme(this, newTheme);
    
    if (success) {
      // Dispatch custom event for other components
      const event = new CustomEvent('themeChanged', { 
        detail: { 
          newTheme, 
          oldTheme: currentTheme 
        } 
      });
      document.dispatchEvent(event);
    }
  });

  // Set initial icon based on current theme
  const currentTheme = window.elegantThemeTransition.getCurrentTheme();
  const icon = newThemeToggle.querySelector('i');
  if (icon) {
    icon.className = currentTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeThemeToggle);
} else {
  initializeThemeToggle();
}

// Handle visibility change to pause animations when tab is not visible
document.addEventListener('visibilitychange', function() {
  if (document.hidden && window.elegantThemeTransition) {
    // Pause any ongoing transitions when tab is not visible
    const overlay = document.querySelector('.elegant-theme-overlay');
    if (overlay) {
      overlay.style.animationPlayState = 'paused';
    }
  } else if (window.elegantThemeTransition) {
    // Resume animations when tab becomes visible
    const overlay = document.querySelector('.elegant-theme-overlay');
    if (overlay) {
      overlay.style.animationPlayState = 'running';
    }
  }
});

// Export for potential external usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ElegantThemeTransition;
}