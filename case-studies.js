// case-studies.js - Scripts for the case studies page

document.addEventListener('DOMContentLoaded', function() {
    const sectionButtons = document.querySelectorAll('.section-button');
    const sections = document.querySelectorAll('.case-section');
    
    sectionButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            sectionButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 20,
                    behavior: 'smooth'
                });
            }
        });
    });

});