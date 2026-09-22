'use client';

import dynamic from 'next/dynamic';

/**
 * Wrapper สำหรับ Scene ที่บังคับให้ render ฝั่ง client เท่านั้น
 *
 * เหตุผล: ตอน static export (output: 'export') Next.js จะ pre-render
 * ทุกคอมโพเนนต์บน server รวมถึง <Canvas> ของ R3F ด้วย ซึ่งจะ error
 * เพราะ server ไม่มี window / document / WebGL context
 *
 * การใช้ dynamic(..., { ssr: false }) บังคับให้ Scene ถูกโหลด
 * เฉพาะใน browser เท่านั้น
 *
 * ผลพลอยได้: 3D bundle (~400KB) แยกออกจาก main bundle
 * → หน้าแรกแสดงเร็วขึ้น ผู้ใช้เห็น Hero ก่อน แล้ว 3D ค่อยตามมา
 */
const Scene = dynamic(() => import('@/three/Scene'), {
  ssr: false,
  // ไม่ต้องมี loading component — ฉาก 3D อยู่ข้างหลัง DOM
  // ผู้ใช้จะเห็น Hero ก่อนอยู่แล้วระหว่างรอ
});

export default function ClientScene() {
  return <Scene />;
}
