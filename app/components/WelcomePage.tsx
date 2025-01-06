"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import SocialLinks from "./Hero" // Assuming SocialLinks is a default export
import SecurityTerminal from "./SecurityTerminal"

const WelcomePage = () => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null

  return (
    <motion.section
      id="welcome"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative h-screen pt-32 pb-16 overflow-hidden bg-gray-50 dark:bg-gray-900"
    >
      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div className="absolute top-20 right-8 w-80">
            <SecurityTerminal />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="relative mx-auto w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 mb-12"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-violet-500/10 dark:from-emerald-400/5 dark:via-blue-400/5 dark:to-violet-400/5 blur-xl" />
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-blue-600 to-violet-600 dark:from-emerald-400 dark:via-blue-400 dark:to-violet-400 animate-spin-slow blur-md" />
              <div className="relative w-full h-full transform hover:scale-105 transition-transform duration-300">
                <img
                  src="/placeholder.jpeg"
                  alt="John Doe"
                  className="w-full h-full object-cover shadow-2xl border-4 border-white dark:border-gray-800"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-violet-500/20 dark:from-emerald-400/20 dark:via-blue-400/20 dark:to-violet-400/20 mix-blend-overlay" />
                <div className="absolute inset-0 border-2 border-emerald-500/50 dark:border-emerald-400/50 animate-pulse" />
              </div>
              <div className="absolute -inset-4 border-2 border-dashed border-emerald-500/30 dark:border-emerald-400/30 animate-spin-slow" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-emerald-500/10 text-emerald-500 dark:bg-emerald-400/10 dark:text-emerald-400 ring-1 ring-inset ring-emerald-500/20 dark:ring-emerald-400/20">
              Welcome to My Portfolio
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div className="max-w-3xl mx-auto mb-4">
              <div className="bg-white/90 dark:bg-gray-800/90 rounded-lg shadow-xl overflow-hidden backdrop-blur-sm">
                <div className="p-4 font-mono">
                  <div className="text-4xl sm:text-3xl lg:text-5xl font-bold mb-2">
                    <span className="inline-block font-mono text-5xl text-emerald-50 bg-emerald-900 px-3 py-1 skew-x-[-6deg] border-l-4 border-emerald-400">
                      Welcome to My Portfolio Website
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300"
          >
            Welcome to my personal portfolio! I'm thrilled to share my journey and work with you. Dive into my projects and explore the world of cybersecurity and software engineering through my eyes.
          </motion.p>
        </div>
      </div>
      <SocialLinks />
    </motion.section>
  )
}

export default WelcomePage 