import React from 'react';

const LanguagesSection = ({ onClose }) => {
  const languages = [
    {
      name: "English",
      proficiency: "Native/Fluent",
      certifications: "IELTS 8.5"
    },
    {
      name: "Spanish",
      proficiency: "Advanced (C1)",
      certifications: "DELE C1"
    },
    {
      name: "French",
      proficiency: "Intermediate (B1)",
      certifications: "DELF B1"
    },
    {
      name: "German",
      proficiency: "Basic (A2)",
      certifications: "Goethe-Zertifikat A2"
    }
  ];
  
  const programmingLanguages = [
    {
      name: "JavaScript",
      proficiency: "Expert",
      years: 6
    },
    {
      name: "Python",
      proficiency: "Advanced",
      years: 4
    },
    {
      name: "Java",
      proficiency: "Intermediate",
      years: 3
    },
    {
      name: "C++",
      proficiency: "Basic",
      years: 1
    }
  ];

  return (
    <div className="section-content visible">
      <button className="close-button" onClick={onClose}>×</button>
      <h2>Languages</h2>
      
      <div className="languages-container">
        <div className="spoken-languages">
          <h3>Spoken Languages</h3>
          <div className="languages-grid">
            {languages.map((lang, index) => (
              <div key={index} className="language-card">
                <div className="language-info">
                  <h4>{lang.name}</h4>
                  <p className="proficiency">{lang.proficiency}</p>
                  {lang.certifications && (
                    <p className="certifications">
                      <span>Certification:</span> {lang.certifications}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="programming-languages">
          <h3>Programming Languages</h3>
          <div className="languages-grid">
            {programmingLanguages.map((lang, index) => (
              <div key={index} className="language-card">
                <div className="language-info">
                  <h4>{lang.name}</h4>
                  <p className="proficiency">{lang.proficiency}</p>
                  <p className="experience">{lang.years} years of experience</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguagesSection;