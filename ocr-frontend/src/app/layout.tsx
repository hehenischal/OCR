import NavBar from '@/components/NavBar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'O-C-R',
  description: 'OCR is optical character recognition which can be used to recognize images text and pull the text of images.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header> <NavBar/> </header>
        {children}
        </body>
    </html>
  )
}
