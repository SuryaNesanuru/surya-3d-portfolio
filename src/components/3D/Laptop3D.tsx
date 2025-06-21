import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, Html } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

const Laptop3D: React.FC = () => {
  const meshRef = useRef<THREE.Group>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.1;
    }
  });

  return (
    <group
      ref={meshRef}
      position={[2, 0, 0]}
      scale={hovered ? 1.1 : 1}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => setIsOpen(!isOpen)}
    >
      {/* Laptop Base */}
      <mesh position={[0, -0.1, 0]}>
        <boxGeometry args={[2, 0.1, 1.5]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Laptop Screen */}
      <mesh
        position={[0, 0.5, -0.75]}
        rotation={[isOpen ? -Math.PI * 0.4 : -Math.PI * 0.5, 0, 0]}
        style={{ transition: 'all 0.5s ease' }}
      >
        <boxGeometry args={[2, 1.2, 0.05]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>

      {/* Screen Content */}
      {isOpen && (
        <Html
          position={[0, 0.5, -0.7]}
          rotation={[-Math.PI * 0.4, 0, 0]}
          transform
          occlude
          distanceFactor={1}
        >
          <div className="w-64 h-40 bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-lg rounded-lg p-4 border border-white/20">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-white text-sm"
            >
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="font-mono text-xs">
                <div className="text-green-400">$ npm run dev</div>
                <div className="text-blue-400 mt-1">Building amazing experiences...</div>
                <div className="text-yellow-400 mt-1">React • TypeScript • Next.js</div>
              </div>
            </motion.div>
          </div>
        </Html>
      )}

      {/* Glow Effect */}
      <pointLight
        position={[0, 0, 0]}
        intensity={hovered ? 0.5 : 0.2}
        color="#00D2FF"
        distance={3}
      />
    </group>
  );
};

export default Laptop3D;