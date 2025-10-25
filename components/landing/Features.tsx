"use client"

import { motion } from "framer-motion"
import { Shield, Lock, Globe, Coins } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Lock,
      title: "Identity Layer",
      description: "Real-name verification (PASS/KYC) + Trust Score",
      details: "NFT tier system, on-chain trust evaluation",
    },
    {
      icon: Shield,
      title: "Security OS",
      description: "6-Layer security: NL Review, Firewall, Panic Revoke",
      details: "Complete protection before, during, and after signing",
    },
    {
      icon: Globe,
      title: "Execution Layer",
      description: "Multichain hub + 1-Click execution",
      details: "Chain-agnostic, unified UX",
    },
    {
      icon: Coins,
      title: "Reward Layer",
      description: "Safe behavior → Trust Score increase → Rewards",
      details: "Higher tiers unlock fee discounts and exclusive access",
    },
  ]

  return (
    <section className="py-32 bg-black border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">4-Layer Architecture</h2>
          <p className="text-xl text-slate-400">Identity + Security + Execution + Rewards</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group bg-slate-950 border border-slate-800 hover:border-teal-500/50 rounded-2xl p-8 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center mb-6 group-hover:bg-teal-500/20 transition-colors">
                  <Icon className="w-6 h-6 text-teal-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-300 mb-3 font-medium">{feature.description}</p>
                <p className="text-sm text-slate-500 leading-relaxed">{feature.details}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
