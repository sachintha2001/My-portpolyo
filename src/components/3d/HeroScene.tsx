"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

// Mouse-tracking camera rig for subtle parallax
function CameraRig() {
  const { camera, pointer } = useThree();

  useFrame((state, delta) => {
    // Smooth lerp camera towards pointer position
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * 0.6, delta * 2);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, pointer.y * 0.4, delta * 2);
    camera.lookAt(0, 0, 0);
  });

  return null;
}

// Interactive dual-layer cosmic particles
function CyberNebula() {
  const pointsRef = useRef<THREE.Points>(null);
  const dustRef = useRef<THREE.Points>(null);

  // Generate 2800 cosmic star positions with varied radii
  const [starPositions, starColors] = useMemo(() => {
    const count = 2800;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const color1 = new THREE.Color("#3B82F6"); // Electric Blue
    const color2 = new THREE.Color("#8B5CF6"); // Hyper Violet
    const color3 = new THREE.Color("#06B6D4"); // Neon Cyan

    for (let i = 0; i < count; i++) {
      // Cylindrical/spherical distribution
      const r = THREE.MathUtils.randFloat(1.2, 5.5);
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(THREE.MathUtils.randFloatSpread(2));

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);

      // Color gradient distribution
      const mixed = Math.random();
      const c = mixed < 0.4 ? color1 : mixed < 0.75 ? color2 : color3;
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    return [positions, colors];
  }, []);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.04;
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.08;
    }
    if (dustRef.current) {
      dustRef.current.rotation.y -= delta * 0.02;
      dustRef.current.rotation.z += delta * 0.01;
    }
  });

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[starPositions, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[starColors, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.018}
          vertexColors
          transparent
          opacity={0.8}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
    </group>
  );
}

// 3D Sci-Fi Cyber Core with gyroscopic orbiting rings & pulsing light
function CyberCore() {
  const outerRingRef = useRef<THREE.Mesh>(null);
  const midRingRef = useRef<THREE.Mesh>(null);
  const innerIcoRef = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    if (outerRingRef.current) {
      outerRingRef.current.rotation.x = t * 0.35;
      outerRingRef.current.rotation.y = t * 0.2;
    }
    if (midRingRef.current) {
      midRingRef.current.rotation.y = -t * 0.4;
      midRingRef.current.rotation.z = t * 0.25;
    }
    if (innerIcoRef.current) {
      innerIcoRef.current.rotation.x = t * 0.15;
      innerIcoRef.current.rotation.y = t * 0.3;
      const pulse = 1 + Math.sin(t * 2) * 0.06;
      innerIcoRef.current.scale.set(pulse, pulse, pulse);
    }
    if (coreRef.current) {
      const corePulse = 1 + Math.sin(t * 3.5) * 0.12;
      coreRef.current.scale.set(corePulse, corePulse, corePulse);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.8} floatIntensity={1.2}>
      {/* Positioned towards top-right / background focal point */}
      <group position={[2.2, 0.4, -0.8]} scale={0.95}>
        {/* Outer Orbital Ring */}
        <mesh ref={outerRingRef}>
          <torusGeometry args={[1.5, 0.018, 16, 80]} />
          <meshStandardMaterial
            color="#3B82F6"
            emissive="#3B82F6"
            emissiveIntensity={1.4}
            roughness={0.2}
            metalness={0.8}
            wireframe
          />
        </mesh>

        {/* Middle Inclined Ring */}
        <mesh ref={midRingRef} rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[1.2, 0.015, 16, 70]} />
          <meshStandardMaterial
            color="#8B5CF6"
            emissive="#8B5CF6"
            emissiveIntensity={1.2}
            roughness={0.2}
            metalness={0.8}
            wireframe
          />
        </mesh>

        {/* Inner Crystalline Icosahedron Lattice */}
        <mesh ref={innerIcoRef}>
          <icosahedronGeometry args={[0.75, 1]} />
          <meshStandardMaterial
            color="#06B6D4"
            emissive="#06B6D4"
            emissiveIntensity={0.8}
            wireframe
            transparent
            opacity={0.85}
          />
        </mesh>

        {/* Central High-Energy Plasma Core */}
        <mesh ref={coreRef}>
          <sphereGeometry args={[0.36, 32, 32]} />
          <meshStandardMaterial
            color="#60A5FA"
            emissive="#3B82F6"
            emissiveIntensity={2.5}
            roughness={0.1}
          />
        </mesh>

        {/* Core Point Light */}
        <pointLight color="#3B82F6" intensity={4} distance={6} decay={2} />
        <pointLight color="#8B5CF6" intensity={3} distance={5} decay={2} />

        {/* Orbital Satellite Nodes (representing IoT / Connected Systems) */}
        <SatelliteNode radius={1.5} speed={0.8} color="#06B6D4" offset={0} />
        <SatelliteNode radius={1.2} speed={-1.1} color="#F43F5E" offset={Math.PI / 2} />
        <SatelliteNode radius={1.5} speed={0.95} color="#A855F7" offset={Math.PI} />
      </group>
    </Float>
  );
}

// Tiny orbiting sensor / data node
function SatelliteNode({
  radius,
  speed,
  color,
  offset,
}: {
  radius: number;
  speed: number;
  color: string;
  offset: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const t = state.clock.getElapsedTime() * speed + offset;
      meshRef.current.position.x = Math.cos(t) * radius;
      meshRef.current.position.z = Math.sin(t) * radius;
      meshRef.current.position.y = Math.sin(t * 2) * 0.4;
      meshRef.current.rotation.x += 0.02;
      meshRef.current.rotation.y += 0.03;
    }
  });

  return (
    <mesh ref={meshRef}>
      <octahedronGeometry args={[0.07, 0]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={2}
      />
    </mesh>
  );
}

// Mouse-following Dynamic Point Light
function DynamicCursorLight() {
  const lightRef = useRef<THREE.PointLight>(null);
  const { pointer } = useThree();

  useFrame(() => {
    if (lightRef.current) {
      lightRef.current.position.x = pointer.x * 4;
      lightRef.current.position.y = pointer.y * 3;
      lightRef.current.position.z = 2.5;
    }
  });

  return <pointLight ref={lightRef} color="#06B6D4" intensity={2} distance={8} decay={2} />;
}

export function HeroScene() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 4.2], fov: 48 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
        <DynamicCursorLight />
        <CyberNebula />
        <CyberCore />
        <CameraRig />
      </Canvas>
    </div>
  );
}
