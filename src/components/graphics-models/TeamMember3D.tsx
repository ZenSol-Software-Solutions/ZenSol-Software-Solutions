
import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Box, Sphere } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

interface AnimatedBoxProps {
  position: [number, number, number];
  color: string;
}

const AnimatedBox = ({ position, color }: AnimatedBoxProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <Box ref={meshRef} position={position} args={[1, 1, 1]}>
      <meshStandardMaterial color={color} />
    </Box>
  );
};

const AnimatedSphere = ({ position, color }: AnimatedBoxProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.4;
      meshRef.current.position.x = position[0] + Math.cos(state.clock.elapsedTime) * 0.3;
    }
  });

  return (
    <Sphere ref={meshRef} position={position} args={[0.5, 32, 32]}>
      <meshStandardMaterial color={color} />
    </Sphere>
  );
};

interface TeamMember3DProps {
  memberName: string;
  role: string;
}

export const TeamMember3D = ({ memberName, role }: TeamMember3DProps) => {
  return (
    <div className="w-full h-96 rounded-lg overflow-hidden bg-gradient-to-br from-blue-900 to-purple-900">
      <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -5]} intensity={0.5} />
          
          {/* Animated 3D elements */}
          <AnimatedBox position={[-2, 1, 0]} color="#00ff88" />
          <AnimatedBox position={[2, -1, 0]} color="#0088ff" />
          <AnimatedSphere position={[0, 2, -1]} color="#ff0088" />
          <AnimatedSphere position={[-1, -2, 1]} color="#ffaa00" />
          
          {/* 3D Text */}
          <Text
            position={[0, 0, 0]}
            fontSize={0.8}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
            font="/fonts/helvetiker_regular.typeface.json"
          >
            {memberName}
          </Text>
          
          <Text
            position={[0, -1, 0]}
            fontSize={0.4}
            color="#cccccc"
            anchorX="center"
            anchorY="middle"
            font="/fonts/helvetiker_regular.typeface.json"
          >
            {role}
          </Text>
          
          <OrbitControls enableZoom={true} enablePan={false} />
        </Suspense>
      </Canvas>
    </div>
  );
};
