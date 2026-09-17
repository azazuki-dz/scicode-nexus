'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export interface MeshProbe {
  type: 'box' | 'sphere' | 'cylinder' | 'cone' | 'other'
  color: number
  x: number
  y: number
  z: number
}

export interface SceneProbe {
  meshes: MeshProbe[]
  lights: number
  objectCount: number
  cameraPos: [number, number, number]
}

interface ThreeLabPreviewProps {
  code: string
  runKey: number
  onLog: (type: string, ...args: any[]) => void
  onProbe: (probe: SceneProbe) => void
}

function probeType(geo: THREE.BufferGeometry): MeshProbe['type'] {
  const t = geo.type
  if (t === 'BoxGeometry') return 'box'
  if (t === 'SphereGeometry') return 'sphere'
  if (t === 'CylinderGeometry') return 'cylinder'
  if (t === 'ConeGeometry') return 'cone'
  return 'other'
}

function buildProbe(scene: THREE.Scene, camera: THREE.PerspectiveCamera): SceneProbe {
  const meshes: MeshProbe[] = []
  let lights = 0
  const walk = (obj: THREE.Object3D) => {
    if ((obj as THREE.Light).isLight) lights++
    if ((obj as THREE.Mesh).isMesh) {
      const mesh = obj as THREE.Mesh
      const mat = mesh.material as THREE.MeshStandardMaterial
      meshes.push({
        type: probeType(mesh.geometry),
        color: typeof mat.color === 'object' && mat.color ? mat.color.getHex() : 0,
        x: mesh.position.x,
        y: mesh.position.y,
        z: mesh.position.z,
      })
    }
    obj.children.forEach(walk)
  }
  scene.children.forEach(walk)
  const cp = camera.position
  return { meshes, lights, objectCount: meshes.length, cameraPos: [cp.x, cp.y, cp.z] }
}

export function ThreeLabPreview({ code, runKey, onLog, onProbe }: ThreeLabPreviewProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    let disposed = false
    let rafId = 0

    let renderer: THREE.WebGLRenderer
    try {
      renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
    } catch (err: any) {
      onLog('error', `WebGL ไม่พร้อมใช้งาน: ${err.message}`)
      return
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
    renderer.shadowMap.enabled = true

    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x0b1220)

    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100)
    camera.position.set(5, 4, 6)
    camera.lookAt(0, 0, 0)

    scene.add(new THREE.AmbientLight(0xffffff, 0.55))
    const dirLight = new THREE.DirectionalLight(0xffffff, 1.4)
    dirLight.position.set(6, 10, 5)
    scene.add(dirLight)
    scene.add(new THREE.GridHelper(12, 12, 0x3b4a63, 0x253349))

    const addBox = (w: number, h: number, d: number, color: number, x = 0, y = 0, z = 0) => {
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), new THREE.MeshStandardMaterial({ color }))
      mesh.position.set(x, y, z)
      scene.add(mesh)
      return mesh
    }

    const addSphere = (radius: number, color: number, x = 0, y = 0, z = 0) => {
      const mesh = new THREE.Mesh(
        new THREE.SphereGeometry(radius, 32, 32),
        new THREE.MeshStandardMaterial({ color })
      )
      mesh.position.set(x, y, z)
      scene.add(mesh)
      return mesh
    }

    const addCylinder = (radiusTop: number, radiusBottom: number, height: number, color: number, x = 0, y = 0, z = 0) => {
      const mesh = new THREE.Mesh(
        new THREE.CylinderGeometry(radiusTop, radiusBottom, height, 32),
        new THREE.MeshStandardMaterial({ color })
      )
      mesh.position.set(x, y, z)
      scene.add(mesh)
      return mesh
    }

    const addCone = (radius: number, height: number, color: number, x = 0, y = 0, z = 0) => {
      const mesh = new THREE.Mesh(
        new THREE.ConeGeometry(radius, height, 32),
        new THREE.MeshStandardMaterial({ color })
      )
      mesh.position.set(x, y, z)
      scene.add(mesh)
      return mesh
    }

    const sandboxConsole = {
      log: (...args: any[]) => onLog('log', ...args),
      warn: (...args: any[]) => onLog('warn', ...args),
      error: (...args: any[]) => onLog('error', ...args),
      info: (...args: any[]) => onLog('info', ...args),
    }

    try {
      const startTime = performance.now()
      const userFn = new Function(
        'THREE',
        'scene',
        'camera',
        'renderer',
        'addBox',
        'addSphere',
        'addCylinder',
        'addCone',
        'console',
        `"use strict";\n${code}`
      )
      userFn(THREE, scene, camera, renderer, addBox, addSphere, addCylinder, addCone, sandboxConsole)
      const duration = (performance.now() - startTime).toFixed(2)
      onLog('info', `สร้างฉาก 3 มิติสำเร็จใน ${duration}ms`)
    } catch (err: any) {
      onLog('error', `${err.name}: ${err.message}`)
    }

    onProbe(buildProbe(scene, camera))

    const controls = new OrbitControls(camera, canvas)
    controls.enableDamping = true
    controls.dampingFactor = 0.08

    const resize = () => {
      if (disposed) return
      const w = canvas.clientWidth || 1
      const h = canvas.clientHeight || 1
      renderer.setSize(w, h, false)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    const animate = () => {
      if (disposed) return
      rafId = requestAnimationFrame(animate)
      controls.update()
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      disposed = true
      cancelAnimationFrame(rafId)
      ro.disconnect()
      controls.dispose()
      scene.traverse(obj => {
        const mesh = obj as THREE.Mesh
        if (mesh.isMesh) {
          mesh.geometry.dispose()
          const mat = mesh.material as THREE.Material | THREE.Material[]
          if (Array.isArray(mat)) mat.forEach(m => m.dispose())
          else mat.dispose()
        }
      })
      renderer.dispose()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [runKey])

  return <canvas ref={canvasRef} className="w-full h-full block" />
}