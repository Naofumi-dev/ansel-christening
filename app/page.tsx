'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
<<<<<<< HEAD
import dynamic from 'next/dynamic'

// Dynamic imports for components
const Navigation = dynamic(() => import('@/components/Navigation'), { ssr: false })
const HeroSection = dynamic(() => import('@/components/HeroSection'), { ssr: false })
const EventDetails = dynamic(() => import('@/components/EventDetails'), { ssr: false })
const RSVPForm = dynamic(() => import('@/components/RSVPForm'), { ssr: false })
const PhotoGallery = dynamic(() => import('@/components/PhotoGallery'), { ssr: false })
const TriviaGame = dynamic(() => import('@/components/TriviaGame'), { ssr: false })
const GiftMessage = dynamic(() => import('@/components/GiftMessage'), { ssr: false })
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false })
const LoadingScreen = dynamic(() => import('@/components/LoadingScreen'), { ssr: false })
=======
import HeroSection from '@/components/HeroSection'
import EventDetails from '@/components/EventDetails'
import RSVPForm from '@/components/RSVPForm'
import PhotoGallery from '@/components/PhotoGallery'
import TriviaGame from '@/components/TriviaGame'
import GiftRegistry from '@/components/GiftRegistry'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import LoadingScreen from '@/components/LoadingScreen'
>>>>>>> 0923c0fba9f5d5a132fe6f5c9c69f2b03878a643

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
<<<<<<< HEAD
    const timer = setTimeout(() => setIsLoading(false), 2000)
=======
    // Simulate loading for dramatic entrance
    const timer = setTimeout(() => setIsLoading(false), 2500)
>>>>>>> 0923c0fba9f5d5a132fe6f5c9c69f2b03878a643
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
<<<<<<< HEAD
      const sections = ['hero', 'details', 'rsvp', 'gallery', 'game', 'message']
=======
      const sections = ['hero', 'details', 'rsvp', 'gallery', 'game', 'gifts']
>>>>>>> 0923c0fba9f5d5a132fe6f5c9c69f2b03878a643
      const scrollPosition = window.scrollY + window.innerHeight / 3

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
<<<<<<< HEAD
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      <AnimatePresence>
        {!isLoading && (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Noise overlay for texture */}
            <div className="fixed inset-0 pointer-events-none z-0 noise-overlay opacity-50" />
            
            {/* Ambient glow effects */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
              <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-driver-red/10 rounded-full blur-[150px]" />
              <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-games-fire/10 rounded-full blur-[150px]" />
              <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-driver-blue/10 rounded-full blur-[120px]" />
            </div>

            <Navigation activeSection={activeSection} />
            
            <section id="hero">
              <HeroSection />
            </section>
            
            <section id="details">
              <EventDetails />
            </section>
            
            <section id="rsvp">
              <RSVPForm />
            </section>
            
            <section id="gallery">
              <PhotoGallery />
            </section>
            
            <section id="game">
              <TriviaGame />
            </section>
            
            <section id="message">
              <GiftMessage />
            </section>
            
            <Footer />
          </motion.main>
        )}
      </AnimatePresence>
=======
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      {!isLoading && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Background decorative elements */}
          <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {/* Tire tracks background */}
            <div className="absolute inset-0 tire-tracks opacity-30" />
            
            {/* Floating arrows */}
            <motion.div
              className="absolute top-1/4 left-10 text-games-forest/10 text-6xl"
              animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              ➳
            </motion.div>
            <motion.div
              className="absolute top-1/2 right-10 text-driver-red/10 text-4xl"
              animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            >
              ⚡
            </motion.div>
            <motion.div
              className="absolute bottom-1/4 left-1/4 text-games-gold/10 text-5xl"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
            >
              ✧
            </motion.div>
          </div>

          <Navigation activeSection={activeSection} />
          
          <section id="hero">
            <HeroSection />
          </section>
          
          <section id="details">
            <EventDetails />
          </section>
          
          <section id="rsvp">
            <RSVPForm />
          </section>
          
          <section id="gallery">
            <PhotoGallery />
          </section>
          
          <section id="game">
            <TriviaGame />
          </section>
          
          <section id="gifts">
            <GiftRegistry />
          </section>
          
          <Footer />
        </motion.main>
      )}
>>>>>>> 0923c0fba9f5d5a132fe6f5c9c69f2b03878a643
    </>
  )
}
