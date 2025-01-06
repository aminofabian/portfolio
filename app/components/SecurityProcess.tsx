"use client"

import { motion } from "framer-motion"
import { Search, Shield, FileWarning, Cpu, Workflow, Zap, ArrowRight } from "lucide-react"

interface ProcessStep {
  icon: React.ElementType
  title: string
  description: string
  color: string
  tools: string[]
}

interface ProcessNodeProps {
  step: ProcessStep
  index: number
  total: number
}

const processSteps = [
  {
    icon: Search,
    title: "Reconnaissance",
    description: "Deep scanning and information gathering to identify potential attack surfaces",
    color: "emerald",
    tools: ["Nmap", "Shodan", "Maltego"]
  },
  {
    icon: Shield,
    title: "Vulnerability Assessment",
    description: "Systematic security testing to uncover weaknesses",
    color: "blue",
    tools: ["Nessus", "OpenVAS", "Acunetix"]
  },
  {
    icon: FileWarning,
    title: "Threat Modeling",
    description: "Analysis of potential threats and attack vectors",
    color: "violet",
    tools: ["MITRE ATT&CK", "STRIDE", "DREAD"]
  },
  {
    icon: Workflow,
    title: "Security Hardening",
    description: "Implementation of security controls and best practices",
    color: "amber",
    tools: ["CIS Benchmarks", "OWASP", "Docker Security"]
  },
  {
    icon: Cpu,
    title: "Continuous Monitoring",
    description: "Real-time threat detection and response",
    color: "rose",
    tools: ["SIEM", "IDS/IPS", "EDR"]
  }
]

const ConnectingLine = () => (
  <svg className="absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2" preserveAspectRatio="none">
    <defs>
      <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="rgb(16 185 129 / 0.2)" />
        <stop offset="50%" stopColor="rgb(59 130 246 / 0.2)" />
        <stop offset="100%" stopColor="rgb(139 92 246 / 0.2)" />
      </linearGradient>
      <pattern id="linePattern" x="0" y="0" width="20" height="1" patternUnits="userSpaceOnUse">
        <rect width="10" height="1" fill="url(#lineGradient)" />
        <rect x="10" width="10" height="1" fill="transparent" />
      </pattern>
    </defs>
    <path
      d="M0 0.5 H2000"
      stroke="url(#linePattern)"
      strokeWidth="2"
      className="animate-line-flow"
    />
  </svg>
)

const ProcessNode = ({ step, index, total }: ProcessNodeProps) => {
  const isLast = index === total - 1
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative group"
    >
      {/* Circuit Node */}
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500 via-blue-500 to-violet-500 animate-pulse opacity-20" />
        <div className="absolute inset-0.5 rounded-full bg-white dark:bg-gray-800 border-2 border-emerald-500/20 dark:border-emerald-400/20" />
        <span className="absolute inset-0 flex items-center justify-center text-sm font-mono text-emerald-600 dark:text-emerald-400">
          {(index + 1).toString().padStart(2, '0')}
        </span>
      </div>

      {/* Content Card */}
      <div className="relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500/5 via-blue-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Card Content */}
        <div className="relative">
          {/* Icon with Circuit Background */}
          <div className="relative mb-4">
            <div className={`p-3 rounded-lg bg-${step.color}-500/10 dark:bg-${step.color}-400/10 inline-flex`}>
              <step.icon className={`w-6 h-6 text-${step.color}-500 dark:text-${step.color}-400`} />
            </div>
            <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-violet-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
            {step.title}
          </h3>

          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            {step.description}
          </p>

          {/* Tools with Circuit Style */}
          <div className="space-y-2">
            {step.tools.map((tool, toolIndex) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + toolIndex * 0.1 }}
                className="flex items-center text-xs font-mono"
              >
                <div className="w-3 h-3 rounded-full bg-emerald-500/20 dark:bg-emerald-400/20 flex items-center justify-center mr-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                </div>
                <span className="text-gray-500 dark:text-gray-400">{tool}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Connection Lines */}
        {!isLast && (
          <>
            <div className="hidden md:block absolute -right-8 top-1/2 w-8 h-0.5 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 dark:from-emerald-400/20 dark:to-blue-400/20" />
            <div className="hidden md:block absolute -right-8 top-1/2 w-8 h-0.5 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 dark:from-emerald-400/20 dark:to-blue-400/20 animate-pulse" />
          </>
        )}
      </div>
    </motion.div>
  )
}

export const SecurityProcess = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="relative py-20 bg-transparent"
    >
      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <span className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-emerald-500/10 text-emerald-500 dark:bg-emerald-400/10 dark:text-emerald-400 ring-1 ring-inset ring-emerald-500/20 dark:ring-emerald-400/20 mb-4">
              <Zap className="w-4 h-4 mr-2" />
              Methodology
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            How We Secure Your Systems
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Our comprehensive security approach follows industry best practices
            and leverages cutting-edge tools
          </motion.p>
        </div>

        {/* Process Flow */}
        <div className="relative mt-20">
          {/* Connecting Lines */}
          <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2">
            <ConnectingLine />
          </div>

          {/* Steps */}
          <div className="relative grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <ProcessNode
                key={step.title}
                step={step}
                index={index}
                total={processSteps.length}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
} 