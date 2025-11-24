"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, Float, Html } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";


function HeartModel(props: any) {
    const meshRef = useRef<THREE.Mesh>(null);
    const [hovered, setHover] = useState(false);

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta * 0.2;
        }
    });

    // Placeholder heart shape (using a sphere for now, or we can try to make a heart shape)
    // For simplicity and reliability without external assets, we'll use a stylized sphere/blob
    // that pulses.

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <mesh
                {...props}
                ref={meshRef}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
                scale={hovered ? 1.1 : 1}
            >
                <sphereGeometry args={[1.5, 64, 64]} />
                <meshStandardMaterial
                    color={"#ef4444"}
                    roughness={0.2}
                    metalness={0.8}
                    emissive={"#7f1d1d"}
                    emissiveIntensity={0.4}
                />

                {/* Hotspots */}
                <Html position={[1, 0.5, 1]} center distanceFactor={10}>
                    <div className="group relative cursor-pointer">
                        <div className="w-4 h-4 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)] animate-pulse" />
                        <div className="absolute left-6 top-1/2 -translate-y-1/2 w-32 bg-black/60 backdrop-blur-md p-2 rounded-lg border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                            <p className="text-xs text-white font-bold">Aortic Valve</p>
                            <p className="text-[10px] text-slate-300">Normal flow</p>
                        </div>
                    </div>
                </Html>
            </mesh>
        </Float>
    );
}

export function HeartScene() {
    return (
        <div className="w-full h-full min-h-[400px] relative">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ef4444" />

                <HeartModel />

                <Environment preset="city" />
                <OrbitControls enableZoom={false} enablePan={false} />
            </Canvas>

            {/* Overlay Stats */}
            <div className="absolute bottom-10 left-32 pointer-events-none">
                <div className="glass-card p-4 rounded-xl inline-block">
                    <p className="text-slate-400 text-xs uppercase tracking-wider">Heart Rate</p>
                    <div className="flex items-end gap-2">
                        <span className="text-3xl font-bold text-white">72</span>
                        <span className="text-sm text-slate-400 mb-1">bpm</span>
                    </div>
                    {/* Simple SVG Wave */}
                    <svg className="w-24 h-8 mt-2 stroke-primary fill-none" viewBox="0 0 100 30">
                        <path d="M0 15 Q 10 15, 15 15 L 20 5 L 25 25 L 30 15 Q 40 15, 50 15 T 100 15" strokeWidth="2" />
                    </svg>
                </div>
            </div>
        </div>
    );
}
