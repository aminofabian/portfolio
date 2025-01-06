"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import SocialLinks from "./Hero" 
import SecurityTerminal from "./SecurityTerminal"

const WelcomePage = () => {
  const [visible, setVisible] = useState(true)
  const [timeLeft, setTimeLeft] = useState(200000) // 3 seconds in microseconds

  useEffect(() => {
    if (!visible) return

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1000) {
          clearInterval(interval)
          setVisible(false)
          return 0
        }
        return prev - 1000
      })
    }, 1)

    return () => clearInterval(interval)
  }, [visible])

  if (!visible) return null

  return (
    <motion.section
      id="welcome"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative min-h-screen pt-24 pb-16 overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="absolute top-4 right-4 font-mono text-lg text-emerald-500 dark:text-emerald-400 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-lg">
        Disappearing in: {(timeLeft / 1000).toFixed(3)}s
      </div>

      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" />
      
      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-12">
          <div className="absolute top-20 right-8 w-80 lg:w-96 hidden md:block">
            <SecurityTerminal />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="relative mx-auto w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 mb-12"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-violet-500/20 dark:from-emerald-400/10 dark:via-blue-400/10 dark:to-violet-400/10 blur-2xl" />
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 mx-auto rounded-full">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-blue-600 to-violet-600 dark:from-emerald-400 dark:via-blue-400 dark:to-violet-400 animate-spin-slow blur-md rounded-full" />
              <div className="relative w-full h-full transform hover:scale-105 transition-transform duration-300">
                <img
                  src="/hassan.jpeg"
                  alt="John Doe"
                  className="w-full h-full object-cover rounded-full shadow-2xl border-4 border-white dark:border-gray-800"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-violet-500/20 dark:from-emerald-400/20 dark:via-blue-400/20 dark:to-violet-400/20 mix-blend-overlay rounded-full" />
                <div className="absolute inset-0 border-2 border-emerald-500/50 dark:border-emerald-400/50 animate-pulse rounded-full" />
              </div>
              <div className="absolute -inset-4 border-2 border-dashed border-emerald-500/30 dark:border-emerald-400/30 animate-spin-slow rounded-full" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 ring-1 ring-inset ring-emerald-500/20 dark:ring-emerald-400/20 backdrop-blur-sm">
              <span className="mr-2">👋</span> Welcome to My Portfolio
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div className="max-w-3xl mx-auto">
              <div className="bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-md border border-gray-200 dark:border-gray-700">
                <div className="p-6 font-mono">
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                    <span className="inline-block font-mono text-emerald-50 bg-gradient-to-r from-emerald-600 to-emerald-800 dark:from-emerald-500 dark:to-emerald-700 px-6 py-2 skew-x-[-6deg] border-l-4 border-emerald-400 shadow-lg">
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
            className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg"
          >
            Welcome to my personal portfolio! I'm thrilled to share my journey and work with you. 
            Dive into my projects and explore the world of cybersecurity and software engineering through my eyes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <SocialLinks />
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default WelcomePage 