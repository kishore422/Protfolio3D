import React from 'react';


const ProjectsSection = ({ onClose }) => {
  const projects = [
    {
      title: "News Portal System",
      description: "Online portal with category-based news, image management, comment system, and secure admin panel for real-time publishing.",
      technologies: ["PHP", "MySQL", "Bootstrap", "HTML", "CSS", "CRUD", "cPanel"],
      image: "/images/project3.jpg",
      demoLink: "https://newsportal.42web.io",
      repoLink: "https://github.com/kishore422/news-portal"
    },
    {
      title: "Ekart – Shopping Website (E-commerce Website)",
      description: "Clone of Flipkart with dynamic listings, product filtering, full cart system, admin control, and secure login.",
      technologies: ["PHP", "MySQL", "Bootstrap", "jQuery", "MVC Pattern", "Authentication", "InfinityFree"],
      image: "/images/project4.jpg",
      demoLink: "http://ekartstore.kesug.com",
      repoLink: "https://github.com/kishore422/ekart-shopping"
    },
    {
      title: "Hotel Management System",
      description: "Hotel system with room listings, booking, admin panel, user roles, booking reports, and validation forms.",
      technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Session Management", "Admin Dashboard"],
      image: "/images/project5.jpg",
      demoLink: "https://hotelbooking.infinityfreeapp.com",
      repoLink: "https://github.com/kishore422/hotel-management"
    },
    {
      title: "Skin Cancer Detection (MATLAB + Deep Learning)",
      description: "Deep learning-based desktop system for early-stage classification of skin cancers using CNNs on ISIC 2020 dataset. Includes GUI, prediction output, and research paper.",
      technologies: ["MATLAB", "CNN", "GUI Dev", "Transfer Learning", "Medical Imaging", "Image Preprocessing"],
      image: "/images/project1.jpg",
      repoLink: "https://github.com/kishore422/skin-cancer-detection"
    },
    {
      title: "Muzix App – Music Streaming Platform",
      description: "Full-featured music streaming platform with playlist management, JWT-auth login, microservice backend, and Angular-powered frontend.",
      technologies: ["Angular", "Spring Boot", "JWT Auth", "REST API", "MongoDB", "MySQL", "Full-Stack"],
      image: "/images/project2.jpg",
      repoLink: "https://github.com/kishore422/muzix"
    },
    {
      title: "Online Food Order Website",
      description: "Online food delivery platform with menu management, user authentication, real-time order status, and admin controls. Specific order customisation",
      technologies: ["PHP", "HTML5", "CSS3", "MySQL", "Responsive Design", "GitHub", "Hosting"],
      image: "/images/project6.jpg",
      demoLink: "https://foodorderonline.infy.uk",
      repoLink: "https://github.com/kishore422/online-food-order"
    },
    {
      title: "Online Grocery Store (Django)",
      description: "Grocery store with secure auth, cart, product management, admin dashboard, and PDF invoice support using Django.",
      technologies: ["Python", "Django", "SQLite3", "Jinja2", "SMTP Email", "ORM", "Render Deployment"],
      image: "/images/project7.jpg",
      demoLink: "https://grocery-store-2qgo.onrender.com",
      repoLink: "https://github.com/kishore422/grocery-store"
    },
    {
      title: "Agile Screening Tool (MATLAB)",
      description: "Agile-based MATLAB GUI tool with sprint tracking, task boards, version control, and research publication.",
      technologies: ["MATLAB", "Agile", "Scrum", "GUI", "GitLab", "Model Evaluation", "Documentation"],
      image: "/images/project8.jpg",
      repoLink: "https://github.com/kishore422/agile-screening-tool"
    },
    {
      title: "Seismic Acquisition 3D Mapping System",
      description: "Python desktop app for seismic data acquisition with real-time plotting, GUI, export to Word, and field calculation.",
      technologies: ["Python", "Tkinter", "Matplotlib", "SQLite3", "OOP", "MVC", "Data Visualization"],
      image: "/images/project9.jpg",
      repoLink: "https://github.com/kishore422/seismic-acquisition-3d-mapping-system"
    }
  ];
  
  return (
    <div className="section-content visible">
      <button className="close-button" onClick={onClose}>×</button>
      <h2>Projects</h2>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
  <img src={project.image} alt={project.title} />
</div>

            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="technology-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
              <div className="project-links">
  {project.demoLink && (
    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
  )}
  {project.repoLink && (
    <a href={project.repoLink} target="_blank" rel="noopener noreferrer">GitHub</a>
  )}
</div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;