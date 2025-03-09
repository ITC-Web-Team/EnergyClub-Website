'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card } from "@/components/ui/card"
import { Calendar, MapPin, Clock } from 'lucide-react'
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'

const events = [
  {
    title: "Energy Innovation Summit 2024",
    date: "March 15, 2024",
    location: "Victor Menezes Convention Centre, IIT Bombay",
    time: "10:00 AM - 6:00 PM",
    description: "Join us for a day of inspiring talks, panel discussions, and presentations on the latest innovations in sustainable energy.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Conference",
    socialMedia: {
      facebook: "https://facebook.com/event1",
      twitter: "https://twitter.com/event1",
      linkedin: "https://linkedin.com/event1"
    }
  },
  {
    title: "Renewable Energy Workshop",
    date: "April 5, 2024",
    location: "Lecture Hall Complex, IIT Bombay",
    time: "2:00 PM - 5:00 PM",
    description: "Hands-on workshop on solar panel installation and maintenance. Learn practical skills for the renewable energy sector.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Workshop",
    socialMedia: {
      facebook: "https://facebook.com/event2",
      twitter: "https://twitter.com/event2"
    }
  },
  {
    title: "Policy Discussion: India's Energy Future",
    date: "April 20, 2024",
    location: "SOM Conference Room, IIT Bombay",
    time: "4:00 PM - 6:00 PM",
    description: "Expert panel discussion on India's energy policies and their impact on economic development and environmental sustainability.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Panel Discussion",
    socialMedia: {
      linkedin: "https://linkedin.com/event3"
    }
  }
]

export default function EventsPage() {
  return (
    <>
      <motion.h1
        className="text-5xl font-bold mb-12 text-black"
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Upcoming Events
      </motion.h1>

      <div className="grid grid-cols-1 gap-8 mb-16">
        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            <Card className="border-2 border-black rounded-none overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="relative h-64 md:h-auto">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-yellow-300 text-black px-4 py-2 font-bold">
                      {event.category}
                    </span>
                  </div>
                </div>
                <div className="col-span-2 p-6">
                  <h2 className="text-2xl font-bold mb-4">{event.title}</h2>
                  <p className="text-lg mb-6">{event.description}</p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 col-span-2">
                      <MapPin className="w-5 h-5" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    {event.socialMedia.facebook && (
                      <a href={event.socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                        <FaFacebook size={24} />
                      </a>
                    )}
                    {event.socialMedia.twitter && (
                      <a href={event.socialMedia.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                        <FaTwitter size={24} />
                      </a>
                    )}
                    {event.socialMedia.linkedin && (
                      <a href={event.socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
                        <FaLinkedin size={24} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </>
  )
}