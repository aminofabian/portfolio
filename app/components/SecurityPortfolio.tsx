"use client"
import { motion } from "framer-motion"
import { FaShieldAlt, FaCode, FaBug, FaLock } from "react-icons/fa"
import { SiWireshark, SiKalilinux, SiMetasploit } from "react-icons/si"

const projects = [
  {
    title: "Network Intrusion Detection System",
    description: "Developed a real-time network monitoring system using machine learning to detect and prevent cyber attacks.",
    tech: ["Python", "TensorFlow", "Wireshark", "AWS"],
    icon: <SiWireshark className="w-6 h-6" />,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Vulnerability Assessment Platform",
    description: "Created an automated security testing platform for web applications with detailed reporting and remediation suggestions.",
    tech: ["Node.js", "Docker", "PostgreSQL", "React"],
    icon: <FaBug className="w-6 h-6" />,
    color: "from-red-500 to-pink-500"
  },
  {
    title: "Secure Code Analysis Tool",
    description: "Built a static code analysis tool that identifies security vulnerabilities in source code.",
    tech: ["Python", "AST", "Git", "REST API"],
    icon: <FaCode className="w-6 h-6" />,
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Penetration Testing Framework",
    description: "Developed a custom penetration testing framework for automated security assessments.",
    tech: ["Kali Linux", "Metasploit", "Python", "Bash"],
    icon: <SiMetasploit className="w-6 h-6" />,
    color: "from-purple-500 to-violet-500"
  }
]

export function SecurityPortfolio() {
  return (
    <div className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-4xl"
          >
            Security Projects Portfolio
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400"
          >
            Showcasing my expertise in cybersecurity through real-world projects
          </motion.p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              className="relative group"
            >
              <div className="relative bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl transition-transform duration-300 group-hover:scale-105">
                <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
                
                <div className="relative">
                  <div className={`inline-flex items-center justify-center p-3 bg-gradient-to-r ${project.color} rounded-xl shadow-lg`}>
                    {project.icon}
                  </div>
                  
                  <h3 className="mt-8 text-xl font-medium text-gray-900 dark:text-gray-100">
                    {project.title}
                  </h3>
                  
                  <p className="mt-4 text-base text-gray-500 dark:text-gray-400">
                    {project.description}
                  </p>
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
} 