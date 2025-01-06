"use client"

import { motion } from "framer-motion"
import { Terminal, Send, Shield, Lock, Loader2 } from "lucide-react"
import { useState } from "react"

interface FormState {
  name: string
  email: string
  message: string
  [key: string]: string
}

interface SecurityContactProps {
  onClose?: () => void;
}

export const SecurityContact = ({ onClose }: SecurityContactProps) => {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    message: ""
  })
  const [currentField, setCurrentField] = useState<string>("name")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setSubmitted(true)
  }

  const fields = [
    {
      id: "name",
      label: "Identify yourself",
      placeholder: "John Doe",
      icon: Shield,
      command: "init_contact --user"
    },
    {
      id: "email",
      label: "Secure communication channel",
      placeholder: "john@example.com",
      icon: Lock,
      command: "establish_channel --email"
    },
    {
      id: "message",
      label: "Encrypted message",
      placeholder: "Your message here...",
      icon: Terminal,
      command: "send_encrypted_message"
    }
  ]

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
              <Send className="w-4 h-4 mr-2" />
              Initialize Contact
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Secure Communication Channel
          </motion.h2>
        </div>

        {/* Terminal Contact Form */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-900 rounded-lg shadow-xl overflow-hidden">
            {/* Terminal Header */}
            <div className="flex items-center px-4 py-2 bg-gray-800 border-b border-gray-700">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex-1 text-center">
                <span className="text-sm text-gray-400 font-mono">secure-contact-protocol</span>
              </div>
            </div>

            {/* Terminal Content */}
            <form onSubmit={handleSubmit} className="p-6">
              <div className="space-y-6">
                {fields.map((field) => (
                  <motion.div
                    key={field.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-2"
                  >
                    {/* Command Line */}
                    <div className="flex items-center text-emerald-400 font-mono text-sm">
                      <Terminal className="w-4 h-4 mr-2" />
                      <span>$ {field.command}</span>
                    </div>

                    {/* Input Field */}
                    <div className="relative">
                      <field.icon className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
                      {field.id === "message" ? (
                        <textarea
                          id={field.id}
                          value={formState[field.id]}
                          onChange={(e) => setFormState({ ...formState, [field.id]: e.target.value })}
                          onFocus={() => setCurrentField(field.id)}
                          placeholder={field.placeholder}
                          rows={4}
                          className="w-full bg-gray-800 text-gray-100 placeholder-gray-500 rounded-lg pl-10 pr-4 py-2 font-mono border border-gray-700 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors duration-200"
                        />
                      ) : (
                        <input
                          type={field.id === "email" ? "email" : "text"}
                          id={field.id}
                          value={formState[field.id]}
                          onChange={(e) => setFormState({ ...formState, [field.id]: e.target.value })}
                          onFocus={() => setCurrentField(field.id)}
                          placeholder={field.placeholder}
                          className="w-full bg-gray-800 text-gray-100 placeholder-gray-500 rounded-lg pl-10 pr-4 py-2 font-mono border border-gray-700 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors duration-200"
                        />
                      )}
                      
                      {/* Active Field Indicator */}
                      {currentField === field.id && (
                        <div className="absolute right-3 top-3">
                          <span className="animate-pulse text-emerald-500">▮</span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}

                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <button
                    type="submit"
                    disabled={isSubmitting || submitted}
                    className={`w-full mt-4 px-6 py-3 rounded-lg font-mono text-sm text-white 
                      ${submitted 
                        ? 'bg-emerald-600 cursor-default'
                        : 'bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700'
                      } transition-colors duration-200 flex items-center justify-center`}
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : submitted ? (
                      <>
                        <Shield className="w-5 h-5 mr-2" />
                        Message Encrypted and Sent
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Initialize Secure Connection
                      </>
                    )}
                  </button>
                </motion.div>

                {/* Terminal Output */}
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 bg-gray-800 rounded-lg border border-gray-700"
                  >
                    <div className="font-mono text-sm text-emerald-400">
                      {"> "} Message encrypted and sent successfully
                      <br />
                      {"> "} Connection established
                      <br />
                      {"> "} Awaiting response...
                    </div>
                  </motion.div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  )
} 