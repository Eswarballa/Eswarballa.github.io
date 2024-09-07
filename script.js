
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Scroll animation for sections
        const sections = document.querySelectorAll('.section-content');

        const animateOnScroll = () => {
            const triggerBottom = window.innerHeight / 5 * 4;

            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top;

                if(sectionTop < triggerBottom) {
                    section.classList.add('animate');
                } else {
                    section.classList.remove('animate');
                }
            });
        }

        window.addEventListener('scroll', animateOnScroll);
        animateOnScroll(); // Initial check on page load
