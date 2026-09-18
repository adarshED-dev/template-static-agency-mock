import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const reduceMotion =
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

function FloatingShape({ position, geometry, color, speed = 1, floatRange = 0.35 }) {
  const ref = useRef(null)
  const seed = useMemo(() => Math.random() * Math.PI * 2, [])

  useFrame((state) => {
    if (!ref.current || reduceMotion) return
    const t = state.clock.elapsedTime * speed + seed
    ref.current.rotation.x = t * 0.28
    ref.current.rotation.y = t * 0.36
    ref.current.position.y = position[1] + Math.sin(t) * floatRange
  })

  return (
    <mesh ref={ref} position={position} geometry={geometry}>
      <meshStandardMaterial
        color={color}
        metalness={0.2}
        roughness={0.3}
        emissive={color}
        emissiveIntensity={0.55}
      />
    </mesh>
  )
}

function Rig() {
  const group = useRef(null)

  useFrame((state) => {
    if (!group.current || reduceMotion) return
    const { pointer } = state
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, pointer.x * 0.25, 0.04)
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -pointer.y * 0.15, 0.04)
  })

  const icosa = useMemo(() => new THREE.IcosahedronGeometry(0.85, 0), [])
  const torus = useMemo(() => new THREE.TorusGeometry(0.55, 0.2, 16, 64), [])
  const octa = useMemo(() => new THREE.OctahedronGeometry(0.7, 0), [])
  const small = useMemo(() => new THREE.IcosahedronGeometry(0.4, 0), [])

  return (
    <group ref={group}>
      <FloatingShape position={[-2.55, 1.35, -0.2]} geometry={icosa} color="#60a5fa" speed={0.6} floatRange={0.3} />
      <FloatingShape position={[2.7, 1.15, -0.4]} geometry={octa} color="#93c5fd" speed={0.75} floatRange={0.25} />
      <FloatingShape position={[2.35, -1.7, -0.3]} geometry={torus} color="#38bdf8" speed={0.5} floatRange={0.35} />
      <FloatingShape position={[-2.5, -1.55, -0.5]} geometry={small} color="#bae6fd" speed={0.9} floatRange={0.2} />
    </group>
  )
}

function Hero3D({ className = '' }) {
  return (
    <Canvas
      className={className}
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: true }}
      camera={{ position: [0, 0, 5], fov: 42 }}
      style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
      onCreated={({ gl }) => {
        gl.toneMapping = THREE.NoToneMapping
      }}
    >
      <ambientLight intensity={1.1} />
      <directionalLight position={[3, 4, 5]} intensity={1.4} color="#e0f2fe" />
      <pointLight position={[-3, -2, 2]} intensity={1.2} color="#7dd3fc" />
      <Rig />
    </Canvas>
  )
}

export default Hero3D
