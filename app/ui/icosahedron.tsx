"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function Icosahedron() {
  // const container = useRef(null);
  // const fov = 75;
  // const near = 0.1;
  // const far = 10;

  // const scene = new THREE.Scene();
  // const hemiLight = new THREE.HemisphereLight("#FFFFFF", "#000000");

  // const geo = new THREE.IcosahedronGeometry(1, 2);

  // const mat = new THREE.MeshStandardMaterial({
  //   color: "#50C878",
  //   flatShading: true,
  // });

  // const wireMat = new THREE.MeshBasicMaterial({
  //   color: "#003922",
  //   wireframe: true,
  // });

  // const mesh = new THREE.Mesh(geo, mat);
  // const wireMesh = new THREE.Mesh(geo, wireMat);
  // wireMesh.scale.setScalar(1.001);

  // onMounted(() => {
  //   const width = 700;
  //   const height = 600;
  //   const aspect = width / height;

  //   const renderer = new THREE.WebGLRenderer({ antialias: true });
  //   renderer.setSize(width, height);
  //   renderer.setClearColor(0x000000, 0);

  //   const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  //   camera.position.z = 2;

  //   const controls = new OrbitControls(camera, renderer.domElement);
  //   controls.enableDamping = true;
  //   controls.dampingFactor = 0.03;
  //   controls.maxDistance = 4.5;
  //   controls.minDistance = 1.8;

  //   container.value.appendChild(renderer.domElement);

  //   scene.add(mesh);
  //   scene.add(wireMesh);

  //   scene.add(hemiLight);

  //   function animate(t = 0) {
  //     requestAnimationFrame(animate);

  //     mesh.rotation.y = t * 0.0001;
  //     wireMesh.rotation.y = t * 0.0001;

  //     renderer.render(scene, camera);
  //     controls.update();
  //   }

  //   animate();
  // });

  return (
    <div id="canvas-container">
      <Canvas
        camera={{
          fov: 75,
          near: 0.1,
          far: 10,
          aspect: 700 / 600,
        }}
      >
        <mesh>
          <icosahedronGeometry args={[2, 2]} />
          <meshStandardMaterial color="#50C878" flatShading />
        </mesh>
        <mesh>
          <icosahedronGeometry args={[2, 2]} />
          <meshBasicMaterial color="#003922" wireframe />
        </mesh>
        <hemisphereLight args={["#FFFFFF", "#000000"]} />
        <OrbitControls />
      </Canvas>
    </div>
  );
}
