/**
 * Main JavaScript file for portfolio site
 * 
 * This file handles:
 * 1. Loading data from the JSON file
 * 2. Populating the about me section
 * 3. Populating the skills section
 * 4. Populating the experience section
 * 5. Setting up contact information
 * 6. Form submission handling
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
            
            // Populate Experience section
            populateExperience(data.experience);
            
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
 * Populates the Experience section with data from JSON
 * @param {Array} experienceData - The experience data array
 */
function populateExperience(experienceData) {
    const experienceContainer = document.getElementById('experience-container');
    
    experienceData.forEach(job => {
        // Create experience item
        const experienceItem = document.createElement('div');
        experienceItem.className = 'experience-item';
        
        // Create experience content
        const experienceContent = document.createElement('div');
        experienceContent.className = 'experience-content';
        
        // Create header with job title and company
        const header = document.createElement('div');
        header.className = 'experience-header';
        
        const title = document.createElement('h3');
        title.textContent = job.title;
        
        const company = document.createElement('div');
        company.className = 'experience-company';
        company.textContent = job.company;
        
        const period = document.createElement('span');
        period.className = 'experience-period';
        period.textContent = job.period;
        
        header.appendChild(title);
        header.appendChild(company);
        header.appendChild(period);
        
        // Create description
        const description = document.createElement('p');
        description.className = 'experience-description';
        description.textContent = job.description;
        
        // Create responsibilities list
        const responsibilities = document.createElement('div');
        responsibilities.className = 'experience-responsibilities';
        
        const responsibilitiesTitle = document.createElement('h4');
        responsibilitiesTitle.textContent = 'Responsibilities:';
        
        const responsibilitiesList = document.createElement('ul');
        
        job.responsibilities.forEach(responsibility => {
            const item = document.createElement('li');
            item.textContent = responsibility;
            responsibilitiesList.appendChild(item);
        });
        
        responsibilities.appendChild(responsibilitiesTitle);
        responsibilities.appendChild(responsibilitiesList);
        
        // Create technologies tags
        const techDiv = document.createElement('div');
        techDiv.className = 'experience-tech';
        
        const techTitle = document.createElement('h4');
        techTitle.textContent = 'Technologies:';
        techDiv.appendChild(techTitle);
        
        job.technologies.forEach(tech => {
            const techTag = document.createElement('span');
            techTag.className = 'experience-tech-tag';
            techTag.textContent = tech;
            techDiv.appendChild(techTag);
        });
        
        // Assemble the experience item
        experienceContent.appendChild(header);
        experienceContent.appendChild(description);
        experienceContent.appendChild(responsibilities);
        experienceContent.appendChild(techDiv);
        
        experienceItem.appendChild(experienceContent);
        experienceContainer.appendChild(experienceItem);
    });
}

/**
 * Sets up contact links with data from JSON
 * @param {Object} contactData - The contact data object
 */
function setupContactInfo(contactData) {
    // Set social media links
    document.getElementById('linkedin-link').setAttribute('href', contactData.linkedin);
    document.getElementById('instagram-link').setAttribute('href', contactData.instagram);
}

/**
 * Sets up the contact form submission
 */
function setupContactForm() {
    console.log("Contact form is ready to use with Formspree");
}