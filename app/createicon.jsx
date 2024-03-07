import React from "react";

function createIconObject(Icon, position) {
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
}

export default createIconObject;
