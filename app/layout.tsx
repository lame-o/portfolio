import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Liam Dwight - Portfolio',
  description: 'Full-stack developer portfolio showcasing projects and skills',
  icons: {
    icon: [
      { url: '/images/favicon.png', sizes: '32x32' },
      { url: '/images/favicon.png', sizes: '16x16' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
