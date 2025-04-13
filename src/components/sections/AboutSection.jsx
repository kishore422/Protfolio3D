import React from 'react';

const AboutSection = ({ onClose }) => {
  return (
    <div className="section-content visible">
      <button className="close-button" onClick={onClose}>×</button>
      <div className="section-content-inner">
        <h2>About Me</h2>
        <div className="about-grid">
          <div className="about-image">
            <img 
              src="/images/sai-profile.jpg" 
              alt="Sai Kishore Profile" 
              className="profile-image" 
            />
          </div>
          <div className="about-text">
            <p>Hey! I’m Sai Kishore - a passionate software engineer, a builder at heart, and someone who genuinely enjoys solving real-world problems through code and creativity.</p>
            <p>From crafting intuitive frontends to scaling robust backend systems, I love working across the full stack. I’ve deployed cloud-native applications, built intelligent AI systems, and designed automation workflows that just work. My focus is always on writing clean, scalable, and maintainable code - while keeping performance, user experience, and security in mind.</p>
            <p>I enjoy blending logic with creativity - whether I’m building a sleek portfolio, automating cloud infrastructure, or integrating an AI chatbot into a live product. I believe great software is not just functional - it's fast, elegant, and thoughtful.</p>
            <p>Off the screen, I’m into photography, storytelling, music, and gaming. I find inspiration in everything visual and expressive - and that often reflects in the products I build.</p>
            <p>Looking ahead, I’m open to exciting opportunities in development and innovation.</p>
            <p>Let’s build what’s next. 🚀</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
   