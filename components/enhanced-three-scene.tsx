"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Sphere, MeshDistortMaterial, Float, Environment, Text3D } from "@react-three/drei"
import { useRef, useMemo, useState, useEffect } from "react"
import type * as THREE from "three"
import { useIsMobile } from "@/hooks/use-mobile"

function AnimatedGrid() {
  const ref = useRef<THREE.Points>(null)
  const gridSize = 10 // 그리드 크기를 상수로 고정

  const gridPositions = useMemo(() => {
    const positions = new Float32Array((gridSize * 2 + 1) * (gridSize * 2 + 1) * 3)
    let index = 0

    for (let x = -gridSize; x <= gridSize; x += 1) {
      for (let z = -gridSize; z <= gridSize; z += 1) {
        positions[index * 3] = x
        positions[index * 3 + 1] = 0
        positions[index * 3 + 2] = z
        index++
      }
    }

    return positions
  }, [])

  // 원본 위치 저장
  const originalPositions = useMemo(() => {
    return gridPositions.slice()
  }, [gridPositions])

  useFrame((state) => {
    if (ref.current) {
      const time = state.clock.elapsedTime
      const positions = ref.current.geometry.attributes.position.array as Float32Array

      for (let i = 0; i < positions.length; i += 3) {
        const x = originalPositions[i]
        const z = originalPositions[i + 2]
        positions[i + 1] = Math.sin(time + x * 0.3) * Math.cos(time + z * 0.3) * 0.5
      }

      ref.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={gridPositions.length / 3}
          array={gridPositions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#00C2A8" size={0.05} transparent opacity={0.6} />
    </points>
  )
}

function TechSphere({ position, color, label }: { position: [number, number, number]; color: string; label: string }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const textRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
    if (textRef.current) {
      textRef.current.lookAt(state.camera.position)
    }
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <group position={position}>
        <Sphere ref={meshRef} args={[1, 64, 64]}>
          <MeshDistortMaterial
            color={color}
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0.1}
            metalness={0.8}
            transparent
            opacity={0.8}
          />
        </Sphere>

        <Text3D ref={textRef} font="/fonts/Geist_Bold.json" size={0.3} height={0.05} position={[0, -2, 0]}>
          {label}
          <meshStandardMaterial color="#ffffff" />
        </Text3D>
      </group>
    </Float>
  )
}

function DataFlow() {
  const ref = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <group ref={ref}>
      {[...Array(8)].map((_, i) => {
        const angle = (i / 8) * Math.PI * 2
        const radius = 6
        const x = Math.cos(angle) * radius
        const z = Math.sin(angle) * radius

        return (
          <mesh key={i} position={[x, 0, z]}>
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshStandardMaterial
              color="#00C2A8"
              emissive="#00C2A8"
              emissiveIntensity={0.5}
              transparent
              opacity={0.8}
            />
          </mesh>
        )
      })}
    </group>
  )
}

export function EnhancedThreeScene() {
  const isMobile = useIsMobile()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // 클라이언트 사이드에서만 렌더링
  if (!isClient) {
    return (
      <div className="w-full h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-[#1C1F2A] to-[#2A2F3A]">
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-white text-xl">Loading 3D Scene...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-[#1C1F2A] to-[#2A2F3A]">
      <Canvas camera={{ position: [0, 5, 15], fov: 50 }} dpr={isMobile ? [1, 1.5] : [1, 2]}>
        <Environment preset="night" />
        <ambientLight intensity={isMobile ? 0.4 : 0.3} />
        <pointLight position={[10, 10, 10]} intensity={isMobile ? 0.8 : 1} color="#00C2A8" />
        <pointLight position={[-10, -10, -10]} intensity={isMobile ? 0.3 : 0.5} color="#1C1F2A" />

        {!isMobile && <AnimatedGrid />}

        <TechSphere position={[-4, 2, 0]} color="#3B82F6" label="PASS" />
        <TechSphere position={[4, 2, 0]} color="#10B981" label="DID" />
        <TechSphere position={[0, -2, 2]} color="#8B5CF6" label="Web3" />
        <TechSphere position={[0, 2, 0]} color="#00C2A8" label="TrustPort" />

        {!isMobile && <DataFlow />}

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={!isMobile}
          autoRotateSpeed={isMobile ? 0 : 0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
          enableDamping={true}
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  )
}
