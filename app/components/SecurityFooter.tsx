"use client"

import { motion } from "framer-motion"
import { Shield, Github, Linkedin, Mail, Terminal, Lock, Cpu, Code, ExternalLink } from "lucide-react"

const MatrixBackground = () => (
  <div className="absolute inset-0 overflow-hidden opacity-[0.02] pointer-events-none">
    {Array.from({ length: 25 }).map((_, i) => (
      <div
        key={i}
        className="absolute text-emerald-500 dark:text-emerald-400 text-xs animate-matrix-rain"
        style={{
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${5 + Math.random() * 5}s`
        }}
      >
        {Array.from({ length: 10 }).map(() => 
          String.fromCharCode(0x30A0 + Math.random() * 96)
        ).join('')}
      </div>
    ))}
  </div>
)

const links = [
  {
    title: "Security Services",
    items: [
      { label: "Penetration Testing", href: "/services/pentest" },
      { label: "Security Audits", href: "/services/audit" },
      { label: "Incident Response", href: "/services/incident" },
      { label: "Training", href: "/services/training" }
    ]
  },
  {
    title: "Resources",
    items: [
      { label: "Security Blog", href: "/blog" },
      { label: "Documentation", href: "/docs" },
      { label: "Research Papers", href: "/research" },
      { label: "CVE Database", href: "/cve" }
    ]
  },
  {
    title: "Company",
    items: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" }
    ]
  }
]

export const SecurityFooter = () => {
  return (
    <footer className="relative bg-gray-50 dark:bg-gray-900/50 transition-colors duration-300">
      <MatrixBackground />
      
      {/* Enhanced Top Border */}
      <div className="relative h-px w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-blue-500 to-violet-500" />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-blue-500 to-violet-500 blur-sm animate-pulse" />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50"
          animate={{
            x: ["100%", "-100%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "linear",
          }}
        />
      </div>
      
      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <Shield className="w-6 h-6 text-emerald-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-emerald-500 via-blue-500 to-violet-500 text-transparent bg-clip-text">
                SecurePort
              </span>
            </motion.div>
            
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Securing digital assets with advanced cybersecurity solutions and expert consultation.
            </p>

            {/* Terminal-style Stats */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 font-mono text-sm shadow-lg border border-gray-200/50 dark:border-gray-700/50 transition-colors duration-300">
              <div className="flex items-center text-emerald-500 dark:text-emerald-400">
                <Terminal className="w-4 h-4 mr-2" />
                <span className="font-bold">$ system_status</span>
              </div>
              <div className="mt-3 space-y-2 text-gray-600 dark:text-gray-400">
                {[
                  { label: "Uptime", value: "99.99%", icon: Lock },
                  { label: "Threats Blocked", value: "1.2M+", icon: Shield },
                  { label: "Security Score", value: "A+", icon: Cpu },
                ].map(({ label, value, icon: Icon }) => (
                  <motion.div 
                    key={label}
                    className="flex items-center justify-between group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex items-center gap-2">
                      <Icon className="w-3 h-3 text-gray-400 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors duration-300" />
                      <span>{label}:</span>
                    </div>
                    <span className="text-emerald-500 dark:text-emerald-400 font-bold">{value}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Links Sections */}
          {links.map((section, idx) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.items.map((item) => (
                  <motion.li key={item.label} whileHover={{ x: 5 }}>
                    <a
                      href={item.href}
                      className="text-gray-600 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-400 flex items-center gap-2 group transition-colors duration-300"
                    >
                      <Code className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200/10 dark:border-gray-700/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} SecurePort. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              {[
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Mail, href: "#", label: "Email" },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 