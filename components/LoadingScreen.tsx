'use client'

import { motion } from 'framer-motion'
<<<<<<< HEAD
import { CarIcon, BirdIcon } from './Icons3D'
=======
>>>>>>> 0923c0fba9f5d5a132fe6f5c9c69f2b03878a643

export default function LoadingScreen() {
  return (
    <motion.div
<<<<<<< HEAD
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-brand-dark"
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 animated-gradient-bg opacity-50" />
      
      {/* Glow effects */}
      <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-driver-red/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-games-fire/20 rounded-full blur-[100px]" />

      <div className="relative z-10 text-center">
        {/* Animated icons */}
        <div className="flex items-center justify-center gap-8 mb-8">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <CarIcon className="w-16 h-16" />
          </motion.div>
          
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: 'spring' }}
            className="w-20 h-20 rounded-full bg-gradient-to-br from-games-fire to-games-gold flex items-center justify-center"
          >
            <span className="font-display text-3xl font-bold text-white">A</span>
          </motion.div>
          
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <BirdIcon className="w-16 h-16" />
          </motion.div>
        </div>

        {/* Loading text */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="font-display text-2xl text-white mb-2"
=======
      className="fixed inset-0 z-50 flex flex-col items-center justify-center asphalt-bg"
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated car driving across */}
      <motion.div
        className="absolute top-1/2 -translate-y-1/2"
        initial={{ x: '-100vw' }}
        animate={{ x: '100vw' }}
        transition={{ duration: 2, ease: 'easeInOut' }}
      >
        <div className="text-6xl">🚗</div>
      </motion.div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-center relative z-10"
      >
        {/* Mockingjay-style emblem */}
        <motion.div
          className="w-24 h-24 mx-auto mb-6 relative"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-games-gold to-games-fire opacity-30 blur-xl" />
          <div className="relative w-full h-full rounded-full border-2 border-games-gold flex items-center justify-center">
            <span className="text-4xl">🦅</span>
          </div>
        </motion.div>

        <motion.h2
          className="font-display text-3xl text-games-wheat mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
>>>>>>> 0923c0fba9f5d5a132fe6f5c9c69f2b03878a643
        >
          Starting Engines...
        </motion.h2>
        
        <motion.p
<<<<<<< HEAD
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-white/60 text-sm tracking-widest uppercase"
=======
          className="font-body text-games-gold/70 text-sm tracking-widest uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
>>>>>>> 0923c0fba9f5d5a132fe6f5c9c69f2b03878a643
        >
          May the odds be ever in your favor
        </motion.p>

<<<<<<< HEAD
        {/* Progress bar */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: '16rem' }}
          transition={{ delay: 0.3 }}
          className="mt-8 h-1 bg-white/10 rounded-full overflow-hidden mx-auto"
=======
        {/* Progress bar styled like a speedometer gauge */}
        <motion.div
          className="mt-8 w-64 h-2 bg-driver-asphalt rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
>>>>>>> 0923c0fba9f5d5a132fe6f5c9c69f2b03878a643
        >
          <motion.div
            className="h-full bg-gradient-to-r from-driver-red via-games-fire to-games-gold"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
<<<<<<< HEAD
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />
        </motion.div>
=======
            transition={{ duration: 2, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>

      {/* Corner decorations */}
      <div className="absolute top-6 left-6 text-games-gold/20 font-mono text-sm">
        DISTRICT 12
      </div>
      <div className="absolute top-6 right-6 text-driver-red/20 font-mono text-sm">
        🎵 SYNC
      </div>
      <div className="absolute bottom-6 left-6 text-games-forest/20 font-mono text-sm">
        ◉ REC
      </div>
      <div className="absolute bottom-6 right-6 text-games-gold/20 font-mono text-sm">
        2026
>>>>>>> 0923c0fba9f5d5a132fe6f5c9c69f2b03878a643
      </div>
    </motion.div>
  )
}
