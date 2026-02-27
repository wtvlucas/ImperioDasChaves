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
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        
        // Se o link aponta para dentro da página atual, fazer smooth scroll
        if (!href.includes('../') && href.startsWith('#')) {
            e.preventDefault();
            const targetId = href;
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
        
        // Fechar menu
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

// ==================== SMOOTH SCROLL FOR NAV LINKS ==================== 

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        
        // Se o link aponta para dentro da página atual, fazer smooth scroll
        if (!href.includes('../') && href.startsWith('#')) {
            e.preventDefault();
            const targetId = href;
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
        // Se aponta para fora (href="../#..."), deixar funcionar normalmente
    });
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

// ==================== ACCESSIBILITY & KEYBOARD NAVIGATION ==================== 

// Allow keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
    }
});
