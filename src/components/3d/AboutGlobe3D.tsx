"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// Glowing 3D Wireframe Globe with Lat/Long Grid and Atmospheric Halo
function DigitalGlobe() {
  const globeRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  // Generate glowing surface data nodes across the sphere
  const [points, colors] = useMemo(() => {
    const count = 1200;
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const colorPrimary = new THREE.Color("#3B82F6");
    const colorAccent = new THREE.Color("#8B5CF6");
    const colorCyan = new THREE.Color("#06B6D4");

    for (let i = 0; i < count; i++) {
      const radius = 1.35;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(THREE.MathUtils.randFloatSpread(2));

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);

      const rand = Math.random();
      const c = rand < 0.4 ? colorPrimary : rand < 0.75 ? colorCyan : colorAccent;
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return [pos, col];
  }, []);

  useFrame((state, delta) => {
    if (globeRef.current) {
      globeRef.current.rotation.y += delta * 0.25;
      globeRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.1;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z -= delta * 0.3;
    }
  });

  return (
    <group ref={globeRef}>
      {/* Inner Transparent Sphere with Wireframe Matrix */}
      <mesh>
        <sphereGeometry args={[1.3, 24, 24]} />
        <meshStandardMaterial
          color="#1E293B"
          emissive="#3B82F6"
          emissiveIntensity={0.3}
          wireframe
          transparent
          opacity={0.35}
        />
      </mesh>

      {/* Surface Particle Cloud */}
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[points, 3]} />
          <bufferAttribute attach="attributes-color" args={[colors, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.024}
          vertexColors
          transparent
          opacity={0.9}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      {/* Equatorial Orbiting Halo */}
      <mesh ref={ringRef} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[1.7, 0.012, 16, 90]} />
        <meshStandardMaterial
          color="#06B6D4"
          emissive="#06B6D4"
          emissiveIntensity={1.8}
          wireframe
        />
      </mesh>

      {/* Pulsing Beacon Light */}
      <pointLight color="#3B82F6" intensity={3} distance={5} />
      <pointLight color="#8B5CF6" intensity={2} distance={4} />
    </group>
  );
}

export function AboutGlobe3D() {
  return (
    <div className="relative w-full h-[280px] sm:h-[320px] rounded-3xl overflow-hidden border border-white/10 bg-slate-950/70 backdrop-blur-xl shadow-2xl flex items-center justify-center">
      {/* Sci-Fi HUD Watermark */}
      <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-white/10 text-[10px] font-mono text-cyan-300">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
        <span>GLOBAL TECH NETWORK</span>
      </div>

      <div className="absolute bottom-3 right-4 z-20 text-[9px] font-mono text-slate-400">
        LAT: 6.9271° N | LON: 79.8612° E
      </div>

      <Canvas
        camera={{ position: [0, 0, 3.8], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <Float speed={1.8} rotationIntensity={0.5} floatIntensity={0.8}>
          <DigitalGlobe />
        </Float>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
      </Canvas>
    </div>
  );
}
