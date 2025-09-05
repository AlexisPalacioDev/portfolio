/* =============================================
   PROFESSIONAL SKILLS ANIMATIONS & EFFECTS
   JavaScript para efectos avanzados
   ============================================= */

document.addEventListener('DOMContentLoaded', function() {
    
    // Inicializar las animaciones de las barras de progreso
    function initSkillBars() {
        const skillItems = document.querySelectorAll('.skill-item');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const skillBar = entry.target.querySelector('.skill-progress');
                    const level = skillBar.getAttribute('data-level');
                    
                    // Animar la barra de progreso
                    setTimeout(() => {
                        skillBar.style.width = level + '%';
                    }, 200);
                    
                    // Animar el número si es una estadística
                    animateStatNumbers(entry.target);
                    
                    // Añadir clase para animaciones CSS
                    entry.target.classList.add('skill-animated');
                    
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        
        skillItems.forEach(item => {
            observer.observe(item);
        });
    }
    
    // Animar números de estadísticas
    function animateStatNumbers(element) {
        const statNumbers = element.querySelectorAll('.stat-number');
        
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target') || stat.textContent);
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                stat.textContent = Math.floor(current);
            }, 16);
        });
    }
    
    // Efecto de partículas en hover
    function createParticleEffect(element, event) {
        const particle = document.createElement('div');
        particle.className = 'particle-effect';
        
        const rect = element.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: radial-gradient(circle, rgba(79, 172, 254, 0.8), transparent);
            border-radius: 50%;
            left: ${x}px;
            top: ${y}px;
            pointer-events: none;
            z-index: 1000;
            animation: particleFloat 1s ease-out forwards;
        `;
        
        element.appendChild(particle);
        
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 1000);
    }
    
    // Añadir keyframes para partículas dinámicamente
    function addParticleKeyframes() {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes particleFloat {
                0% {
                    opacity: 1;
                    transform: scale(1) translateY(0);
                }
                100% {
                    opacity: 0;
                    transform: scale(0) translateY(-50px);
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Efecto de ondas en hover
    function createRippleEffect(element, event) {
        const ripple = document.createElement('div');
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
            background: radial-gradient(circle, rgba(255, 255, 255, 0.1), transparent);
            border-radius: 50%;
            pointer-events: none;
            z-index: 1;
            animation: rippleExpand 0.6s ease-out;
        `;
        
        element.appendChild(ripple);
        
        setTimeout(() => {
            if (ripple.parentNode) {
                ripple.parentNode.removeChild(ripple);
            }
        }, 600);
    }
    
    // Añadir keyframes para ondas
    function addRippleKeyframes() {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes rippleExpand {
                0% {
                    transform: scale(0);
                    opacity: 1;
                }
                100% {
                    transform: scale(1);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Efecto de escritura para los títulos
    function typeWriterEffect() {
        const skillNames = document.querySelectorAll('.skill-name');
        
        skillNames.forEach((element, index) => {
            const text = element.textContent;
            element.textContent = '';
            element.style.opacity = '1';
            
            let charIndex = 0;
            const timer = setTimeout(() => {
                const typeInterval = setInterval(() => {
                    if (charIndex < text.length) {
                        element.textContent += text.charAt(charIndex);
                        charIndex++;
                    } else {
                        clearInterval(typeInterval);
                    }
                }, 50);
            }, index * 100);
        });
    }
    
    // Parallax suave para iconos
    function initParallaxIcons() {
        const skillIcons = document.querySelectorAll('.skill-icon-wrapper');
        
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            
            skillIcons.forEach((icon, index) => {
                const rate = scrolled * -0.5;
                const yPos = -(rate / (index + 1));
                icon.style.transform = `translateY(${yPos}px)`;
            });
        });
    }
    
    // Efecto de cristal (glassmorphism) dinámico
    function dynamicGlassmorphism() {
        const skillItems = document.querySelectorAll('.skill-item');
        
        skillItems.forEach(item => {
            item.addEventListener('mousemove', (e) => {
                const rect = item.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;
                
                item.style.background = `
                    radial-gradient(circle at ${x}% ${y}%, 
                        rgba(255, 255, 255, 0.15) 0%, 
                        rgba(255, 255, 255, 0.05) 50%, 
                        transparent 100%),
                    linear-gradient(135deg, 
                        rgba(255, 255, 255, 0.1) 0%, 
                        rgba(255, 255, 255, 0.05) 100%)
                `;
            });
            
            item.addEventListener('mouseleave', () => {
                item.style.background = '';
            });
        });
    }
    
    // Sistema de temas adaptativos
    function adaptiveThemeColors() {
        const skillItems = document.querySelectorAll('.skill-item');
        const isDarkTheme = document.documentElement.getAttribute('data-theme') === 'dark';
        
        skillItems.forEach(item => {
            const techIcon = item.querySelector('.skill-icon');
            if (techIcon) {
                // Ajustar colores según el tema
                if (isDarkTheme) {
                    techIcon.style.filter = 'brightness(1.2) saturate(1.1)';
                } else {
                    techIcon.style.filter = 'brightness(0.9) saturate(1.2)';
                }
            }
        });
    }
    
    // Detector de performance para reducir animaciones
    function performanceOptimization() {
        let fps = 60;
        let lastTime = performance.now();
        let frameCount = 0;
        
        function measureFPS() {
            const currentTime = performance.now();
            frameCount++;
            
            if (currentTime - lastTime >= 1000) {
                fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
                frameCount = 0;
                lastTime = currentTime;
                
                // Reducir animaciones si el FPS es bajo
                if (fps < 30) {
                    document.body.classList.add('reduced-motion');
                }
            }
            
            requestAnimationFrame(measureFPS);
        }
        
        requestAnimationFrame(measureFPS);
    }
    
    // Inicialización de todos los efectos
    function initializeEffects() {
        // Efectos básicos
        initSkillBars();
        addParticleKeyframes();
        addRippleKeyframes();
        
        // Efectos avanzados
        dynamicGlassmorphism();
        adaptiveThemeColors();
        
        // Optimización de performance
        performanceOptimization();
        
        // Event listeners para interacciones
        const skillItems = document.querySelectorAll('.skill-item');
        
        skillItems.forEach(item => {
            // Efecto de ondas en click
            item.addEventListener('click', (e) => {
                createRippleEffect(item, e);
            });
            
            // Efecto de partículas en hover (solo si no hay problemas de performance)
            item.addEventListener('mouseenter', (e) => {
                if (!document.body.classList.contains('reduced-motion')) {
                    createParticleEffect(item, e);
                }
            });
        });
        
        // Observer para animaciones de entrada
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const animationObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);
        
        // Observar todas las categorías de skills
        const skillCategories = document.querySelectorAll('.skill-category');
        skillCategories.forEach(category => {
            animationObserver.observe(category);
        });
    }
    
    // Escuchar cambios de tema
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('change', () => {
            setTimeout(adaptiveThemeColors, 100);
        });
    }
    
    // Inicializar todo cuando la página esté lista
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeEffects);
    } else {
        initializeEffects();
    }
    
    // Reinicializar en resize para responsive
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            // Recalcular animaciones si es necesario
            const skillBars = document.querySelectorAll('.skill-progress[style*="width"]');
            skillBars.forEach(bar => {
                const level = bar.getAttribute('data-level');
                bar.style.width = level + '%';
            });
        }, 250);
    });
    
    console.log('🚀 Professional Skills Effects Initialized');
});

// Añadir estilos para animaciones reducidas
const reducedMotionStyles = `
    .reduced-motion * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        transition-delay: 0ms !important;
    }
    
    .animate-in {
        opacity: 1;
        transform: translateY(0);
    }
`;

// Inyetar estilos de optimización
const styleSheet = document.createElement('style');
styleSheet.textContent = reducedMotionStyles;
document.head.appendChild(styleSheet);