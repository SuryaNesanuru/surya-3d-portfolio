import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const FloatingElements: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  const elements = [
    { position: [-3, 2, -2], color: '#00D2FF', scale: 0.3 },
    { position: [3, -1, -1], color: '#3A0CA3', scale: 0.2 },
    { position: [-2, -2, 1], color: '#FF006E', scale: 0.25 },
    { position: [2, 1, 2], color: '#00F5FF', scale: 0.15 },
    { position: [-1, 3, 0], color: '#9A0CA3', scale: 0.2 },
  ];

  return (
    <group ref={groupRef}>
      {elements.map((element, index) => (
        <FloatingElement
          key={index}
          position={element.position as [number, number, number]}
          color={element.color}
          scale={element.scale}
          delay={index * 0.5}
        />
      ))}
    </group>
  );
};

interface FloatingElementProps {
  position: [number, number, number];
  color: string;
  scale: number;
  delay: number;
}

const FloatingElement: React.FC<FloatingElementProps> = ({ position, color, scale, delay }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + delay) * 0.3;
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <octahedronGeometry args={[1]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.2}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
};

export default FloatingElements;