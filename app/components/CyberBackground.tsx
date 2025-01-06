"use client"

import { motion } from "framer-motion"

export const CyberBackground = () => {
  return (
    <div className="fixed inset-0 -z-50">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-gray-50 to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-900" />

      {/* Grid Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#80808012_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,transparent,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:96px_96px]" />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/[0.02] to-transparent" />

      {/* Radial Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-40%,rgba(16,185,129,0.05),transparent)]" />
    </div>
  )
} 