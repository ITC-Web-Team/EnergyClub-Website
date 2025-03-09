'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Card } from "@/components/ui/card"
import { Calendar } from 'lucide-react'
import { FaInstagram } from 'react-icons/fa'
import { getAllEvents, type Event } from '@/lib/api'

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([])
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await getAllEvents()
        setEvents(data)
      } catch (err) {
        setError('Failed to load events')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [])

  if (loading) {
    return <div className="text-center py-12">Loading events...</div>
  }

  if (error) {
    return <div className="text-center py-12 text-red-500">{error}</div>
  }

  return (
    <>
      <motion.h1
        className="text-5xl font-bold mb-12 text-black"
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Events
      </motion.h1>

      <div className="grid grid-cols-1 gap-8 mb-16">
        {events.map((event, index) => (
          <motion.div
            key={`${event.title}-${index}`}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            <Card className="border-2 border-black rounded-none overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="relative h-64 md:h-auto">
                  <Image
                    src={event.img || "/placeholder.svg?height=400&width=600"}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="col-span-2 p-6">
                  <h2 className="text-2xl font-bold mb-4">{event.title}</h2>
                  <p className="text-lg mb-6">{event.description}</p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      <span>{event.created_at}</span>
                    </div>
                  </div>
                  {event.instagram_url && (
                    <div className="flex gap-4">
                      <a 
                        href={event.instagram_url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-pink-600 hover:text-pink-800"
                      >
                        <FaInstagram size={24} />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </>
  )
}