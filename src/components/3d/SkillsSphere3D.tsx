"use client";

import { useRef, useState, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Html, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const orbitSkills = [
  { name: "Next.js", color: "#38BDF8", radius: 2.2, speed: 0.6, yOffset: 0.4 },
  { name: ".NET / C#", color: "#A855F7", radius: 2.0, speed: -0.7, yOffset: -0.3 },
  { name: "Python / AI", color: "#FACC15", radius: 2.3, speed: 0.8, yOffset: -0.5 },
  { name: "LoRaWAN & IoT", color: "#34D399", radius: 2.5, speed: -0.5, yOffset: 0.6 },
  { name: "React & Three.js", color: "#60A5FA", radius: 2.1, speed: 0.65, yOffset: -0.1 },
  { name: "AWS & Cloud", color: "#FB923C", radius: 2.4, speed: -0.6, yOffset: 0.2 },
  { name: "MySQL / DB", color: "#4ADE80", radius: 1.9, speed: 0.75, yOffset: -0.6 },
  { name: "TypeScript", color: "#38BDF8", radius: 2.6, speed: -0.45, yOffset: 0.7 },
  { name: "Flutter", color: "#22D3EE", radius: 2.2, speed: 0.55, yOffset: -0.7 },
];

function CentralCore() {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.3;
      meshRef.current.rotation.x = Math.sin(t * 0.5) * 0.2;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.4;
      ringRef.current.rotation.x = Math.PI / 4 + Math.sin(t * 0.3) * 0.1;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y += delta * 0.5;
      ring2Ref.current.rotation.x = -Math.PI / 3;
    }
  });

  return (
    <group>
      {/* Central Holographic Core */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[0.85, 2]} />
        <meshStandardMaterial
          color="#3B82F6"
          emissive="#2563EB"
          emissiveIntensity={1.2}
          wireframe
          transparent
          opacity={0.85}
        />
      </mesh>

      {/* Inner Glowing Plasma Sphere */}
      <mesh>
        <sphereGeometry args={[0.42, 32, 32]} />
        <meshStandardMaterial
          color="#60A5FA"
          emissive="#8B5CF6"
          emissiveIntensity={2.5}
          roughness={0.1}
        />
      </mesh>

      {/* Orbital Gimbal Ring 1 */}
      <mesh ref={ringRef}>
        <torusGeometry args={[1.4, 0.015, 16, 80]} />
        <meshStandardMaterial
          color="#8B5CF6"
          emissive="#8B5CF6"
          emissiveIntensity={1.2}
          wireframe
        />
      </mesh>

      {/* Orbital Gimbal Ring 2 */}
      <mesh ref={ring2Ref}>
        <torusGeometry args={[1.7, 0.012, 16, 80]} />
        <meshStandardMaterial
          color="#06B6D4"
          emissive="#06B6D4"
          emissiveIntensity={1.5}
          wireframe
        />
      </mesh>

      <pointLight color="#3B82F6" intensity={3} distance={5} />
      <pointLight color="#8B5CF6" intensity={2} distance={4} />
    </group>
  );
}

function OrbitingSkillNode({
  skill,
  index,
  total,
}: {
  skill: (typeof orbitSkills)[0];
  index: number;
  total: number;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  // Initial angle offset uniformly distributed
  const initialTheta = (index / total) * Math.PI * 2;

  useFrame((state) => {
    if (groupRef.current) {
      const t = state.clock.getElapsedTime() * skill.speed * 0.5 + initialTheta;
      groupRef.current.position.x = Math.cos(t) * skill.radius;
      groupRef.current.position.z = Math.sin(t) * skill.radius;
      groupRef.current.position.y =
        skill.yOffset + Math.sin(state.clock.getElapsedTime() * 1.2 + index) * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <octahedronGeometry args={[0.16, 0]} />
        <meshStandardMaterial
          color={skill.color}
          emissive={skill.color}
          emissiveIntensity={hovered ? 3 : 1.5}
        />
      </mesh>

      {/* HTML Floating 3D Label */}
      <Html
        position={[0, 0.28, 0]}
        center
        distanceFactor={6}
        className="pointer-events-none select-none"
      >
        <div
          className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider whitespace-nowrap transition-all duration-300 border backdrop-blur-md shadow-lg ${
            hovered
              ? "bg-primary text-white scale-125 border-cyan-400 shadow-[0_0_15px_rgba(59,130,246,0.8)]"
              : "bg-slate-950/80 text-slate-200 border-white/20"
          }`}
          style={{ color: hovered ? "#ffffff" : skill.color }}
        >
          {skill.name}
        </div>
      </Html>
    </group>
  );
}

// Background Particle Cloud inside the Orbit Canvas
function OrbitDust() {
  const points = useMemo(() => {
    const count = 600;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = THREE.MathUtils.randFloat(1.5, 4.5);
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(THREE.MathUtils.randFloatSpread(2));
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  const ref = useRef<THREE.Points>(null);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.03;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[points, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#8B5CF6"
        transparent
        opacity={0.6}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

export function SkillsSphere3D() {
  return (
    <div className="relative w-full h-[380px] sm:h-[440px] rounded-3xl overflow-hidden border border-white/10 bg-slate-950/60 backdrop-blur-xl shadow-2xl">
      {/* Sci-Fi Status Banner */}
      <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-white/10 backdrop-blur-md text-[11px] font-mono text-cyan-300">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
        <span>3D TECH ORBIT CLOUD</span>
      </div>

      <div className="absolute bottom-4 right-4 z-20 text-[10px] font-mono text-slate-400 pointer-events-none">
        DRAG TO ROTATE SCENE
      </div>

      <Canvas
        camera={{ position: [0, 0, 5], fov: 46 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <CentralCore />
        <OrbitDust />

        {orbitSkills.map((skill, index) => (
          <OrbitingSkillNode
            key={skill.name}
            skill={skill}
            index={index}
            total={orbitSkills.length}
          />
        ))}

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.8}
          maxPolarAngle={Math.PI / 1.7}
          minPolarAngle={Math.PI / 2.5}
        />
      </Canvas>
    </div>
  );
}
