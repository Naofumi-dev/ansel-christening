'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
<<<<<<< HEAD
import { FireIcon, BirdIcon } from './Icons3D'
=======
>>>>>>> 0923c0fba9f5d5a132fe6f5c9c69f2b03878a643

interface FormData {
  name: string
  email: string
  guests: string
  attending: string
<<<<<<< HEAD
=======
  dietaryRestrictions: string
>>>>>>> 0923c0fba9f5d5a132fe6f5c9c69f2b03878a643
  message: string
}

interface FormErrors {
  name?: string
  email?: string
<<<<<<< HEAD
=======
  guests?: string
>>>>>>> 0923c0fba9f5d5a132fe6f5c9c69f2b03878a643
  attending?: string
}

export default function RSVPForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    guests: '1',
    attending: '',
<<<<<<< HEAD
    message: ''
  })
=======
    dietaryRestrictions: '',
    message: ''
  })
  
>>>>>>> 0923c0fba9f5d5a132fe6f5c9c69f2b03878a643
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
<<<<<<< HEAD
    if (!formData.name.trim()) newErrors.name = 'Please enter your name'
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!formData.attending) newErrors.attending = 'Please let us know if you can attend'
=======
    
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name, tribute!'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'We need your email for the mission briefing'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'That doesn\'t look like a valid email'
    }
    
    if (!formData.attending) {
      newErrors.attending = 'Will you be joining the celebration?'
    }
    
    const guestNum = parseInt(formData.guests)
    if (isNaN(guestNum) || guestNum < 1 || guestNum > 10) {
      newErrors.guests = 'Please enter a valid number (1-10)'
    }
    
>>>>>>> 0923c0fba9f5d5a132fe6f5c9c69f2b03878a643
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
<<<<<<< HEAD
=======
    
>>>>>>> 0923c0fba9f5d5a132fe6f5c9c69f2b03878a643
    if (!validateForm()) return
    
    setIsSubmitting(true)
    
<<<<<<< HEAD
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      console.log('RSVP submitted:', formData)
=======
    // Simulate form submission (replace with actual API call)
    // For production, integrate with Formspree, Google Forms, or your own API
    try {
      // Simulated API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // For actual implementation, you would do something like:
      // await fetch('/api/rsvp', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // })
      
      console.log('Form submitted:', formData)
>>>>>>> 0923c0fba9f5d5a132fe6f5c9c69f2b03878a643
      setIsSubmitted(true)
    } catch (error) {
      console.error('Submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
<<<<<<< HEAD
=======
    // Clear error when user starts typing
>>>>>>> 0923c0fba9f5d5a132fe6f5c9c69f2b03878a643
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  return (
<<<<<<< HEAD
    <div className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-[#0a0f1a] to-brand-dark" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-driver-red/10 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
=======
    <div className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 asphalt-bg" />
      
      {/* Decorative tire tracks */}
      <div className="absolute inset-0 bg-tire-track opacity-10" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
>>>>>>> 0923c0fba9f5d5a132fe6f5c9c69f2b03878a643
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
<<<<<<< HEAD
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-games-fire" />
            <FireIcon className="w-8 h-8" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-games-fire" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Join the Alliance
          </h2>
          <p className="font-body text-lg text-white/60">
            Volunteer as tribute for Ansel&apos;s special day
=======
          <div className="mockingjay-divider mb-6">
            <span className="px-4 text-4xl">✉️</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl text-white mb-4">
            Join the Alliance
          </h2>
          <p className="font-body text-lg text-games-wheat/70">
            Volunteer as tribute for Ansel's special day
>>>>>>> 0923c0fba9f5d5a132fe6f5c9c69f2b03878a643
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {isSubmitted ? (
<<<<<<< HEAD
=======
            // Success state
>>>>>>> 0923c0fba9f5d5a132fe6f5c9c69f2b03878a643
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
                className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-games-forest to-games-gold flex items-center justify-center"
              >
<<<<<<< HEAD
                <BirdIcon className="w-12 h-12" animate={false} />
              </motion.div>
              <h3 className="font-display text-3xl font-bold text-white mb-4">
                Tribute Registered!
              </h3>
              <p className="font-body text-white/60 mb-8">
=======
                <span className="text-5xl">🎯</span>
              </motion.div>
              <h3 className="font-heading text-3xl text-games-gold mb-4">
                Tribute Registered!
              </h3>
              <p className="font-body text-games-wheat/70 mb-6">
>>>>>>> 0923c0fba9f5d5a132fe6f5c9c69f2b03878a643
                May the odds be ever in your favor. We&apos;ll send you a confirmation soon!
              </p>
              <motion.button
                onClick={() => {
                  setIsSubmitted(false)
<<<<<<< HEAD
                  setFormData({ name: '', email: '', guests: '1', attending: '', message: '' })
                }}
                className="text-games-fire hover:text-games-gold transition-colors font-body"
=======
                  setFormData({
                    name: '',
                    email: '',
                    guests: '1',
                    attending: '',
                    dietaryRestrictions: '',
                    message: ''
                  })
                }}
                className="text-games-gold hover:text-white transition-colors font-body"
>>>>>>> 0923c0fba9f5d5a132fe6f5c9c69f2b03878a643
                whileHover={{ scale: 1.05 }}
              >
                Submit another response →
              </motion.button>
            </motion.div>
          ) : (
<<<<<<< HEAD
=======
            // Form state
>>>>>>> 0923c0fba9f5d5a132fe6f5c9c69f2b03878a643
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Attending selection */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
<<<<<<< HEAD
                className="glass-card p-6"
              >
                <label className="block font-display text-lg text-white mb-4">
                  Will you be joining the celebration?
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: 'yes', label: 'I volunteer!', icon: '🙋' },
                    { value: 'no', label: "Can't make it", icon: '😢' },
                    { value: 'maybe', label: 'Not sure yet', icon: '🤔' },
                  ].map((option) => (
                    <label key={option.value} className="cursor-pointer">
=======
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-games-gold/20"
              >
                <label className="block font-heading text-lg text-games-gold mb-4">
                  Will you be joining the celebration?
                </label>
                <div className="flex flex-wrap gap-4">
                  {[
                    { value: 'yes', label: 'I volunteer!', icon: '🙋' },
                    { value: 'no', label: 'Can\'t make it', icon: '😢' },
                    { value: 'maybe', label: 'Not sure yet', icon: '🤔' },
                  ].map((option) => (
                    <label
                      key={option.value}
                      className={`flex-1 min-w-[140px] cursor-pointer`}
                    >
>>>>>>> 0923c0fba9f5d5a132fe6f5c9c69f2b03878a643
                      <input
                        type="radio"
                        name="attending"
                        value={option.value}
                        checked={formData.attending === option.value}
                        onChange={handleChange}
                        className="sr-only"
                      />
<<<<<<< HEAD
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`p-4 rounded-xl text-center transition-all ${
                          formData.attending === option.value
                            ? 'bg-gradient-to-br from-driver-red to-games-fire text-white ring-2 ring-games-gold'
                            : 'bg-white/5 text-white/70 hover:bg-white/10'
                        }`}
                      >
                        <span className="text-2xl block mb-1">{option.icon}</span>
                        <span className="font-body text-sm">{option.label}</span>
                      </motion.div>
=======
                      <div className={`p-4 rounded-lg text-center transition-all ${
                        formData.attending === option.value
                          ? 'bg-gradient-to-br from-driver-red to-games-fire text-white ring-2 ring-games-gold'
                          : 'bg-white/10 text-games-wheat hover:bg-white/20'
                      }`}>
                        <span className="text-2xl block mb-1">{option.icon}</span>
                        <span className="font-body text-sm">{option.label}</span>
                      </div>
>>>>>>> 0923c0fba9f5d5a132fe6f5c9c69f2b03878a643
                    </label>
                  ))}
                </div>
                {errors.attending && (
                  <p className="mt-2 text-driver-red text-sm">{errors.attending}</p>
                )}
              </motion.div>

              {/* Name and Email */}
              <div className="grid sm:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
<<<<<<< HEAD
                  <label className="block font-display text-sm text-white/70 mb-2 uppercase tracking-wider">
                    Your Name *
=======
                  <label className="block font-heading text-sm text-games-gold mb-2 tracking-wider">
                    YOUR NAME *
>>>>>>> 0923c0fba9f5d5a132fe6f5c9c69f2b03878a643
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Katniss Everdeen"
<<<<<<< HEAD
                    className={`input-modern ${errors.name ? 'border-driver-red' : ''}`}
=======
                    className={`input-arena rounded-lg ${errors.name ? 'border-driver-red' : ''}`}
>>>>>>> 0923c0fba9f5d5a132fe6f5c9c69f2b03878a643
                  />
                  {errors.name && (
                    <p className="mt-1 text-driver-red text-sm">{errors.name}</p>
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
<<<<<<< HEAD
                  <label className="block font-display text-sm text-white/70 mb-2 uppercase tracking-wider">
                    Email Address *
=======
                  <label className="block font-heading text-sm text-games-gold mb-2 tracking-wider">
                    EMAIL ADDRESS *
>>>>>>> 0923c0fba9f5d5a132fe6f5c9c69f2b03878a643
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tribute@district12.com"
<<<<<<< HEAD
                    className={`input-modern ${errors.email ? 'border-driver-red' : ''}`}
=======
                    className={`input-arena rounded-lg ${errors.email ? 'border-driver-red' : ''}`}
>>>>>>> 0923c0fba9f5d5a132fe6f5c9c69f2b03878a643
                  />
                  {errors.email && (
                    <p className="mt-1 text-driver-red text-sm">{errors.email}</p>
                  )}
                </motion.div>
              </div>

              {/* Number of guests */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
<<<<<<< HEAD
                <label className="block font-display text-sm text-white/70 mb-2 uppercase tracking-wider">
                  Number of Tributes (Including You)
=======
                <label className="block font-heading text-sm text-games-gold mb-2 tracking-wider">
                  NUMBER OF TRIBUTES (INCLUDING YOU)
>>>>>>> 0923c0fba9f5d5a132fe6f5c9c69f2b03878a643
                </label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
<<<<<<< HEAD
                  className="input-modern cursor-pointer"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                    <option key={num} value={num} className="bg-brand-dark">
=======
                  className="input-arena rounded-lg cursor-pointer"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                    <option key={num} value={num}>
>>>>>>> 0923c0fba9f5d5a132fe6f5c9c69f2b03878a643
                      {num} {num === 1 ? 'tribute' : 'tributes'}
                    </option>
                  ))}
                </select>
              </motion.div>

<<<<<<< HEAD
=======
              {/* Dietary restrictions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <label className="block font-heading text-sm text-games-gold mb-2 tracking-wider">
                  DIETARY RESTRICTIONS
                </label>
                <input
                  type="text"
                  name="dietaryRestrictions"
                  value={formData.dietaryRestrictions}
                  onChange={handleChange}
                  placeholder="Any food allergies or preferences?"
                  className="input-arena rounded-lg"
                />
              </motion.div>

>>>>>>> 0923c0fba9f5d5a132fe6f5c9c69f2b03878a643
              {/* Message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
<<<<<<< HEAD
                transition={{ delay: 0.3 }}
              >
                <label className="block font-display text-sm text-white/70 mb-2 uppercase tracking-wider">
                  Message for Ansel
=======
                transition={{ delay: 0.4 }}
              >
                <label className="block font-heading text-sm text-games-gold mb-2 tracking-wider">
                  MESSAGE FOR ANSEL
>>>>>>> 0923c0fba9f5d5a132fe6f5c9c69f2b03878a643
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share your wishes, song requests, or anything else!"
                  rows={4}
<<<<<<< HEAD
                  className="input-modern resize-none"
=======
                  className="input-arena rounded-lg resize-none"
>>>>>>> 0923c0fba9f5d5a132fe6f5c9c69f2b03878a643
                />
              </motion.div>

              {/* Submit button */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
<<<<<<< HEAD
                transition={{ delay: 0.4 }}
=======
                transition={{ delay: 0.5 }}
>>>>>>> 0923c0fba9f5d5a132fe6f5c9c69f2b03878a643
                className="pt-4"
              >
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
<<<<<<< HEAD
                  className="w-full btn-modern text-white disabled:opacity-50 disabled:cursor-not-allowed"
=======
                  className="w-full btn-tribute disabled:opacity-50 disabled:cursor-not-allowed"
>>>>>>> 0923c0fba9f5d5a132fe6f5c9c69f2b03878a643
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
<<<<<<< HEAD
                        className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      />
=======
                      >
                        ⏳
                      </motion.span>
>>>>>>> 0923c0fba9f5d5a132fe6f5c9c69f2b03878a643
                      Processing...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
<<<<<<< HEAD
                      <BirdIcon className="w-5 h-5" animate={false} />
=======
                      <span>🏹</span>
>>>>>>> 0923c0fba9f5d5a132fe6f5c9c69f2b03878a643
                      Submit RSVP
                    </span>
                  )}
                </motion.button>
              </motion.div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
