document.addEventListener('DOMContentLoaded', function() {
    // Handle navigation clicks
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.section');
    
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all nav items and sections
            navItems.forEach(nav => nav.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active'));
            
            // Add active class to clicked nav item
            this.classList.add('active');
            
            // Show corresponding section
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).classList.add('active');
            
            // Scroll to top of main content
            document.querySelector('.main-content').scrollTop = 0;
        });
    });
    
    // =====================
    // CERTIFICATES SECTION
    // =====================
    const certificateButtons = document.querySelectorAll('.view-certificate');
    const certificateModal = document.getElementById('certificateModal');
    const closeModalButtons = document.querySelectorAll('.close-modal');
    const modalTitle = document.getElementById('modal-title');
    const certificatePreview = document.getElementById('certificate-preview');
    const certificateDescription = document.getElementById('certificate-description');
    
    // ==================== EDIT CERTIFICATES ====================
    const certificates = {
        python: {
            title: "Python Programming Certificate",
            // CERTIFICATE IMAGE PATH
            preview: '<img src="certificates/python-stepik.jpg" alt="Python Certificate" style="max-width: 100%; border-radius: 5px;">'
        },
        pythonDS: {
            title: "Python for Data Science, AI & Development",
            // CERTIFICATE IMAGE PATH
            preview: '<img src="certificates/python-for-data-science.jpg" alt="Python for DS" style="max-width: 100%; border-radius: 5px;">'
        },
        software: {
            title: "Introduction to Software Engineering",
            // CERTIFICATE IMAGE PATH
            preview: '<img src="certificates/software-engineering.jpg" alt="Software Engineering" style="max-width: 100%; border-radius: 5px;">'
        },
        german: {
            title: "German Language Certificate",
            preview: '<img src="certificates/german-certificate.jpg" alt="German Language Certificate" style="max-width: 100%; border-radius: 5px;">'
        },
        carpentry: {
            title: "Certificate in Carpentry",
            preview: '<img src="certificates/woodworking-certificate.jpg" alt="wood working certificate">'
        },
    };
    
    certificateButtons.forEach(button => {
        button.addEventListener('click', function() {
            const certType = this.getAttribute('data-cert');
            const cert = certificates[certType];
            
            if (cert) {
                modalTitle.textContent = cert.title;
                certificatePreview.innerHTML = cert.preview;
                certificateDescription.textContent = cert.description;
                certificateModal.style.display = 'block';
            }
        });
    });
    
    // =================
    // PROJECTS SECTION
    // =================
    const projectButtons = document.querySelectorAll('.view-project');
    const projectModal = document.getElementById('projectModal');
    const projectModalTitle = document.getElementById('project-modal-title');
    const projectDescription = document.getElementById('project-description');
    const projectVideoContainer = document.getElementById('project-video-container');
    
    // ==================== EDIT PROJECTS ====================
    const projects = {

        exercise: { 
            title: "Workout Planner",
            description: "This Python program provides an specific workout routine based on the user's input. The planning for the written code came to me after thinking about how to optimize my training.",
            features: [
                "Interactive muscle group selection",
                "Specific muscle training options",
                "Customizable exercise selection based on the selected muscle group",
                "Automatic exercise completion",
                "Provides exercise details",
                "Structured workout routine with warm up"
            ],
            technologies: ["Python", "Data Structures", "Algorithm Design", "Fitness Planning"],
            videoType: "local",
            videoPath: "videos/workout planner description.mp4"
        },
        stopwatch: { 
            title: "Stopwatch & Workout Tracker",
            description: "This Python-based program provides a stopwatch with a GUI that helps the user track their time training and resting. The information is then saved and stored to be used in a monthly report.",
            features: [
                "Stopwatch with specific features for exercising",
                "GUI helpful for accurate tracking of time while training and resting",
                "Notes can be added in each session for more accurate reports",
                "Saved data that can be used by the user in order to optimize training",
                "Monthly reports are made based on the information saved each session",
                "Statistics displayed in each monthly report are saved for the user to track their progress"
            ],
            technologies: ["Python", "Tkinter", "JSON", "Multi-threading"],
            videoType: "local",
            videoPath: "videos/stopwatch.mp4"
        }    
    };
    
    projectButtons.forEach(button => {
        button.addEventListener('click', function() {
            const projectType = this.getAttribute('data-project');
            const project = projects[projectType];
        
            if (project) {
                projectModalTitle.textContent = project.title;
            
                // Build project description HTML
                projectDescription.innerHTML = `
                    <p>${project.description}</p>
                    <h4>Features:</h4>
                    <ul>
                        ${project.features.map(feature => `<li>${feature}    </li>`).join('')}
                    </ul>
                    <h4>Technologies Used:</h4>
                    <div class="project-tech">
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                `;
            
                projectVideoContainer.innerHTML = `
                    <h4>Video Demonstration:</h4>
                    <div class="video-wrapper">
                        <video width="100%" controls>
                            <source src="${project.videoPath}" type="video/mp4">
                            Your browser does not support HTML5 video.
                        </video>
                    </div>
                `;
            
                projectModal.style.display = 'block';
            }
        });
    });

    
    // ==========================
    // MODAL CLOSE FUNCTIONALITY
    // ==========================
    closeModalButtons.forEach(button => {
        button.addEventListener('click', function() {
            certificateModal.style.display = 'none';
            projectModal.style.display = 'none';
        });
    });
    
    window.addEventListener('click', function(event) {
        if (event.target === certificateModal || event.target === projectModal) {
            certificateModal.style.display = 'none';
            projectModal.style.display = 'none';
        }
    });
    
    // ===================
    // ANIMATE SKILL BARS
    // ===================
    const skillsSection = document.getElementById('skills');
    const skillBars = document.querySelectorAll('.skill-fill');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skillBars.forEach(bar => {
                    const width = bar.style.width;
                    bar.style.width = '0%';
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 300);
                });
            }
        });
    }, { threshold: 0.5 });
    
    if (skillsSection) {
        observer.observe(skillsSection);
    }
    
    // =====================
    // PERSONAL INFORMATION
    // =====================
    
    // 1. Contact information
    const emailElement = document.querySelector('.contact-info p:nth-child(1)');
    const phoneElement = document.querySelector('.contact-info p:nth-child(2)');
    
    // CONTACT INFO
    emailElement.innerHTML = '<i class="fas fa-envelope"></i> alonso.beca@hotmail.com';
    phoneElement.innerHTML = '<i class="fas fa-phone"></i> +49 171 2301079';
    
    // 2. Social links
    const githubBtn = document.querySelector('.github-btn');
    const certificatesBtn = document.querySelector('.certificates-btn');
    
    // LINKS
    githubBtn.href = "https://github.com/Bejarano-al?tab=repositories";
    certificatesBtn.href = "https://drive.google.com/drive/folders/1t2xt7Z9pBjq44JnlWRKuUksnD8_MGHRj?usp=drive_link";
    
    // ==========================
    // ADDITIONAL CUSTOMIZATIONS
    // ==========================
    
    // Adjust language skill levels
    const languageLevels = {
        spanish: 100,  // Native
        english: 80,   // Fluent
        german: 70,     // Fluent
    };
});
