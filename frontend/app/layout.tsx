import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Linkedin, Mail } from 'lucide-react'

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
        <div className="min-h-screen bg-white flex flex-col">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow">
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
                <div className="flex items-center space-x-8">
                  <div className="hidden md:flex space-x-8">
                    <Link href="/" className="inline-flex items-center gap-1 px-1 pt-1 text-sm font-medium hover:underline">
                      HOME
                    </Link>
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
                  <div className="flex items-center space-x-4">
                    <a 
                      href="https://www.instagram.com/energyclub.iitb" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-black hover:text-pink-600 transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a 
                      href="https://www.linkedin.com/company/energy-club-iit-bombay" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-black hover:text-blue-600 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </nav>
            {children}
          </div>
          {/* Footer */}
          <footer className="border-t-2 border-black py-8 mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-2">
                  <Image
                    src="/img/energy.jpeg"
                    alt="Energy Club IIT Bombay Logo"
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                  <span className="text-sm font-medium"> 2025 Energy Club IITB. All rights reserved.</span>
                </div>
                <div className="flex items-center space-x-6">
                  <a 
                    href="https://www.instagram.com/energyclub.iitb"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-black hover:text-pink-600 transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/company/energy-club-iit-bombay/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-black hover:text-blue-600 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>

                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}