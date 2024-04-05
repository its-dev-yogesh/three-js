"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Box } from "@react-three/drei";
function RotatingCube() {
  const cubeRef = useRef();

  // Rotate the cube on each frame
  useFrame(() => {
    cubeRef.current.rotation.x += 0.01;
    cubeRef.current.rotation.y += 0.01;
  });

  return (
    <Box ref={cubeRef}>
      <meshStandardMaterial attach="material" color="red" />
    </Box>
  );
}

export default function Home() {
  return (
    <main className="h-full w-full">
      <h1>Next.js + Three.js Sample</h1>

      <Canvas
        style={{ height: "100vh" }}
        camera={{ position: [0, 0, 5] }}
        onPointerMove={(event) => {
          const { clientX, clientY } = event;
          const x = clientX / window.innerWidth;
          const y = clientY / window.innerHeight;
          // Update camera rotation based on mouse position
          event.camera.position.x = (x - 0.5) * 10;
          event.camera.position.y = (y - 0.5) * 10;
        }}
      >
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <RotatingCube />
      </Canvas>
    </main>
  );
}
