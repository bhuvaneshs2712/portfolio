// Enhanced Portfolio JavaScript with Unique Animations

// Enhanced Portfolio JavaScript with Unique Animations

const portfolioData = {
    personal: {
        name: "Bhuvanesh S",
        title: "Frontend Engineer & Full Stack Developer",
        email: "bhuvaneshs2712@gmail.com",
        phone: "+91 9384781433",
        location: "Chennai, Tamil Nadu",
        bio: "Enthusiastic Frontend Engineer with strong skills in building responsive and user-friendly web applications. Proficient in HTML, CSS, JavaScript, and Python, with fundamental experience in React.js for creating interactive interfaces. Quick learner, passionate about AI and its applications in software development, eager to contribute to innovative SaaS solutions.",
        profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
        education: {
            degree: "B.E Computer Science Engineering",
            college: "Sri Vidya College of Engineering & Technology, Anna University",
            location: "Virudhunagar",
            cgpa: "7.50",
            duration: "2021 – 2025"
        }
    },
    skills: {
        frontend: ["HTML5", "CSS3", "JavaScript", "React.js", "Responsive Design"],
        backend: ["Python", "Django", "FastAPI", "REST APIs", "MySQL"],
        tools: ["Visual Studio Code", "PyCharm", "Git"],
        interests: ["Web Design & Development", "AI/ML", "Cybersecurity"]
    },
    experience: [
        {
            company: "RECCSAR PVT. LTD",
            position: "Full Stack Development Intern",
            location: "Madurai, Tamil Nadu",
            duration: "02 Sep 2024 - 21 Sep 2024",
            responsibilities: [
                "Developed and deployed full-stack web applications using Python and Django for back-end functionality",
                "Created dynamic front-end interfaces with HTML, CSS, and JavaScript, ensuring responsive designs"
            ]
        },
        {
            company: "PHOENIX SOFTECH",
            position: "Full Stack Developer Intern",
            location: "Madurai, Tamil Nadu",
            duration: "01 Aug 2024 - 13 Aug 2024",
            responsibilities: [
                "Developed and deployed full-stack web applications using Python and Django for back-end functionality",
                "Created dynamic front-end interfaces with HTML, CSS, and JavaScript, ensuring responsive designs"
            ]
        }
    ],
    projects: [
        {
            title: "AI Resume Builder",
            description: "An intelligent resume building application with job description analysis for keyword and skill matching, featuring responsive UI and PDF export capabilities.",
            technologies: ["Python", "JavaScript", "HTML", "CSS"],
            icon: "fas fa-robot",
            date: "May 2025",
            features: [
                "Job description analysis for keyword and skill matching",
                "Responsive UI for seamless user experience across devices",
                "Resume export in PDF format with professional templates",
                "Backend services in Python for data processing and AI requests"
            ],
            liveDemo: "#",
            sourceCode: "#"
        },
        {
            title: "Ecommerce Website - Mens Style Hub",
            description: "A secure e-commerce platform with JWT token-based authentication, dynamic product display, and streamlined user interactions.",
            technologies: ["JavaScript", "HTML", "CSS", "React", "JWT"],
            icon: "fas fa-shopping-cart",
            date: "Nov 2024",
            features: [
                "Secure e-commerce platform with JWT token-based authentication",
                "Created login and checkout pages using React components",
                "Integrated REST API calls for dynamic product display",
                "Fast and secure data fetching implementation"
            ],
            liveDemo: "#",
            sourceCode: "#"
        },
        {
            title: "Weather Information App",
            description: "A dynamic weather application that provides real-time weather information, forecasts, and location-based weather data with an intuitive user interface.",
            technologies: ["JavaScript", "HTML", "CSS", "Weather API", "Geolocation"],
            icon: "fas fa-cloud-sun",
            date: "Dec 2024",
            features: [
                "Real-time weather information and forecasts",
                "Location-based weather data using geolocation",
                "Responsive design for all devices",
                "Integration with weather APIs for accurate data",
                "Intuitive user interface with weather icons"
            ],
            liveDemo: "#",
            sourceCode: "#"
        }
    ],
    certifications: [
        "IBM skilled TNSDC-fundamentals of Cybersecurity with kali linux",
        "Two days workshop on 'Deep Learning Applications Using Python'",
        "Course in Django Full Stack Development - Lamda Tech Softics",
        "Hands on programmer - MERN Stack development and Mobile App Development"
    ],
    currentLearning: {
        course: "Full-Stack Development Course",
        institute: "Lamda Tech Softics",
        location: "Virudhunagar",
        duration: "Aug 2024 - Jul 2025",
        topics: ["HTML, CSS, JavaScript, React", "MySQL, Django", "Real-world projects"]
    },
    social: {
        linkedin: "https://linkedin.com/in/-bhuvanesh-s20",
        github: "#",
        twitter: "#",
        instagram: "#"
    }
};

// Particle System
class ParticleSystem {
    constructor() {
        this.particles = [];
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.init();
    }

    init() {
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.pointerEvents = 'none';
        this.canvas.style.zIndex = '-1';
        document.body.appendChild(this.canvas);

        this.resize();
        this.createParticles();
        this.animate();

        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createParticles() {
        for (let i = 0; i < 50; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 3 + 1,
                opacity: Math.random() * 0.5 + 0.1,
                color: `hsl(${Math.random() * 360}, 70%, 60%)`
            });
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;

            if (particle.x < 0 || particle.x > this.canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > this.canvas.height) particle.vy *= -1;

            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fillStyle = particle.color;
            this.ctx.globalAlpha = particle.opacity;
            this.ctx.fill();

            // Connect nearby particles
            this.particles.forEach(otherParticle => {
                const dx = particle.x - otherParticle.x;
                const dy = particle.y - otherParticle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 100) {
                    this.ctx.beginPath();
                    this.ctx.moveTo(particle.x, particle.y);
                    this.ctx.lineTo(otherParticle.x, otherParticle.y);
                    this.ctx.strokeStyle = particle.color;
                    this.ctx.globalAlpha = (100 - distance) / 100 * 0.1;
                    this.ctx.stroke();
                }
            });
        });

        requestAnimationFrame(() => this.animate());
    }
}

// Interactive Cursor
class InteractiveCursor {
    constructor() {
        this.cursor = document.createElement('div');
        this.cursor.className = 'custom-cursor';
        this.cursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            background: linear-gradient(45deg, #667eea, #764ba2);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.1s ease;
            mix-blend-mode: difference;
        `;
        document.body.appendChild(this.cursor);

        this.cursorDot = document.createElement('div');
        this.cursorDot.className = 'cursor-dot';
        this.cursorDot.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: #fff;
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.15s ease;
        `;
        document.body.appendChild(this.cursorDot);

        this.init();
    }

    init() {
        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;
        let dotX = 0, dotY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        const animate = () => {
            cursorX += (mouseX - cursorX) * 0.1;
            cursorY += (mouseY - cursorY) * 0.1;
            dotX += (mouseX - dotX) * 0.3;
            dotY += (mouseY - dotY) * 0.3;

            this.cursor.style.transform = `translate(${cursorX - 10}px, ${cursorY - 10}px)`;
            this.cursorDot.style.transform = `translate(${dotX - 2}px, ${dotY - 2}px)`;

            requestAnimationFrame(animate);
        };
        animate();

        // Hover effects
        document.querySelectorAll('a, button, .project-card, .skill-category').forEach(el => {
            el.addEventListener('mouseenter', () => {
                this.cursor.style.transform += ' scale(2)';
                this.cursor.style.background = 'linear-gradient(45deg, #ff006e, #8338ec)';
            });

            el.addEventListener('mouseleave', () => {
                this.cursor.style.transform = this.cursor.style.transform.replace(' scale(2)', '');
                this.cursor.style.background = 'linear-gradient(45deg, #667eea, #764ba2)';
            });
        });
    }
}

// Morphing Text Animation
class MorphingText {
    constructor(element, texts, speed = 2000) {
        this.element = element;
        this.texts = texts;
        this.speed = speed;
        this.currentIndex = 0;
        this.isAnimating = false;
        this.init();
    }

    init() {
        this.animate();
    }

    async animate() {
        while (true) {
            await this.wait(this.speed);
            if (!this.isAnimating) {
                this.morphToNext();
            }
        }
    }

    async morphToNext() {
        this.isAnimating = true;
        const currentText = this.texts[this.currentIndex];
        const nextText = this.texts[(this.currentIndex + 1) % this.texts.length];

        // Fade out
        await this.fadeOut();
        
        // Change text
        this.element.textContent = nextText;
        
        // Fade in
        await this.fadeIn();
        
        this.currentIndex = (this.currentIndex + 1) % this.texts.length;
        this.isAnimating = false;
    }

    async fadeOut() {
        return new Promise(resolve => {
            this.element.style.transition = 'opacity 0.5s ease';
            this.element.style.opacity = '0';
            setTimeout(resolve, 500);
        });
    }

    async fadeIn() {
        return new Promise(resolve => {
            this.element.style.opacity = '1';
            setTimeout(resolve, 500);
        });
    }

    wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// 3D Card Tilt Effect
class CardTilt {
    constructor() {
        this.cards = document.querySelectorAll('.project-card, .skill-category');
        this.init();
    }

    init() {
        this.cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
            });
        });
    }
}

// Scroll Progress Indicator
class ScrollProgress {
    constructor() {
        this.progressBar = document.createElement('div');
        this.progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(90deg, #667eea, #764ba2, #f093fb, #f5576c);
            z-index: 10000;
            transition: width 0.1s ease;
        `;
        document.body.appendChild(this.progressBar);
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.body.offsetHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            this.progressBar.style.width = scrollPercent + '%';
        });
    }
}

// Loading screen with advanced animation
window.addEventListener('load', function() {
    const loadingOverlay = document.getElementById('loadingOverlay');
    const loadingSpinner = loadingOverlay.querySelector('.loading-spinner');
    
    // Add loading text animation
    const loadingText = document.createElement('div');
    loadingText.textContent = 'Loading Portfolio...';
    loadingText.style.cssText = `
        color: white;
        font-size: 1.2rem;
        margin-top: 1rem;
        font-family: 'Montserrat', sans-serif;
        animation: pulse 1.5s ease-in-out infinite;
    `;
    loadingOverlay.appendChild(loadingText);

    // Add pulse animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0%, 100% { opacity: 0.5; }
            50% { opacity: 1; }
        }
    `;
    document.head.appendChild(style);

    setTimeout(() => {
        loadingOverlay.style.opacity = '0';
        setTimeout(() => {
            loadingOverlay.classList.add('hidden');
        }, 500);
    }, 2000);
});

// Mobile menu functionality
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navLinks = document.getElementById('navLinks');

mobileMenuToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    navLinks.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuToggle.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar') && navLinks.classList.contains('active')) {
        mobileMenuToggle.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Theme toggle with enhanced animation
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Initialize theme from localStorage or default to dark
const currentTheme = localStorage.getItem('theme') || 'dark';
body.setAttribute('data-theme', currentTheme);

// Set initial icon
if (currentTheme === 'light') {
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
} else {
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

// Theme toggle functionality
themeToggle.addEventListener('click', function() {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    // Add rotation animation
    themeToggle.style.transform = 'rotate(360deg) scale(0.8)';
    
    // Update theme immediately for better UX
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update icon
    if (newTheme === 'light') {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    // Reset animation
    setTimeout(() => {
        themeToggle.style.transform = 'rotate(0deg) scale(1)';
    }, 300);
    
    // Log theme change for debugging
    console.log('Theme changed to:', newTheme);
});

// Enhanced smooth scrolling with easing
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const targetPosition = target.offsetTop - 100;
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;
            const duration = 1000;
            let start = null;

            function animation(currentTime) {
                if (start === null) start = currentTime;
                const timeElapsed = currentTime - start;
                const run = ease(timeElapsed, startPosition, distance, duration);
                window.scrollTo(0, run);
                if (timeElapsed < duration) requestAnimationFrame(animation);
            }

            function ease(t, b, c, d) {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t + b;
                t--;
                return -c / 2 * (t * (t - 2) - 1) + b;
            }

            requestAnimationFrame(animation);
        }
    });
});

// Enhanced navbar background with parallax
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const scrolled = window.pageYOffset;
    
    if (scrolled > 100) {
        navbar.style.background = `rgba(26, 32, 44, ${0.95 + (scrolled / 1000)})`;
        navbar.style.backdropFilter = 'blur(20px)';
        navbar.style.transform = 'translateY(-2px)';
    } else {
        navbar.style.background = 'rgba(26, 32, 44, 0.95)';
        navbar.style.transform = 'translateY(0)';
    }
});

// Enhanced scroll animations with stagger and advanced effects
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('animated');
                
                // Add special effects based on element type
                if (entry.target.classList.contains('skill-category')) {
                    entry.target.style.animation = `slideInUp 0.6s ease-out ${index * 0.1}s both`;
                }
                
                if (entry.target.classList.contains('project-card')) {
                    entry.target.style.animation = `slideInUp 0.6s ease-out ${index * 0.15}s both`;
                }
                
                if (entry.target.classList.contains('contact-item')) {
                    entry.target.style.animation = `slideInLeft 0.6s ease-out ${index * 0.1}s both`;
                }
            }, index * 100);
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
});

// Add scroll-triggered particle effects
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    // Parallax effect for background elements
    const heroBackground = document.querySelector('.hero::after');
    if (heroBackground) {
        heroBackground.style.transform = `translateY(${rate}px)`;
    }
    
    // Add scroll-based color changes
    const navbar = document.querySelector('.navbar');
    if (scrolled > 500) {
        navbar.style.background = 'rgba(26, 32, 44, 0.98)';
        navbar.style.borderBottom = '1px solid rgba(102, 126, 234, 0.3)';
    } else {
        navbar.style.background = 'rgba(26, 32, 44, 0.95)';
        navbar.style.borderBottom = '1px solid rgba(102, 126, 234, 0.1)';
    }
});



// Enhanced contact form with typing effect
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    const submitButton = this.querySelector('button[type="submit"]');
    const originalText = submitButton.innerHTML;
    
    // Add typing animation
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitButton.disabled = true;
    submitButton.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
        this.reset();
        
        submitButton.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
        submitButton.style.background = 'linear-gradient(135deg, #48bb78 0%, #38a169 100%)';
        submitButton.style.transform = 'scale(1.05)';
        
        setTimeout(() => {
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
            submitButton.style.background = '';
            submitButton.style.transform = 'scale(1)';
        }, 3000);
        
        console.log('Form submitted:', data);
    }, 2000);
});

// Enhanced project card interactions
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) scale(1.02)';
        this.style.boxShadow = '0 40px 80px -12px rgba(102, 126, 234, 0.3)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '';
    });
});

// Enhanced button ripple effect
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Enhanced typing animation
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing animation after page load
setTimeout(() => {
    const heroTitle = document.querySelector('.hero-title');
    typeWriter(heroTitle, portfolioData.personal.name, 150);
}, 2000);

// Initialize all enhanced features
document.addEventListener('DOMContentLoaded', function() {
    // Initialize particle system
    new ParticleSystem();
    
    // Initialize interactive cursor
    new InteractiveCursor();
    
    // Initialize 3D card tilt
    new CardTilt();
    
    // Initialize scroll progress
    new ScrollProgress();
    
    // Initialize morphing text for subtitle
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        new MorphingText(heroSubtitle, [
            'Frontend Engineer & Full Stack Developer',
            'React.js Enthusiast',
            'Python Developer',
            'AI & ML Passionate'
        ], 3000);
    }
});

// Performance monitoring
const performanceObserver = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
        if (entry.entryType === 'navigation') {
            console.log('🚀 Page load time:', entry.duration + 'ms');
        }
    });
});

try {
    performanceObserver.observe({ entryTypes: ['navigation'] });
} catch (e) {
    window.addEventListener('load', () => {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        console.log('🚀 Page load time:', loadTime + 'ms');
    });
}

// Service worker registration for PWA capabilities
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('✅ ServiceWorker registration successful');
            })
            .catch(function(err) {
                console.log('❌ ServiceWorker registration failed');
            });
    });
}

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('click', function() {
    document.body.classList.remove('keyboard-navigation');
});

// Accessibility improvements
const accessibilityStyle = document.createElement('style');
accessibilityStyle.textContent = `
    .keyboard-navigation *:focus {
        outline: 2px solid #667eea;
        outline-offset: 2px;
    }
    
    @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
        }
    }
    
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(accessibilityStyle);

console.log('🎨 Portfolio enhanced with unique animations!');
console.log('📊 Performance metrics available in console');
console.log('🎯 Theme:', body.getAttribute('data-theme'));
console.log('✨ Features: Particle System, Interactive Cursor, 3D Cards, Morphing Text');

        