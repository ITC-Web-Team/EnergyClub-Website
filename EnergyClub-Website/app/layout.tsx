import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Energy Club IIT Bombay',
  description: 'Powering the future through innovation and collaboration',
  icons: {
    icon: '/img/energy.jpeg',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Navigation */}
            <nav className="border-b-2 border-black py-4 mb-8">
              <div className="flex justify-between items-center">
                <Link href={"/"} className="flex items-center gap-4">
                  <Image
                    src="/img/energy.jpeg"
                    alt="Energy Club IIT Bombay Logo"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <span className="font-bold text-2xl">ENERGY CLUB IITB</span>
                </Link>
                <div className="flex space-x-8">
                  <Link href="/projects" className="inline-flex items-center px-1 pt-1 text-sm font-medium hover:underline">
                    PROJECTS
                  </Link>
                  <Link href="/events" className="inline-flex items-center px-1 pt-1 text-sm font-medium hover:underline">
                    EVENTS
                  </Link>
                  <Link href="/team" className="inline-flex items-center px-1 pt-1 text-sm font-medium hover:underline">
                    OUR TEAM
                  </Link>
                </div>
              </div>
            </nav>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}