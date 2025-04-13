import React from 'react';

const EducationSection = ({ onClose }) => {
  return (
    <div className="section-content visible">
      <button className="close-button" onClick={onClose}>×</button>
      <h2>Education</h2>
      <div className="modern-timeline">
        <div className="timeline-item">
          <div className="timeline-marker"></div>
          <div className="timeline-content">
          <h3>Master’s Degree</h3>
          <p><strong>University of Houston-Clear Lake, Houston, TX, USA</strong></p>
          <p className="timeline-date">2023 - 2024</p>
          <p>Master of Science in Compute Science Engineering</p>
          <p>Major: Software Engineering</p>
          <p>GPA: 3.6/4.0</p>
          <p><strong>Key Subjects:</strong> Software Architecture, Software Testing, Engineering Software I & II, Agile Software Development, Configuration Management, Software Engineering Life Cycle, Mobile Robots, Capstone Project</p>
          <p><strong>Honors & Contributions:</strong>
          <ul>
            <li>Worked as a Research Assistant under Dr. Thomas Dillon, focusing on Software development, data processing and system design for real-time applications.</li>
            <li>Promoted to Technical Admin Intern for cloud tools during final semester.</li>
            <li>Discovered a critical bug in the University of Houston-Clear Lake's PeopleSoft system, preventing asset data conflicts. Received appreciation from the Director and was promoted to Tech Administrator</li>
            <li>Developed personal projects with extensive Git repositories containing various files and project content.</li>
          </ul>
          </p>
          </div>
        </div>
        
        <div className="timeline-item">
          <div className="timeline-marker"></div>
          <div className="timeline-content">
          <h3>Bachelor’s Degree</h3>
          <p><strong>Lendi Institute of Engineering & Technology, Vizag, AP, INDIA</strong></p>
          <p className="timeline-date">2018</p>
          <p>Bachelor of Technology in Electronics and Communication Engineering</p>
          <p>GPA: 3.2/4.0</p>
          <p><strong>Key Subjects:</strong> Data Structures, Computer Programming, OOPs Through Java, Embedded Systems, Digital Signal Processing, VLSI Design, Microprocessors & Microcontrollers, Computer Architecture & Organization, Digital Communications</p>
          <p><strong>Key Achievements:</strong>
          <ul>
            <li>Published a skin cancer detection system using AI and MATLAB in an IEEE journal</li>
            <li>Designed a 5G-compatible antenna and presented at National Tech Meet</li>
            <li>Developed an IoT-based home automation system using ESP32</li>
            <li>Created an FPGA-based image processing module with Verilog</li>
            <li>Completed a project on “Smart Traffic Signal System” using sensors</li>
            <li>IEEE Member</li>
          </ul>
          </p>

          </div>
        </div>

        <div className="timeline-item">
  <div className="timeline-marker"></div>
  <div className="timeline-content">
  <h3>Courses</h3>

<ul>
  <li>
    <strong>Introduction to DevOps and Site Reliability Engineering (SRE)</strong>
    <p className="timeline-date">2025 Latest</p>
    <p><strong>Platform:</strong> Linux Foundation Training <a href="https://training.linuxfoundation.org/training/introduction-to-devops-and-site-reliability-engineering-lfs162/" target="_blank" rel="noopener noreferrer">View Course</a>
    </p>
    <p><strong>Key Skills:</strong> CI/CD, Monitoring, Incident Response, SRE Best Practices</p>
    <p><strong>Concepts Covered:</strong> DevOps lifecycle, automation pipelines, infrastructure as code, service-level objectives (SLOs), tools like Jenkins, Docker, Prometheus</p>
  </li>

  <br />

  <li>
    <strong>Cloud Foundations</strong>
    <p className="timeline-date">2025 Latest</p>
    <p><strong>Platform:</strong> Great Learning <a href="https://www.coursera.org/learn/cloud-computing-basics" target="_blank" rel="noopener noreferrer">View Course</a>    </p>
    <p><strong>Key Skills:</strong> Cloud Service Models, Virtualization, Storage, Deployment Models</p>
    <p><strong>Concepts Covered:</strong> IaaS, PaaS, SaaS, public/private/hybrid cloud models, compute and storage services overview, cloud deployment architecture</p>
  </li>
</ul>


    <li><strong>Prompt Engineering for ChatGPT</strong> <p className="timeline-date">2025 Latest</p></li>
    <p><strong>Platform:</strong> Coursera (DeepLearning.AI)     <a href="https://www.coursera.org/learn/prompt-engineering" target="_blank" rel="noopener noreferrer">View Course</a></p>
    
    <p>Course 1: AI Agents and Agentic AI with Python & Generative AI</p>
    <p>Course 2: Prompt Engineering for ChatGPT</p>
    <p>Course 3: AI Agents and Agentic AI Architecture in Python</p>
    <p><strong>Key Skills:</strong> Prompt Design, NLP, LLMs, AI Integration</p>
    <p><strong>Concepts Covered:</strong> Zero-shot/few-shot prompting, prompt patterns, refining outputs, ChatGPT usage, hallucination handling.</p>
  </div>
</div>

        
        <div className="timeline-item">
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <h3>Certifications</h3>
            <p><strong>Microsoft Azure Solutions Architect Expert</strong> – LinkedIn</p>
            <p><strong>Advanced Java Full Stack</strong> – StackRoute</p>
            <p><strong>MATLAB & Simulink for Embedded Systems</strong> – MathWorks</p>
            <p><strong>Automate the Boring Stuff with Python</strong> – Udemy</p>
            <p><strong>Programming with Python</strong> – Internshala</p>
            <p><strong>Internet of Things (IoT)</strong> – Origin, ITsez Hub</p>
            <p><strong>JavaScript Fundamentals</strong> – Udemy</p>
            <p><strong>Switching Theory and Logic Design</strong> – NPTEL</p>
            <p><strong>Mathematical Methods and its Applications</strong> – NPTEL</p>

            
          </div>
        </div>
        
        <div className="timeline-item">
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <h3>Test Scores</h3>
            <ul>
              <li>IELTS: 7.0</li>
              <li>GRE: 313</li>
              <li>Duolingo: 125</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;