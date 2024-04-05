// components/Box.js
import React, { useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useSpring, a } from "react-spring/three";

const ThreeJsComponent = () => {
  const meshRef = useRef();

  // State for size of the box
  const [size, setSize] = useState(1);

  // State for rotation based on mouse movement
  const [rotation, setRotation] = useState([0, 0, 0]);

  // React spring animation for size
  const { scale } = useSpring({
    scale: [size, size, size],
  });

  useFrame(() => {
    // Rotate box based on mouse movement
    meshRef.current.rotation.x = rotation[0];
    meshRef.current.rotation.y = rotation[1];
  });

  return (
    <>
      <a.mesh
        ref={meshRef}
        scale={scale}
        onClick={() => setSize(size === 1 ? 2 : 1)}
        onPointerMove={(e) =>
          setRotation([
            (e.clientY / window.innerHeight) * 2 - 1,
            (e.clientX / window.innerWidth) * 2 - 1,
            0,
          ])
        }
      >
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </a.mesh>
      <OrbitControls />
    </>
  );
};

export default ThreeJsComponent;
