import type { Metadata } from 'next'
import {Poppins } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import NavBar from '@/components/NavBar'
import { Toaster } from "@/components/ui/toaster"

const poppins = Poppins({ subsets: ['latin'], weight: ['200','300',"400", "500", "600", "700"] })

export const metadata: Metadata = {
  title: 'Cafe Cacao',
  description: 'Landing page for Cafe Cacao',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={cn("min-h-screen font-sans antialiased", poppins.className)}>
        <NavBar />
        {children}
        <Toaster />
      </body>
    </html>
  )
}
