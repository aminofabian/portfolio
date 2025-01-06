"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Shield, Terminal, ChartBar, Workflow, HelpCircle, Mail, Cpu } from "lucide-react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

const navItems = [
  { label: "Home", icon: Shield, href: "#home" },
  { label: "About", icon: Terminal, href: "#about" },
  { label: "Skills", icon: Cpu, href: "#skills" },
  { label: "Projects", icon: ChartBar, href: "#projects" },
  { label: "Services", icon: Workflow, href: "#services" },
  { label: "FAQs", icon: HelpCircle, href: "#faqs" },
  { label: "Contact", icon: Mail, href: "#contact" }
]

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("hero")
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.replace('#', ''))
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const sectionId = href.replace('#', '')
    const element = document.getElementById(sectionId)
    if (element) {
      const navHeight = 64
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - navHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`w-fit mx-auto z-50 
        ${scrolled 
          ? 'bg-white/70 dark:bg-gray-900/70' 
          : 'bg-white/50 dark:bg-gray-900/50'
        } 
        backdrop-blur-md rounded-full border border-gray-200/20 dark:border-gray-700/20
        shadow-[0_0_1rem_rgba(0,0,0,0.05)] dark:shadow-[0_0_1rem_rgba(0,0,0,0.3)]
        transition-all duration-300`}
    >
      <div className="px-3 py-2">
        <div className="flex items-center justify-center space-x-1 bg-gray-100/50 dark:bg-gray-800/50 rounded-full p-1.5">
          {/* Logo - Hidden on mobile */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("#home")}
            className="hidden sm:flex px-3 py-2 rounded-full items-center space-x-2 transition-all duration-200
              hover:bg-white/50 dark:hover:bg-gray-900/50"
          >
            <Shield className="w-4 h-4 text-emerald-500" />
            <span className="text-sm font-medium text-gray-900 dark:text-white">SecurePort</span>
          </motion.button>

          {/* Mobile Home Icon */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("#home")}
            className="sm:hidden px-3 py-2 rounded-full flex items-center transition-all duration-200
              hover:bg-white/50 dark:hover:bg-gray-900/50"
          >
            <Shield className="w-4 h-4 text-emerald-500" />
          </motion.button>

          {/* Navigation Items - Scrollable on mobile */}
          <div className="flex items-center space-x-1 overflow-x-auto hide-scrollbar">
            {navItems.slice(1).map((item) => (
              <motion.button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-3 py-2 rounded-full flex items-center space-x-2 transition-all duration-200 whitespace-nowrap
                  ${activeSection === item.href.replace('#', '')
                    ? 'bg-white dark:bg-gray-900 text-emerald-500 dark:text-emerald-400 shadow-sm' 
                    : 'text-gray-600 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-gray-900/50'
                  }`}
              >
                <item.icon className="w-4 h-4" />
                <span className="text-sm font-medium hidden sm:block">{item.label}</span>
              </motion.button>
            ))}
          </div>

          {/* Theme Toggle */}
          {mounted && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2.5 rounded-full text-gray-600 dark:text-gray-300
                hover:bg-white/50 dark:hover:bg-gray-900/50 transition-all duration-200 flex-shrink-0"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-500/80" />
              ) : (
                <Moon className="w-4 h-4 text-blue-500/80" />
              )}
            </motion.button>
          )}
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar 