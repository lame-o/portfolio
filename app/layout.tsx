import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import React from 'react'

const inter = Inter({ subsets: ['latin'],
  display: 'swap',
  preload: true
 })

export const metadata: Metadata = {
  title: 'Liam Dwight | Portfolio',
  description: 'Full Stack Developer Portfolio',
  icons: {
    icon: '/images/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preload"
        href="/images/profile.webp"
        as="image"
        type="image/webp"
        />
      </head>
      <body className={`${inter.className} bg-white`}>
        {children}
      </body>
    </html>
  )
}
