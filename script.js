// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Animate skill bars when scrolled into view
const animateSkillBars = () => {
    const skillBars = document.querySelectorAll('.skill-level');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const level = entry.target.getAttribute('data-level');
                entry.target.style.width = `${level}%`;
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => observer.observe(bar));
};

// Load projects dynamically
const projects = [
    {
        title: "E-Commerce Platform",
        description: "Full-stack e-commerce solution with React frontend and Node.js backend",
        technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
        icon: "🛒"
    },
    {
        title: "Task Management System",
        description: "Collaborative project management tool with real-time updates",
        technologies: ["Vue.js", "Firebase", "WebSockets"],
        icon: "📋"
    },
    {
        title: "Machine Learning API",
        description: "REST API for image classification using TensorFlow.js",
        technologies: ["Python", "Flask", "TensorFlow", "Docker"],
        icon: "🤖"
    },
    {
        title: "Weather Dashboard",
        description: "Real-time weather application with interactive maps",
        technologies: ["React", "Chart.js", "Weather API", "Leaflet"],
        icon: "🌤️"
    },
    {
        title: "Social Media Analytics",
        description: "Data visualization dashboard for social media metrics",
        technologies: ["D3.js", "Express", "PostgreSQL", "Redis"],
        icon: "📊"
    },
    {
        title: "Code Collaboration Tool",
        description: "Real-time code editor with collaboration features",
        technologies: ["Socket.io", "React", "Monaco Editor", "JWT"],
        icon: "👨‍💻"
    }
];

const loadProjects = () => {
    const projectsGrid = document.getElementById('projects-grid');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <div class="project-img">
                <span>${project.icon}</span>
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.technologies.map(tech => 
                        `<span class="project-tag">${tech}</span>`
                    ).join('')}
                </div>
                <a href="#" class="btn" style="padding: 0.5rem 1rem; font-size: 0.9rem;">
                    View Details
                </a>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
};

// Download CV button
document.getElementById('download-cv')?.addEventListener('click', (e) => {
    e.preventDefault();
    alert('CV download would start here. In a real application, this would download a PDF file.');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    animateSkillBars();
    
    // Add scroll effect to navbar
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if(window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(15, 23, 42, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.backgroundColor = 'rgba(15, 23, 42, 0.9)';
        }
    });
});