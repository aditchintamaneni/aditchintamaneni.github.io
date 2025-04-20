// viz.js - Scripts for the visualizations page

document.addEventListener('DOMContentLoaded', function() {
    // Handle section navigation
    const sectionButtons = document.querySelectorAll('.section-button');
    const sections = document.querySelectorAll('.viz-section');
    
    // Only needed when there are multiple sections
    sectionButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Update active button
            sectionButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Scroll to section
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
    
    // Handle image loading
    const images = document.querySelectorAll('.viz-image img');
    
    images.forEach(img => {
        // Add loading feedback and error handling
        img.addEventListener('error', function() {
            this.parentElement.innerHTML = `
                <div class="image-error">
                    <p><i class="fas fa-exclamation-triangle"></i> Image could not be loaded</p>
                </div>
            `;
        });
    });
});