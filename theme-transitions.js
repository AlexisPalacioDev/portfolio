// =============================================
//    THEME TRANSITION ANIMATIONS
// ============================================

class ThemeTransitionManager {
  constructor() {
    this.overlay = null;
    this.isTransitioning = false;
    this.createOverlay();
  }

  createOverlay() {
    this.overlay = document.createElement('div');
    this.overlay.className = 'theme-transition-overlay';
    document.body.appendChild(this.overlay);
  }

  createDrop(x, y, isDarkMode = false) {
    const drop = document.createElement('div');
    drop.className = `theme-drop ${isDarkMode ? 'dark-mode' : 'light-mode'}`;
    
    // Random size between 20px and 60px
    const size = Math.random() * 40 + 20;
    drop.style.width = `${size}px`;
    drop.style.height = `${size}px`;
    
    // Position randomly around the click point
    const offsetX = (Math.random() - 0.5) * 200;
    const offsetY = (Math.random() - 0.5) * 200;
    drop.style.left = `${x + offsetX}px`;
    drop.style.top = `${y + offsetY}px`;
    
    // Random animation delay
    drop.style.animationDelay = `${Math.random() * 0.3}s`;
    
    this.overlay.appendChild(drop);
    
    // Remove drop after animation
    setTimeout(() => {
      if (drop.parentNode) {
        drop.parentNode.removeChild(drop);
      }
    }, 2000);
  }

  createRippleEffect(x, y, isDarkMode = false) {
    const ripple = document.createElement('div');
    ripple.className = 'theme-ripple';
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.style.width = '20px';
    ripple.style.height = '20px';
    
    if (isDarkMode) {
      ripple.style.background = 'radial-gradient(circle, rgba(15, 15, 15, 0.3) 0%, transparent 70%)';
    } else {
      ripple.style.background = 'radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%)';
    }
    
    document.body.appendChild(ripple);
    
    // Trigger animation
    setTimeout(() => ripple.classList.add('expand'), 10);
    
    // Remove ripple after animation
    setTimeout(() => {
      if (ripple.parentNode) {
        ripple.parentNode.removeChild(ripple);
      }
    }, 1000);
  }

  async transitionTheme(buttonElement, newTheme) {
    if (this.isTransitioning) return;
    
    this.isTransitioning = true;
    
    // Get button position
    const rect = buttonElement.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Add transitioning class to button
    buttonElement.classList.add('transitioning');
    
    // Create ripple effect from button
    this.createRippleEffect(centerX, centerY, newTheme === 'dark');
    
    // Create multiple drops around the screen
    const dropCount = 12;
    for (let i = 0; i < dropCount; i++) {
      setTimeout(() => {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        this.createDrop(x, y, newTheme === 'dark');
      }, i * 50);
    }
    
    // Wait for drops to settle before changing theme
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // Actually change the theme
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update button icon with smooth transition
    const icon = buttonElement.querySelector('i');
    icon.style.transform = 'scale(0)';
    
    setTimeout(() => {
      icon.className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
      icon.style.transform = 'scale(1)';
    }, 150);
    
    // Remove transitioning class
    setTimeout(() => {
      buttonElement.classList.remove('transitioning');
      this.isTransitioning = false;
    }, 600);
  }

  // Create floating particles effect
  createFloatingParticles(isDarkMode = false) {
    const particleCount = 8;
    
    for (let i = 0; i < particleCount; i++) {
      setTimeout(() => {
        const particle = document.createElement('div');
        particle.className = 'floating-particle';
        
        const size = Math.random() * 8 + 4;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * window.innerWidth}px`;
        particle.style.top = `${window.innerHeight}px`;
        
        if (isDarkMode) {
          particle.style.background = 'rgba(15, 15, 15, 0.6)';
        } else {
          particle.style.background = 'rgba(255, 255, 255, 0.8)';
        }
        
        particle.style.borderRadius = '50%';
        particle.style.position = 'fixed';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '9999';
        particle.style.animation = `floatUp ${3 + Math.random() * 2}s ease-out forwards`;
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
          if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
          }
        }, 5000);
      }, i * 100);
    }
  }
}

// Add floating animation CSS
const floatingCSS = `
@keyframes floatUp {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 0;
  }
  
  20% {
    opacity: 1;
  }
  
  100% {
    transform: translateY(-100vh) rotate(360deg);
    opacity: 0;
  }
}

.floating-particle {
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
}
`;

// Inject floating CSS
const style = document.createElement('style');
style.textContent = floatingCSS;
document.head.appendChild(style);

// Initialize theme transition manager
window.themeTransitionManager = new ThemeTransitionManager();

// Enhanced theme toggle functionality
function enhanceThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');
  if (!themeToggle) return;

  themeToggle.addEventListener('click', async function(e) {
    e.preventDefault();
    
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    // Use the theme transition manager
    await window.themeTransitionManager.transitionTheme(this, newTheme);
    
    // Create floating particles for extra visual appeal
    setTimeout(() => {
      window.themeTransitionManager.createFloatingParticles(newTheme === 'dark');
    }, 500);
  });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', enhanceThemeToggle);
} else {
  enhanceThemeToggle();
}
