import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ansel Haymitch M. Vivas | Christening Celebration',
<<<<<<< HEAD
  description: 'Join us for Ansel\'s epic baptism adventure - where Baby Driver meets The Hunger Games! February 15, 2026',
  keywords: 'christening, baptism, celebration, Ansel Haymitch, Baby Driver, Hunger Games',
  openGraph: {
    title: 'Ansel Haymitch M. Vivas | Christening Celebration',
    description: 'Gear up for Ansel\'s Epic Baptism Adventure! February 15, 2026',
=======
  description: 'Join us for Ansel\'s epic baptism adventure - where Baby Driver meets The Hunger Games!',
  keywords: 'christening, baptism, celebration, Ansel Haymitch, Baby Driver, Hunger Games',
  openGraph: {
    title: 'Ansel Haymitch M. Vivas | Christening Celebration',
    description: 'Gear up for Ansel\'s Epic Baptism Adventure!',
>>>>>>> 0923c0fba9f5d5a132fe6f5c9c69f2b03878a643
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
<<<<<<< HEAD
      <body className="min-h-screen overflow-x-hidden bg-brand-dark">
=======
      <body className="min-h-screen overflow-x-hidden">
>>>>>>> 0923c0fba9f5d5a132fe6f5c9c69f2b03878a643
        {children}
      </body>
    </html>
  )
}
