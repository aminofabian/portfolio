"use client"
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import { SecurityJourney } from "./components/SecurityJourney";
import { SecurityServices } from "./components/SecurityServices";
import SecurityProcess from "./components/SecurityProcess";
import { SecurityFAQ } from "./components/SecurityFAQ";
import { SecurityContact } from "./components/SecurityContact";
import { SecurityFooter } from "./components/SecurityFooter";
import { SecurityMetrics } from "./components/SecurityMetrics";
import { useState } from "react";

export default function Home() {
  const [showContact, setShowContact] = useState(false)

  const handleContactClick = () => {
    setShowContact(true)
  }

  return (
    <main className="bg-white dark:bg-black">

      <motion.section
        id="about"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SecurityJourney />
      </motion.section>

      <motion.section
        id="skills"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <SecurityProcess onContactClick={handleContactClick} />
      </motion.section>

      <motion.section
        id="projects"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <SecurityMetrics />
      </motion.section>

      <motion.section
        id="services"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <SecurityServices />
      </motion.section>

      <motion.section
        id="faqs"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <SecurityFAQ />
      </motion.section>

      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <SecurityContact />
      </motion.section>

      {showContact && <SecurityContact onClose={() => setShowContact(false)} />}

      <SecurityFooter />
    </main>
  );
}
