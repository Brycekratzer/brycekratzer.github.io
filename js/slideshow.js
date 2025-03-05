/**
 * Slideshow JavaScript file for portfolio site
 * 
 * This file handles:
 * 1. Loading project data from JSON
 * 2. Creating slideshow elements dynamically
 * 3. Handling slideshow navigation
 */

document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    let slides = [];
    
    // Load project data from JSON file
    fetch('data/projects.json')
        .then(response => response.json())
        .then(data => {
            // Store projects array
            slides = data.projects;
            
            // Create slideshow
            if (slides.length > 0) {
                createSlideshow(slides);
            }
        })
        .catch(error => console.error('Error loading project data:', error));
    
    /**
     * Creates the slideshow with the provided project data
     * @param {Array} projects - The projects array from JSON
     */
    function createSlideshow(projects) {
        const slidesContainer = document.getElementById('slides-container');
        const indicators = document.getElementById('slide-indicators');
        
        // Create each slide
        projects.forEach((project, index) => {
            // Create slide
            const slide = document.createElement('div');
            slide.className = 'slide' + (index === 0 ? ' active' : '');
            
            // Create slide content
            const slideContent = `
                <div class="slide-content">
                    <div class="slide-image">
                        <img src="${project.image}" alt="${project.title}">
                    </div>
                    <div class="slide-info">
                        <span class="slide-type">${project.type}</span>
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <div class="slide-tech">
                            ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                        </div>
                    </div>
                </div>
            `;
            
            slide.innerHTML = slideContent;
            slidesContainer.appendChild(slide);
            
            // Create indicator
            const indicator = document.createElement('span');
            indicator.className = 'indicator' + (index === 0 ? ' active' : '');
            indicator.dataset.index = index;
            indicators.appendChild(indicator);
            
            // Add click event to indicator
            indicator.addEventListener('click', function() {
                goToSlide(parseInt(this.dataset.index));
            });
        });
        
        // Add event listeners for navigation buttons
        document.querySelector('.prev-btn').addEventListener('click', prevSlide);
        document.querySelector('.next-btn').addEventListener('click', nextSlide);
    }
    
    /**
     * Goes to the previous slide
     */
    function prevSlide() {
        goToSlide(currentSlide - 1 < 0 ? slides.length - 1 : currentSlide - 1);
    }
    
    /**
     * Goes to the next slide
     */
    function nextSlide() {
        goToSlide(currentSlide + 1 >= slides.length ? 0 : currentSlide + 1);
    }
    
    /**
     * Goes to a specific slide
     * @param {number} index - The index of the slide to go to
     */
    function goToSlide(index) {
        // Get all slides and indicators
        const slideElements = document.querySelectorAll('.slide');
        const indicatorElements = document.querySelectorAll('.indicator');
        
        // Hide current slide
        slideElements[currentSlide].classList.remove('active');
        indicatorElements[currentSlide].classList.remove('active');
        
        // Show new slide
        currentSlide = index;
        slideElements[currentSlide].classList.add('active');
        indicatorElements[currentSlide].classList.add('active');
    }
    
    // Auto-advance slides every 5 seconds
    setInterval(() => {
        nextSlide();
    }, 120000);
});