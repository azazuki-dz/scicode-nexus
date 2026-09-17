'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

interface RadiusKey {
  t: number
  r: number
}

function radiusAt(keys: RadiusKey[], t: number) {
  const k = Math.max(0, Math.min(1, t))
  const n = keys.length
  for (let i = 0; i < n - 1; i++) {
    const a = keys[i]
    const b = keys[i + 1]
    if (k >= a.t && k <= b.t) {
      const p = b.t === a.t ? 0 : (k - a.t) / (b.t - a.t)
      return a.r + (b.r - a.r) * p
    }
  }
  return keys[n - 1].r
}

function orthoBasis(dir: THREE.Vector3) {
  const up = new THREE.Vector3(0, 1, 0)
  const u = new THREE.Vector3().crossVectors(dir, up)
  if (u.lengthSq() < 1e-6) u.set(1, 0, 0)
  u.normalize()
  const v = new THREE.Vector3().crossVectors(dir, u).normalize()
  return [u, v]
}

class MeshBuilder {
  positions: number[] = []
  colors: number[] = []

  lineColor(y: number, z: number) {
    const h = Math.max(0, Math.min(1, y / 6.0))
    const foot = Math.max(0, Math.min(1, (y - 0.25) / 1.1))
    const depth = Math.max(0, Math.min(0.7, z * 0.28))
    const v = Math.min(1, (0.34 + h * 0.52 + depth) * (0.45 + 0.55 * foot))
    const j = (Math.random() - 0.5) * 0.05
    const c = Math.min(1, Math.max(0, v + j))
    return [c, c, c + 0.012] as [number, number, number]
  }

  addLine(
    a: [number, number, number],
    b: [number, number, number],
    ca?: [number, number, number],
    cb?: [number, number, number]
  ) {
    this.positions.push(a[0], a[1], a[2], b[0], b[1], b[2])
    const c1 = ca || this.lineColor(a[1], a[2])
    const c2 = cb || this.lineColor(b[1], b[2])
    this.colors.push(c1[0], c1[1], c1[2], c2[0], c2[1], c2[2])
  }

  addTube(from: THREE.Vector3, to: THREE.Vector3, keys: RadiusKey[], rings = 12, seg = 18, brightLine = 0.9) {
    const dir = new THREE.Vector3().subVectors(to, from)
    dir.normalize()
    const [u, v] = orthoBasis(dir)
    for (let i = 0; i <= rings; i++) {
      const t = i / rings
      const center = new THREE.Vector3().lerpVectors(from, to, t)
      const r = radiusAt(keys, t)
      for (let k = 0; k < seg; k++) {
        const a1 = (k / seg) * Math.PI * 2
        const a2 = ((k + 1) / seg) * Math.PI * 2
        const p1 = new THREE.Vector3()
          .copy(center)
          .addScaledVector(u, Math.cos(a1) * r)
          .addScaledVector(v, Math.sin(a1) * r)
        const p2 = new THREE.Vector3()
          .copy(center)
          .addScaledVector(u, Math.cos(a2) * r)
          .addScaledVector(v, Math.sin(a2) * r)
        this.addLine(
          [p1.x, p1.y, p1.z],
          [p2.x, p2.y, p2.z],
          this.lineColor(p1.y, p1.z),
          this.lineColor(p2.y, p2.z)
        )
      }
    }
    for (let i = 0; i < rings; i++) {
      const t1 = i / rings
      const t2 = (i + 1) / rings
      const p1 = new THREE.Vector3().lerpVectors(from, to, t1)
      const p2 = new THREE.Vector3().lerpVectors(from, to, t2)
      this.addLine(
        [p1.x, p1.y, p1.z],
        [p2.x, p2.y, p2.z],
        this.lineColor(p1.y, p1.z),
        this.lineColor(p2.y, p2.z)
      )
    }
    void brightLine
  }

  addIcosahedronFrag(center: THREE.Vector3, radius: number, dropRatio = 0.28) {
    const geo = new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(radius, 2))
    const pos = geo.getAttribute('position') as THREE.BufferAttribute
    const arr = pos.array
    for (let i = 0; i < arr.length; i += 6) {
      if (Math.random() < dropRatio) continue
      const ax = center.x + arr[i]
      const ay = center.y + arr[i + 1]
      const az = center.z + arr[i + 2]
      const bx = center.x + arr[i + 3]
      const by = center.y + arr[i + 4]
      const bz = center.z + arr[i + 5]
      this.addLine(
        [ax, ay, az],
        [bx, by, bz],
        this.lineColor(ay, az),
        this.lineColor(by, bz)
      )
    }
    geo.dispose()
  }

  addSphere(center: THREE.Vector3, radius: number, dropRatio = 0.2) {
    const geo = new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(radius, 1))
    const pos = geo.getAttribute('position') as THREE.BufferAttribute
    const arr = pos.array
    for (let i = 0; i < arr.length; i += 6) {
      if (Math.random() < dropRatio) continue
      this.addLine(
        [center.x + arr[i], center.y + arr[i + 1], center.z + arr[i + 2]],
        [center.x + arr[i + 3], center.y + arr[i + 4], center.z + arr[i + 5]],
        this.lineColor(center.y + arr[i + 1], center.z + arr[i + 2]),
        this.lineColor(center.y + arr[i + 4], center.z + arr[i + 5])
      )
    }
    geo.dispose()
  }

  addScribble(
    center: THREE.Vector3,
    radii: THREE.Vector3,
    count: number,
    minLen = 0.06,
    maxLen = 0.22
  ) {
    const p = new THREE.Vector3()
    const dir = new THREE.Vector3()
    for (let i = 0; i < count; i++) {
      dir.set(Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1)
      const l = dir.length() || 1
      const shell = 0.55 + Math.random() * 0.45
      dir.multiplyScalar(shell / l)
      p.set(
        center.x + dir.x * radii.x,
        center.y + dir.y * radii.y,
        center.z + dir.z * radii.z
      )
      dir.set(Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1).normalize()
      const len = minLen + Math.random() * (maxLen - minLen)
      const qx = p.x + dir.x * len
      const qy = p.y + dir.y * len
      const qz = p.z + dir.z * len
      const bright = Math.random() < 0.35
      const b = bright ? 0.55 + Math.random() * 0.4 : 0.25 + Math.random() * 0.3
      const j = (Math.random() - 0.5) * 0.06
      const c = Math.min(1, Math.max(0, b + j)) as number
      const col: [number, number, number] = [c, c, Math.min(1, c + 0.01)]
      this.addLine([p.x, p.y, p.z], [qx, qy, qz], col, col)
    }
  }

  addScribbleLimb(
    from: THREE.Vector3,
    to: THREE.Vector3,
    radius: number,
    count: number,
    minLen = 0.05,
    maxLen = 0.18
  ) {
    const c = new THREE.Vector3()
    for (let i = 0; i < count; i++) {
      const t = Math.random()
      c.lerpVectors(from, to, t)
      const wobble = radius * (0.7 + Math.random() * 0.5)
      this.addScribble(
        c,
        new THREE.Vector3(wobble, wobble, wobble),
        1,
        minLen,
        maxLen
      )
    }
  }

  build() {
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.Float32BufferAttribute(this.positions, 3))
    geo.setAttribute('color', new THREE.Float32BufferAttribute(this.colors, 3))
    return geo
  }
}

export function WireframeHuman() {
  const hostRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const host = hostRef.current
    if (!host) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 60)
    camera.position.set(0, 3.7, 9.3)
    camera.lookAt(0, 3.3, 0)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setClearColor(0x000000, 0)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75))
    host.appendChild(renderer.domElement)

    const builder = new MeshBuilder()

    const TORSO_Y0 = 2.35
    const TORSO_Y1 = 4.45
    const torsoWidth = (y: number) => {
      const keys: Array<[number, number]> = [
        [2.35, 0.46],
        [2.72, 0.43],
        [3.06, 0.32],
        [3.55, 0.45],
        [4.02, 0.56],
        [4.45, 0.68],
      ]
      let r = keys[0][1]
      for (let i = 0; i < keys.length - 1; i++) {
        const [yA, rA] = keys[i]
        const [yB, rB] = keys[i + 1]
        if (y >= yA && y <= yB) {
          const p = (y - yA) / (yB - yA)
          r = rA + (rB - rA) * p
          break
        }
      }
      return r
    }
    const torso = new THREE.Vector3(0, TORSO_Y0, 0)
    const shoulderCenter = new THREE.Vector3(0, TORSO_Y1, 0)
    const dirUp = new THREE.Vector3(0, 1, 0)
    const [tu, tv] = orthoBasis(dirUp)
    for (let i = 0; i <= 15; i++) {
      const y = TORSO_Y0 + (i / 15) * (TORSO_Y1 - TORSO_Y0)
      const center = new THREE.Vector3(0, y, 0)
      const rX = torsoWidth(y)
      const rZ = rX * 0.42
      const seg = 18
      for (let k = 0; k < seg; k++) {
        const a1 = (k / seg) * Math.PI * 2
        const a2 = ((k + 1) / seg) * Math.PI * 2
        const pPos = new THREE.Vector3()
          .copy(center)
          .addScaledVector(tu, Math.cos(a1) * rX)
          .addScaledVector(tv, Math.sin(a1) * rZ)
        const pNext = new THREE.Vector3()
          .copy(center)
          .addScaledVector(tu, Math.cos(a2) * rX)
          .addScaledVector(tv, Math.sin(a2) * rZ)
        builder.addLine(
          [pPos.x, pPos.y, pPos.z],
          [pNext.x, pNext.y, pNext.z],
          builder.lineColor(pPos.y, pPos.z),
          builder.lineColor(pNext.y, pNext.z)
        )
      }
    }
    builder.addLine([torso.x, torso.y, torso.z], [shoulderCenter.x, shoulderCenter.y, shoulderCenter.z], [0.55, 0.55, 0.56], [0.72, 0.72, 0.73])

    const neck = new THREE.Vector3(0, TORSO_Y1, 0.02)
    const head = new THREE.Vector3(0, 5.5, 0)
    builder.addTube(neck, new THREE.Vector3(0, 5.02, 0.01), [
      { t: 0, r: 0.11 },
      { t: 1, r: 0.09 },
    ], 5, 14)
    builder.addIcosahedronFrag(head, 0.36, 0.3)

    const legs: Array<[THREE.Vector3, THREE.Vector3, THREE.Vector3, number]> = [
      [new THREE.Vector3(-0.3, 2.35, 0.05), new THREE.Vector3(-0.38, 1.3, 0.1), new THREE.Vector3(-0.24, 0.13, 0.12), 1],
      [new THREE.Vector3(0.3, 2.35, 0.05), new THREE.Vector3(0.38, 1.3, 0.1), new THREE.Vector3(0.24, 0.13, 0.12), -1],
    ]
    for (const [hip, knee, ankle] of legs) {
      builder.addTube(hip, knee, [
        { t: 0, r: 0.17 },
        { t: 0.4, r: 0.13 },
        { t: 0.55, r: 0.15 },
        { t: 0.85, r: 0.09 },
        { t: 1, r: 0.07 },
      ], 9, 16)
      builder.addTube(knee, ankle, [
        { t: 0, r: 0.08 },
        { t: 0.6, r: 0.07 },
        { t: 1, r: 0.055 },
      ], 7, 14)
    }

    // Left arm reaches out to the viewer's left, toward the camera
    const leftShoulder = new THREE.Vector3(-0.68, 4.4, 0.05)
    const leftElbow = new THREE.Vector3(-1.5, 3.95, 0.7)
    const leftWrist = new THREE.Vector3(-1.95, 3.6, 1.4)
    const leftPalm = new THREE.Vector3(-2.05, 3.55, 1.8)
    // Right arm extends down and out to the right
    const rightShoulder = new THREE.Vector3(0.68, 4.4, 0.05)
    const rightElbow = new THREE.Vector3(1.35, 3.5, 0.1)
    const rightWrist = new THREE.Vector3(1.95, 2.4, -0.05)
    const rightPalm = new THREE.Vector3(2.1, 2.1, -0.1)

    builder.addTube(leftShoulder, leftElbow, [
      { t: 0, r: 0.13 },
      { t: 0.5, r: 0.1 },
      { t: 1, r: 0.085 },
    ], 8, 14)
    builder.addTube(leftElbow, leftWrist, [
      { t: 0, r: 0.085 },
      { t: 0.5, r: 0.08 },
      { t: 1, r: 0.05 },
    ], 7, 12)
    builder.addSphere(leftPalm, 0.09, 0.12)
    const leftFingerTips: Array<[number, number, number]> = [
      [-2.3, 3.85, 2.1],
      [-2.2, 3.68, 2.24],
      [-2.08, 3.58, 2.3],
      [-1.95, 3.5, 2.26],
      [-1.88, 3.42, 2.12],
    ]
    for (const tip of leftFingerTips) {
      builder.addLine(
        [leftPalm.x, leftPalm.y, leftPalm.z + 0.04],
        tip,
        [0.5, 0.5, 0.51],
        [0.64, 0.64, 0.65]
      )
    }

    builder.addTube(rightShoulder, rightElbow, [
      { t: 0, r: 0.13 },
      { t: 0.5, r: 0.1 },
      { t: 1, r: 0.085 },
    ], 8, 14)
    builder.addTube(rightElbow, rightWrist, [
      { t: 0, r: 0.085 },
      { t: 0.5, r: 0.075 },
      { t: 1, r: 0.05 },
    ], 7, 12)
    builder.addSphere(rightPalm, 0.075, 0.12)
    const rightFingerTips: Array<[number, number, number]> = [
      [2.2, 1.95, -0.05],
      [2.14, 1.88, 0.02],
      [2.05, 1.84, 0.02],
      [1.96, 1.86, -0.04],
    ]
    for (const tip of rightFingerTips) {
      builder.addLine(
        [rightPalm.x, rightPalm.y, rightPalm.z],
        tip,
        [0.45, 0.45, 0.46],
        [0.58, 0.58, 0.59]
      )
    }
    builder.addLine([0, 4.2, 0], [0.68, 4.4, 0.05], [0.55, 0.55, 0.56], [0.62, 0.62, 0.63])

    // ---- dense scribble shell (chaotic sketch look) ----
    builder.addScribble(new THREE.Vector3(0.1, 5.5, 0), new THREE.Vector3(0.44, 0.52, 0.44), 430, 0.05, 0.2)
    builder.addScribble(new THREE.Vector3(0, 4.72, 0.01), new THREE.Vector3(0.15, 0.22, 0.15), 70)
    for (let i = 0; i < 6; i++) {
      const y = 2.55 + (i / 5) * 1.75
      const r = torsoWidth(y)
      builder.addScribble(
        new THREE.Vector3(0, y, 0),
        new THREE.Vector3(r, 0.24, r * 0.45),
        130
      )
    }
    builder.addScribble(new THREE.Vector3(-0.55, 4.35, 0.02), new THREE.Vector3(0.22, 0.2, 0.18), 80)
    builder.addScribble(new THREE.Vector3(0.55, 4.35, 0.02), new THREE.Vector3(0.22, 0.2, 0.18), 80)
    builder.addScribbleLimb(leftShoulder, leftElbow, 0.14, 90)
    builder.addScribbleLimb(leftElbow, leftWrist, 0.11, 90)
    builder.addScribble(leftPalm, new THREE.Vector3(0.15, 0.13, 0.15), 120, 0.04, 0.15)
    builder.addScribbleLimb(rightShoulder, rightElbow, 0.14, 90)
    builder.addScribbleLimb(rightElbow, rightWrist, 0.11, 90)
    builder.addScribble(rightPalm, new THREE.Vector3(0.12, 0.12, 0.12), 60, 0.04, 0.14)
    for (const [hip, knee, ankle] of legs) {
      builder.addScribbleLimb(hip, knee, 0.17, 110)
      builder.addScribbleLimb(knee, ankle, 0.1, 80)
    }

    const geo = builder.build()
    const mat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.92,
      depthWrite: false,
    })
    const human = new THREE.LineSegments(geo, mat)

    const particlesGeo = new THREE.BufferGeometry()
    const pCount = 120
    const pPos = new Float32Array(pCount * 3)
    const pSeed = new Float32Array(pCount)
    for (let i = 0; i < pCount; i++) {
      pPos[i * 3] = (Math.random() - 0.5) * 11
      pPos[i * 3 + 1] = Math.random() * 8
      pPos[i * 3 + 2] = (Math.random() - 0.5) * 7
      pSeed[i] = Math.random() * 100
    }
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3))
    const pMat = new THREE.PointsMaterial({
      color: 0xf5f5f5,
      size: 0.02,
      transparent: true,
      opacity: 0.35,
      depthWrite: false,
    })
    const particles = new THREE.Points(particlesGeo, pMat)

    const group = new THREE.Group()
    group.add(human)
    group.add(particles)
    group.position.set(1.5, 0, 0)
    group.rotation.y = 0.12
    scene.add(group)

    const clock = new THREE.Clock()
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let mx = 0
    let my = 0
    const target = { x: 0, y: 0 }

    const onPointer = (e: PointerEvent) => {
      target.x = (e.clientX / window.innerWidth) * 2 - 1
      target.y = (e.clientY / window.innerHeight) * 2 - 1
    }
    window.addEventListener('pointermove', onPointer)

    const resize = () => {
      const w = host.clientWidth || 1
      const h = host.clientHeight || 1
      const s = Math.max(0.38, Math.min(1, Math.min(w, h) / 820))
      group.scale.setScalar(s)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    resize()
    let ro: ResizeObserver | null = null
    if (typeof ResizeObserver !== 'undefined') {
      ro = new ResizeObserver(resize)
      ro.observe(host)
    }

    renderer.setAnimationLoop(() => {
      if (document.hidden) return
      const dt = Math.min(clock.getDelta(), 0.05)
      const t = clock.elapsedTime
      mx += (target.x - mx) * 0.045
      my += (target.y - my) * 0.045
      if (!reduced) {
        group.rotation.y = 0.12 + Math.sin(t * 0.09) * 0.22
        group.rotation.z = Math.sin(t * 0.05) * 0.015
        group.position.y = Math.sin(t * 0.7) * 0.09
        group.position.x = 1.5 + mx * 0.22
        group.scale.multiplyScalar(1 + Math.sin(t * 0.45) * 0.006)
        camera.position.x = mx * 0.3
        camera.position.y = 3.7 + my * 0.12
        camera.lookAt(0, 3.3 + my * 0.06, 0)
        const arr = particlesGeo.getAttribute('position') as THREE.BufferAttribute
        const a = arr.array as Float32Array
        for (let i = 0; i < pCount; i++) {
          a[i * 3 + 1] += dt * (0.05 + (pSeed[i] % 0.05))
          if (a[i * 3 + 1] > 8.2) a[i * 3 + 1] = -0.2
        }
        arr.needsUpdate = true
      }
      renderer.render(scene, camera)
    })

    return () => {
      renderer.setAnimationLoop(null)
      window.removeEventListener('pointermove', onPointer)
      ro?.disconnect()
      geo.dispose()
      mat.dispose()
      particlesGeo.dispose()
      pMat.dispose()
      scene.traverse((o) => {
        if (o instanceof THREE.LineSegments || o instanceof THREE.Points) {
          o.geometry.dispose()
          const m = o.material as THREE.Material
          if (m.dispose) m.dispose()
        }
      })
      renderer.dispose()
      if (renderer.domElement.parentElement === host) {
        host.removeChild(renderer.domElement)
      }
    }
  }, [])

  return <div ref={hostRef} className="df-figure" aria-hidden="true" />
}