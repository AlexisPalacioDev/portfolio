// =============================================
//    SIMPLE THEME SWITCH - SIN EFECTOS DE ONDAS
// ============================================

class SimpleThemeSwitch {
  constructor() {
    this.currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    this.init();
  }

  init() {
    // Prevenir transiciones en carga inicial
    document.body.classList.add('preload');
    
    setTimeout(() => {
      document.body.classList.remove('preload');
    }, 100);

    this.setupThemeToggle();
  }

  setupThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) {
      console.warn('Theme toggle not found');
      return;
    }

    // Limpiar event listeners existentes
    const newThemeToggle = themeToggle.cloneNode(true);
    themeToggle.parentNode.replaceChild(newThemeToggle, themeToggle);

    // Configurar estado inicial
    newThemeToggle.checked = this.currentTheme === 'light';
    this.updateToggleIcons(newThemeToggle, this.currentTheme);

    // Event listener para cambio inmediato
    newThemeToggle.addEventListener('change', (e) => {
      const newTheme = e.target.checked ? 'light' : 'dark';
      this.changeTheme(newTheme);
      this.updateToggleIcons(e.target, newTheme);
    });
  }

  changeTheme(newTheme) {
    // Cambio inmediato sin animaciones
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    this.currentTheme = newTheme;

    // Dispatch event para otros componentes
    const event = new CustomEvent('themeChanged', { 
      detail: { newTheme, oldTheme: this.currentTheme } 
    });
    document.dispatchEvent(event);
  }

  updateToggleIcons(toggle, theme) {
    const label = toggle.nextElementSibling;
    if (!label) return;

    const sunIcon = label.querySelector('.sun-icon');
    const moonIcon = label.querySelector('.moon-icon');

    if (sunIcon && moonIcon) {
      if (theme === 'light') {
        // Mostrar sol
        sunIcon.style.opacity = '1';
        sunIcon.style.transform = 'rotate(0deg) scale(1)';
        moonIcon.style.opacity = '0';
        moonIcon.style.transform = 'rotate(90deg) scale(0.5)';
      } else {
        // Mostrar luna
        sunIcon.style.opacity = '0';
        sunIcon.style.transform = 'rotate(-90deg) scale(0.5)';
        moonIcon.style.opacity = '1';
        moonIcon.style.transform = 'rotate(0deg) scale(1)';
      }
    }
  }

  getCurrentTheme() {
    return this.currentTheme;
  }
}

// Limpiar sistema anterior si existe
if (window.waveThemeTransition) {
  try {
    window.waveThemeTransition.destroy();
    delete window.waveThemeTransition;
  } catch (e) {
    // Ignorar errores de limpieza
  }
}

if (window.elegantThemeTransition) {
  try {
    window.elegantThemeTransition.destroy();
    delete window.elegantThemeTransition;
  } catch (e) {
    // Ignorar errores de limpieza
  }
}

// Inicializar sistema simple
window.simpleThemeSwitch = new SimpleThemeSwitch();

// Inicialización cuando DOM está listo
function initializeSimpleTheme() {
  if (window.simpleThemeSwitch) {
    window.simpleThemeSwitch.setupThemeToggle();
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeSimpleTheme);
} else {
  initializeSimpleTheme();
}

// Configurar toggle de daltonismo también (sin efectos)
document.addEventListener('DOMContentLoaded', function() {
  const cbToggle = document.getElementById('cb-toggle');
  if (cbToggle) {
    cbToggle.addEventListener('change', function(e) {
      const isColorblind = e.target.checked;
      document.documentElement.setAttribute('data-colorblind', isColorblind ? 'true' : 'false');
      localStorage.setItem('colorblind-mode', isColorblind ? 'true' : 'false');

      // Actualizar iconos del toggle de daltonismo
      const label = this.nextElementSibling;
      if (label) {
        const eyeIcon = label.querySelector('.eye-icon');
        const eyeSlashIcon = label.querySelector('.eye-slash-icon');

        if (eyeIcon && eyeSlashIcon) {
          if (isColorblind) {
            eyeIcon.style.opacity = '0';
            eyeIcon.style.transform = 'scale(0.5)';
            eyeSlashIcon.style.opacity = '1';
            eyeSlashIcon.style.transform = 'scale(1)';
          } else {
            eyeIcon.style.opacity = '1';
            eyeIcon.style.transform = 'scale(1)';
            eyeSlashIcon.style.opacity = '0';
            eyeSlashIcon.style.transform = 'scale(0.5)';
          }
        }
      }
    });

    // Configurar estado inicial del toggle de daltonismo
    const savedColorblind = localStorage.getItem('colorblind-mode') === 'true';
    cbToggle.checked = savedColorblind;
    document.documentElement.setAttribute('data-colorblind', savedColorblind ? 'true' : 'false');
  }
});

console.log('✅ Sistema de tema simple cargado - Sin efectos de ondas');