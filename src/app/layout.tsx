import type { Metadata } from 'next'
import 'katex/dist/katex.min.css'
import './globals.css'

export const metadata: Metadata = {
  title: 'SciCode Nexus — ฟิสิกส์ เคมี ชีวะ คณิตศาสตร์ โค้ด',
  description: 'คำนวณสูตร 196+ สูตร จำลองฟิสิกส์ เรียนรู้หลักสูตร ม.1-6 ทุกที่ทุกเวลา',
  keywords: ['physics', 'chemistry', 'biology', 'mathematics', 'formula', 'calculator', 'simulation', 'education'],
  authors: [{ name: 'SciCode Nexus' }],
  openGraph: {
    title: 'SciCode Nexus',
    description: 'คำนวณสูตร 196+ สูตร จำลองฟิสิกส์ เรียนรู้หลักสูตร ม.1-6',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th" data-theme="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap" rel="stylesheet" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('scicode_theme');
                  if (theme) { document.documentElement.setAttribute('data-theme', theme); }
                  else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
                    document.documentElement.setAttribute('data-theme', 'light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen">
        <div className="ambient-mesh" aria-hidden="true" />
        <div className="grid-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  )
}