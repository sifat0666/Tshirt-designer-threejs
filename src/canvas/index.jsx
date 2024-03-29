import { Environment, Center, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import BackDrop from "./BackDrop";
import CameraRig from "./CameraRig";
import Shirt from "./Shirt";

const CavasModel = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 2], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full max-w-full h-full transition-all ease-in"
    >
      <ambientLight intensity={0.5} />
      <Environment preset="city" />
      {/* <CameraRig> */}
      {/* <BackDrop /> */}
      <Center>
        <Shirt />
        <OrbitControls />
      </Center>
      {/* </CameraRig> */}
    </Canvas>
  );
};

export default CavasModel;
