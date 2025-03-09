'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Plug, Leaf, CircleDollarSign, FileText } from 'lucide-react'
import { getProjectsForHome, type Project } from '@/lib/api'
import Link from 'next/link'

export default function HomePage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjectsForHome()
        setProjects(data)
      } catch (err) {
        setError('Failed to load projects')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  const featuredProjects = projects.slice(0, 3)

  return (
    <>
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <div className="bg-cyan-400 p-12 min-h-[400px] flex items-center">
          <div>
            <motion.p
              className="text-xl mb-8 text-black max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Energy Club IITB brings together students, scholars, alumni, and professors across disciplines to drive innovation in energy and sustainability. Together, we're making our campus greener and inspiring change beyond.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link href="/team">
                <Button className="bg-black text-white hover:bg-gray-800 text-lg px-8 py-4 rounded-none">
                  Meet Our Team
                </Button>
              </Link>
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
        <h2 className="text-4xl font-bold mb-8 text-black">Our Vision</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-8 border-2 border-black rounded-none hover:bg-cyan-100 transition-colors">
            <Plug className="w-16 h-16 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Community Building</h3>
            <p className="text-lg">
              We unite IIT students, scholars, alumni, and professors across all disciplines who share a passion for energy and sustainability. Our diverse community drives innovation through collaboration.
            </p>
          </Card>
          <Card className="p-8 border-2 border-black rounded-none hover:bg-green-100 transition-colors">
            <Leaf className="w-16 h-16 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Campus Impact</h3>
            <p className="text-lg">
              We're committed to transforming IIT's campus into a model of sustainability. Through student-led initiatives, we're making our campus greener, more energy-efficient, and environmentally conscious.
            </p>
          </Card>
          <Card className="p-8 border-2 border-black rounded-none hover:bg-yellow-100 transition-colors">
            <CircleDollarSign className="w-16 h-16 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Driving Change</h3>
            <p className="text-lg">
              From technical projects to awareness drives, we support all endeavors that promote better energy utilization and sustainability. We turn innovative ideas into impactful solutions.
            </p>
          </Card>
        </div>
      </div>

      {/* Featured Projects Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={`${project.title}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={project.img || "/placeholder.svg?height=400&width=600"}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex justify-between items-center">
                    {project.pdf && (
                      <a 
                        href={project.pdf} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
                      >
                        <FileText className="w-4 h-4" />
                        <span>View PDF</span>
                      </a>
                    )}
                    <Link href="/projects" className="text-black hover:underline">
                      Learn more
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-block bg-black text-white px-6 py-3 hover:bg-gray-800 transition-colors duration-300"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Projects Section */}
      <div className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold text-black">Latest Projects</h2>
          <Link href="/projects">
            <Button variant="outline" className="border-2 border-black rounded-none hover:bg-black hover:text-white">
              View All Projects
            </Button>
          </Link>
        </div>
        {loading ? (
          <div className="text-center py-12">Loading latest projects...</div>
        ) : error ? (
          <div className="text-center py-12 text-red-500">{error}</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(3).map((project, index) => (
              <motion.div
                key={`${project.title}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border-2 border-black rounded-none hover:translate-y-[-4px] transition-transform">
                  <div className="relative h-48">
                    <Image
                      src={project.img || "/placeholder.svg?height=400&width=600"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="mb-4">{project.description}</p>
                    {project.pdf && (
                      <a 
                        href={project.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full"
                      >
                        <Button className="bg-black text-white hover:bg-gray-800 rounded-none w-full">
                          View Project
                        </Button>
                      </a>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="bg-yellow-300 p-12 text-center mb-16">
        <h2 className="text-4xl font-bold mb-6 text-black">Be Part of the Change</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Whether you're a student, scholar, alumnus, or professor, your perspective matters. Join us in making IIT Bombay a beacon of sustainability and innovation in energy solutions.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/projects">
            <Button className="bg-black text-white hover:bg-gray-800 text-lg px-8 py-4 rounded-none">
              Explore Projects
            </Button>
          </Link>
          <Link href="/events">
            <Button variant="outline" className="border-2 border-black text-lg px-8 py-4 rounded-none hover:bg-black hover:text-white">
              Join Events
            </Button>
          </Link>
        </div>
      </div>
    </>
  )
}