document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});


const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');
menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('fa-times'); 
});


ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.header-content, .home-content, .about-content, .service-box, .portfolio-box, .contact form', {
    origin: 'top'
});
ScrollReveal().reveal('.about-img, .home-img', { origin: 'left' });
ScrollReveal().reveal('.service-box:nth-child(odd), .portfolio-box:nth-child(odd)', { origin: 'left' });
ScrollReveal().reveal('.service-box:nth-child(even), .portfolio-box:nth-child(even)', { origin: 'right' });

document.addEventListener('DOMContentLoaded', function() {
    const options = {
        strings: ['front-end developer'], 
        typeSpeed: 100, 
        backSpeed: 50, 
        startDelay: 500, 
        backDelay: 1000, 
        loop: true, 
        showCursor: true, 
        cursorChar: '|', 
    };

    const typed = new Typed('.typing', options);
});


document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        if (button.textContent.includes('Download CV')) {
            window.open('path/to/your-cv.pdf', '_blank'); 
        } else {
            alert('Feature not yet implemented! Stay tuned.');
        }
    });
});


const scrollTopButton = document.querySelector('.footer-iconTop a');
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
});
scrollTopButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        if (navbar.classList.contains('active')) {
            navbar.classList.remove('active');
            menuIcon.classList.remove('fa-times');
        }
    });
});

