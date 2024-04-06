import { Navigation } from '@/Components/Navigation'
import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import { Footer } from '@/Components/Footer'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Marianella Gomez Luna Portfolio',
  description: 'Bienvenidos a mi mundillo',
  icons: {
    icon: [
      {
        url: '/favicon.ico'
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
