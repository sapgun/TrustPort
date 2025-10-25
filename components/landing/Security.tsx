"use client"

import { motion } from "framer-motion"
import { Search, Shield, Clock, AlertTriangle, Bot, Settings } from "lucide-react"

export default function Security() {
  const securityFeatures = [
    {
      title: "Natural-Language Review",
      description: "Translates complex transactions into human language",
      icon: Search,
    },
    {
      title: "Transaction Firewall",
      description: "Instantly blocks transactions that meet risk criteria",
      icon: Shield,
    },
    {
      title: "Delay Protection",
      description: "5-second timer + reconfirmation for high-risk transactions",
      icon: Clock,
    },
    {
      title: "Panic Revoke",
      description: "Emergency cancellation within 30 seconds after signing",
      icon: AlertTriangle,
    },
    {
      title: "AI Risk Guard",
      description: "Real-time risk score analysis and alerts",
      icon: Bot,
    },
    {
      title: "Policy Engine",
      description: "Customizable security rule configuration",
      icon: Settings,
    },
  ]

  return (
    <section className="py-32 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">6-Layer Security OS</h2>
          <p className="text-xl text-slate-400 mb-4">TrustFi verifies before you sign</p>
          <p className="text-lg text-teal-400 font-medium">Security is not optional, it's the default</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {securityFeatures.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group bg-black border border-slate-800 hover:border-teal-500/50 rounded-xl p-6 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-teal-500/10 flex items-center justify-center mb-4 group-hover:bg-teal-500/20 transition-colors">
                  <Icon className="w-6 h-6 text-teal-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>

        <div className="bg-black border border-slate-800 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Integrated Security Flow</h3>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {["Sign Attempt", "NL Review", "AI Risk", "Firewall", "Delay", "Policy", "Execute", "Panic Revoke"].map(
              (step, idx) => (
                <div key={idx} className="flex items-center">
                  <div className="bg-teal-500/10 border border-teal-500/30 text-teal-400 font-medium px-4 py-2 rounded-lg text-sm whitespace-nowrap">
                    {step}
                  </div>
                  {idx < 7 && <div className="mx-2 text-teal-500/50">→</div>}
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
