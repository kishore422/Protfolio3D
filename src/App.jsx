import React, { Suspense, useState, useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Html } from '@react-three/drei';
import MainScene from './components/MainScene';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import AboutSection from './components/sections/AboutSection';
import EducationSection from './components/sections/EducationSection';
import ExperienceSection from './components/sections/ExperienceSection';
import SkillsSection from './components/sections/SkillsSection';
import ProjectsSection from './components/sections/ProjectsSection';
import BlogSection from './components/sections/BlogSection';
import ContactSection from './components/sections/ContactSection';
import LanguagesSection from './components/sections/LanguagesSection';

// Loader component
function Loader() {
  return <Html center><div className="loader-message">Loading 3D Experience...</div></Html>;
}

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState(null);
  const controlsRef = useRef();
  
  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Effect for controlling orbit controls when section changes
  useEffect(() => {
    if (controlsRef.current) {
      if (activeSection) {
        // Disable controls when viewing a section
        controlsRef.current.enabled = false;
      } else {
        // Re-enable controls when on the main view
        controlsRef.current.enabled = true;
      }
    }
  }, [activeSection]);

  const handleSectionChange = (section) => {
    setActiveSection(section === activeSection ? null : section);
  };

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <div className="canvas-container">
            <Canvas shadows>
              <PerspectiveCamera makeDefault position={[0, 5, 15]} fov={60} />
              <Suspense fallback={<Loader />}>
                <MainScene 
                  activeSection={activeSection} 
                  setActiveSection={setActiveSection} 
                />
              </Suspense>
              <OrbitControls 
                ref={controlsRef}
                enableZoom={true}
                enablePan={false}
                minPolarAngle={Math.PI / 6}
                maxPolarAngle={Math.PI / 2}
                minDistance={5}
                maxDistance={25}
                autoRotate={!activeSection}
                autoRotateSpeed={0.5}
              />
            </Canvas>
          </div>
          
          <div className="content-overlay">
            <Navbar 
              onSectionChange={handleSectionChange} 
              activeSection={activeSection} 
            />
            
            {/* Fixed welcome message */}
            <div className="welcome-message">
              <h2>Welcome to Sai Kishore's Portfolio</h2>
              <p>Click on any object to explore more details about my work and skills</p>
            </div>
            
            <div className="section-display">
              {activeSection === 'about' && (
                <AboutSection onClose={() => setActiveSection(null)} />
              )}
              
              {activeSection === 'education' && (
                <EducationSection onClose={() => setActiveSection(null)} />
              )}
              
              {activeSection === 'experience' && (
                <ExperienceSection onClose={() => setActiveSection(null)} />
              )}
              
              {activeSection === 'skills' && (
                <SkillsSection onClose={() => setActiveSection(null)} />
              )}
              
              {activeSection === 'projects' && (
                <ProjectsSection onClose={() => setActiveSection(null)} />
              )}
              
              {activeSection === 'blog' && (
                <BlogSection onClose={() => setActiveSection(null)} />
              )}
              
              {activeSection === 'contact' && (
                <ContactSection onClose={() => setActiveSection(null)} />
              )}
              
              {activeSection === 'languages' && (
                <LanguagesSection onClose={() => setActiveSection(null)} />
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default App;