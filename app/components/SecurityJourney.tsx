"use client"

import { motion } from "framer-motion"
import { Shield, Terminal, Code, Cpu, Server, Lock, Zap, Award } from "lucide-react"
import { useState } from "react"

interface JourneyStep {
  year: string
  title: string
  description: string
  icon: React.ElementType
  skills: string[]
  achievements: string[]
  level: number
  xp: number
}

const journeySteps: JourneyStep[] = [
  {
    year: "2020",
    title: "Security Initiate",
    description: "Started journey in cybersecurity with focus on fundamentals and basic penetration testing.",
    icon: Shield,
    skills: ["Network Security", "Basic Pentesting", "Linux Systems"],
    achievements: ["CompTIA Security+", "First CVE Discovery"],
    level: 1,
    xp: 1500
  },
  {
    year: "2021",
    title: "Digital Defender",
    description: "Advanced into active security research and vulnerability assessment.",
    icon: Lock,
    skills: ["Vulnerability Assessment", "Malware Analysis", "Web Security"],
    achievements: ["OSCP Certification", "Bug Bounty Hall of Fame"],
    level: 2,
    xp: 3500
  },
  {
    year: "2022",
    title: "Security Architect",
    description: "Specialized in secure system design and advanced threat detection.",
    icon: Server,
    skills: ["Cloud Security", "Threat Modeling", "Incident Response"],
    achievements: ["AWS Security Cert", "Security Architecture Design"],
    level: 3,
    xp: 7500
  },
  {
    year: "2023",
    title: "Cyber Guardian",
    description: "Leading security initiatives and conducting advanced research.",
    icon: Cpu,
    skills: ["Zero Trust Architecture", "AI Security", "Advanced Red Teaming"],
    achievements: ["CISSP", "Conference Speaker"],
    level: 4,
    xp: 12500
  }
]

const ProgressBar = ({ progress }: { progress: number }) => (
  <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
    <motion.div
      className="h-full bg-gradient-to-r from-emerald-500 to-blue-500"
      initial={{ width: 0 }}
      animate={{ width: `${progress}%` }}
      transition={{ duration: 1, ease: "easeOut" }}
    />
  </div>
)

const StepCard = ({ step, isActive }: { step: JourneyStep; isActive: boolean }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`relative p-6 rounded-2xl transition-all duration-300 ${
        isActive
          ? 'bg-white dark:bg-gray-800 shadow-lg'
          : 'bg-gray-50 dark:bg-gray-900/50'
      }`}
    >
      {/* Level Badge */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-blue-500 flex items-center justify-center text-white font-bold shadow-lg"
      >
        Lv{step.level}
      </motion.div>

      {/* Content */}
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className={`p-3 rounded-xl bg-emerald-500/10 dark:bg-emerald-400/10 
            ${isHovered ? 'animate-pulse' : ''}`}>
            <step.icon className="w-6 h-6 text-emerald-500 dark:text-emerald-400" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{step.title}</h3>
            <p className="text-sm text-emerald-500 dark:text-emerald-400 font-mono">{step.year}</p>
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-400">{step.description}</p>

        {/* Skills */}
        <div className="space-y-2">
          <h4 className="font-mono text-sm text-gray-900 dark:text-white flex items-center gap-2">
            <Code className="w-4 h-4" />
            Skills Unlocked
          </h4>
          <div className="flex flex-wrap gap-2">
            {step.skills.map((skill) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className="px-3 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 
                  text-gray-600 dark:text-gray-300 font-mono"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="space-y-2">
          <h4 className="font-mono text-sm text-gray-900 dark:text-white flex items-center gap-2">
            <Award className="w-4 h-4" />
            Achievements
          </h4>
          <div className="space-y-2">
            {step.achievements.map((achievement) => (
              <motion.div
                key={achievement}
                className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                whileHover={{ x: 5 }}
              >
                <Zap className="w-4 h-4 text-yellow-500" />
                {achievement}
              </motion.div>
            ))}
          </div>
        </div>

        {/* XP Bar */}
        <div className="space-y-1">
          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
            <span>XP: {step.xp}</span>
            <span>Next Level: {step.xp + 1000}</span>
          </div>
          <ProgressBar progress={75} />
        </div>
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-violet-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  )
}

export const SecurityJourney = () => {
  const [activeStep, setActiveStep] = useState(journeySteps[journeySteps.length - 1])

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="relative py-20 overflow-hidden"
    >
      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-emerald-500/10 text-emerald-500 dark:bg-emerald-400/10 dark:text-emerald-400 ring-1 ring-inset ring-emerald-500/20 dark:ring-emerald-400/20">
              <Terminal className="w-4 h-4 mr-2" />
              Journey
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-4xl font-bold text-gray-900 dark:text-white"
          >
            Security Evolution Timeline
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-gray-600 dark:text-gray-400"
          >
            I'm a student, a cybersecurity enthusiast, and a software engineer, passionate about exploring the depths of cybersecurity and advancing my skills in this ever-evolving field.
          </motion.p>
        </div>

        {/* Journey Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {journeySteps.map((step) => (
            <StepCard
              key={step.year}
              step={step}
              isActive={activeStep.year === step.year}
            />
          ))}
        </div>

        {/* Total Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Overall Progress</h3>
            <span className="text-emerald-500 dark:text-emerald-400 font-mono">25,000 XP</span>
          </div>
          <ProgressBar progress={85} />
          <div className="mt-4 flex justify-between text-sm text-gray-600 dark:text-gray-400">
            <span>Current Level: Master Guardian</span>
            <span>Next Rank: Cyber Sentinel</span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
} 