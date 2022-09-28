import React, { useRef } from "react";
import { motion } from "framer-motion-3d"
import { useGLTF, MeshWobbleMaterial, Edges, Environment } from "@react-three/drei";


export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/modernport/Guitar.glb");

  console.log(nodes);
  const variants = {
    hidden: { x: -5 ,
    scale: [0.05,0.05,0.05]
    },
    visible: { x: 0,
      scale: [0.1,0.1,0.1] 
    }
  }

  return (
    
    <motion.group ref={group} {...props} dispose={null}     
    initial="hidden"
    animate="visible"
    variants={variants}
    transition={{duration:2}}
    >
      <group {...props} dispose={null} scale={1.1} rotation={[Math.PI/32, Math.PI, 0]}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <group position={[-0.22, 26.33, 7]}>
                <mesh geometry={nodes.Line021_orange_0.geometry} material={materials.orange} />
                <mesh geometry={nodes.Line021_black_0.geometry} material={materials.black} />
                <mesh geometry={nodes.Line021_yellow_0.geometry} material={materials.yellow} />
                <mesh geometry={nodes.Line021_metal_0.geometry} material={materials.metal} />
                <mesh geometry={nodes.Line021_blue_0.geometry} material={materials.blue} />
              </group>
            </group>
          </group>
        </group>
      </group>
      <Environment preset="warehouse"/>
    </motion.group>
  );
}

useGLTF.preload("/modernport/Guitar.glb");

