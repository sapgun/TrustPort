"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Sparkles, Lock, Coins, ArrowRight } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-32 bg-black border-t border-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">30 seconds is all it takes</h2>
          <p className="text-xl text-slate-400 mb-12 leading-relaxed max-w-2xl mx-auto">
            From social login to Trust Score verification and secure transaction execution
            <br />
            Experience it now
          </p>

          <Link href="/app/onboarding">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-3 px-10 py-5 bg-teal-500 hover:bg-teal-400 text-black font-semibold text-xl rounded-lg transition-all"
            >
              Start Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Sparkles, text: "Free Onboarding" },
              { icon: Lock, text: "6-Layer Security" },
              { icon: Coins, text: "Behavior-Based Rewards" },
            ].map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="bg-slate-950 border border-slate-800 rounded-xl p-6">
                  <div className="w-10 h-10 mx-auto rounded-lg bg-teal-500/10 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-teal-400" />
                  </div>
                  <div className="font-medium text-white">{item.text}</div>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
