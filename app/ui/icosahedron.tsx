"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function IcosahedronSceene() {
  return (
    <div id="canvas-container" className="w-full h-[700px] cursor-pointer">
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
        <mesh>
          <icosahedronGeometry args={[2, 2]} />
          <meshStandardMaterial color="#50C878" flatShading />
        </mesh>

        {/* Slightly larger wireframe so it overlays cleanly */}
        <mesh scale={1.002}>
          <icosahedronGeometry args={[2, 2]} />
          <meshBasicMaterial color="#003922" wireframe />
        </mesh>
        <OrbitControls enablePan={false} minDistance={4.3} maxDistance={11} />
      </Canvas>
    </div>
  );
}
