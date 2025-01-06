"use client"

import React, { useState, useEffect } from "react"
import { motion, useAnimation, AnimatePresence } from "framer-motion"
import dynamic from 'next/dynamic'
import { ArrowRight, Github, Linkedin, Mail, Shield, Lock, Fingerprint, Terminal, ShieldAlert, Cpu, ShieldCheck, MessageSquareCode, Bug, Star } from "lucide-react"
import { SecurityJourney } from "./SecurityJourney"
import { SecurityServices } from "./SecurityServices"
import { SecurityMetrics } from "./SecurityMetrics"
import { SecurityProcess } from "./SecurityProcess"
import { SecurityFAQ } from "./SecurityFAQ"
import { SecurityContact } from "./SecurityContact"
import { SecurityFooter } from "./SecurityFooter"

const ThreeCanvas = dynamic(() => import('./ThreeCanvas'), {
  ssr: false,
  loading: () => null
})

const ShieldClipPath = () => (
  <svg className="absolute -z-10 w-0 h-0">
    <defs>
      <clipPath id="cyber-shield" clipPathUnits="objectBoundingBox">
        <path d="M0.5,0 C0.5,0 1,0.1 1,0.5 C1,0.8 0.7,0.95 0.5,1 C0.3,0.95 0,0.8 0,0.5 C0,0.1 0.5,0 0.5,0 Z" />
      </clipPath>
      <clipPath id="cyber-hex" clipPathUnits="objectBoundingBox">
        <path d="M0.5 0L0.933 0.25V0.75L0.5 1L0.067 0.75V0.25L0.5 0Z" />
      </clipPath>
      <clipPath id="cyber-diamond" clipPathUnits="objectBoundingBox">
        <path d="M0.5 0L1 0.4L0.5 1L0 0.4L0.5 0Z M0.2 0.4L0.5 0.2L0.8 0.4L0.5 0.9L0.2 0.4Z" />
      </clipPath>
    </defs>
  </svg>
)

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

interface InteractiveStatProps {
  label: string
  value: string
  icon: React.ElementType
}

const InteractiveStat = ({ label, value, icon: Icon }: InteractiveStatProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group px-6 py-8 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-200"
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute inset-0 rounded-2xl"
          />
        )}
      </AnimatePresence>

      <div className="relative flex items-center gap-3">
        <Icon className="w-5 h-5 text-emerald-500" />
        <dt className="text-base text-gray-600 dark:text-gray-400">{label}</dt>
      </div>
      
      <dd className="relative mt-2 text-4xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 dark:from-emerald-400 dark:to-blue-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-200">
        {value}
      </dd>

      {isHovered && (
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1 }}
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-emerald-500 to-blue-500"
        />
      )}
    </motion.div>
  )
}

export const AuroraHero = () => {
  const stats = [
    { label: "Security Audits", value: "100+", icon: Shield },
    { label: "CVEs Found", value: "15+", icon: Bug },
    { label: "Client Rating", value: "5.0", icon: Star },
  ]

  return (
    <>
      <motion.section 
        id="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative min-h-screen pt-32 pb-16 overflow-hidden"
      >
        <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10">
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
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-blue-600 to-violet-600 dark:from-emerald-400 dark:via-blue-400 dark:to-violet-400 animate-spin-slow blur-md [clip-path:url(#cyber-shield)]" />
                  
                  <div className="relative w-full h-full transform hover:scale-105 transition-transform duration-300">
                    <img
                      src="https://thispersondoesnotexist.com/"
                      alt="Your Name"
                      className="w-full h-full object-cover shadow-2xl [clip-path:url(#cyber-shield)] border-4 border-white dark:border-gray-800"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-violet-500/20 dark:from-emerald-400/20 dark:via-blue-400/20 dark:to-violet-400/20 [clip-path:url(#cyber-shield)] mix-blend-overlay" />
                    
                    <div className="absolute inset-0 border-2 border-emerald-500/50 dark:border-emerald-400/50 [clip-path:url(#cyber-shield)] animate-pulse" />
                  </div>

                  <div className="absolute -inset-4 border-2 border-dashed border-emerald-500/30 dark:border-emerald-400/30 [clip-path:url(#cyber-shield)] animate-spin-slow" />
                </div>

                <ShieldClipPath />
              </motion.div>

              <div className="space-y-6 sm:space-y-8">
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
                      <div className="flex items-center px-4 py-2 bg-gray-100/50 dark:bg-gray-900/50 border-b border-gray-200/50 dark:border-gray-700/50">
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 rounded-full bg-red-500/80" />
                          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                          <div className="w-3 h-3 rounded-full bg-green-500/80" />
                        </div>
                        <div className="flex-1 text-center">
                          <span className="text-sm text-gray-400 font-mono">user@security-portfolio ~ </span>
                        </div>
                      </div>
                      
                      <div className="p-4 font-mono">
                        <div className="flex items-center text-emerald-400 dark:text-emerald-300 mb-2">
                          <Terminal className="w-4 h-4 mr-2" />
                          <span className="text-sm"> Initializing security protocols...</span>
                        </div>
                        
                        <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2 glitch-text">
                          <span className="block">[Your Name]</span>
                        </div>
                        
                        <div className="flex items-center text-blue-400 dark:text-blue-300 mb-2">
                          <ShieldAlert className="w-4 h-4 mr-2" />
                          <span className="text-sm"> Loading security credentials...</span>
                        </div>
                        
                        <div className="text-2xl sm:text-3xl lg:text-4xl text-emerald-400 dark:text-emerald-300 font-semibold typewriter">
                          Security Researcher
                        </div>
                        
                        <div className="flex items-center text-violet-400 dark:text-violet-300 mt-2">
                          <Cpu className="w-4 h-4 mr-2" />
                          <span className="text-sm"> System ready_</span>
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

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex justify-center gap-4 mb-8"
                >
                  {[
                    { icon: Github, href: "https://github.com/yourusername", label: "GitHub" },
                    { icon: Linkedin, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
                    { icon: Mail, href: "mailto:your.email@example.com", label: "Email" },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-wrap justify-center gap-4"
                >
                  <a
                    href="/projects"
                    className="group relative inline-flex items-center gap-2 px-8 py-3 bg-gray-100 dark:bg-gray-800 text-emerald-500 dark:text-emerald-400 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 via-blue-600/20 to-violet-600/20 dark:from-emerald-400/10 dark:via-blue-400/10 dark:to-violet-400/10 animate-pulse" />
                    <Terminal className="w-5 h-5" />
                    <span className="font-mono font-medium">View Projects</span>
                    <span className="relative ml-2 font-mono text-xs opacity-60">[01]</span>
                    <div className="absolute inset-0 border border-emerald-500/50 dark:border-emerald-400/50 rounded-lg" />
                  </a>

                  <a
                    href="/services"
                    className="group relative inline-flex items-center gap-2 px-8 py-3 bg-gray-100 dark:bg-gray-800 text-blue-500 dark:text-blue-400 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-violet-600/20 to-emerald-600/20 dark:from-blue-400/10 dark:via-violet-400/10 dark:to-emerald-400/10 animate-pulse" />
                    <ShieldCheck className="w-5 h-5" />
                    <span className="font-mono font-medium">Security Services</span>
                    <span className="relative ml-2 font-mono text-xs opacity-60">[02]</span>
                    <div className="absolute inset-0 border border-blue-500/50 dark:border-blue-400/50 rounded-lg" />
                  </a>

                  <a
                    href="/contact"
                    className="group relative inline-flex items-center gap-2 px-8 py-3 bg-gray-100 dark:bg-gray-800 text-violet-500 dark:text-violet-400 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 via-emerald-600/20 to-blue-600/20 dark:from-violet-400/10 dark:via-emerald-400/10 dark:to-blue-400/10 animate-pulse" />
                    <MessageSquareCode className="w-5 h-5" />
                    <span className="font-mono font-medium">Initialize Contact</span>
                    <span className="relative ml-2 font-mono text-xs opacity-60">[03]</span>
                    <div className="absolute inset-0 border border-violet-500/50 dark:border-violet-400/50 rounded-lg" />
                  </a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="mt-20 pt-10"
                >
                  <dl className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                    {stats.map((stat) => (
                      <InteractiveStat
                        key={stat.label}
                        label={stat.label}
                        value={stat.value}
                        icon={stat.icon}
                      />
                    ))}
                  </dl>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        <ShieldClipPath />
      </motion.section>
      
      <div className="relative h-24">
        <div className="absolute inset-0 bg-grid-gray-200/50 dark:bg-grid-gray-800/50 bg-center [mask-image:linear-gradient(0deg,white,transparent)]" />
      </div>

    </>
  )
}

export default AuroraHero