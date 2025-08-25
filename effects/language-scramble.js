/**
 * Language Scramble Effect
 * Efecto de scramble/glitch para el cambio de idioma
 * PoisonedDog - 2025
 */

class LanguageScramble {
  constructor() {
    this.isScrambling = false;
    this.scrambleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*';
    this.scrambleElements = new Map();
    this.originalTexts = new Map(); // Para guardar textos originales
    this.recoveryTimeout = null;
    
    this.init();
  }

  init() {
    this.setupLanguageInterceptor();
    this.setupSafetyChecks();
  }
  
  setupSafetyChecks() {
    // Verificación de seguridad cada 5 segundos
    setInterval(() => {
      if (this.isScrambling) {
        // Si lleva más de 10 segundos scrambling, hacer recovery
        const now = Date.now();
        if (!this.scrambleStartTime) {
          this.scrambleStartTime = now;
        } else if (now - this.scrambleStartTime > 10000) {
          console.warn('Scramble effect ha durado demasiado, ejecutando recovery');
          this.emergencyRecover();
        }
      } else {
        this.scrambleStartTime = null;
      }
    }, 5000);
  }

  setupLanguageInterceptor() {
    // Interceptar el cambio de idioma
    document.addEventListener('languageChanged', (event) => {
      if (!this.isScrambling) {
        this.startScrambleEffect(event.detail.language, event.detail.translations);
      }
    });

    // También interceptar el click del botón directamente
    const languageToggle = document.getElementById('language-toggle');
    if (languageToggle) {
      languageToggle.addEventListener('click', (e) => {
        if (!this.isScrambling) {
          // Prevenir el comportamiento original temporalmente
          e.preventDefault();
          e.stopImmediatePropagation();
          
          // Iniciar el efecto y luego ejecutar el cambio de idioma
          this.triggerScrambleAndLanguageChange();
        }
      });
    }
  }

  async triggerScrambleAndLanguageChange() {
    if (this.isScrambling) return;
    
    this.isScrambling = true;
    this.scrambleStartTime = Date.now();
    
    try {
      // Limpiar timeout previo si existe
      if (this.recoveryTimeout) {
        clearTimeout(this.recoveryTimeout);
      }
      
      // Obtener el idioma actual y el siguiente
      const currentLang = window.portfolioApp.getCurrentLanguage();
      const nextLang = currentLang === 'es' ? 'en' : 'es';
      const nextTranslations = window.portfolioApp.translations[nextLang];
      
      // Guardar todos los textos originales ANTES de hacer scramble
      this.saveOriginalTexts();
      
      // Aplicar el efecto de scramble
      await this.scrambleCurrentText();
      
      // Cambiar el idioma manualmente
      window.portfolioApp.setLanguage(nextLang);
      
      // Resolver el scramble con el nuevo texto
      await this.resolveScramble(nextLang, nextTranslations);
      
    } catch (error) {
      console.error('Error en scramble effect:', error);
      // Recovery fallback
      this.emergencyRecover();
    } finally {
      this.isScrambling = false;
      this.scrambleStartTime = null;
    }
  }

  async startScrambleEffect(newLanguage, newTranslations) {
    this.isScrambling = true;
    
    // Aplicar scramble y luego resolver
    await this.scrambleCurrentText();
    await this.resolveScramble(newLanguage, newTranslations);
    
    this.isScrambling = false;
  }

  saveOriginalTexts() {
    // Limpiar textos originales previos
    this.originalTexts.clear();
    this.scrambleElements.clear();
    
    // Obtener todos los elementos que tienen traducción
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
      // Solo procesar elementos de texto visibles
      if (element.tagName !== 'META' && 
          element.tagName !== 'TITLE' && 
          element.offsetParent !== null) {
        
        const currentText = element.dataset.i18nHtml === 'true' 
          ? element.innerHTML.trim() 
          : element.textContent.trim();
        
        if (currentText.length > 0) {
          // Guardar el texto actual como original
          this.originalTexts.set(element, {
            text: currentText,
            isHTML: element.dataset.i18nHtml === 'true',
            i18nKey: element.dataset.i18n
          });
        }
      }
    });
  }

  async scrambleCurrentText() {
    // Aplicar efecto de scramble
    const scrambleDuration = 600; // Reducir duración
    const frameRate = 60; // Más fluido
    const frames = scrambleDuration / frameRate;
    
    for (let frame = 0; frame < frames; frame++) {
      await new Promise(resolve => {
        requestAnimationFrame(() => {
          this.originalTexts.forEach((data, element) => {
            if (element && element.isConnected) { // Verificar que el elemento siga en DOM
              const scrambledText = this.generateScrambledText(data.text);
              
              if (data.isHTML) {
                element.innerHTML = scrambledText;
              } else {
                element.textContent = scrambledText;
              }
              
              // Efecto visual más sutil
              element.style.transition = 'all 0.05s ease';
              element.style.filter = `brightness(${0.9 + Math.random() * 0.2})`;
              element.style.textShadow = `0 0 ${1 + Math.random() * 2}px currentColor`;
            }
          });
          
          setTimeout(resolve, frameRate);
        });
      });
    }
  }

  async resolveScramble(newLanguage, newTranslations) {
    // Permitir que el sistema de traducción normal haga su trabajo primero
    await new Promise(resolve => setTimeout(resolve, 100));
    
    const resolveDuration = 500;
    const frameRate = 50;
    const frames = resolveDuration / frameRate;
    
    // Obtener las traducciones finales para cada elemento
    const finalTexts = new Map();
    
    this.originalTexts.forEach((data, element) => {
      if (element && element.isConnected) {
        // Obtener el texto traducido actual (ya debería estar aplicado)
        let finalText;
        
        if (data.isHTML) {
          finalText = element.innerHTML;
        } else {
          finalText = element.textContent;
        }
        
        // Si el texto está vacío o es igual al scrambled, usar fallback
        if (!finalText || finalText.length === 0) {
          finalText = this.getFallbackTranslation(data.i18nKey, newTranslations) || data.text;
        }
        
        finalTexts.set(element, finalText);
      }
    });

    // Resolver gradualmente
    for (let frame = 0; frame < frames; frame++) {
      const progress = frame / (frames - 1);
      
      await new Promise(resolve => {
        requestAnimationFrame(() => {
          finalTexts.forEach((finalText, element) => {
            if (element && element.isConnected) {
              const originalData = this.originalTexts.get(element);
              if (originalData) {
                const resolvedText = this.generateProgressiveText(
                  originalData.text, 
                  finalText, 
                  progress
                );
                
                if (originalData.isHTML) {
                  element.innerHTML = resolvedText;
                } else {
                  element.textContent = resolvedText;
                }
                
                // Reducir efectos visuales gradualmente
                const intensity = 1 - progress;
                element.style.filter = intensity > 0 ? `brightness(${1 + intensity * 0.2})` : '';
                element.style.textShadow = intensity > 0 ? `0 0 ${intensity * 2}px currentColor` : '';
              }
            }
          });
          
          setTimeout(resolve, frameRate);
        });
      });
    }

    // Limpiar todos los efectos y asegurar texto final correcto
    this.cleanupAndEnsureFinalText(finalTexts);
  }
  
  getFallbackTranslation(i18nKey, translations) {
    const keys = i18nKey.split('.');
    let value = translations;
    
    for (const key of keys) {
      if (value && typeof value === 'object' && key in value) {
        value = value[key];
      } else {
        return null;
      }
    }
    
    if (typeof value === 'string') {
      return value.replace('{year}', new Date().getFullYear());
    }
    
    return null;
  }
  
  cleanupAndEnsureFinalText(finalTexts) {
    finalTexts.forEach((finalText, element) => {
      if (element && element.isConnected) {
        const originalData = this.originalTexts.get(element);
        
        // Asegurar que el texto final esté correcto
        if (originalData.isHTML) {
          element.innerHTML = finalText;
        } else {
          element.textContent = finalText;
        }
        
        // Limpiar estilos
        element.style.filter = '';
        element.style.textShadow = '';
        element.style.transition = '';
        element.style.transform = '';
      }
    });
    
    // Configurar recovery timeout como seguridad
    this.recoveryTimeout = setTimeout(() => {
      this.emergencyRecover();
    }, 1000);
    
    // Limpiar mapas
    this.originalTexts.clear();
    this.scrambleElements.clear();
  }
  
  emergencyRecover() {
    // Función de recuperación de emergencia
    console.log('Ejecutando recuperación de emergencia del scramble');
    
    // Forzar actualización de traducciones
    if (window.portfolioApp) {
      window.portfolioApp.updateTranslations();
    }
    
    // Limpiar todos los efectos visuales
    document.querySelectorAll('[data-i18n]').forEach(element => {
      if (element.tagName !== 'META' && element.tagName !== 'TITLE') {
        element.style.filter = '';
        element.style.textShadow = '';
        element.style.transition = '';
        element.style.transform = '';
      }
    });
    
    // Limpiar mapas
    this.originalTexts.clear();
    this.scrambleElements.clear();
    this.isScrambling = false;
    this.scrambleStartTime = null;
    
    if (this.recoveryTimeout) {
      clearTimeout(this.recoveryTimeout);
      this.recoveryTimeout = null;
    }
  }

  generateScrambledText(originalText) {
    return originalText
      .split('')
      .map(char => {
        // Mantener espacios y algunos caracteres especiales
        if (char === ' ' || char === '.' || char === ',' || char === ':' || char === '!' || char === '?' || char === '|') {
          return char;
        }
        
        // Para caracteres especiales HTML, usar caracteres más simples
        if (char === '<' || char === '>' || char === '&') {
          return this.scrambleChars[Math.floor(Math.random() * this.scrambleChars.length)];
        }
        
        // Scramble normal
        return this.scrambleChars[Math.floor(Math.random() * this.scrambleChars.length)];
      })
      .join('');
  }

  generateProgressiveText(originalText, targetText, progress) {
    const maxLength = Math.max(originalText.length, targetText.length);
    let result = '';
    
    for (let i = 0; i < maxLength; i++) {
      const charProgress = Math.max(0, Math.min(1, (progress * maxLength - i) / 3));
      
      if (charProgress >= 1) {
        // Carácter completamente resuelto
        result += targetText[i] || '';
      } else if (charProgress > 0.7) {
        // Casi resuelto, usar el carácter target con probabilidad alta
        if (Math.random() < 0.8) {
          result += targetText[i] || '';
        } else {
          result += this.scrambleChars[Math.floor(Math.random() * this.scrambleChars.length)];
        }
      } else if (charProgress > 0) {
        // En proceso, mezclar scramble con target
        if (Math.random() < charProgress) {
          result += targetText[i] || '';
        } else {
          result += this.scrambleChars[Math.floor(Math.random() * this.scrambleChars.length)];
        }
      } else {
        // Aún scrambling
        if (targetText[i] === ' ' || targetText[i] === '.' || targetText[i] === ',' || targetText[i] === ':') {
          result += targetText[i];
        } else {
          result += this.scrambleChars[Math.floor(Math.random() * this.scrambleChars.length)];
        }
      }
    }
    
    return result;
  }

  // Efecto simplificado
  addResolutionEffect() {
    // Efecto final muy sutil
    document.body.style.transition = 'filter 0.3s ease';
    document.body.style.filter = 'brightness(1.05)';
    
    setTimeout(() => {
      document.body.style.filter = '';
      document.body.style.transition = '';
    }, 300);
  }

  // Método público para triggear el efecto manualmente
  async triggerScramble() {
    if (!this.isScrambling) {
      this.triggerScrambleAndLanguageChange();
    }
  }

  // Método para verificar si está en proceso
  isActive() {
    return this.isScrambling;
  }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  window.languageScramble = new LanguageScramble();
});

// También inicializar si jQuery ya está cargado
if (typeof $ !== 'undefined') {
  $(function() {
    if (!window.languageScramble) {
      window.languageScramble = new LanguageScramble();
    }
  });
}

// Función global de emergencia para limpiar efectos
window.fixScrambleText = function() {
  if (window.languageScramble) {
    window.languageScramble.emergencyRecover();
  }
  
  // Forzar re-traducción completa
  if (window.portfolioApp) {
    window.portfolioApp.updateTranslations();
  }
  
  console.log('Efectos de scramble limpiados y texto restaurado');
};
