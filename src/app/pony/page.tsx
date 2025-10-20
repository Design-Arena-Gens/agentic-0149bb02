'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Box } from '@react-three/drei'
import { useState } from 'react'

function Pony({ position, color }: { position: [number, number, number], color: string }) {
  const [isPet, setIsPet] = useState(false)

  const handlePet = () => {
    setIsPet(true)
    setTimeout(() => setIsPet(false), 500)
  }

  return (
    <group position={position} onClick={handlePet}>
      {/* Body */}
      <Box args={[1, 0.5, 1.5]} position={[0, 0.25, 0]}>
        <meshStandardMaterial color={isPet ? 'purple' : color} />
      </Box>
      {/* Head */}
      <Box args={[0.5, 0.5, 0.5]} position={[0, 0.75, -0.5]}>
        <meshStandardMaterial color={color} />
      </Box>
      {/* Snout */}
      <Box args={[0.2, 0.2, 0.2]} position={[0, 0.65, -0.8]}>
        <meshStandardMaterial color={color} />
      </Box>
      {/* Ears */}
      <Box args={[0.1, 0.2, 0.1]} position={[-0.2, 1, -0.5]}>
        <meshStandardMaterial color={color} />
      </Box>
      <Box args={[0.1, 0.2, 0.1]} position={[0.2, 1, -0.5]}>
        <meshStandardMaterial color={color} />
      </Box>
      {/* Legs */}
      <Box args={[0.2, 0.5, 0.2]} position={[-0.4, -0.25, 0.5]}>
        <meshStandardMaterial color={color} />
      </Box>
      <Box args={[0.2, 0.5, 0.2]} position={[0.4, -0.25, 0.5]}>
        <meshStandardMaterial color={color} />
      </Box>
      <Box args={[0.2, 0.5, 0.2]} position={[-0.4, -0.25, -0.5]}>
        <meshStandardMaterial color={color} />
      </Box>
      <Box args={[0.2, 0.5, 0.2]} position={[0.4, -0.25, -0.5]}>
        <meshStandardMaterial color={color} />
      </Box>
      {/* Tail */}
      <Box args={[0.1, 0.5, 0.1]} position={[0, 0.25, 0.8]}>
        <meshStandardMaterial color={color} />
      </Box>
    </group>
  )
}

function Fence() {
  return (
    <group>
      <Box args={[0.2, 1, 10]} position={[-5, 0, 0]}>
        <meshStandardMaterial color="brown" />
      </Box>
      <Box args={[0.2, 1, 10]} position={[5, 0, 0]}>
        <meshStandardMaterial color="brown" />
      </Box>
      <Box args={[10.2, 1, 0.2]} position={[0, 0, 5]}>
        <meshStandardMaterial color="brown" />
      </Box>
      <Box args={[10.2, 1, 0.2]} position={[0, 0, -5]}>
        <meshStandardMaterial color="brown" />
      </Box>
    </group>
  )
}

export default function PonyPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-sky-200">
      <h1 className="text-4xl font-bold mt-8 text-pink-500">3D Pony Petting Zoo</h1>
      <p className="text-pink-500">Click on a pony to pet it!</p>
      <div className="w-full h-screen">
        <Canvas camera={{ position: [0, 5, 10] }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[10, 10, 5]} />
          <OrbitControls />
          <Pony position={[0, 0, 0]} color="hotpink" />
          <Pony position={[2, 0, 1]} color="lightblue" />
          <Pony position={[-2, 0, -1]} color="lightyellow" />
          <Fence />
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
            <planeGeometry args={[100, 100]} />
            <meshStandardMaterial color="lightgreen" />
          </mesh>
        </Canvas>
      </div>
    </main>
  )
}
