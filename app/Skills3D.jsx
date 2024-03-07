"use client";

import React from "react";
import { Canvas } from "react-three-fiber";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNextjs,
  FaReactRouter,
} from "react-icons/fa6";

const createIconObject = (Icon, position) => {
  return (
    <group position={position}>
      <mesh>
        <sphereBufferGeometry attach="geometry" args={[0.5, 32, 32]} />
        <meshStandardMaterial attach="material" color="white" />
      </mesh>
      <Icon
        size={50}
        color="black"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    </group>
  );
};

function Skills3D() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {createIconObject(FaHtml5, [-2, 0, 0])}
      {createIconObject(FaCss3, [-1, 0, 0])}
      {createIconObject(FaJs, [0, 0, 0])}
      {createIconObject(FaReact, [1, 0, 0])}
      {createIconObject(FaNextjs, [2, 0, 0])}
      {createIconObject(FaReactRouter, [3, 0, 0])}
    </Canvas>
  );
}
export default Skills3D;
