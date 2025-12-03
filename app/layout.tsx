import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Study Buddy',
  description: 'Your AI Study Buddy',
  icons: {
    icon: '/studybuddy-icon.svg',
    shortcut: '/studybuddy-icon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"`}
      >
        {children}
      </body>
    </html>
  )
}
