import React, { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { MeshDistortMaterial, MeshWobbleMaterial, Float, Text, Stars, MeshReflectorMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { gsap } from 'gsap';

// Interactive 3D object component
const InteractiveObject = ({ position, geometry, color, hoverColor, activeColor, label, section, activeSection, setActiveSection }) => {
  const meshRef = useRef();
  const textRef = useRef();
  const [hovered, setHovered] = React.useState(false);
  const isActive = activeSection === section;
  
  // Set cursor and handle hover state
  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto';
  }, [hovered]);
  
  // Animation on hover and active state
  useEffect(() => {
    if (meshRef.current) {
      gsap.to(meshRef.current.position, {
        y: hovered || isActive ? position[1] + 0.7 : position[1],
        duration: 0.3,
        ease: 'power2.out'
      });
      
      gsap.to(meshRef.current.scale, {
        x: hovered || isActive ? 1.3 : 1,
        y: hovered || isActive ? 1.3 : 1,
        z: hovered || isActive ? 1.3 : 1,
        duration: 0.3,
        ease: 'power2.out'
      });
      
      if (isActive) {
        gsap.to(meshRef.current.rotation, {
          y: meshRef.current.rotation.y + Math.PI * 2,
          duration: 1.8,
          ease: 'power2.inOut'
        });
      }
    }
  }, [hovered, isActive, position, activeSection]);
  
  // Continuous rotation
  useFrame((state) => {
    if (meshRef.current && !isActive) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
    }
  });
  
  return (


    
    <>

    
    
      <mesh
        ref={meshRef}
        position={position}
        onClick={() => setActiveSection(section === activeSection ? null : section)}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        castShadow
      >
        {geometry}
        <MeshWobbleMaterial
          color={isActive ? activeColor : (hovered ? hoverColor : color)}
          metalness={0.3}
          roughness={0.4}
          factor={0.4}
          speed={isActive ? 3 : 1}
          emissive={isActive ? activeColor : (hovered ? hoverColor : "#000000")}
          emissiveIntensity={isActive ? 0.8 : (hovered ? 0.4 : 0)}
        />
        
        {/* Add spotlight to highlight when active or hovered */}
        {(hovered || isActive) && (
          <pointLight
            position={[0, 0, 0]}
            distance={5}
            intensity={3}
            color={isActive ? activeColor : hoverColor}
          />
        )}
      </mesh>
      
      {/* Text labels with fixes for flickering */}
      <group position={[position[0], 0, position[2]]} renderOrder={10}>
        {/* Backing plane to help with text visibility */}
        <mesh position={[0, -1.4, -0.01]} renderOrder={8}>
          <planeGeometry args={[3, 0.8]} />
          <meshBasicMaterial color="#000000" transparent opacity={0.3} depthTest={false} />
        </mesh>
        
        {/* Shadow text for better visibility */}
        <Text
          position={[0, -1.42, 0]}
          fontSize={0.6}
          color="#000000"
          anchorX="center"
          anchorY="middle"
          depthTest={false}
          renderOrder={9}
          font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
          opacity={0.7}
        >
          {label}
        </Text>
        
        {/* Main text */}
        <Text
          ref={textRef}
          position={[0, -1.4, 0.01]}
          fontSize={0.6}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          depthTest={false}
          renderOrder={10}
          font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
          outlineWidth={0.01}
          outlineColor="#000000"
        >
          {label}
        </Text>
      </group>

      
    </>
  );
};

// Crystal centerpiece component
const CenterPiece = () => {
  const crystalRef = useRef();
  
  useFrame((state) => {
    if (crystalRef.current) {
      crystalRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
      crystalRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.3 + 2;
    }
  });
  
  return (
    <group ref={crystalRef} position={[0, 2, 0]}>
      {/* Center crystal */}
      <mesh castShadow>
        <octahedronGeometry args={[1.8, 0]} />
        <meshPhysicalMaterial 
          color="#ffffff"
          transmission={0.9}
          roughness={0.1}
          metalness={0.2}
          clearcoat={1}
          clearcoatRoughness={0.2}
          envMapIntensity={1}
          transparent
          opacity={0.8}
        />
      </mesh>
      
      {/* Inner glow */}
      <pointLight intensity={2} color="#4f46e5" distance={3} />
      
      {/* Orbiting particles */}
      {[...Array(6)].map((_, i) => (
        <mesh
          key={i}
          position={[
            Math.sin(i / 6 * Math.PI * 2) * 2.5,
            Math.cos(i / 6 * Math.PI * 2 + Math.PI/4) * 0.5,
            Math.cos(i / 6 * Math.PI * 2) * 2.5
          ]}
          rotation={[i * 0.5, i * 0.3, 0]}
        >
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial 
            color={new THREE.Color().setHSL(i / 6, 1, 0.5)}
            emissive={new THREE.Color().setHSL(i / 6, 1, 0.5)} 
            emissiveIntensity={2}
          />
        </mesh>
      ))}
    </group>
  );
};

// Main Scene component
const MainScene = ({ activeSection, setActiveSection }) => {
  const groupRef = useRef();
  const { camera, scene } = useThree();
  
  // Set up scene background
  useEffect(() => {
    scene.background = new THREE.Color('#101035'); // Lighter blue background
    scene.fog = new THREE.FogExp2('#101035', 0.01); // Less dense fog
  }, [scene]);
  
  // Camera animation when section changes
  useEffect(() => {
    if (activeSection) {
      // Find the target object position
      const targetObject = sectionObjects.find(obj => obj.section === activeSection);
      if (targetObject) {
        const targetPosition = [...targetObject.position];
        // Offset for better viewing
        const cameraPosition = [
          targetPosition[0] + 2,
          targetPosition[1] + 3,
          targetPosition[2] + 5
        ];
        
        gsap.to(camera.position, {
          x: cameraPosition[0],
          y: cameraPosition[1],
          z: cameraPosition[2],
          duration: 1.5,
          ease: 'power3.inOut',
          onUpdate: () => {
            camera.lookAt(
              targetPosition[0],
              targetPosition[1],
              targetPosition[2]
            );
          }
        });
      }
    } else {
      // Reset camera position
      gsap.to(camera.position, {
        x: 0,
        y: 5,
        z: 15,
        duration: 1.5,
        ease: 'power3.inOut',
        onUpdate: () => {
          camera.lookAt(0, 0, 0);
        }
      });
    }
  }, [activeSection, camera]);
  
  // Rotate entire scene when no section is active
  useFrame((state) => {
    if (groupRef.current && !activeSection) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });
  
  // Define all section objects with unique colors and shapes
  const sectionObjects = [
    {
      section: 'about',
      position: [-6, 0, 0],
      geometry: <boxGeometry args={[1.7, 1.7, 1.7]} />,
      color: "#5E35B1", // Deep purple
      hoverColor: "#7E55D1",
      activeColor: "#9E75F1",
      label: 'About Me'
    },
    {
      section: 'education',
      position: [-4, 0, 4],
      geometry: <tetrahedronGeometry args={[1.2]} />, // Changed to tetrahedron
      color: "#1E88E5", // Blue
      hoverColor: "#3EA8F5",
      activeColor: "#5EC8FF",
      label: 'Education'
    },
    {
      section: 'experience',
      position: [0, 0, 6],
      geometry: <cylinderGeometry args={[1, 1, 1.5, 16]} />, // Changed to cylinder
      color: "#00ACC1", // Cyan
      hoverColor: "#20CCD1",
      activeColor: "#40ECF1",
      label: 'Experience'
    },
    {
      section: 'skills',
      position: [4, 0, 4],
      geometry: <octahedronGeometry args={[1.1]} />,
      color: "#43A047", // Green
      hoverColor: "#63C067",
      activeColor: "#83E087",
      label: 'Skills'
    },
    {
      section: 'projects',
      position: [6, 0, 0],
      geometry: <icosahedronGeometry args={[1.1]} />,
      color: "#FFB300", // Amber
      hoverColor: "#FFC330",
      activeColor: "#FFD360",
      label: 'Projects'
    },
    {
      section: 'blog',
      position: [4, 0, -4],
      geometry: <dodecahedronGeometry args={[1.1]} />, // Changed to dodecahedron
      color: "#E53935", // Red
      hoverColor: "#F55955",
      activeColor: "#FF7975",
      label: 'Blog'
    },
    {
      section: 'languages',
      position: [0, 0, -6],
      geometry: <torusKnotGeometry args={[0.8, 0.3, 64, 8, 2, 3]} />, // Changed to torus knot
      color: "#8E24AA", // Purple
      hoverColor: "#AE44CA",
      activeColor: "#CE64EA",
      label: 'Languages'
    },
    {
      section: 'contact',
      position: [-4, 0, -4],
      geometry: <coneGeometry args={[1, 2, 32]} />,
      color: "#00897B", // Teal
      hoverColor: "#20A99B",
      activeColor: "#40C9BB",
      label: 'Contact'
    }
  ];

  return (
    <>
      {/* Enhanced lighting setup */}
      <ambientLight intensity={1.2} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} castShadow />
      <directionalLight position={[-10, 10, -5]} intensity={1} />
      <spotLight position={[0, -5, 0]} angle={0.6} penumbra={0.5} intensity={0.8} />
      <pointLight position={[-10, -5, -10]} intensity={1} color="#3366ff" />
      <pointLight position={[10, -5, 10]} intensity={1} color="#ff3366" />
      
      {/* Enhanced stars background */}
      <Stars 
        radius={100} 
        depth={50} 
        count={7000} 
        factor={4} 
        saturation={0.5} 
        fade 
        speed={0.3}
      />
      
      {/* Crystal centerpiece instead of torus knot */}
      <CenterPiece />
      
      {/* Main group containing all interactive objects */}
      <group ref={groupRef}>
        {sectionObjects.map((obj) => (
          <InteractiveObject
            key={obj.section}
            position={obj.position}
            geometry={obj.geometry}
            color={obj.color}
            hoverColor={obj.hoverColor}
            activeColor={obj.activeColor}
            label={obj.label}
            section={obj.section}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
        ))}
      </group>
      
      {/* Enhanced reflective floor - full-scene version */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
        <planeGeometry args={[200, 200]} /> {/* Much larger size */}
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={1024}
          mixBlur={0.8}
          mixStrength={20}
          roughness={0.8}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#101035"
          metalness={0.9}
          mirror={0.5}
        />
      </mesh>

      {/* Add a subtle glow that fades out to the edges */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.98, 0]}>
        <planeGeometry args={[60, 60]} /> {/* Much larger than before */}
        <meshBasicMaterial 
          color="#4169e1" 
          transparent 
          opacity={0.08}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </>
  );
};

export default MainScene;