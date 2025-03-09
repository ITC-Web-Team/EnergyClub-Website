'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Plug, Leaf, CircleDollarSign } from 'lucide-react'

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <div className="bg-cyan-400 p-12 min-h-[400px] flex items-center">
          <div>
            <motion.h1
              className="text-5xl lg:text-6xl font-bold mb-6 text-black"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Energizing Innovation at IIT Bombay
            </motion.h1>
            <motion.p
              className="text-xl mb-8 text-black max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Join Energy Club IITB in our mission to revolutionize sustainable energy solutions and create a greener future.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button className="bg-black text-white hover:bg-gray-800 text-lg px-8 py-4 rounded-none">
                Join Us
              </Button>
            </motion.div>
          </div>
        </div>
        <div className="bg-orange-300 p-12 min-h-[400px] flex items-center justify-center">
          <Image
            src="/img/energy.jpeg"
            alt="Energy Club IIT Bombay Logo"
            width={400}
            height={400}
            className="w-auto h-auto rounded-full"
          />
        </div>
      </div>

      {/* Focus Areas Section */}
      <div className="mb-16">
        <h2 className="text-4xl font-bold mb-8 text-black">Our Focus Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-8 border-2 border-black rounded-none hover:bg-cyan-100 transition-colors">
            <Plug className="w-16 h-16 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Technology</h3>
            <p className="text-lg">
              In today&apos;s era, Technology has all the possible solutions to our problems. At Energy Club, we are obsessed with cutting edge technology in the energy sector that will shape our future.
            </p>
          </Card>
          <Card className="p-8 border-2 border-black rounded-none hover:bg-green-100 transition-colors">
            <Leaf className="w-16 h-16 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Environment</h3>
            <p className="text-lg">
              Energy can never be separated from its impact on the Environment. Environment is a key component for a sustainable future. With humans pushing nature&apos;s carrying capacity to its limits, we are trying to understand the delicate balance of nature and the urgency of climate change.
            </p>
          </Card>
          <Card className="p-8 border-2 border-black rounded-none hover:bg-yellow-100 transition-colors">
            <CircleDollarSign className="w-16 h-16 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Economics</h3>
            <p className="text-lg">
              Everything revolves around economics. Every policy has its own impact on the economy. Here at Energy club, we like to have discussions on recent policies, and strategies of different countries in the Energy and the Environment sector and how it affects us.
            </p>
          </Card>
        </div>
      </div>

      {/* Latest Projects Section */}
      <div className="mb-16">
        <h2 className="text-4xl font-bold mb-8 text-black">Latest Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Solar-Powered Desalination", desc: "Developing affordable solar-powered desalination units for coastal communities in India." },
            { title: "Smart Grid Integration", desc: "Researching efficient ways to integrate renewable energy sources into India's power grid." },
            { title: "Biogas from Agricultural Waste", desc: "Creating a scalable biogas production system using agricultural waste in rural India." }
          ].map((project, i) => (
            <Card key={i} className="border-2 border-black rounded-none hover:translate-y-[-4px] transition-transform">
              <div className="h-48 bg-green-400"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="mb-4">{project.desc}</p>
                <Button className="bg-black text-white hover:bg-gray-800 rounded-none w-full">
                  Learn More
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-yellow-300 p-12 text-center mb-16">
        <h2 className="text-4xl font-bold mb-6 text-black">Ready to Energize the Future?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join Energy Club IIT Bombay and be part of India&apos;s sustainable energy revolution.
        </p>
        <Button className="bg-black text-white hover:bg-gray-800 text-lg px-12 py-4 rounded-none">
          Get Started
        </Button>
      </div>
    </>
  )
}