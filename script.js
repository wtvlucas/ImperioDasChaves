// ==================== MOBILE MENU TOGGLE ==================== 

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

// Close mobile menu when a link is clicked
mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar-container') && !e.target.closest('.mobile-menu')) {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
    }
});

// ==================== CONTACT BUTTON ==================== 

const contactBtn = document.getElementById('contactBtn');

contactBtn.addEventListener('click', () => {
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
});

// ==================== SMOOTH SCROLL FOR NAV LINKS ==================== 

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ==================== SCROLL ANIMATIONS ==================== 

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideUp 0.8s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe service cards
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    card.style.opacity = '0';
    observer.observe(card);
});

// ==================== HEADER SCROLL EFFECT ==================== 

const navbar = document.querySelector('.navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add shadow effect on scroll
    if (scrollTop > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(212, 175, 55, 0.15)';
    } else {
        navbar.style.boxShadow = '0 4px 15px rgba(212, 175, 55, 0.1)';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// ==================== SERVICE CARDS HOVER EFFECT ==================== 

serviceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// ==================== PARALLAX EFFECT ON HERO ==================== 

const hero = document.querySelector('.hero');

window.addEventListener('scroll', () => {
    let scrollPosition = window.pageYOffset;
    
    if (scrollPosition < window.innerHeight) {
        hero.style.backgroundPosition = `0% ${scrollPosition * 0.5}px`;
    }
});

// ==================== ACTIVE NAV LINK ON SCROLL ==================== 

window.addEventListener('scroll', () => {
    let current = '';
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = 'var(--primary-gold)';
        } else {
            link.style.color = 'var(--text-light)';
        }
    });
});

// ==================== PAGE LOAD ANIMATION ==================== 

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// ==================== CONTACT FORM SIMULATION (Optional Enhancement) ==================== 

// Add smooth transitions on page load
document.addEventListener('DOMContentLoaded', () => {
    // Animate logo
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.style.animation = 'pulse 2s ease-in-out infinite';
    }
});

// ==================== ACCESSIBILITY & KEYBOARD NAVIGATION ==================== 

// Allow keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
    }
});


// Disable Right-Click and Common Shortcuts (F12, Ctrl+U, etc.)
    document.addEventListener('contextmenu', event => event.preventDefault());
    document.onkeydown = function(e) {
        if (event.keyCode == 123 || // F12
            (e.ctrlKey && e.shiftKey && (e.keyCode == 73 || e.keyCode == 67 || e.keyCode == 74)) || // Ctrl+Shift+I/C/J
            (e.ctrlKey && (e.keyCode == 85 || e.keyCode == 83))) { // Ctrl+U/S
            return false;
        }
    }
