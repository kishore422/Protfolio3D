// src/components/Navbar.jsx
import React, { useState } from 'react';

const Navbar = ({ onSectionChange, activeSection }) => {
  const [hovered, setHovered] = useState(null);
  
  const sections = [
    { id: 'about', label: 'About Me' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'blog', label: 'Blog' },
    { id: 'languages', label: 'Languages' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="navigation">
      {sections.map((section) => (
        <div
          key={section.id}
          className={`navigation-item ${activeSection === section.id ? 'active' : ''} ${hovered === section.id ? 'hovered' : ''}`}
          onClick={() => onSectionChange(section.id)}
          onMouseEnter={() => setHovered(section.id)}
          onMouseLeave={() => setHovered(null)}
        >
          {section.label}
        </div>
      ))}
    </div>
  );
};

export default Navbar;