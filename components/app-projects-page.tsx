'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, Filter } from 'lucide-react'

const projects = [
  {
    title: "Solar-Powered Desalination",
    description: "Developing affordable solar-powered desalination units for coastal communities in India.",
    category: "Project",
    tags: ["Solar", "Water", "Coastal"]
  },
  {
    title: "Smart Grid Integration",
    description: "Researching efficient ways to integrate renewable energy sources into India's power grid.",
    category: "Research",
    tags: ["Smart Grid", "Renewable Energy", "Infrastructure"]
  },
  {
    title: "Biogas from Agricultural Waste",
    description: "Creating a scalable biogas production system using agricultural waste in rural India.",
    category: "Project",
    tags: ["Biogas", "Agriculture", "Rural Development"]
  },
  {
    title: "Energy Policy Brief",
    description: "Analyzing the impact of recent energy policies on renewable adoption in India.",
    category: "Resource",
    tags: ["Policy", "Analysis", "Renewable Energy"]
  },
  {
    title: "EV Charging Infrastructure",
    description: "Planning and optimizing electric vehicle charging stations across urban India.",
    category: "Project",
    tags: ["Electric Vehicles", "Urban Planning", "Infrastructure"]
  },
  {
    title: "Waste Heat Recovery Systems",
    description: "Designing efficient waste heat recovery systems for Indian industries.",
    category: "Research",
    tags: ["Industrial", "Efficiency", "Heat Recovery"]
  }
]

export function BlockPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects = projects.filter(project => 
    (project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     project.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (selectedCategory === 'All' || project.category === selectedCategory)
  )

  return (
    <>
      <motion.h1
        className="text-5xl font-bold mb-12 text-black"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Our Projects & Resources
      </motion.h1>

      <div className="mb-8 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-grow">
          <Input
            type="text"
            placeholder="Search projects and resources..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 bg-white text-black border-2 border-black rounded-none"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" size={20} />
        </div>
        <div className="flex items-center space-x-2">
          <Filter size={20} className="text-black" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-white text-black border-2 border-black rounded-none p-2"
          >
            <option value="All">All</option>
            <option value="Project">Projects</option>
            <option value="Research">Research</option>
            <option value="Resource">Resources</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            <Card className="bg-white border-2 border-black rounded-none h-full flex flex-col">
              <div className="h-48 bg-cyan-400"></div>
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-yellow-300 text-black px-2 py-1 text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6 pt-0">
                <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-none">Learn More</Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </>
  )
}