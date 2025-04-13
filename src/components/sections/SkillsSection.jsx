import React from 'react';

const SkillsSection = ({ onClose }) => {
  const technicalSkills = {
    'Programming & Core': [
      { name: 'JavaScript', level: 90 }, { name: 'Python', level: 80 },
      { name: 'C', level: 75 }, { name: 'C++', level: 75 }, { name: 'Java', level: 80 },
      { name: 'TypeScript', level: 80 }, { name: 'Git', level: 85 }, { name: 'GitLab', level: 80 },
      { name: 'Shell Scripting', level: 70 }, { name: 'Powershell', level: 65 }
    ],
    'Web & Full-Stack': [
      { name: 'React', level: 85 }, { name: 'Node.js', level: 80 }, { name: 'HTML5', level: 95 }, { name: 'CSS', level: 90 },
      { name: 'Bootstrap', level: 85 }, { name: 'TailwindCSS', level: 80 }, { name: 'Vue.js', level: 75 }, { name: 'Next.js', level: 80 },
      { name: 'Django', level: 75 }, { name: 'Flask', level: 70 }, { name: '.NET', level: 75 }, { name: 'Spring Boot', level: 75 },
      { name: 'FastAPI', level: 70 }, { name: 'PHP', level: 70 }, { name: 'OAuth2', level: 80 }, { name: 'JWT Authentication', level: 80 },
      { name: 'GraphQL', level: 70 }, { name: 'REST APIs', level: 90 }, { name: 'Serverless (Lambda, Cloud Functions)', level: 75 }
    ],
    'Cloud, DevOps & Infra': [
      'AWS', 'Azure AKS', 'Azure Data Factory', 'Kubernetes', 'Docker', 'CI/CD Pipelines',
      'Jenkins', 'Terraform', 'Prometheus', 'Grafana', 'ELK Stack', 'Project Management',
      'DevOps', 'Automation', 'Scrum'
    ],
    'AI/ML, Data & Embedded': [
      'Machine Learning', 'Deep Learning', 'TensorFlow/Keras', 'PyTorch', 'Scikit-learn',
      'NLP (OpenAI, LangChain)', 'Hugging Face', 'MLflow', 'Vector DBs (Pinecone, FAISS)',
      'Apache Spark / PySpark', 'Hadoop (HDFS, Hive, Pig...)', 'MySQL', 'PostgreSQL', 'MongoDB',
      'Oracle', 'SQLite3', 'Redis', 'Data Analysis', 'Data Visualization (Tableau, Power BI...)',
      'Embedded C'
    ]
  };

  const learningSkills = [
    'gRPC', 'Istio', 'LangChain', 'Vector Databases', 'MLflow', 'Playwright', 'Figma', 'Vite',
    'Chaos Engineering', 'Keras', 'Neural Network Design', 'CNN', 'RNNs', 'Data Wrangling',
    'Data Preprocessing', 'OAuth2', 'Unit Testing', 'Integration Testing', 'SSL/TLS Encryption',
    'UI/UX Validation', 'SSIS', 'OpenTelemetry', 'NumPy', 'Dask', 'Postman', 'Cucumber', 'PyTest',
    'TestNG', 'Test Automation', 'MATLAB', 'Embedded Linux', 'HIL / MIL / SIL Testing', 'Snowflake',
    'FastAPI', 'TailwindCSS', 'React Native', 'Three.js', 'Redux Toolkit', 'Zustand', 'Storybook',
    'Framer Motion', 'Google BigQuery', 'WebSockets', 'WebRTC', 'Power BI', 'Simulink', 'Pandas',
    'Data Mining', 'Azure AKS'
  ];

  const softSkills = [
    'Problem Solving', 'Team Collaboration', 'Communication', 'Project Management',
    'Adaptability', 'Creativity', 'Critical Thinking', 'Time Management'
  ];

  return (
    <div className="section-content visible">
      <button className="close-button" onClick={onClose}>×</button>
      <h2>Skills</h2>

      <div className="skills-container">
        <div className="skills-grid-horizontal">
          {['Programming & Core', 'Web & Full-Stack'].map((category, i) => (
            <div className="technical-skills section-divider half-width" key={i}>
              <h3>{category}</h3>
              <div className="skill-bars">
                {technicalSkills[category].map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-level" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {Object.entries(technicalSkills).map(([category, skills], i) => (
          !['Programming & Core', 'Web & Full-Stack'].includes(category) && (
            <div className="technical-skills section-divider" key={i}>
              <h3>{category}</h3>
              <div className="soft-skills-grid">
                {skills.map((skill, index) => (
                  <div key={index} className="soft-skill-item">{typeof skill === 'string' ? skill : skill.name}</div>
                ))}
              </div>
            </div>
          )
        ))}

        <div className="soft-skills section-divider">
          <h3>Soft Skills</h3>
          <div className="soft-skills-grid">
            {softSkills.map((skill, index) => (
              <div key={index} className="soft-skill-item">
                {skill}
              </div>
            ))}
          </div>
        </div>

        <div className="learning-skills section-divider">
          <h3>Learning New Skills</h3>
          <div className="soft-skills-grid">
            {learningSkills.map((skill, index) => (
              <div key={index} className="soft-skill-item learning">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
