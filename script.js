// HealthCare Medicals - Interaction Script

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    lucide.createIcons();

    // Initialize AOS (Animate on Scroll)
    AOS.init({
        duration: 1000,
        once: true,
        easing: 'ease-out-cubic',
    });

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle (Simplified for demo)
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    mobileBtn.addEventListener('click', () => {
        // In a real app, this would toggle a mobile menu overlay
        alert('Mobile Menu functionality - Imagine a sleek side drawer sliding in!');
    });

    // Smooth Scrolling for all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 100;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form Submissions Interception
    const orderForm = document.getElementById('medicine-order-form');
    if (orderForm) {
        orderForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const phone = document.getElementById('phone').value;
            alert(`Order received! Our pharmacist will contact you shortly at ${phone}.`);
            orderForm.reset();
        });
    }

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }

    // Add to Cart Animation
    const addBtn = document.querySelectorAll('.add-to-cart');
    addBtn.forEach(btn => {
        btn.addEventListener('click', function() {
            const icon = this.querySelector('i');
            this.style.background = '#10b981'; // Change to green
            this.innerHTML = '<i data-lucide="check"></i>';
            lucide.createIcons();
            
            setTimeout(() => {
                this.style.background = '#2563eb'; // Back to blue
                this.innerHTML = '<i data-lucide="plus"></i>';
                lucide.createIcons();
            }, 2000);
        });
    });

    // Live Counter (Mock for business growth section / stats)
    const stats = document.querySelectorAll('.stat-item h3');
    stats.forEach(stat => {
        const target = parseInt(stat.innerText);
        if(!isNaN(target)) {
            let count = 0;
            const updateCount = () => {
                const speed = 200;
                const inc = target / speed;
                if(count < target) {
                    count += inc;
                    stat.innerText = Math.ceil(count) + (stat.innerText.includes('k') ? 'k+' : '%');
                    setTimeout(updateCount, 1);
                } else {
                    stat.innerText = target + (stat.innerText.includes('k') ? 'k+' : '%');
                }
            };
            // updateCount(); // Trigger when visible in real implementation
        }
    });
});
