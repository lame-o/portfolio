import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import React from 'react'
import ThemeProvider from '@/components/theme-provider'

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
  title: 'Liam Dwight | Portfolio',
  description: 'Full Stack Developer Portfolio',
  icons: {
    icon: '/images/favicon.png',
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
    <html lang="en" suppressHydrationWarning className={garabosse.variable}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
