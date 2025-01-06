"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Shield, Bug, Star, Github, Linkedin, Mail, Instagram, Twitter } from "lucide-react"

const SecurityTerminal = () => {
  const [commands, setCommands] = useState<string[]>([])
  const [currentCommand, setCurrentCommand] = useState("")
  const possibleCommands = [
    "initializing_security_protocols...",
    "scanning_perimeter...",
    "checking_vulnerabilities...",
    "updating_firewall...",
    "monitoring_network_traffic...",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      const newCommand = possibleCommands[Math.floor(Math.random() * possibleCommands.length)]
      setCurrentCommand(newCommand)
      setCommands(prev => [...prev.slice(-4), newCommand])
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-gray-100/90 dark:bg-gray-900/90 rounded-lg p-4 font-mono text-sm text-emerald-500 dark:text-emerald-400 space-y-1">
      {commands.map((cmd, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <span>$</span>
          <span>{cmd}</span>
        </motion.div>
      ))}
      <motion.div
        className="flex items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        <span>$</span>
        <span>{currentCommand}</span>
        <span className="w-2 h-4 bg-emerald-400 animate-pulse" />
      </motion.div>
    </div>
  )
}

const SocialLinks = () => (
  <div className="fixed bottom-8 right-8 z-50 flex flex-col items-center space-y-4">
    {[
      { icon: Github, href: "https://github.com/yourusername", label: "GitHub" },
      { icon: Linkedin, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
      { icon: Mail, href: "mailto:your.email@example.com", label: "Email" },
      { icon: Instagram, href: "https://instagram.com/yourusername", label: "Instagram" },
      { icon: Twitter, href: "https://twitter.com/yourusername", label: "Twitter" },
    ].map((social) => (
      <motion.a
        key={social.label}
        href={social.href}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 text-white shadow-lg hover:shadow-xl transition-shadow duration-300"
        aria-label={social.label}
        whileHover={{ scale: 1.2, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
      >
        <social.icon className="w-6 h-6" />
      </motion.a>
    ))}
  </div>
)

export const AuroraHero = () => {
  const [showContactForm, setShowContactForm] = useState(false)

  const handleEmailClick = () => {
    setShowContactForm(true)
  }

  const handleCloseForm = () => {
    setShowContactForm(false)
  }

  return (
    <motion.section 
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative min-h-screen pt-32 pb-16 overflow-hidden"
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
              Cybersecurity Expert
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
                      Hasan Haider 
                    </span>
                  </div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl text-emerald-400 dark:text-emerald-300 font-semibold">
                    Cybersecurity Expert and Software Engineer
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
            Passionate about digital security with expertise in penetration testing, 
            vulnerability assessment, and incident response. Currently focusing on 
            cloud security and zero-trust architecture.
          </motion.p>
        </div>
      </div>
      <SocialLinks />

      <div className="mt-8 text-center">
        <div className="inline-flex space-x-0">
          <a
            href="/Content of pages.docx"
            download="JoeDoe_Resume.docx"
            className="parallelogram-button inline-block bg-emerald-500 text-white font-bold py-2 px-4 rounded-l-md shadow-md hover:bg-emerald-600 transition-colors"
          >
            <span>Download Resume</span>
          </a>
          <button
            onClick={handleEmailClick}
            className="parallelogram-button inline-block ml-3 bg-emerald-500 text-white font-bold py-2 px-4 rounded-r-md shadow-md hover:bg-emerald-600 transition-colors"
          >
            <span className="ml-3">Send Me an Email</span>
          </button>
        </div>
      </div>

      {showContactForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Contact Me</h2>
            <form>
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 dark:border-gray-600"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 dark:border-gray-600"
              />
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 dark:border-gray-600"
              ></textarea>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleCloseForm}
                  className="mr-2 px-4 py-2 bg-gray-300 dark:bg-gray-600 rounded-md hover:bg-gray-400 dark:hover:bg-gray-500 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition-colors"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </motion.section>
  )
}

export default AuroraHero