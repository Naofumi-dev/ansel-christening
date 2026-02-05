'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
<<<<<<< HEAD
import { CarIcon, BirdIcon } from './Icons3D'
=======
>>>>>>> 0923c0fba9f5d5a132fe6f5c9c69f2b03878a643

interface NavigationProps {
  activeSection: string
}

const navItems = [
<<<<<<< HEAD
  { id: 'hero', label: 'Home' },
  { id: 'details', label: 'Details' },
  { id: 'rsvp', label: 'RSVP' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'game', label: 'Game' },
  { id: 'message', label: 'Message' },
=======
  { id: 'hero', label: 'Home', icon: '🏠' },
  { id: 'details', label: 'Details', icon: '📍' },
  { id: 'rsvp', label: 'RSVP', icon: '✉️' },
  { id: 'gallery', label: 'Gallery', icon: '📸' },
  { id: 'game', label: 'Game', icon: '🎮' },
  { id: 'gifts', label: 'Gifts', icon: '🎁' },
>>>>>>> 0923c0fba9f5d5a132fe6f5c9c69f2b03878a643
]

export default function Navigation({ activeSection }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
<<<<<<< HEAD
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
=======
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
>>>>>>> 0923c0fba9f5d5a132fe6f5c9c69f2b03878a643
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
<<<<<<< HEAD
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setIsMobileMenuOpen(false)
=======
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
>>>>>>> 0923c0fba9f5d5a132fe6f5c9c69f2b03878a643
  }

  return (
    <>
<<<<<<< HEAD
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'bg-brand-dark/80 backdrop-blur-xl border-b border-white/5' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.button
              onClick={() => scrollToSection('hero')}
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-driver-red to-games-fire flex items-center justify-center">
                  <span className="font-display text-xl font-bold text-white">A</span>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-driver-red to-games-fire rounded-xl blur opacity-30" />
              </div>
              <div className="hidden sm:block">
                <span className="font-display text-lg font-semibold text-white">ANSEL</span>
                <span className="block text-xs text-white/50 tracking-wider">FEB 15, 2026</span>
              </div>
            </motion.button>

            {/* Desktop Navigation */}
=======
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.button
              onClick={() => scrollToSection('hero')}
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-driver-red to-games-fire flex items-center justify-center text-white font-display text-lg">
                A
              </div>
              <span className={`hidden sm:block font-heading text-lg tracking-wider ${
                isScrolled ? 'text-ansel-dark' : 'text-white'
              }`}>
                ANSEL
              </span>
            </motion.button>

            {/* Desktop Menu */}
>>>>>>> 0923c0fba9f5d5a132fe6f5c9c69f2b03878a643
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
<<<<<<< HEAD
                  className={`relative px-4 py-2 font-body text-sm transition-colors ${
                    activeSection === item.id
                      ? 'text-white'
                      : 'text-white/50 hover:text-white'
                  }`}
                  whileHover={{ y: -2 }}
=======
                  className={`relative px-4 py-2 font-body text-sm tracking-wide transition-colors ${
                    activeSection === item.id
                      ? isScrolled ? 'text-driver-red' : 'text-games-gold'
                      : isScrolled ? 'text-ansel-dark/70 hover:text-ansel-dark' : 'text-white/80 hover:text-white'
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
>>>>>>> 0923c0fba9f5d5a132fe6f5c9c69f2b03878a643
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
<<<<<<< HEAD
                      layoutId="activeNav"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-games-fire"
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
=======
                      layoutId="activeSection"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-driver-red to-games-fire rounded-full"
>>>>>>> 0923c0fba9f5d5a132fe6f5c9c69f2b03878a643
                    />
                  )}
                </motion.button>
              ))}
            </div>

<<<<<<< HEAD
            {/* Decorative icons */}
            <div className="hidden lg:flex items-center gap-4">
              <CarIcon className="w-8 h-8 opacity-50" animate={false} />
              <BirdIcon className="w-8 h-8 opacity-50" animate={false} />
            </div>

            {/* Mobile menu button */}
            <motion.button
              className="md:hidden p-2 rounded-lg bg-white/5"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <motion.span
                  className="block h-0.5 w-full bg-white rounded-full origin-left"
                  animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? -2 : 0 }}
                />
                <motion.span
                  className="block h-0.5 w-full bg-white rounded-full"
                  animate={{ opacity: isMobileMenuOpen ? 0 : 1, x: isMobileMenuOpen ? 20 : 0 }}
                />
                <motion.span
                  className="block h-0.5 w-full bg-white rounded-full origin-left"
=======
            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              <div className={`w-6 h-5 flex flex-col justify-between ${
                isScrolled ? 'text-ansel-dark' : 'text-white'
              }`}>
                <motion.span
                  className={`block h-0.5 bg-current rounded-full origin-left`}
                  animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? -2 : 0 }}
                />
                <motion.span
                  className="block h-0.5 bg-current rounded-full"
                  animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                />
                <motion.span
                  className="block h-0.5 bg-current rounded-full origin-left"
>>>>>>> 0923c0fba9f5d5a132fe6f5c9c69f2b03878a643
                  animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? 2 : 0 }}
                />
              </div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

<<<<<<< HEAD
      {/* Mobile Menu */}
=======
      {/* Mobile Menu Overlay */}
>>>>>>> 0923c0fba9f5d5a132fe6f5c9c69f2b03878a643
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
<<<<<<< HEAD
            className="fixed inset-0 z-40 md:hidden"
          >
            <div 
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
=======
            className="fixed inset-0 z-30 md:hidden"
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-ansel-dark/90 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Content */}
>>>>>>> 0923c0fba9f5d5a132fe6f5c9c69f2b03878a643
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25 }}
<<<<<<< HEAD
              className="absolute right-0 top-0 bottom-0 w-72 bg-brand-dark border-l border-white/10 p-6 pt-24"
=======
              className="absolute right-0 top-0 bottom-0 w-64 bg-gradient-to-b from-driver-asphalt to-games-coal p-6 pt-24"
>>>>>>> 0923c0fba9f5d5a132fe6f5c9c69f2b03878a643
            >
              <div className="space-y-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
<<<<<<< HEAD
                    transition={{ delay: index * 0.05 }}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left p-4 rounded-xl transition-all ${
                      activeSection === item.id
                        ? 'bg-gradient-to-r from-driver-red/20 to-games-fire/20 text-white border border-games-fire/30'
                        : 'text-white/60 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span className="font-display tracking-wide">{item.label}</span>
=======
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
                      activeSection === item.id
                        ? 'bg-driver-red/20 text-games-gold'
                        : 'text-white/70 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="font-heading tracking-wider">{item.label}</span>
>>>>>>> 0923c0fba9f5d5a132fe6f5c9c69f2b03878a643
                  </motion.button>
                ))}
              </div>

<<<<<<< HEAD
              {/* Mobile decorative icons */}
              <div className="absolute bottom-8 left-6 right-6">
                <div className="flex justify-center gap-4 opacity-30">
                  <CarIcon className="w-10 h-10" animate={false} />
                  <BirdIcon className="w-10 h-10" animate={false} />
                </div>
=======
              {/* Decorative element */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="h-px bg-gradient-to-r from-transparent via-games-gold/30 to-transparent" />
                <p className="text-center text-games-gold/50 text-xs mt-4 font-mono">
                  #TeamAnsel
                </p>
>>>>>>> 0923c0fba9f5d5a132fe6f5c9c69f2b03878a643
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
