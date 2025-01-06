"use client"

import { motion } from "framer-motion"
import { Search, Shield, Workflow, DollarSign, ArrowRight } from "lucide-react"

interface ProcessStep {
  icon: React.ElementType
  title: string
  description: string
  details: string[]
}

const processSteps: ProcessStep[] = [
  {
    icon: Search,
    title: "Discovery & Scoping",
    description: "Understanding your vision",
    details: ["Client consultation", "Requirements analysis", "Feasibility assessment", "Timeline planning"],
  },
  {
    icon: Shield,
    title: "Testing & QA",
    description: "Ensuring excellence",
    details: ["Unit testing", "Performance testing", "Browser testing", "Security checks"],
  },
  {
    icon: Workflow,
    title: "Deployment",
    description: "Going live",
    details: ["Server setup", "Domain config", "SSL setup", "Monitoring"],
  },
  {
    icon: DollarSign,
    title: "Support & Pricing",
    description: "Ongoing partnership",
    details: ["Flexible pricing", "Milestone payments", "24/7 support", "Updates & maintenance"],
  },
]

const ProcessNode = ({ step }: { step: ProcessStep }) => (
  <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg">
    <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full">
      <step.icon className="w-6 h-6 text-green-500 dark:text-green-300" />
    </div>
    <h3 className="mt-3 text-lg font-bold text-gray-900 dark:text-white">{step.title}</h3>
    <p className="text-sm text-gray-600 dark:text-gray-400">{step.description}</p>
    <ul className="mt-3 text-xs text-gray-500 dark:text-gray-400">
      {step.details.map((detail, i) => (
        <li key={i}>{detail}</li>
      ))}
    </ul>
  </div>
)

export const SecurityProcess = () => (
  <section className="py-20 bg-gray-50 dark:bg-gray-900">
    <div className="max-w-screen-xl mx-auto px-4">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl font-bold text-gray-900 dark:text-white"
        >
          Security Process Lifecycle
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-lg text-gray-600 dark:text-gray-400"
        >
          My mission is to enhance security posture through a structured lifecycle, ensuring robust protection and continuous improvement.
        </motion.p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
        {processSteps.map((step, index) => (
          <div key={index} className="flex items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProcessNode step={step} />
            </motion.div>
            {index < processSteps.length - 1 && (
              <ArrowRight className="w-6 h-6 text-gray-400 dark:text-gray-600 mx-4" />
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
) 