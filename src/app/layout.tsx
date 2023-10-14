import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import type {PropsWithChildren} from 'react'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Angel eyes',
  description: 'SVG interpolation showcase',
}

export default function RootLayout({children}: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
