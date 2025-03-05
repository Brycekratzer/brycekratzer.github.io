/**
 * Main JavaScript file for portfolio site
 * 
 * This file handles:
 * 1. Loading data from the JSON file
 * 2. Populating the about me section
 * 3. Populating the skills section
 * 4. Setting up contact information
 * 5. Form submission handling
 */

document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Load data from JSON file
    fetch('data/projects.json')
        .then(response => response.json())
        .then(data => {
            // Populate About Me section
            populateAboutMe(data.aboutMe);
            
            // Populate Skills section
            populateSkills(data.skills);
            
            // Set up contact links
            setupContactInfo(data.contact);
        })
        .catch(error => console.error('Error loading data:', error));
    
    // Set up contact form
    setupContactForm();
});

/**
 * Populates the About Me section with data from JSON
 * @param {Object} aboutData - The about me data object
 */
function populateAboutMe(aboutData) {
    document.getElementById('bio-text').textContent = aboutData.bio;
    document.getElementById('education-text').textContent = aboutData.education;
}

/**
 * Populates the Skills section with data from JSON
 * @param {Array} skillsData - The skills data array
 */
function populateSkills(skillsData) {
    const skillsContainer = document.getElementById('skills-container');
    
    skillsData.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'skill-category';
        
        const categoryTitle = document.createElement('h3');
        categoryTitle.textContent = category.category;
        
        const skillList = document.createElement('ul');
        skillList.className = 'skill-list';
        
        category.items.forEach(skill => {
            const skillItem = document.createElement('li');
            skillItem.textContent = skill;
            skillList.appendChild(skillItem);
        });
        
        categoryDiv.appendChild(categoryTitle);
        categoryDiv.appendChild(skillList);
        skillsContainer.appendChild(categoryDiv);
    });
}

/**
 * Sets up contact links with data from JSON
 * @param {Object} contactData - The contact data object
 */
function setupContactInfo(contactData) {
    // Set email as contact form action
    document.getElementById('contact-form').setAttribute('action', `mailto:${contactData.email}`);
    
    // Set social media links
    document.getElementById('linkedin-link').setAttribute('href', contactData.linkedin);
    document.getElementById('instagram-link').setAttribute('href', contactData.instagram);
}

/**
 * Sets up the contact form submission
 */
function setupContactForm() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', function(event) {
        // Basic form validation is handled by HTML5 required attributes
        
        // You could add additional validation here
        
        // For a real implementation, you'd need a backend to process this
        // This is just a placeholder to show how it would work
        
        // You could also use a service like Formspree for a static site
        // Just change the action to your Formspree URL:
        // form.action = "https://formspree.io/f/your-form-id";
        
        // Prevent default form submission for this demo
        // event.preventDefault();
        
        // alert('Form submitted! In a real implementation, this would send an email.');
    });
}