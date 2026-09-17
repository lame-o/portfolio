import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import React from 'react'

const garabosse = localFont({
  src: [
    { path: '../public/fonts/Garabosse-Perle.woff2', weight: '400', style: 'normal' },
  ],
  display: 'swap',
  preload: true,
  variable: '--font-sans',
  adjustFontFallback: false,
})

export const metadata: Metadata = {
  title: {
    default: 'Liam Dwight | Portfolio',
    template: '%s · Liam Dwight',
  },
  description:
    'Liam Dwight — AI Strategist and UCSD graduate trained in Engineering and Human-Computer Interaction. Building user-centered products with Next.js, TypeScript, and Python.',
  icons: {
    icon: '/images/favicon.png',
  },
  openGraph: {
    title: 'Liam Dwight | Portfolio',
    description:
      'AI Strategist and UCSD graduate trained in Engineering and Human-Computer Interaction.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={garabosse.variable}>
      <body>{children}</body>
    </html>
  )
}
