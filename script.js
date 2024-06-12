// script.js
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const typingText = "Welcome to Richard's Portfolio";
    let i = 0;
    const speed = 100; // Adjust typing speed here

    function typeWriter() {
        if (i < typingText.length) {
            document.getElementById('typing-text').innerHTML += typingText.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else {
            setTimeout(() => {
                document.getElementById('typing-text').innerHTML = '';
                i = 0;
                typeWriter();
            }, 2000); // Adjust delay before restarting typing effect here
        }
    }

    typeWriter();

    const options = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});
