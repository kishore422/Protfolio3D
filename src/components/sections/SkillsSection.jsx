import React from 'react';

const SkillsSection = ({ onClose }) => {
  const technicalSkills = {
    'Programming & Core': [
      { name: 'Python', level: 80 },
      { name: 'C', level: 75 }, { name: 'C++', level: 75 }, { name: 'Java', level: 80 },{ name: 'UI/UX Design ', level: 90 }, 
      { name: 'JavaScript/TypeScript', level: 80 }, { name: 'Git/GitLab', level: 85 }, { name: 'Unit Testing', level: 80 },
      { name: 'Shell/Powershell', level: 70 }, { name: 'TCP/IP, HTTP, WebSockets', level: 65 }, { name: 'DSA/OOP', level: 85 }, { name: 'Linux/Unix', level: 70 }
    ],
    'Web & Full-Stack': [
      { name: 'React', level: 85 }, { name: 'Node.js', level: 80 }, { name: 'HTML5', level: 95 }, { name: 'CSS/TailwindCSS', level: 90 },
      { name: 'Bootstrap', level: 85 }, { name: 'Vue.js/Next.js', level: 75 },
      { name: 'Django', level: 75 }, { name: 'Flask', level: 70 }, { name: '.NET/Spring Boot', level: 75 }, { name: 'FastAPI/PHP', level: 80 },
      { name: 'GraphQL/REST APIs', level: 80 }, { name: 'Serverless (Lambda, Cloud Functions)', level: 75 }
    ],
    'Cloud, DevOps & Infra': [
      'AWS', 'Azure AKS', 'Kubernetes', 'Docker', 'CI/CD Pipelines',
      'Jenkins', 'Terraform', 'Prometheus', 'Grafana', 'ELK Stack', 'Project Management',
      'DevOps', 'Azure Data Factory', 'Automation', 'Scrum'
    ],
    'AI/ML, Data & Embedded': [
      'Machine Learning', 'Deep Learning','NLP (OpenAI, LangChain)', 'Apache Spark / PySpark',  'Hadoop (HDFS, Hive, Pig...)', 'Data Visualization', 'Vector DBs (Pinecone, FAISS)','TensorFlow/Keras', 'PyTorch', 'Scikit-learn',
      'Hugging Face', 'MLflow',
       'MySQL', 'PostgreSQL', 'MongoDB',
      'Oracle', 'SQLite3', 'Data Analysis','Tableau', 'Power BI','Embedded C', 
      
    ]
  };

  const learningSkills = [
    'gRPC', 'Istio', 'LangChain',  'MLflow', 'Playwright', 'Figma', 'Vite','Keras',
     'CNN', 'RNNs', 'Data Wrangling','UI/UX Validation',
     'OAuth2', 'Unit Testing', 'Data Preprocessing','Integration Testing', 'SSL/TLS Encryption', 'Vector Databases','Chaos Engineering', 'HIL / MIL / SIL Testing', 'Neural Network Design',
     'SSIS', 'OpenTelemetry', 'NumPy', 'Dask', 'Postman', 'Cucumber', 'PyTest',
    'TestNG', 'Test Automation', 'MATLAB', 'Embedded Linux',  'Snowflake',
    'FastAPI', 'TailwindCSS', 'React Native', 'Three.js', 'Redux Toolkit', 'Zustand', 'Storybook',
    'Framer Motion', 'Google BigQuery', 'WebSockets', 'WebRTC', 'Power BI', 'Simulink', 'Pandas',
    'Data Mining', 'Azure AKS'
  ];

  const softSkills = [
    'Problem Solving', 'Team Collaboration', 'Creativity & Communication', 'Project Management',
    'Adaptability', 'Critical Thinking', 'Time Management'
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
