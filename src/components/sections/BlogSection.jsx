import React from 'react';

 const BlogSection = ({ onClose }) => {
  const blogPosts = [
  {
  title: "The AI Revolution in Music: Echoes of the Future",
  date: "October 26, 2023",
  excerpt: "Explore the transformative power of AI in music, from AI-generated compositions to intelligent music recommendation systems like EchoAI.",
  tags: ["AI", "Machine Learning", "Music Generation", "Deep Learning", "ChatGPT API"],
  link: "blog-ai-music.html",
  },
  {
  title: "Building for the Cloud: A Full-Stack Developer's Playbook",
  date: "October 19, 2022",
  excerpt: "A guide to building scalable web applications using modern full-stack technologies and cloud computing best practices.",
  tags: ["Full-Stack Development", "Cloud Computing", "React", "Node.js", "AWS", "Kubernetes"],
  link: "blog-full-stack.html",
  },
  {
  title: "Data Engineering: The Backbone of Data-Driven Decisions",
  date: "October 12, 2022",
  excerpt: "Learn how data engineering transforms raw data into actionable insights through ETL pipelines, data warehousing, and big data processing.",
  tags: ["Data Engineering", "ETL", "Data Warehousing", "Big Data", "Azure Data Factory", "AWS Glue"],
  link: "blog-data-engineering.html",
  },
  {
  title: "The Heart of IoT: Embedded Systems and Their Future",
  date: "October 5, 2024",
  excerpt: "Discover the crucial role of embedded systems in IoT, from firmware development to real-time control and secure communication protocols.",
  tags: ["Embedded Systems", "IoT", "Firmware", "Microcontrollers", "C", "RTOS"],
  link: "blog-embedded-systems.html",
  },
  {
  title: "AI in Healthcare: Deep Learning for Precision Diagnostics",
  date: "December 28, 2024",
  excerpt: "Explore the application of deep learning in medical imaging for disease detection, including a skin cancer detection system with 93% accuracy.",
  tags: ["AI", "Deep Learning", "Medical Imaging", "Healthcare", "TensorFlow", "CNN"],
  link: "blog-ai-healthcare.html",
  },
  {
  title: "Automating the Cloud: Infrastructure as Code for Success",
  date: "September 21, 2023",
  excerpt: "Best practices for automating cloud infrastructure with Infrastructure as Code, ensuring scalability, reliability, and efficient deployments.",
  tags: ["Cloud Automation", "Infrastructure as Code", "Terraform", "AWS", "Azure", "CI/CD"],
  link: "blog-cloud-automation.html",
  },
  {
  title: "The Future of Software Testing: AI-Driven Automation and Predictive Analysis",
  date: "January 14, 2024",
  excerpt: "The evolution of software testing with AI, automating defect prediction, debugging, and enhancing software quality.",
  tags: ["Software Testing", "AI Automation", "Machine Learning", "Test Automation", "Selenium", "PyTest"],
  link: "blog-software-testing.html",
  },
  {
  title: "Power Electronics in Modern Applications: Innovations and Advancements",
  date: "September 7, 2024",
  excerpt: "Innovations in power electronics and control systems, from MATLAB/Simulink simulations to AI-driven predictive maintenance.",
  tags: ["Power Electronics", "Control Systems", "MATLAB", "Simulink", "AI", "Automation"],
  link: "blog-power-electronics.html",
  }
  ];

  return (
  <div className="section-content visible">
  <button className="close-button" onClick={onClose}>×</button>
  <h2>Blog</h2>

  <div className="blog-container">
  {blogPosts.map((post, index) => (
  <div key={index} className="blog-post">
  <h3 className="post-title">{post.title}</h3>
  <p className="post-date">{post.date}</p>
  <p className="post-excerpt">{post.excerpt}</p>
  <div className="post-tags">
  {post.tags.map((tag, tagIndex) => (
  <span key={tagIndex} className="post-tag">{tag}</span>
  ))}
  </div>
  <a href={post.link} className="read-more" target="_blank">Read more →</a>
  </div>
  ))}
  </div>
  </div>
  );
 };

 export default BlogSection;