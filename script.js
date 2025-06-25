// Translation demo functionality
const translations = {
    dramatic: [
        "¡Humano! Mi plato está vacío desde hace 3 minutos eternos. ¡Esto es una tragedia de proporciones épicas!",
        "¡Por todos los ratones sagrados! ¿Acaso no ves que necesito atención AHORA MISMO?",
        "¡Oh, el drama! ¡La puerta está cerrada y mi libertad ha sido coartada!"
    ],
    sweet: [
        "Buenos días mi humano favorito, ¿podrías por favor llenar mi platito? Te quiero mucho ❤️",
        "Hola papá/mamá, solo quería decirte que eres el mejor y me encantan tus caricias",
        "¿Podrías abrir la puerta por favor? Prometo ser un gatito muy bueno"
    ],
    sarcastic: [
        "Oh, qué sorpresa... mi plato está vacío. Otra vez. Definitivamente no es la hora del desayuno...",
        "Genial, otra vez ignorando mis necesidades básicas. Excelente servicio a 5 estrellas.",
        "Sí, sí, sigue con lo tuyo. No es como si yo fuera la mascota aquí o algo así..."
    ],
    wise: [
        "Joven padawan, el camino hacia la iluminación felina pasa por un plato lleno de comida.",
        "En mis nueve vidas he aprendido que la paciencia es una virtud... pero mi plato sigue vacío.",
        "La sabiduría ancestral felina dice: 'Un gato bien alimentado es un gato en paz con el universo'."
    ],
    baby: [
        "¡Mami! ¡Papi! ¡Tengo mucha hambre y quiero mi comidita rica!",
        "¿Dónde está mi lechita? ¡Soy un bebé gatito muy pequeñito!",
        "¡Quiero jugar! ¡Quiero cariñitos! ¡Soy el gatito más lindo del mundo!"
    ]
};

let currentStyle = 'dramatic';
let isRecording = false;

// Floating cats animation
function createFloatingCats() {
    const container = document.getElementById('floatingCats');
    const cats = ['🐱', '😸', '😺', '😻', '🙀', '😿', '😾'];
    
    setInterval(() => {
        const cat = document.createElement('div');
        cat.className = 'cat-icon';
        cat.textContent = cats[Math.floor(Math.random() * cats.length)];
        cat.style.left = Math.random() * 100 + '%';
        cat.style.animationDuration = (Math.random() * 10 + 15) + 's';
        cat.style.opacity = Math.random() * 0.5 + 0.1;
        
        container.appendChild(cat);
        
        setTimeout(() => {
            if (cat.parentNode) {
                cat.parentNode.removeChild(cat);
            }
        }, 25000);
    }, 2000);
}

// Style selector functionality
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.style-button').forEach(button => {
        button.addEventListener('click', () => {
            document.querySelectorAll('.style-button').forEach(b => b.classList.remove('active'));
            button.classList.add('active');
            currentStyle = button.dataset.style;
        });
    });
});

// Record button functionality
document.addEventListener('DOMContentLoaded', () => {
    const recordBtn = document.getElementById('recordBtn');
    const translationOutput = document.getElementById('translationOutput');

    recordBtn.addEventListener('click', () => {
        if (!isRecording) {
            startRecording();
        } else {
            stopRecording();
        }
    });

    function startRecording() {
        isRecording = true;
        recordBtn.classList.add('recording');
        recordBtn.textContent = '⏹️';
        translationOutput.innerHTML = '<em>🎤 Escuchando a tu gato...</em>';
        
        // Simulate recording for 2-3 seconds
        setTimeout(stopRecording, 2000 + Math.random() * 1000);
    }

    function stopRecording() {
        isRecording = false;
        recordBtn.classList.remove('recording');
        recordBtn.textContent = '🎤';
        
        // Show translation
        setTimeout(() => {
            const styleTranslations = translations[currentStyle];
            const randomTranslation = styleTranslations[Math.floor(Math.random() * styleTranslations.length)];
            
            translationOutput.innerHTML = `
                <strong>🎵 Sonido detectado:</strong> "Miau miau miaauuu"<br>
                <strong>📍 Contexto:</strong> ${getRandomContext()}<br><br>
                <strong>💭 Traducción ${currentStyle}:</strong><br>
                "${randomTranslation}"
            `;
        }, 1000);
    }
});

function getRandomContext() {
    const contexts = [
        'Cocina, 7:30 AM, plato vacío',
        'Sala, 3:20 PM, ventana abierta',
        'Dormitorio, 11:45 PM, hora de dormir',
        'Baño, 9:15 AM, agua corriendo',
        'Entrada, 6:00 PM, llegada del humano'
    ];
    return contexts[Math.floor(Math.random() * contexts.length)];
}

// Scroll animations
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

// Counter animation for stats
function animateCounters() {
    const counters = document.querySelectorAll('[data-target]');
    
    counters.forEach(counter => {
        const target = parseInt(counter.dataset.target);
        const increment = target / 100;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            counter.textContent = Math.floor(current);
        }, 20);
    });
}

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', () => {
    createFloatingCats();
    handleScrollAnimations();
    
    // Animate counters when they become visible
    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    observer.unobserve(entry.target);
                }
            });
        });
        observer.observe(statsSection);
    }
});

// Handle scroll events
window.addEventListener('scroll', handleScrollAnimations);

// Add interactivity to feature cards
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.feature-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
});