"use client";
import dynamic from 'next/dynamic'
import { useState } from "react";

const SecurityJourney = dynamic(() => import('./components/SecurityJourney').then(mod => ({ default: mod.SecurityJourney })), {
  ssr: false
})

const SecurityServices = dynamic(() => import('./components/SecurityServices').then(mod => ({ default: mod.SecurityServices })), {
  ssr: false
})

const SecurityProcess = dynamic(() => import('./components/SecurityProcess'), {
  ssr: false
})

const SecurityFAQ = dynamic(() => import('./components/SecurityFAQ').then(mod => ({ default: mod.SecurityFAQ })), {
  ssr: false
})

const SecurityContact = dynamic(() => import('./components/SecurityContact').then(mod => ({ default: mod.SecurityContact })), {
  ssr: false
})

const SecurityFooter = dynamic(() => import('./components/SecurityFooter').then(mod => ({ default: mod.SecurityFooter })), {
  ssr: false
})

const SecurityMetrics = dynamic(() => import('./components/SecurityMetrics').then(mod => ({ default: mod.SecurityMetrics })), {
  ssr: false
})

const MotionSection = dynamic(() => import('framer-motion').then(mod => ({ default: mod.motion.section })), {
  ssr: false
})

export default function Home() {
  const [showContact, setShowContact] = useState(false)

  const handleContactClick = () => {
    setShowContact(true)
  }

  return (
    <main className="bg-white dark:bg-black">
      <MotionSection
        id="about"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SecurityJourney />
      </MotionSection>

      <MotionSection
        id="skills"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <SecurityProcess onContactClick={handleContactClick} />
      </MotionSection>

      <MotionSection
        id="projects"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <SecurityMetrics />
      </MotionSection>

      <MotionSection
        id="services"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <SecurityServices />
      </MotionSection>

      <MotionSection
        id="faqs"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <SecurityFAQ />
      </MotionSection>

      <MotionSection
        id="contact"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <SecurityContact />
      </MotionSection>

      {showContact && <SecurityContact onClose={() => setShowContact(false)} />}

      <SecurityFooter />
    </main>
  )
}
