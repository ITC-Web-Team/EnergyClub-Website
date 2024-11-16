'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, Filter } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const projects = [
  {
    title: "Solar-Powered Desalination",
    description: "Developing affordable solar-powered desalination units for coastal communities in India.",
    category: "Project",
    tags: ["Solar", "Water", "Coastal"],
    fullDescription: "Our solar-powered desalination project aims to provide clean drinking water to coastal communities in India using innovative and cost-effective technology. By harnessing the power of the sun, we're developing compact desalination units that can convert seawater into potable water, addressing water scarcity issues in a sustainable manner.",
    impact: "This project has the potential to benefit over 100,000 people in coastal regions, providing them with access to clean drinking water and reducing the strain on local freshwater resources.",
    timeline: "Started: January 2023 | Expected Completion: December 2024",
    teamLead: "Dr. Priya Sharma"
  },
  {
    title: "Smart Grid Integration",
    description: "Researching efficient ways to integrate renewable energy sources into India's power grid.",
    category: "Research",
    tags: ["Smart Grid", "Renewable Energy", "Infrastructure"],
    fullDescription: "Our smart grid integration research focuses on developing advanced algorithms and control systems to efficiently incorporate renewable energy sources into India's existing power infrastructure. We're working on solutions to manage the intermittent nature of renewable energy and ensure grid stability.",
    impact: "Successful implementation could lead to a 30% increase in renewable energy utilization and significantly reduce carbon emissions from the power sector.",
    timeline: "Started: March 2022 | Ongoing",
    teamLead: "Prof. Rajesh Kumar"
  },
  {
    title: "Biogas from Agricultural Waste",
    description: "Creating a scalable biogas production system using agricultural waste in rural India.",
    category: "Project",
    tags: ["Biogas", "Agriculture", "Rural Development"],
    fullDescription: "This project aims to design and implement a scalable biogas production system that utilizes agricultural waste from rural Indian farms. By converting organic waste into clean energy, we're addressing both waste management issues and energy needs in rural communities.",
    impact: "The system has the potential to provide clean cooking fuel to 500 households and organic fertilizer for 1000 acres of farmland annually.",
    timeline: "Started: June 2023 | Expected Completion: May 2025",
    teamLead: "Dr. Anita Desai"
  },
  {
    title: "Energy Policy Brief",
    description: "Analyzing the impact of recent energy policies on renewable adoption in India.",
    category: "Resource",
    tags: ["Policy", "Analysis", "Renewable Energy"],
    fullDescription: "Our energy policy brief provides a comprehensive analysis of recent energy policies in India and their impact on renewable energy adoption. We examine the effectiveness of various incentives, regulations, and market mechanisms in promoting clean energy technologies.",
    impact: "This research informs policymakers and industry stakeholders, potentially influencing future policy decisions to accelerate renewable energy adoption in India.",
    timeline: "Published: September 2023 | Updated quarterly",
    teamLead: "Prof. Vikram Mehta"
  },
  {
    title: "EV Charging Infrastructure",
    description: "Planning and optimizing electric vehicle charging stations across urban India.",
    category: "Project",
    tags: ["Electric Vehicles", "Urban Planning", "Infrastructure"],
    fullDescription: "This project focuses on developing a comprehensive plan for electric vehicle charging infrastructure in major Indian cities. We're using advanced data analytics and urban planning techniques to optimize the placement and capacity of charging stations to support the growing EV market.",
    impact: "The project aims to support the government's goal of 30% electric vehicle adoption by 2030 by ensuring adequate charging infrastructure.",
    timeline: "Started: April 2023 | Expected Completion: March 2026",
    teamLead: "Dr. Sanjay Patel"
  },
  {
    title: "Waste Heat Recovery Systems",
    description: "Designing efficient waste heat recovery systems for Indian industries.",
    category: "Research",
    tags: ["Industrial", "Efficiency", "Heat Recovery"],
    fullDescription: "Our research focuses on developing innovative waste heat recovery systems tailored for Indian industrial processes. We're working on technologies that can capture and repurpose waste heat from various industrial operations, improving overall energy efficiency and reducing carbon emissions.",
    impact: "Implementation of these systems could lead to a 15-20% reduction in energy consumption in target industries, contributing significantly to India's energy efficiency and climate goals.",
    timeline: "Started: January 2024 | Ongoing",
    teamLead: "Dr. Meera Reddy"
  }
]

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  const filteredProjects = projects.filter(project => 
    (project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     project.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (selectedCategory === 'All' || project.category === selectedCategory)
  )

  return (
    <>
      <motion.h1
        className="text-5xl font-bold mb-12 text-black"
        initial={{ y: 0, opacity: 0 }}
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
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      className="w-full bg-black text-white hover:bg-gray-800 rounded-none"
                      onClick={() => setSelectedProject(project)}
                    >
                      Learn More
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-white border-2 border-black rounded-none max-w-3xl">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold">{selectedProject?.title}</DialogTitle>
                      <DialogDescription className="text-lg">{selectedProject?.category}</DialogDescription>
                    </DialogHeader>
                    <div className="mt-4 space-y-4">
                      <p className="text-lg">{selectedProject?.fullDescription}</p>
                      <div>
                        <h4 className="font-bold">Impact:</h4>
                        <p>{selectedProject?.impact}</p>
                      </div>
                      <div>
                        <h4 className="font-bold">Timeline:</h4>
                        <p>{selectedProject?.timeline}</p>
                      </div>
                      <div>
                        <h4 className="font-bold">Team Lead:</h4>
                        <p>{selectedProject?.teamLead}</p>
                      </div>
                      <div>
                        <h4 className="font-bold">Tags:</h4>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {selectedProject?.tags.map((tag, index) => (
                            <span key={index} className="bg-yellow-300 text-black px-2 py-1 text-sm">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </>
  )
}