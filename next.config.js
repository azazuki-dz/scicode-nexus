/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  // ─── Static export ────────────────────────────────────────────
  // build แล้วได้โฟลเดอร์ out/ ที่มี HTML/CSS/JS ล้วน
  output: 'export',

  // GitHub Pages เสิร์ฟไฟล์แบบ /path/index.html
  // ถ้าไม่ตั้ง trailingSlash = true จะเจอ 404 เวลา refresh หน้า
  trailingSlash: true,

  // ไม่มี server → ปิด image optimization
  images: { unoptimized: true },

  // ─── basePath ─────────────────────────────────────────────────
  // ⚠️ สำคัญมาก — ต้องตรงกับชื่อ repo
  //
  //   repo ชื่อ sci-code-nexus     → NEXT_PUBLIC_BASE_PATH=/sci-code-nexus
  //   repo ชื่อ USERNAME.github.io  → ไม่ต้องตั้ง (root domain)
  //   ใช้ custom domain            → ไม่ต้องตั้ง
  //
  // ในเครื่อง dev ไม่ต้องตั้ง — จะเป็น '' อัตโนมัติ
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
};

export default nextConfig;
