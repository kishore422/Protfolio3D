import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const ContactSection = ({ onClose }) => {
  const formRef = useRef();

  const [formData, setFormData] = useState({
    name: '', email: '', mobile: '', subject: '', message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false, error: false, message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_4fxnafp',
      'template_ebejqhl',
      formRef.current,
      '2SPUdhCb-Jwtt9vmH'
    )
    .then(() => {
      setFormStatus({ submitted: true, error: false, message: 'Message sent successfully!' });
      setFormData({ name: '', email: '', mobile: '', subject: '', message: '' });
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      setFormStatus({ submitted: true, error: true, message: 'Failed to send message. Please try again later.' });
    });
  };

  return (
    <div className="section-content visible">
      <button className="close-button" onClick={onClose}>×</button>
      <h2>Contact Me</h2>
      


      {/* <div className="contact-item">
            <a href="/resume.pdf" className="resume-button" download>Download Resume</a>
          </div> */}


      <div className="contact-container">
        <div className="contact-info">
          <div className="avatar-block">
            <div className="avatar-circle">SK </div> 
            <h3 className="name">Sai Kishore </h3>
            <p className="title">Software Engineer | Open to Opportunities</p>
          </div>

          <div className="contact-item">
            <h3>Email</h3>
            <p>saikishore.bhadragiri04@gmail.com</p>
            <h3>Phone</h3>
            <p>+1 346-400-7361</p>
          </div>

          <div className="contact-item">
            <h3>Location</h3>
            <p>United States of America</p>
            <p className="relocate-note">( Open to Relocation )</p>
          </div>

          <div className="contact-item">
            <h3>Social</h3>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/saikishorebsk/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="https://github.com/kishore422" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              <a href="https://leetcode.com/u/Kishore622/" target="_blank" rel="noopener noreferrer"><SiLeetcode /></a>
            </div>
          </div>


        </div>

        <div className="contact-form">
          
          <h3>Send a Message</h3>

          {formStatus.submitted ? (
            <div className={`form-message ${formStatus.error ? 'error' : 'success'}`}>
              {formStatus.message}
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="glow-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label htmlFor="mobile">Mobile</label>
                <input type="text" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
              </div>

              <button type="submit" className="submit-button">Send Message</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
