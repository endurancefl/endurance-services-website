// Hero video: play from 6s to 12s, no loop
const heroVideo = document.getElementById('heroVideo');
heroVideo.currentTime = 6;
heroVideo.addEventListener('canplay', () => {
    heroVideo.currentTime = 6;
    heroVideo.play();
});
heroVideo.addEventListener('timeupdate', () => {
    if (heroVideo.currentTime >= 12) {
        heroVideo.pause();
    }
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when a link is clicked
navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

// Contact form handling
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData.entries());

    // For now, show a success message
    // Replace this with actual form submission (e.g., email service, backend API)
    const wrapper = contactForm.parentElement;
    wrapper.innerHTML = `
        <div style="text-align: center; padding: 60px 20px;">
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#274637" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
            <h3 style="font-family: 'Oswald', sans-serif; font-size: 1.5rem; margin-top: 20px; color: #1a1a1a; text-transform: uppercase;">Message Sent!</h3>
            <p style="margin-top: 12px; color: #6b6b6b;">Thank you for reaching out. We'll get back to you shortly.</p>
        </div>
    `;
});

// Smooth reveal animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Apply reveal animation to sections
document.querySelectorAll('.service-card, .feature, .about-content, .contact-info, .contact-form-wrapper').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});
