"use client"

import { motion } from "framer-motion"
import { Shield, Github, Linkedin, Mail, Terminal, Lock, Cpu, Code, ExternalLink } from "lucide-react"

const MatrixBackground = () => (
  <div className="absolute inset-0 overflow-hidden opacity-[0.03]">
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
    <footer className="relative bg-gray-900 text-gray-300">
      <MatrixBackground />
      
      {/* Decorative Top Border */}
      <div className="h-1 w-full bg-gradient-to-r from-emerald-500 via-blue-500 to-violet-500" />
      
      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="w-6 h-6 text-emerald-500" />
              <span className="text-xl font-bold text-white">SecurePort</span>
            </div>
            <p className="text-sm text-gray-400">
              Securing digital assets with advanced cybersecurity solutions and expert consultation.
            </p>
            {/* Terminal-style Stats */}
            <div className="bg-gray-800/50 rounded-lg p-4 font-mono text-sm">
              <div className="flex items-center text-emerald-400">
                <Terminal className="w-4 h-4 mr-2" />
                <span>$ system_status</span>
              </div>
              <div className="mt-2 space-y-1 text-gray-400">
                <div className="flex justify-between">
                  <span>Uptime:</span>
                  <span className="text-emerald-400">99.99%</span>
                </div>
                <div className="flex justify-between">
                  <span>Threats Blocked:</span>
                  <span className="text-emerald-400">1.2M+</span>
                </div>
                <div className="flex justify-between">
                  <span>Security Score:</span>
                  <span className="text-emerald-400">A+</span>
                </div>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {links.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-4 flex items-center">
                <Lock className="w-4 h-4 mr-2 text-emerald-500" />
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 flex items-center group"
                    >
                      <Code className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Cpu className="w-4 h-4" />
              <span>© {new Date().getFullYear()} SecurePort. All rights reserved.</span>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { icon: Github, href: "https://github.com", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: Mail, href: "mailto:contact@example.com", label: "Email" }
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-gray-800 text-gray-400 hover:text-emerald-400 hover:bg-gray-700 transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            {/* Security Badge */}
            <div className="flex items-center space-x-2 text-sm">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 ring-1 ring-inset ring-emerald-500/20">
                <Shield className="w-4 h-4 mr-1" />
                Security Verified
                <ExternalLink className="w-3 h-3 ml-1" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 