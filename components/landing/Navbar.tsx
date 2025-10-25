"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Shield } from "lucide-react"

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-xl border-b border-slate-800/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <Shield className="w-5 h-5 text-black" />
            </div>
            <span className="text-xl font-bold text-white">TrustFi</span>
          </Link>

          <Link href="/app">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-teal-500 hover:bg-teal-400 text-black font-semibold rounded-lg transition-colors"
            >
              시작하기
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.nav>
  )
}
