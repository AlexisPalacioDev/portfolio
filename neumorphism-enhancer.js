// =============================================
//    NEUMORPHISM ENHANCEMENT SCRIPT
// ============================================

class NeumorphismEnhancer {
  constructor() {
    this.init();
  }

  init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.enhance());
    } else {
      this.enhance();
    }
  }

  enhance() {
    this.enhanceExistingElements();
    this.addInteractiveEffects();
    this.createScrollToTop();
    this.enhanceFormElements();
  }

  enhanceExistingElements() {
    // Automatically apply neumorphism to common elements
    const selectors = {
      '.card': 'neuro-surface',
      '.project-card': 'neuro-surface', 
      '.skill-item': 'neuro-surface-sm',
      '.experience-item': 'neuro-surface',
      '.education-item': 'neuro-surface',
      '.contact-method': 'neuro-surface-sm',
      '.btn': 'neuro-button',
      '.badge': 'neuro-surface-sm',
      '.tag': 'neuro-surface-sm'
    };

    Object.entries(selectors).forEach(([selector, className]) => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(el => {
        if (!el.classList.contains('neuro-enhanced')) {
          el.classList.add(className, 'neuro-enhanced');
        }
      });
    });
  }

  addInteractiveEffects() {
    // Add click effects to buttons and interactive elements
    const clickableSelectors = [
      '.btn',
      '.nav-link',
      '.theme-toggle',
      '.cb-toggle',
      '.social-links a',
      '.card',
      '.project-card'
    ];

    clickableSelectors.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(el => {
        if (!el.hasAttribute('data-neuro-enhanced')) {
          this.addClickEffect(el);
          el.setAttribute('data-neuro-enhanced', 'true');
        }
      });
    });
  }

  addClickEffect(element) {
    element.addEventListener('mousedown', (e) => {
      element.classList.add('neuro-pressed');
    });

    element.addEventListener('mouseup', (e) => {
      setTimeout(() => {
        element.classList.remove('neuro-pressed');
      }, 150);
    });

    element.addEventListener('mouseleave', (e) => {
      element.classList.remove('neuro-pressed');
    });

    // Add ripple effect on click for buttons
    if (element.matches('.btn, .nav-link')) {
      element.addEventListener('click', (e) => {
        this.createRipple(e, element);
      });
    }
  }

  createRipple(event, element) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      left: ${x}px;
      top: ${y}px;
      background: rgba(255, 255, 255, 0.3);
      border-radius: 50%;
      transform: scale(0);
      animation: neumoRipple 0.6s linear;
      pointer-events: none;
      z-index: 1;
    `;

    // Ensure button has relative positioning
    const position = window.getComputedStyle(element).position;
    if (position === 'static') {
      element.style.position = 'relative';
    }

    element.appendChild(ripple);

    setTimeout(() => {
      if (ripple.parentNode) {
        ripple.parentNode.removeChild(ripple);
      }
    }, 600);
  }

  createScrollToTop() {
    // Create scroll to top button if it doesn't exist
    if (!document.querySelector('.scroll-top')) {
      const scrollBtn = document.createElement('button');
      scrollBtn.className = 'scroll-top';
      scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
      scrollBtn.setAttribute('aria-label', 'Volver al inicio');
      
      scrollBtn.style.cssText = `
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
      `;

      document.body.appendChild(scrollBtn);

      // Show/hide on scroll
      let scrollTimer = null;
      window.addEventListener('scroll', () => {
        if (scrollTimer) clearTimeout(scrollTimer);
        
        if (window.pageYOffset > 300) {
          scrollBtn.style.opacity = '1';
          scrollBtn.style.visibility = 'visible';
        } else {
          scrollBtn.style.opacity = '0';
          scrollBtn.style.visibility = 'hidden';
        }
      });

      // Smooth scroll to top
      scrollBtn.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });

      // Add neuro effects
      this.addClickEffect(scrollBtn);
    }
  }

  enhanceFormElements() {
    // Add focus effects to form elements
    const formElements = document.querySelectorAll('input, textarea, select');
    
    formElements.forEach(el => {
      if (!el.hasAttribute('data-neuro-form-enhanced')) {
        el.addEventListener('focus', () => {
          el.parentElement?.classList.add('neuro-focused');
        });

        el.addEventListener('blur', () => {
          el.parentElement?.classList.remove('neuro-focused');
        });

        // Add floating label effect if needed
        if (el.hasAttribute('placeholder') && !el.hasAttribute('data-no-float')) {
          this.addFloatingLabel(el);
        }

        el.setAttribute('data-neuro-form-enhanced', 'true');
      }
    });
  }

  addFloatingLabel(input) {
    const placeholder = input.getAttribute('placeholder');
    if (!placeholder) return;

    const wrapper = document.createElement('div');
    wrapper.className = 'neuro-input-wrapper';
    wrapper.style.position = 'relative';
    
    input.parentNode.insertBefore(wrapper, input);
    wrapper.appendChild(input);
    
    const label = document.createElement('label');
    label.textContent = placeholder;
    label.className = 'neuro-floating-label';
    label.style.cssText = `
      position: absolute;
      left: 1.5rem;
      top: 1rem;
      color: var(--text-muted);
      pointer-events: none;
      transition: all 0.3s ease;
      background: var(--neuro-bg);
      padding: 0 0.5rem;
      border-radius: 4px;
    `;

    wrapper.appendChild(label);
    input.removeAttribute('placeholder');

    // Handle focus/blur states
    const updateLabel = () => {
      if (input.value || input === document.activeElement) {
        label.style.transform = 'translateY(-2.5rem) scale(0.85)';
        label.style.color = 'var(--primary-color)';
      } else {
        label.style.transform = 'translateY(0) scale(1)';
        label.style.color = 'var(--text-muted)';
      }
    };

    input.addEventListener('focus', updateLabel);
    input.addEventListener('blur', updateLabel);
    input.addEventListener('input', updateLabel);
    
    // Initial state
    updateLabel();
  }

  // Method to manually enhance new elements added dynamically
  enhanceElement(element) {
    if (element.matches('.card, .btn, .nav-link')) {
      this.addClickEffect(element);
    }
    
    if (element.matches('input, textarea, select')) {
      this.enhanceFormElements();
    }
  }
}

// Add CSS animations for ripple effect
const style = document.createElement('style');
style.textContent = `
@keyframes neumoRipple {
  to {
    transform: scale(4);
    opacity: 0;
  }
}

.neuro-focused {
  box-shadow: var(--neuro-shadow-lg) !important;
}

.neuro-input-wrapper {
  margin-bottom: 1rem;
}

.neuro-floating-label {
  z-index: 1;
}
`;
document.head.appendChild(style);

// Initialize when DOM is ready
const neumorphismEnhancer = new NeumorphismEnhancer();

// Export for potential external usage
if (typeof window !== 'undefined') {
  window.neumorphismEnhancer = neumorphismEnhancer;
}

// Auto-enhance elements added dynamically
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      if (node.nodeType === 1) { // Element node
        neumorphismEnhancer.enhanceElement(node);
        
        // Also check child elements
        const children = node.querySelectorAll?.('.card, .btn, .nav-link, input, textarea, select');
        children?.forEach(child => neumorphismEnhancer.enhanceElement(child));
      }
    });
  });
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});