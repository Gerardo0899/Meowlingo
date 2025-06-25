// Inicializar paneles con animación de entrada
document.addEventListener('DOMContentLoaded', function() {
    const panels = document.querySelectorAll('.panel');
    
    panels.forEach((panel, index) => {
        panel.style.opacity = '0';
        panel.style.transform = 'translateY(50px)';
        
        setTimeout(() => {
            panel.style.transition = 'all 0.6s ease';
            panel.style.opacity = '1';
            panel.style.transform = 'translateY(0)';
        }, index * 200);
    });
});// Añadir interactividad a los paneles
document.addEventListener('DOMContentLoaded', function() {
    // Efecto de click en paneles
    document.querySelectorAll('.panel').forEach(panel => {
        panel.addEventListener('click', function() {
            this.style.transform = 'rotateY(10deg) scale(1.1)';
            setTimeout(() => {
                this.style.transform = 'rotateY(0deg) scale(1)';
            }, 200);
        });
    });

    // Iniciar efectos después de cargar
    setTimeout(addFloatingMeows, 1000);
});

// Efecto de maullidos aleatorios en lugar de gatos flotantes
function addFloatingMeows() {
    const meows = ['Meow!', 'Miau!', '😸', 'Purr~', '🐱', 'Mrow!', '😺'];
    const container = document.body;
    
    setInterval(() => {
        const meow = document.createElement('div');
        meow.textContent = meows[Math.floor(Math.random() * meows.length)];
        meow.style.position = 'fixed';
        meow.style.left = Math.random() * window.innerWidth + 'px';
        meow.style.top = '-50px';
        meow.style.fontSize = Math.random() * 1.5 + 1 + 'rem';
        meow.style.pointerEvents = 'none';
        meow.style.zIndex = '1000';
        meow.style.transition = 'all 4s linear';
        meow.style.opacity = '0.8';
        meow.style.color = '#f39c12';
        meow.style.fontWeight = 'bold';
        meow.style.textShadow = '2px 2px 4px rgba(0,0,0,0.3)';
        
        container.appendChild(meow);
        
        setTimeout(() => {
            meow.style.top = window.innerHeight + 'px';
            meow.style.opacity = '0';
            meow.style.transform = 'rotate(' + (Math.random() * 360) + 'deg)';
        }, 100);
        
        setTimeout(() => {
            if (container.contains(meow)) {
                container.removeChild(meow);
            }
        }, 4000);
    }, 3000);
}

// Efecto de sonido simulado al hacer clic en paneles
document.addEventListener('DOMContentLoaded', function() {
    const featureItems = document.querySelectorAll('.feature-item');
    
    featureItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px) scale(1.02)';
            this.style.boxShadow = '0 8px 25px rgba(243, 156, 18, 0.3)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0) scale(1)';
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        });
    });

    // Efecto especial para iconos de micrófono
    const audioIcons = document.querySelectorAll('.panel-icon');
    audioIcons.forEach(icon => {
        if (icon.textContent.includes('🎤') || icon.textContent.includes('⚙️')) {
            icon.classList.add('audio-icon');
        }
    });
});

// Animación suave al hacer scroll
window.addEventListener('scroll', function() {
    const panels = document.querySelectorAll('.panel');
    
    panels.forEach(panel => {
        const rect = panel.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
            panel.style.opacity = '1';
            panel.style.transform = 'translateY(0)';
        }
    });
});

// Simulador de traducción de maullidos
function simulateTranslation() {
    const translations = [
        "¡Tengo hambre! 🍽️",
        "Quiero jugar contigo 🎾",
        "Necesito caricias 💝",
        "Estoy aburrido 😴",
        "¡Hay algo extraño afuera! 👀",
        "Te amo, humano 💕",
        "¿Dónde está mi juguete? 🧸",
        "Necesito ir al baño 🚽"
    ];
    
    return translations[Math.floor(Math.random() * translations.length)];
}

// Agregar funcionalidad demo al QR placeholder
document.addEventListener('DOMContentLoaded', function() {
    const qrPlaceholder = document.querySelector('.qr-placeholder');
    if (qrPlaceholder) {
        qrPlaceholder.addEventListener('click', function() {
            const translation = simulateTranslation();
            const tempDiv = document.createElement('div');
            tempDiv.textContent = translation;
            tempDiv.style.position = 'fixed';
            tempDiv.style.top = '50%';
            tempDiv.style.left = '50%';
            tempDiv.style.transform = 'translate(-50%, -50%)';
            tempDiv.style.background = '#f39c12';
            tempDiv.style.color = 'white';
            tempDiv.style.padding = '20px';
            tempDiv.style.borderRadius = '10px';
            tempDiv.style.fontSize = '1.2rem';
            tempDiv.style.zIndex = '9999';
            tempDiv.style.textAlign = 'center';
            tempDiv.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
            
            document.body.appendChild(tempDiv);
            
            setTimeout(() => {
                document.body.removeChild(tempDiv);
            }, 2000);
        });
        
        qrPlaceholder.style.cursor = 'pointer';
        qrPlaceholder.title = 'Click para ver traducción demo';
    }
});