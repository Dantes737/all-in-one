"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Mesh } from "three";

function Polyhedron() {
  const meshRef = useRef<null | Mesh>(null);

  useFrame((_, delta) => {
    if (!meshRef.current) return;

    meshRef.current.rotation.x += 0.2 * delta;
    meshRef.current.rotation.y += 0.05 * delta;
  });

  const material = new THREE.MeshNormalMaterial({
    flatShading: true,
    wireframe: false,
  });

  return (
    <mesh position={[1, 2, -2]} material={material} ref={meshRef}>
      <icosahedronGeometry args={[1, 1]} />
    </mesh>
  );
}

export default function IcosahedronLogo() {
  return (
    <Canvas camera={{ position: [1.55, 3.1, -3.2] }}>
      <directionalLight position={[1, 1, 1]} />
      <Polyhedron />
    </Canvas>
  );
}
