"use client";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  MeshWobbleMaterial,
  OrbitControls,
  useHelper,
} from "@react-three/drei";
import { DirectionalLightHelper } from "three";
import { Leva, useControls } from "leva";
const Box = ({ position, size, color }) => {
  const boxRef = useRef();
  // useFrame((state, delta, xrFrame) => {
  //   boxRef.current.rotation.x += delta;
  //   boxRef.current.rotation.y += delta;
  // });
  return (
    <mesh position={position} ref={boxRef}>
      <boxGeometry args={size} />
      <MeshWobbleMaterial factor={0.5} speed={15} color={color} />
      {/* <meshStandardMaterial color={color} /> */}
    </mesh>
  );
};
const Scene = () => {
  const directionalLightRef = useRef();
  const { lightColor, lightIntensity } = useControls({
    lightColor: "blue",
    lightIntensity: {
      value: 2,
      min: 0,
      max: 10,
    },
  });
  useHelper(directionalLightRef, DirectionalLightHelper, 0.5, "green");
  return (
    <>
      <directionalLight
        position={[1, 0, 1]}
        ref={directionalLightRef}
        color={lightColor}
        intensity={lightIntensity}
      />
      <Box position={[0, 0, 0]} size={[1, 1, 1]} color={"white"} />
      <OrbitControls />
    </>
  );
};

function page() {
  return (
    <div className="flex justify-center items-center h-screen w-full border border-red-200 bg-white">
      <main className="h-full w-full">
        <Leva />
        <Canvas>
          <Scene />
        </Canvas>
      </main>
    </div>
  );
}

export default page;
