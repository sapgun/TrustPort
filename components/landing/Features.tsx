"use client"

import { motion } from "framer-motion"
import { Shield, Lock, Globe, Coins } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Lock,
      title: "Identity Layer",
      description: "실명 인증 (PASS/KYC) + Trust Score",
      details: "NFT 티어 시스템, 온체인 신뢰 평가",
    },
    {
      icon: Shield,
      title: "Security OS",
      description: "6-Layer 보안: NL Review, Firewall, Panic Revoke",
      details: "서명 전·중·후 완벽 보호",
    },
    {
      icon: Globe,
      title: "Execution Layer",
      description: "멀티체인 허브 + 1-Click 실행",
      details: "체인 의식 불필요, 하나의 UX",
    },
    {
      icon: Coins,
      title: "Reward Layer",
      description: "안전한 행동 → Trust Score 상승 → 보상",
      details: "티어 높을수록 수수료 감면, 독점 권한",
    },
  ]

  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">4-Layer Architecture</h2>
          <p className="text-xl text-slate-400">Identity + Security + Execution + Rewards</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-teal-500/10 transition-all border border-slate-700/50"
              >
                <div className="w-12 h-12 rounded-lg bg-teal-500/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-teal-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-300 mb-2 font-semibold">{feature.description}</p>
                <p className="text-sm text-slate-500">{feature.details}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
