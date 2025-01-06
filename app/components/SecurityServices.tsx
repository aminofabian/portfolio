"use client"

import { motion } from "framer-motion"
import { Shield, Lock, Search, Cloud, Database, Code, Brain, Terminal } from "lucide-react"

const services = [
  {
    icon: Shield,
    title: "Penetration Testing",
    description: "Comprehensive security assessments to identify vulnerabilities in your systems.",
    color: "emerald",
    features: ["Web Applications", "Network Infrastructure", "Mobile Apps", "API Security"]
  },
  {
    icon: Search,
    title: "Vulnerability Assessment",
    description: "Thorough analysis of security weaknesses and potential threats.",
    color: "blue",
    features: ["Risk Analysis", "Compliance Checks", "Security Audits", "Remediation Plans"]
  },
  {
    icon: Cloud,
    title: "Cloud Security",
    description: "Securing your cloud infrastructure and applications.",
    color: "violet",
    features: ["AWS/Azure/GCP", "Container Security", "Serverless", "Cloud Native"]
  },
  {
    icon: Brain,
    title: "AI Security",
    description: "Protecting AI/ML systems from adversarial attacks.",
    color: "rose",
    features: ["Model Security", "Data Protection", "Ethical AI", "Threat Detection"]
  }
]

export const SecurityServices = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="relative py-20 bg-white dark:bg-gray-900"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:16px_16px] opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent" />

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
              <Terminal className="w-4 h-4 mr-2" />
              Security Solutions
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Comprehensive Security Services
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Protecting your digital assets with advanced security solutions and expert consultation
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative z-10 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
                {/* Service Header */}
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg bg-${service.color}-500/10 dark:bg-${service.color}-400/10 mr-4`}>
                    <service.icon className={`w-6 h-6 text-${service.color}-500 dark:text-${service.color}-400`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + featureIndex * 0.1 }}
                      className="flex items-center text-gray-700 dark:text-gray-300"
                    >
                      <Database className="w-4 h-4 mr-2 text-emerald-500 dark:text-emerald-400" />
                      <span className="font-mono text-sm">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Hover Effect */}
                <div className="absolute inset-0 border-2 border-dashed border-transparent dark:border-transparent group-hover:border-emerald-500/20 dark:group-hover:border-emerald-400/20 rounded-2xl transition-colors duration-300" />
              </div>

              {/* Background Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/0 via-emerald-500/10 to-blue-500/0 dark:from-emerald-400/0 dark:via-emerald-400/10 dark:to-blue-400/0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
} 