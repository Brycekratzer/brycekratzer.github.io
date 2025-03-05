# My Portfolio Website

This is the source code for my personal portfolio website, hosted on GitHub Pages.

## Structure Overview

```
your-portfolio-repo/
├── index.html                # Main homepage
├── css/                      # CSS stylesheets
│   └── styles.css            # Main stylesheet
├── js/                       # JavaScript files
│   ├── slideshow.js          # Project slideshow functionality
│   └── main.js               # General site functionality
├── images/                   # All project images and site assets
│   ├── projects/             # Project-specific images
│   │   ├── project1.jpg
│   │   └── project2.jpg
│   └── site/                 # Site design elements
│       └── profile.jpg
├── data/                     # Data files for easy updates
│   └── projects.json         # Project data in JSON format
└── README.md                 # This file
```

## How to Update Your Portfolio

### Adding a New Project

To add a new project to your portfolio, follow these steps:

1. **Add your project image:**
   - Place your project image in the `images/projects/` directory
   - Recommended size: 800x600px or similar aspect ratio

2. **Update the projects.json file:**
   - Open `data/projects.json`
   - Add a new project entry to the `projects` array:

```json
{
  "title": "Your New Project",
  "type": "Personal Project or School Project",
  "description": "A brief description of what the project does.",
  "technologies": ["Tech1", "Tech2", "Tech3"],
  "image": "images/projects/your-new-image.jpg"
}
```

3. **That's it!** Your new project will automatically appear in the slideshow.

### Updating Your Skills and Accomplishments

1. **Open the projects.json file:**
   - Navigate to the `skills` section
   - Add new categories or items as needed:

```json
{
  "category": "New Category",
  "items": ["Skill 1", "Skill 2", "Skill 3"]
}
```

### Updating Your About Me Section

1. **Open the projects.json file:**
   - Navigate to the `aboutMe` section
   - Update your bio and education information

2. **Update your profile photo:**
   - Replace the image in `images/site/profile.jpg` with your new photo
   - Keep the same filename to avoid needing to update HTML

### Updating Contact Information

1. **Open the projects.json file:**
   - Navigate to the `contact` section
   - Update your email and social media links

## Deploying Your Site

Since this is a GitHub Pages site, deployment is simple:

1. **Push changes to your repository:**
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push
   ```

2. **GitHub Pages will automatically deploy your site** from the main branch.

## Customizing the Design

If you want to change colors, fonts, or other design elements:

1. **For colors:** Edit the CSS variables at the top of `css/styles.css`:
   ```css
   :root {
       --primary-color: #4a6fa5;
       --secondary-color: #166088;
       /* other colors... */
   }
   ```

2. **For fonts:** Change the font-family in the body selector in `css/styles.css`

## Troubleshooting

### Images Not Showing
- Check file paths
- Ensure image file extensions match (case sensitive)
- Verify image files are in the correct directory

### Projects Not Appearing
- Check for syntax errors in your JSON file (missing commas, quotes, etc.)
- Look at browser console for JavaScript errors

## Need More Help?

This simple structure is designed to be easy to update. If you have questions or need to make more complex changes, refer to:

- Basic HTML/CSS/JavaScript tutorials
- GitHub Pages documentation at https://docs.github.com/en/pages