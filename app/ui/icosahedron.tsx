"use client";
import { useRef } from "react";
import { Group } from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function SpinningIcosahedron({ speed = 0.5 }: { speed?: number }) {
  const group = useRef<null | Group>(null);

  // rotate the group each frame. delta is seconds since last frame.
  useFrame((_, delta) => {
    if (!group.current) return;
    // rotate on Y and a little on X for nicer motion
    group.current.rotation.y += delta * speed;
    group.current.rotation.x += delta * (speed * 0.15);
  });

  return (
    <group ref={group}>
      <mesh>
        <icosahedronGeometry args={[2, 2]} />
        <meshStandardMaterial color="#50C878" flatShading />
      </mesh>

      {/* Slightly larger wireframe so it overlays cleanly */}
      <mesh scale={1.002}>
        <icosahedronGeometry args={[2, 2]} />
        <meshBasicMaterial color="#003922" wireframe />
      </mesh>
    </group>
  );
}

export default function IcosahedronSceene() {
  return (
    <div id="canvas-container" style={{ height: "700px", width: "100%" }}>
      <Canvas
        camera={{
          fov: 75,
          near: 0.1,
          far: 100,
          position: [0, 0, 5],
        }}
      >
        <ambientLight intensity={0.3} />
        <hemisphereLight args={["#FFFFFF", "#000000"]} />
        <SpinningIcosahedron speed={0.3} />
        <OrbitControls enablePan={false} minDistance={4.3} maxDistance={11} />
      </Canvas>
    </div>
  );
}
