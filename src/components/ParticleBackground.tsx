"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles() {
  const meshRef = useRef<THREE.Points>(null);
  const count = 800;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);

  const colors = useMemo(() => {
    const col = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = Math.random();
      if (r > 0.6) {
        col[i * 3] = 0.39;
        col[i * 3 + 1] = 0.4;
        col[i * 3 + 2] = 0.95;
      } else if (r > 0.3) {
        col[i * 3] = 0.55;
        col[i * 3 + 1] = 0.36;
        col[i * 3 + 2] = 0.97;
      } else {
        col[i * 3] = 0.65;
        col[i * 3 + 1] = 0.55;
        col[i * 3 + 2] = 0.98;
      }
    }
    return col;
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.02;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

function FloatingOrb({ position, color, speed }: { position: [number, number, number]; color: string; speed: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.5;
      meshRef.current.position.x = position[0] + Math.cos(state.clock.elapsedTime * speed * 0.7) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.15, 16, 16]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} transparent opacity={0.4} />
    </mesh>
  );
}

export default function ParticleBackground() {
  return (
    <div className="particle-bg">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.2} />
        <Particles />
        <FloatingOrb position={[-3, 2, -2]} color="#6366f1" speed={0.8} />
        <FloatingOrb position={[3, -1, -3]} color="#8b5cf6" speed={1.2} />
        <FloatingOrb position={[0, 3, -4]} color="#a78bfa" speed={0.6} />
        <FloatingOrb position={[-2, -2, -2]} color="#6366f1" speed={1.0} />
        <FloatingOrb position={[4, 1, -5]} color="#8b5cf6" speed={0.9} />
      </Canvas>
    </div>
  );
}
