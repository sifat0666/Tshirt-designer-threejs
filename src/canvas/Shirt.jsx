import React from "react";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import { useFrame } from "@react-three/fiber";
import { Decal, OrbitControls, useGLTF, useTexture } from "@react-three/drei";

import state from "../store";
import { useState } from "react";
import { useEffect } from "react";

const Shirt = () => {
  const snap = useSnapshot(state);
  // console.log(snap.changePosition);
  const { nodes, materials } = useGLTF("/1.glb");
  // console.log(nodes);
  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);

  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (ev) => {
      setPosition({ x: ev.clientX, y: ev.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useFrame((state, delta) =>
    easing.dampC(materials.carton.color, snap.color, 0.25, delta)
  );

  const stateString = JSON.stringify(snap);

  return (
    <group key={stateString}>
      <mesh
        castShadow
        geometry={nodes.Box_bit_open.geometry}
        material={materials.carton}
        material-roughness={1}
        dispose={null}
      >
        {/* <OrbitControls target={[0, 0, 1]} /> */}

        {snap.isFullTexture && (
          <Decal
            position={[0.6, 0.6, 0]}
            rotation={[0, 0, 0]}
            scale={3}
            map={fullTexture}
          />
        )}

        {snap.isLogoTexture && (
          <Decal
            // position={[
            //   (position.x / 10000) * 5 - 0.15,
            //   (-position.y / 10000) * 8 + 0.25,
            //   0.1,
            // ]}
            position={[0.6,0.6,0]}
            rotation={[0, 0, 0]}
            scale={0.15}
            map={logoTexture}
            // map-anisotropy={16}
            depthTest={false}
            depthWrite={true}
          />
        )}
      </mesh>
    </group>
  );
};

export default Shirt;
