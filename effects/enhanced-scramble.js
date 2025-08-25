/**
 * Enhanced Scramble Effects
 * Efectos adicionales y optimizaciones para el scramble
 * PoisonedDog - 2025
 */

class EnhancedScrambleEffects {
  constructor() {
    this.audioContext = null;
    this.soundEnabled = true;
    
    this.init();
  }

  init() {
    this.setupAudioContext();
    this.listenForScrambleEvents();
  }

  setupAudioContext() {
    try {
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    } catch (e) {
      console.log('Web Audio API no soportado');
      this.soundEnabled = false;
    }
  }

  listenForScrambleEvents() {
    document.addEventListener('languageChanged', () => {
      this.addScreenEffects();
      if (this.soundEnabled) {
        this.playScrambleSound();
      }
    });
  }

  addScreenEffects() {
    // Añadir scanline effect
    this.addScanline();
    
    // Añadir CRT effect temporal
    this.addCRTEffect();
    
    // Añadir screen flash
    this.addScreenFlash();
  }

  addScanline() {
    const scanline = document.createElement('div');
    scanline.className = 'scramble-scanline';
    document.body.appendChild(scanline);
    
    // Remover después de la animación
    setTimeout(() => {
      scanline.remove();
    }, 2000);
  }

  addCRTEffect() {
    document.body.classList.add('scramble-mode');
    
    setTimeout(() => {
      document.body.classList.remove('scramble-mode');
    }, 1400);
  }

  addScreenFlash() {
    const flash = document.createElement('div');
    flash.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 255, 65, 0.1);
      z-index: 9999;
      pointer-events: none;
      animation: quickFlash 0.2s ease-out;
    `;
    
    document.body.appendChild(flash);
    
    setTimeout(() => {
      flash.remove();
    }, 200);
  }

  playScrambleSound() {
    if (!this.audioContext) return;
    
    // Crear sonido sintético de "glitch"
    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);
    
    // Configurar el sonido
    oscillator.type = 'square';
    oscillator.frequency.setValueAtTime(800, this.audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(200, this.audioContext.currentTime + 0.1);
    
    gainNode.gain.setValueAtTime(0.1, this.audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.2);
    
    // Reproducir
    oscillator.start(this.audioContext.currentTime);
    oscillator.stop(this.audioContext.currentTime + 0.2);
    
    // Añadir ruido blanco
    setTimeout(() => {
      this.playWhiteNoise();
    }, 100);
  }

  playWhiteNoise() {
    if (!this.audioContext) return;
    
    const bufferSize = this.audioContext.sampleRate * 0.1; // 0.1 segundos
    const buffer = this.audioContext.createBuffer(1, bufferSize, this.audioContext.sampleRate);
    const output = buffer.getChannelData(0);
    
    for (let i = 0; i < bufferSize; i++) {
      output[i] = (Math.random() * 2 - 1) * 0.05; // Volumen muy bajo
    }
    
    const source = this.audioContext.createBufferSource();
    const gainNode = this.audioContext.createGain();
    
    source.buffer = buffer;
    source.connect(gainNode);
    gainNode.connect(this.audioContext.destination);
    
    gainNode.gain.setValueAtTime(0.02, this.audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 0.1);
    
    source.start();
  }

  // Método para desactivar sonidos
  toggleSound() {
    this.soundEnabled = !this.soundEnabled;
    return this.soundEnabled;
  }

  // Añadir partículas durante el scramble
  addParticleEffect() {
    const container = document.createElement('div');
    container.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 9997;
    `;
    
    document.body.appendChild(container);
    
    // Crear partículas
    for (let i = 0; i < 20; i++) {
      setTimeout(() => {
        this.createParticle(container);
      }, i * 50);
    }
    
    // Remover contenedor después de que terminen las partículas
    setTimeout(() => {
      container.remove();
    }, 3000);
  }

  createParticle(container) {
    const particle = document.createElement('div');
    const chars = ['0', '1', '█', '▓', '▒', '░', '▄', '▀'];
    
    particle.textContent = chars[Math.floor(Math.random() * chars.length)];
    particle.style.cssText = `
      position: absolute;
      color: rgba(0, 255, 65, 0.7);
      font-family: monospace;
      font-size: ${Math.random() * 10 + 8}px;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      animation: particleFloat 2s ease-out forwards;
      pointer-events: none;
    `;
    
    container.appendChild(particle);
    
    setTimeout(() => {
      particle.remove();
    }, 2000);
  }

  // Efecto especial para elementos VIP (títulos principales)
  enhanceVIPElements() {
    const vipSelectors = [
      'h1',
      '.hero h2',
      '.section-title',
      '.nav-logo'
    ];
    
    vipSelectors.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(el => {
        el.classList.add('scramble-vip');
        
        // Remover la clase después de la animación
        setTimeout(() => {
          el.classList.remove('scramble-vip');
        }, 1500);
      });
    });
  }
}

// CSS adicional para efectos
const additionalCSS = `
  @keyframes quickFlash {
    0% { opacity: 0; }
    50% { opacity: 1; }
    100% { opacity: 0; }
  }
  
  @keyframes particleFloat {
    0% {
      opacity: 1;
      transform: translate(0, 0) rotate(0deg);
    }
    100% {
      opacity: 0;
      transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) rotate(360deg);
    }
  }
`;

// Añadir CSS al documento
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalCSS;
document.head.appendChild(styleSheet);

// Inicializar cuando esté listo
document.addEventListener('DOMContentLoaded', () => {
  window.enhancedScrambleEffects = new EnhancedScrambleEffects();
});

// Exponer métodos globalmente
window.scrambleUtils = {
  toggleSound: () => window.enhancedScrambleEffects?.toggleSound(),
  addParticles: () => window.enhancedScrambleEffects?.addParticleEffect(),
  enhanceVIP: () => window.enhancedScrambleEffects?.enhanceVIPElements()
};
