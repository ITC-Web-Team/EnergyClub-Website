'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

const teamMembers = [
  {
    name: "Aarav Patel",
    role: "President",
    image: "/placeholder.svg?height=400&width=400",
    description: "Ph.D. candidate in Renewable Energy Systems",
    bio: "Aarav is passionate about developing innovative solutions for sustainable energy in India. His research focuses on improving the efficiency of solar cells for tropical climates."
  },
  {
    name: "Zara Khan",
    role: "Vice President",
    image: "/placeholder.svg?height=400&width=400",
    description: "Masters student in Environmental Engineering",
    bio: "Zara is dedicated to promoting clean energy policies in urban India. She has interned with several environmental NGOs and is skilled in policy analysis and community engagement."
  },
  {
    name: "Rohan Sharma",
    role: "Technical Lead",
    image: "/placeholder.svg?height=400&width=400",
    description: "B.Tech in Electrical Engineering",
    bio: "Rohan is an expert in smart grid technologies. He has developed several projects on integrating renewable energy sources into existing power grids, with a focus on rural electrification."
  },
  {
    name: "Priya Desai",
    role: "Events Coordinator",
    image: "/placeholder.svg?height=400&width=400",
    description: "B.Tech in Chemical Engineering",
    bio: "Priya is skilled in organizing impactful events. She has coordinated multiple energy awareness campaigns across IIT Bombay and nearby communities, promoting sustainable practices."
  },
  {
    name: "Arjun Mehta",
    role: "Research Head",
    image: "/placeholder.svg?height=400&width=400",
    description: "Ph.D. student in Energy Policy",
    bio: "Arjun leads the club's research initiatives, focusing on the intersection of technology and policy in India's energy sector. He has published papers on renewable energy adoption strategies."
  },
  {
    name: "Ananya Reddy",
    role: "Outreach Coordinator",
    image: "/placeholder.svg?height=400&width=400",
    description: "B.Tech in Mechanical Engineering",
    bio: "Ananya manages the club's partnerships with industry and government bodies. She is passionate about bridging the gap between academic research and practical implementation in the energy sector."
  }
]

export function BlockPage() {
  const [selectedMember, setSelectedMember] = useState(null)

  return (
    <>
      <motion.h1
        className="text-5xl font-bold mb-12 text-black"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Meet Our Team
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            <Card className="bg-white border-2 border-black rounded-none overflow-hidden">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-gray-600 mb-2">{member.role}</p>
                  <p className="mb-4">{member.description}</p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        className="w-full bg-black text-white hover:bg-gray-800 rounded-none"
                        onClick={() => setSelectedMember(member)}
                      >
                        Learn More
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-white border-2 border-black rounded-none">
                      <DialogHeader>
                        <DialogTitle>{selectedMember?.name}</DialogTitle>
                        <DialogDescription>{selectedMember?.role}</DialogDescription>
                      </DialogHeader>
                      <p>{selectedMember?.bio}</p>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </motion.div>
            </Card>
          </motion.div>
        ))}
      </div>
    </>
  )
}