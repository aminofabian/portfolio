"use client"

import { motion, AnimatePresence } from "framer-motion"
import { 
  Search, 
  Shield, 
  Workflow, 
  DollarSign, 
  ArrowRight, 
  ArrowDownToLine,
  Fingerprint,
  ShieldAlert,
  Lock,
  Eye
} from "lucide-react"
import { useState } from "react"

const processSteps = [
  {
    icon: Search,
    title: "Security Assessment",
    description: "Comprehensive system analysis",
    details: [
      "Vulnerability Assessment & Penetration Testing (VAPT)",
      "Security architecture and design review",
      "Network security assessment and mapping",
      "Application security testing (SAST & DAST)",
      "Cloud infrastructure security review",
      "Compliance gap analysis (ISO 27001, GDPR, HIPAA)",
      "Third-party vendor security assessment",
      "Security policy and procedure evaluation",
      "Risk assessment and threat modeling",
      "Social engineering vulnerability testing"
    ],
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
  },
  {
    icon: Shield,
    title: "Threat Detection",
    description: "Proactive monitoring & response",
    details: [
      "24/7 Security Operations Center (SOC) monitoring",
      "Real-time threat detection and analysis",
      "Advanced persistent threat (APT) detection",
      "Behavioral analytics and anomaly detection",
      "SIEM implementation and management",
      "Endpoint Detection and Response (EDR)",
      "Network traffic analysis and monitoring",
      "Malware analysis and reverse engineering",
      "Incident response planning and execution",
      "Threat intelligence integration and analysis"
    ],
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
  },
  {
    icon: Lock,
    title: "Security Implementation",
    description: "Robust protection deployment",
    details: [
      "Zero-trust architecture implementation",
      "Multi-factor authentication (MFA) deployment",
      "End-to-end encryption implementation",
      "Access control and privilege management",
      "Network segmentation and microsegmentation",
      "Cloud security controls and configurations",
      "Security tool integration and orchestration",
      "Data loss prevention (DLP) solutions",
      "Secure development practices (DevSecOps)",
      "Container and Kubernetes security hardening"
    ],
    color: "from-violet-500 to-purple-600",
    bgColor: "bg-violet-50 dark:bg-violet-900/20",
  },
  {
    icon: Eye,
    title: "Continuous Monitoring",
    description: "Ongoing security oversight",
    details: [
      "Real-time security metrics and KPI tracking",
      "Compliance monitoring and reporting",
      "Security posture assessment and scoring",
      "Vulnerability management lifecycle",
      "Asset inventory and configuration tracking",
      "Security awareness training effectiveness",
      "Incident response effectiveness metrics",
      "Third-party risk monitoring",
      "Security control effectiveness testing",
      "Continuous security improvement planning"
    ],
    color: "from-rose-500 to-pink-600",
    bgColor: "bg-rose-50 dark:bg-rose-900/20",
  },
]

interface SecurityProcessProps {
  onContactClick: () => void;
}

const SecurityProcess = ({ onContactClick }: SecurityProcessProps) => {
  const [activeStep, setActiveStep] = useState<number | null>(null)
  const [isHovered, setIsHovered] = useState<number | null>(null)

  return (
    <section className="py-12 md:py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-8 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-emerald-500/10 to-blue-500/10 text-emerald-500 dark:text-emerald-400 ring-1 ring-inset ring-emerald-500/20 mb-4">
              Cybersecurity Process
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Enterprise Security Lifecycle
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto text-base md:text-lg text-gray-600 dark:text-gray-400"
          >
            Comprehensive cybersecurity solutions protecting your digital assets 24/7
          </motion.p>
        </div>
        
        <div className="relative w-full aspect-square max-w-[900px] mx-auto">
          <div className="hidden md:block absolute inset-0 m-auto w-[90%] h-[90%] border-2 border-emerald-500/10 rounded-full animate-pulse-slow" />
          <div className="hidden md:block absolute inset-0 m-auto w-[80%] h-[80%] border-2 border-dashed border-emerald-500/20 rounded-full animate-spin-slower" />
          
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="absolute inset-0 m-auto w-32 md:w-48 h-32 md:h-48"
            onClick={onContactClick}
          >
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full blur-xl opacity-20 animate-pulse" />
              <div className="relative w-full h-full rounded-full bg-white/90 dark:bg-gray-800/90 shadow-xl backdrop-blur-sm flex items-center justify-center p-6 cursor-pointer hover:scale-105 transition-transform">
                <div className="text-center">
                  <Fingerprint className="w-10 h-10 mx-auto mb-2 text-emerald-500" />
                  <span className="block text-sm font-medium text-gray-600 dark:text-gray-300">
                    Get Started Now
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="md:hidden flex flex-col gap-4 mt-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <ProcessCard
                  step={step}
                  index={index}
                  isActive={activeStep === index}
                  setActiveStep={setActiveStep}
                  isHovered={isHovered === index}
                  setIsHovered={setIsHovered}
                />
              </motion.div>
            ))}
          </div>

          <div className="hidden md:block">
            {processSteps.map((step, index) => {
              const angleOffset = -90
              const angle = (360 / processSteps.length) * index + angleOffset
              const radius = window.innerWidth < 1024 ? 250 : 350
              const x = radius * Math.cos(angle * (Math.PI / 180))
              const y = radius * Math.sin(angle * (Math.PI / 180))

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2 }}
                  className="absolute"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <ProcessCard
                    step={step}
                    index={index}
                    isActive={activeStep === index}
                    setActiveStep={setActiveStep}
                    isHovered={isHovered === index}
                    setIsHovered={setIsHovered}
                  />
                </motion.div>
              )
            })}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-8 md:mt-16"
        >
          <button
            onClick={onContactClick}
            className="inline-flex items-center px-4 md:px-6 py-2 md:py-3 text-base md:text-lg font-medium text-white bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg shadow-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-300"
          >
            <ShieldAlert className="w-5 h-5 mr-2" />
            Schedule Security Assessment
          </button>
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            Get a comprehensive security evaluation for your organization
          </p>
        </motion.div>
      </div>
    </section>
  )
}

interface ProcessCardProps {
  step: typeof processSteps[0]
  index: number
  isActive: boolean
  setActiveStep: (index: number | null) => void
  isHovered: boolean
  setIsHovered: (index: number | null) => void
}

const ProcessCard = ({ 
  step, 
  index, 
  isActive, 
  setActiveStep, 
  isHovered, 
  setIsHovered 
}: ProcessCardProps) => {
  return (
    <motion.div
      className={`w-full md:w-72 ${step.bgColor} backdrop-blur-sm p-6 rounded-xl shadow-lg cursor-pointer relative group`}
      whileHover={{ scale: 1.05, y: -5 }}
      animate={{
        boxShadow: isHovered ? "0 25px 50px -12px rgba(0, 0, 0, 0.25)" : "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
      }}
      onClick={() => setActiveStep(isActive ? null : index)}
      onMouseEnter={() => setIsHovered(index)}
      onMouseLeave={() => setIsHovered(null)}
    >
      <div className={`absolute inset-x-0 -top-px h-px bg-gradient-to-r ${step.color}`} />
      <div className="flex items-start space-x-4">
        <div className={`p-3 rounded-lg bg-gradient-to-br ${step.color}`}>
          <step.icon className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="font-bold text-lg text-gray-900 dark:text-white">{step.title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{step.description}</p>
        </div>
      </div>

      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-full left-0 mt-4 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl w-full z-10"
          >
            <ul className="space-y-3">
              {step.details.map((detail, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center text-gray-700 dark:text-gray-300"
                >
                  <ArrowRight className="w-4 h-4 mr-2 text-emerald-500 flex-shrink-0" />
                  <span className="text-sm">{detail}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default SecurityProcess 