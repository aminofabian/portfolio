"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Shield, Lock, AlertCircle, HelpCircle, ChevronRight, Terminal } from "lucide-react"
import { useState } from "react"

interface FAQ {
  question: string
  answer: string
  icon: React.ElementType
  color: string
  code?: string
}

const faqs: FAQ[] = [
  {
    question: "What sets your security approach apart?",
    answer: "Our methodology combines cutting-edge AI-driven threat detection with traditional security practices. We employ a proactive stance, continuously monitoring and adapting to emerging threats while maintaining robust defensive measures.",
    icon: Shield,
    color: "emerald",
    code: "implement_security_protocol('AI-DRIVEN')"
  },
  {
    question: "How do you handle data privacy?",
    answer: "We implement zero-trust architecture and end-to-end encryption for all sensitive data. Our practices comply with GDPR, CCPA, and other major privacy regulations, ensuring your data remains confidential and secure.",
    icon: Lock,
    color: "blue",
    code: "encrypt_data('AES-256', ZERO_TRUST)"
  },
  {
    question: "What's your incident response time?",
    answer: "Our 24/7 security operations center ensures immediate response to security incidents. We maintain a 15-minute response time for critical alerts and provide comprehensive incident reports within 24 hours.",
    icon: AlertCircle,
    color: "violet",
    code: "response_time.set(Duration::minutes(15))"
  },
  {
    question: "Do you offer security training?",
    answer: "Yes, we provide comprehensive security awareness training, including phishing simulations, secure coding practices, and compliance training. Our programs are customized to your organization's needs.",
    icon: HelpCircle,
    color: "amber",
    code: "initiate_training(CUSTOM_PROGRAM)"
  }
]

const AnswerDisplay = ({ faq }: { faq: FAQ }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl"
  >
    {/* Terminal-style Header */}
    <div className="bg-gray-900/90 dark:bg-gray-800/90 rounded-lg mb-6 overflow-hidden">
      <div className="flex items-center px-4 py-2 bg-gray-800/50 dark:bg-gray-900/50 border-b border-gray-700/50">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
      </div>
      <div className="p-4 font-mono text-sm">
        <div className="flex items-center text-emerald-400 dark:text-emerald-300 mb-2">
          <Terminal className="w-4 h-4 mr-2" />
          <span> {faq.code}</span>
        </div>
      </div>
    </div>

    {/* Answer Content */}
    <div className="relative">
      <div className={`p-3 rounded-lg bg-${faq.color}-500/10 dark:bg-${faq.color}-400/10 inline-flex mb-4`}>
        <faq.icon className={`w-6 h-6 text-${faq.color}-500 dark:text-${faq.color}-400`} />
      </div>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
        {faq.answer}
      </p>
    </div>

    {/* Decorative Elements */}
    <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-violet-500/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </motion.div>
)

export const SecurityFAQ = () => {
  const [selectedFAQ, setSelectedFAQ] = useState<FAQ>(faqs[0])

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
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent" />
      </div>

      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <span className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-emerald-500/10 text-emerald-500 dark:bg-emerald-400/10 dark:text-emerald-400 ring-1 ring-inset ring-emerald-500/20 dark:ring-emerald-400/20 mb-4">
              <HelpCircle className="w-4 h-4 mr-2" />
              FAQ
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Common Security Questions
          </motion.h2>
        </div>

        {/* FAQ Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Questions List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedFAQ(faq)}
                className={`relative group cursor-pointer p-4 rounded-xl transition-all duration-300 ${
                  selectedFAQ.question === faq.question
                    ? 'bg-white dark:bg-gray-800 shadow-lg'
                    : 'hover:bg-white/50 dark:hover:bg-gray-800/50'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-lg bg-${faq.color}-500/10 dark:bg-${faq.color}-400/10`}>
                    <faq.icon className={`w-5 h-5 text-${faq.color}-500 dark:text-${faq.color}-400`} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex-1">
                    {faq.question}
                  </h3>
                  <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                    selectedFAQ.question === faq.question ? 'rotate-90' : ''
                  }`} />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Answer Display */}
          <div className="relative min-h-[400px]">
            <AnimatePresence mode="wait">
              <AnswerDisplay key={selectedFAQ.question} faq={selectedFAQ} />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.section>
  )
} 