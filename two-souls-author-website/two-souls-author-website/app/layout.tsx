import './globals.css'
import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'

const cormorant = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-cormorant', weight: ['400','500','600','700'] })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'The Two Souls Series | Shadow Wolf',
  description: 'A cinematic luxury author website for The Two Souls Series by Shadow Wolf.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${inter.variable}`}>{children}</body>
    </html>
  )
}
