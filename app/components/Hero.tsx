"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial, Float, Environment, SpotLight } from "@react-three/drei";
import { useRef } from "react";
import { Mesh } from "three";

function GlassObject() {
  const meshRef = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = clock.getElapsedTime() * 0.25;
    meshRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.4) * 0.2;
  });

  return (
    <>
      <Float speed={1.6} rotationIntensity={0.4} floatIntensity={1.2}>
        <group position={[0, 0, -7]}>
          <mesh position={[-1.6, 0.6, 0]}>
            <boxGeometry args={[0.25, 0.25, 0.25]} />
            <meshStandardMaterial color="#FFD700" roughness={0.2} metalness={0.8} />
          </mesh>
          <mesh position={[1.4, -0.4, 0.6]}>
            <tetrahedronGeometry args={[0.3, 0]} />
            <meshStandardMaterial color="#00008B" roughness={0.3} metalness={0.7} />
          </mesh>
          <mesh position={[0.3, 1.1, -0.4]}>
            <boxGeometry args={[0.2, 0.4, 0.2]} />
            <meshStandardMaterial color="#FFD700" roughness={0.25} metalness={0.75} />
          </mesh>
          <mesh position={[-0.6, -1.0, 0.4]}>
            <tetrahedronGeometry args={[0.25, 0]} />
            <meshStandardMaterial color="#00008B" roughness={0.35} metalness={0.7} />
          </mesh>
        </group>
      </Float>
      <Float speed={1.2} rotationIntensity={0.6} floatIntensity={0.8}>
        <mesh ref={meshRef} scale={0.6}>
          <torusKnotGeometry args={[1, 0.3, 128, 16]} />
          <MeshTransmissionMaterial
            transmission={0.99}
            thickness={2.5}
            roughness={0.1}
            chromaticAberration={0.8}
            anisotropy={20}
            resolution={1024}
            color="white"
            ior={1.2}
            backside
          />
        </mesh>
      </Float>
    </>
  );
}

export default function Hero() {
  return (
    <div className="h-full w-full">
      <Canvas camera={{ position: [0, 0, 4] }}>
        <color attach="background" args={["#0b1220"]} />
        <Environment preset="city" />
        <ambientLight intensity={0.12} />
        <directionalLight position={[4, 4, 2]} intensity={2} />
        <SpotLight position={[2, 3, 4]} intensity={30} angle={0.4} penumbra={0.6} />
        <GlassObject />
      </Canvas>
    </div>
  );
}
