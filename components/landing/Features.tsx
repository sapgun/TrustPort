"use client"

import { motion } from "framer-motion"
import { Shield, Lock, Globe, Coins } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Lock,
      title: "신원 레이어",
      description: "실명 인증(PASS/KYC) + 신뢰 점수",
      details: "NFT 등급 시스템, 온체인 신뢰도 평가",
    },
    {
      icon: Shield,
      title: "보안 OS",
      description: "6단계 보안: 자연어 리뷰, 방화벽, 긴급 취소",
      details: "서명 전후 완벽한 보호",
    },
    {
      icon: Globe,
      title: "실행 레이어",
      description: "멀티체인 허브 + 원클릭 실행",
      details: "체인 독립적, 통합 UX",
    },
    {
      icon: Coins,
      title: "보상 레이어",
      description: "안전한 행동 → 신뢰 점수 증가 → 보상",
      details: "높은 등급은 수수료 할인과 독점 액세스 제공",
    },
  ]

  return (
    <section className="py-32 bg-black border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">4단계 아키텍처</h2>
          <p className="text-xl text-slate-400">신원 + 보안 + 실행 + 보상</p>
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
