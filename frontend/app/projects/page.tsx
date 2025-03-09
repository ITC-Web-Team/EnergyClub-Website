'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText } from 'lucide-react'
import { getAllProjects, type Project } from '@/lib/api'

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getAllProjects()
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

  if (loading) {
    return <div className="text-center py-12">Loading projects...</div>
  }

  if (error) {
    return <div className="text-center py-12 text-red-500">{error}</div>
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.h1
        className="text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Projects
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={`${project.title}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="border-2 border-black rounded-none overflow-hidden h-full flex flex-col">
              <div className="relative h-48">
                <Image
                  src={project.img || "/placeholder.svg?height=400&width=600"}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="mb-4 flex-grow">{project.description}</p>
                {project.pdf && (
                  <a 
                    href={project.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <Button className="bg-black text-white hover:bg-gray-800 rounded-none w-full flex items-center justify-center gap-2">
                      <FileText className="w-4 h-4" />
                      View Project PDF
                    </Button>
                  </a>
                )}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}