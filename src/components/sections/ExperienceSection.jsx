import React from 'react';

const ExperienceSection = ({ onClose }) => {
  const experiences = [
    {
      position: "Research Assistant",
      company: "University of Houston-Clear Lake",
      duration: "Sep 2023 – Dec 2024",
      description: "Worked under the mentorship of Dr. Thomas Dillon focusing on backend data processing and system design for real-time applications.",
      achievements: [
        "Transformed unstructured datasets into clean, query-ready formats",
        "Provided code quality feedback and conducted technical review sessions",
        "Managed student support and facilitated technical discussions during office hours"
      ]
    },
    {
      position: "Systems Engineer",
      company: "Infosys",
      duration: "Nov 2022 – Jun 2023",
      description: "Developed and deployed enterprise applications using Spring Boot, PostgreSQL, and AWS cloud infrastructure.",
      achievements: [
        "Built microservices with secure RESTful APIs and JWT authentication",
        "Deployed services to AWS EKS using Terraform and Docker",
        "Implemented CI/CD pipelines via Jenkins and GitHub Actions"
      ]
    },
    {
      position: "Project Engineer",
      company: "Wipro",
      duration: "Jan 2022 – Jun 2022",
      description: "Contributed to the development of full-stack applications using Angular, Node.js, and MongoDB.",
      achievements: [
        "Optimized MySQL queries, improving backend response times by 35%",
        "Created reusable components in Angular for faster UI development",
        "Collaborated with cross-functional teams in Agile sprints"
      ]
    }
  ];

  return (
    <div className="section-content visible">
      <button className="close-button" onClick={onClose}>×</button>
      <h2>Work Experience</h2>

      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="experience-card-header">
              <h3>{exp.position}</h3>
              <div className="company-badge">{exp.company}</div>
              <div className="duration-tag">{exp.duration}</div>
            </div>
            <div className="experience-card-body">
              <p>{exp.description}</p>
              <div className="achievements-list">
                <h4>Achievements</h4>
                <ul>
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Learning Internship Section */}
      <div className="section-subcontent">
        <h3>Learning Internship</h3>
        <div className="experience-card">
          <div className="experience-card-header">
            <h4>Data & UI Development Intern</h4>
            <div className="company-badge">Legacy Agencies</div>
            <div className="duration-tag">Jun 2024 – Dec 2024 (Unpaid)</div>
          </div>
          <div className="experience-card-body">
            <p>
              Completed a 6-month learning internship focused on frontend UI and data analysis work,
              emphasizing hands-on skill building, collaboration, and professional growth.
            </p>
            <div className="achievements-list">
              <h4>Key Contributions</h4>
              <ul>
                <li>Designed and implemented UI components, dashboards, and responsive layouts</li>
                <li>Analyzed large datasets to identify trends and visualize insights</li>
                <li>Conducted market and competitor research to assist product strategy</li>
                <li>Cleaned and validated data from diverse sources into usable formats</li>
                <li>Collaborated with product, marketing, and tech teams to build data-driven decisions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
