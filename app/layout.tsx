import type { Metadata } from 'next'
import './globals.css'

import { Archivo } from 'next/font/google'
const archivo = Archivo({subsets: ["latin"]})

export const metadata: Metadata = {
  title: 'Trippi',
  description: 'Trippi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={archivo.className}>{children}</body>
    </html>
  )
}
