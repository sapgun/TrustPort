"use client"

import type React from "react"

import { useRef, useEffect, useMemo, useState } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Points, PointMaterial, Sphere, MeshDistortMaterial, Float } from "@react-three/drei"
import * as THREE from "three"
import { useIsMobile } from "@/hooks/use-mobile"

function ParticleField({ mouse }: { mouse: React.MutableRefObject<[number, number]> }) {
  const ref = useRef<THREE.Points>(null)
  const { size, viewport } = useThree()
  const isMobile = useIsMobile()

  // 파티클 수를 상수로 고정 (모바일에서도 동일한 수 사용)
  const PARTICLE_COUNT = 1000

  // 파티클 위치를 한 번만 생성하고 변경하지 않음
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(PARTICLE_COUNT * 3)

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20
    }

    return positions
  }, [])

  // 애니메이션용 별도 배열 생성
  const originalPositions = useMemo(() => {
    return particlesPosition.slice()
  }, [particlesPosition])

  useFrame((state) => {
    if (ref.current) {
      const time = state.clock.elapsedTime

      // 마우스 인터랙션
      const mouseX = (mouse.current[0] / size.width) * 2 - 1
      const mouseY = -(mouse.current[1] / size.height) * 2 + 1
      const intensity = isMobile ? 0.05 : 0.1

      ref.current.rotation.x = time * 0.05 + mouseY * intensity
      ref.current.rotation.y = time * 0.075 + mouseX * intensity

      // 파티클 개별 애니메이션 - 원본 배열을 수정하지 않고 임시 배열에 복사 후 수정
      if (!isMobile) {
        const positions = ref.current.geometry.attributes.position.array as Float32Array

        for (let i = 0; i < positions.length; i += 3) {
          const originalY = originalPositions[i + 1]
          const originalZ = originalPositions[i + 2]
          const x = positions[i]

          // 원본 위치를 기준으로 애니메이션 적용
          positions[i + 1] = originalY + Math.sin(time + x * 0.01) * 0.05
          positions[i + 2] = originalZ + Math.cos(time + originalY * 0.01) * 0.05
        }

        ref.current.geometry.attributes.position.needsUpdate = true
      }
    }
  })

  return (
    <Points ref={ref} positions={particlesPosition} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00C2A8"
        size={isMobile ? 0.08 : 0.05}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={isMobile ? 0.4 : 0.6}
      />
    </Points>
  )
}

function FloatingNodes({ scrollProgress }: { scrollProgress: number }) {
  const group = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (group.current) {
      const time = state.clock.elapsedTime
      group.current.rotation.y = time * 0.1 + scrollProgress * Math.PI * 2
      group.current.position.y = Math.sin(scrollProgress * Math.PI * 4) * 2
    }
  })

  return (
    <group ref={group}>
      {/* PASS 노드 */}
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Sphere args={[0.8, 32, 32]} position={[-4, 2, 0]}>
          <MeshDistortMaterial
            color="#3B82F6"
            attach="material"
            distort={0.3}
            speed={2}
            roughness={0.1}
            metalness={0.8}
            transparent
            opacity={0.8}
          />
        </Sphere>
      </Float>

      {/* DID 노드 */}
      <Float speed={1.5} rotationIntensity={1.5} floatIntensity={1.5}>
        <Sphere args={[0.8, 32, 32]} position={[4, 2, 0]}>
          <MeshDistortMaterial
            color="#10B981"
            attach="material"
            distort={0.3}
            speed={1.5}
            roughness={0.1}
            metalness={0.8}
            transparent
            opacity={0.8}
          />
        </Sphere>
      </Float>

      {/* Web3 노드 */}
      <Float speed={2.5} rotationIntensity={0.5} floatIntensity={3}>
        <Sphere args={[0.8, 32, 32]} position={[0, -3, 2]}>
          <MeshDistortMaterial
            color="#8B5CF6"
            attach="material"
            distort={0.3}
            speed={2.5}
            roughness={0.1}
            metalness={0.8}
            transparent
            opacity={0.8}
          />
        </Sphere>
      </Float>

      {/* 중앙 TrustPort 코어 */}
      <Float speed={1} rotationIntensity={2} floatIntensity={1}>
        <Sphere args={[1.2, 64, 64]} position={[0, 0, 0]}>
          <MeshDistortMaterial
            color="#00C2A8"
            attach="material"
            distort={0.5}
            speed={1}
            roughness={0}
            metalness={1}
            transparent
            opacity={0.9}
          />
        </Sphere>
      </Float>
    </group>
  )
}

function ConnectionLines({ scrollProgress }: { scrollProgress: number }) {
  const ref = useRef<THREE.Group>(null)

  useFrame(() => {
    if (ref.current) {
      ref.current.children.forEach((child, index) => {
        if (child instanceof THREE.Mesh) {
          const material = child.material as THREE.MeshBasicMaterial
          material.opacity = 0.3 + Math.sin(Date.now() * 0.001 + index) * 0.2
        }
      })
    }
  })

  return (
    <group ref={ref}>
      {/* PASS to Core */}
      <mesh>
        <tubeGeometry
          args={[
            new THREE.CatmullRomCurve3([
              new THREE.Vector3(-4, 2, 0),
              new THREE.Vector3(-2, 1, 0),
              new THREE.Vector3(0, 0, 0),
            ]),
            20,
            0.02,
            8,
            false,
          ]}
        />
        <meshBasicMaterial color="#00C2A8" transparent opacity={0.4} />
      </mesh>

      {/* DID to Core */}
      <mesh>
        <tubeGeometry
          args={[
            new THREE.CatmullRomCurve3([
              new THREE.Vector3(4, 2, 0),
              new THREE.Vector3(2, 1, 0),
              new THREE.Vector3(0, 0, 0),
            ]),
            20,
            0.02,
            8,
            false,
          ]}
        />
        <meshBasicMaterial color="#00C2A8" transparent opacity={0.4} />
      </mesh>

      {/* Web3 to Core */}
      <mesh>
        <tubeGeometry
          args={[
            new THREE.CatmullRomCurve3([
              new THREE.Vector3(0, -3, 2),
              new THREE.Vector3(0, -1.5, 1),
              new THREE.Vector3(0, 0, 0),
            ]),
            20,
            0.02,
            8,
            false,
          ]}
        />
        <meshBasicMaterial color="#00C2A8" transparent opacity={0.4} />
      </mesh>
    </group>
  )
}

export function InteractiveBackground({ scrollProgress }: { scrollProgress: number }) {
  const mouse = useRef<[number, number]>([0, 0])
  const isMobile = useIsMobile()
  // 클라이언트 사이드 렌더링을 위한 상태
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    const handleMouseMove = (event: MouseEvent) => {
      mouse.current = [event.clientX, event.clientY]
    }

    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length > 0) {
        mouse.current = [event.touches[0].clientX, event.touches[0].clientY]
      }
    }

    if (isMobile) {
      window.addEventListener("touchmove", handleTouchMove, { passive: true })
    } else {
      window.addEventListener("mousemove", handleMouseMove)
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("touchmove", handleTouchMove)
    }
  }, [isMobile])

  // 클라이언트 사이드에서만 렌더링
  if (!isClient) {
    return <div className="fixed inset-0 -z-10 bg-black" />
  }

  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }} dpr={isMobile ? [1, 1.5] : [1, 2]}>
        <ambientLight intensity={isMobile ? 0.3 : 0.2} />
        <pointLight position={[10, 10, 10]} intensity={isMobile ? 0.6 : 0.8} color="#00C2A8" />
        <pointLight position={[-10, -10, -10]} intensity={isMobile ? 0.3 : 0.5} color="#1C1F2A" />
        <pointLight position={[0, 0, 5]} intensity={isMobile ? 0.2 : 0.3} color="#ffffff" />

        <ParticleField mouse={mouse} />
        <FloatingNodes scrollProgress={scrollProgress} />
        {!isMobile && <ConnectionLines scrollProgress={scrollProgress} />}
      </Canvas>
    </div>
  )
}
