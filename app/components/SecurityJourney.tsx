"use client"

import { motion } from "framer-motion"
import { Shield, Lock, Cpu, Network, Bug, Code } from "lucide-react"

const timelineItems = [
  {
    year: "2019",
    icon: Shield,
    title: "The Wake-Up Call",
    description: "Discovered the critical importance of cybersecurity after witnessing a major data breach. This incident sparked my journey into digital security.",
    color: "emerald"
  },
  {
    year: "2020",
    icon: Bug,
    title: "Bug Hunting Begins",
    description: "Started participating in bug bounty programs, identifying vulnerabilities in major platforms. Found my first critical vulnerability.",
    color: "blue"
  },
  {
    year: "2021",
    icon: Network,
    title: "Network Security Focus",
    description: "Specialized in network penetration testing and security architecture. Led security assessments for Fortune 500 companies.",
    color: "violet"
  },
  {
    year: "2022",
    icon: Code,
    title: "Security Development",
    description: "Developed automated security tools and frameworks. Contributed to open-source security projects.",
    color: "rose"
  },
  {
    year: "2023",
    icon: Lock,
    title: "Zero Trust Architecture",
    description: "Implementing zero-trust security models for cloud-native applications. Speaking at cybersecurity conferences.",
    color: "amber"
  },
  {
    year: "NOW",
    icon: Cpu,
    title: "AI Security Research",
    description: "Researching AI/ML security vulnerabilities and developing countermeasures against emerging threats.",
    color: "cyan"
  }
]

export const SecurityJourney = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="relative py-20 bg-gray-50 dark:bg-gray-900/50 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Why Security?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My journey in cybersecurity is driven by a passion for protecting digital assets 
              and a commitment to making the internet a safer place.
            </p>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-emerald-500/20 via-blue-500/20 to-violet-500/20 dark:from-emerald-400/20 dark:via-blue-400/20 dark:to-violet-400/20" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
                    <div className={`text-${item.color}-500 dark:text-${item.color}-400 text-sm font-mono mb-2`}>
                      {item.year}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Icon */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className={`w-12 h-12 rounded-full bg-${item.color}-500/20 dark:bg-${item.color}-400/20 flex items-center justify-center`}>
                    <item.icon className={`w-6 h-6 text-${item.color}-500 dark:text-${item.color}-400`} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
} 