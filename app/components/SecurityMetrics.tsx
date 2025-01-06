"use client"

import { motion } from "framer-motion"
import { Shield, Bug, Lock, Cpu, Server, Globe } from "lucide-react"

const metrics = [
  {
    title: "Threats Detected",
    value: "10M+",
    change: "+23%",
    description: "Malicious activities identified and blocked",
    icon: Shield,
    color: "emerald"
  },
  {
    title: "Vulnerabilities Found",
    value: "850+",
    change: "+15%",
    description: "Critical security issues discovered and patched",
    icon: Bug,
    color: "blue"
  },
  {
    title: "Systems Protected",
    value: "200+",
    change: "+42%",
    description: "Enterprise systems under active protection",
    icon: Server,
    color: "violet"
  }
]

const SecurityGraph = () => (
  <div className="relative h-40 mt-6">
    <div className="absolute inset-0 grid grid-cols-12 gap-2">
      {Array.from({ length: 24 }).map((_, i) => (
        <div key={i} className="relative">
          <motion.div
            className="absolute bottom-0 w-full bg-emerald-500/20 dark:bg-emerald-400/20 rounded-t-sm"
            initial={{ height: 0 }}
            whileInView={{ height: `${Math.random() * 100}%` }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 1, ease: "backOut" }}
          />
        </div>
      ))}
    </div>
    {/* Graph overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent dark:from-gray-900 dark:via-gray-900/50" />
  </div>
)

export const SecurityMetrics = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="relative py-20 bg-gray-50 dark:bg-gray-900/50"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-transparent to-gray-50 dark:from-gray-900 dark:to-gray-900" />
      </div>

      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 dark:bg-emerald-400/10 dark:text-emerald-400 ring-1 ring-inset ring-emerald-500/20 dark:ring-emerald-400/20 text-sm font-medium mb-4"
          >
            <Globe className="w-4 h-4 mr-2" />
            Global Impact
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Security Impact Metrics
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Real-time metrics showcasing our cybersecurity effectiveness and global impact
          </motion.p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="relative group"
            >
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-${metric.color}-500/10 dark:bg-${metric.color}-400/10`}>
                    <metric.icon className={`w-6 h-6 text-${metric.color}-500 dark:text-${metric.color}-400`} />
                  </div>
                  <span className={`text-sm font-mono ${
                    metric.change.startsWith('+') 
                      ? 'text-emerald-500 dark:text-emerald-400' 
                      : 'text-red-500 dark:text-red-400'
                  }`}>
                    {metric.change}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {metric.title}
                </h3>
                
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {metric.value}
                </div>
                
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {metric.description}
                </p>

                <SecurityGraph />
              </div>

              {/* Hover Effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/0 via-emerald-500/10 to-blue-500/0 dark:from-emerald-400/0 dark:via-emerald-400/10 dark:to-blue-400/0 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Global Activity Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            Global Security Activity
          </h3>
          <div className="h-64 bg-gray-100 dark:bg-gray-900/50 rounded-lg overflow-hidden">
            {/* Placeholder for a world map or more detailed metrics visualization */}
            <div className="h-full w-full bg-gradient-to-br from-emerald-500/5 via-blue-500/5 to-violet-500/5 dark:from-emerald-400/5 dark:via-blue-400/5 dark:to-violet-400/5" />
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
} 