"use client"

import { motion } from "framer-motion"
import { Search, Shield, Clock, AlertTriangle, Bot, Settings } from "lucide-react"

export default function Security() {
  const securityFeatures = [
    {
      title: "Natural-Language Review",
      description: "복잡한 트랜잭션을 사람의 언어로 번역",
      icon: Search,
    },
    {
      title: "Transaction Firewall",
      description: "위험 기준 충족 시 즉시 차단",
      icon: Shield,
    },
    {
      title: "Delay Protection",
      description: "고위험 거래 5초 타이머 + 재확인",
      icon: Clock,
    },
    {
      title: "Panic Revoke",
      description: "서명 후 30초 이내 긴급 취소",
      icon: AlertTriangle,
    },
    {
      title: "AI Risk Guard",
      description: "실시간 위험 점수 분석 및 알림",
      icon: Bot,
    },
    {
      title: "Policy Engine",
      description: "맞춤형 보안 규칙 설정",
      icon: Settings,
    },
  ]

  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">6-Layer Security OS</h2>
          <p className="text-xl text-slate-400 mb-4">서명하기 전에 TrustFi가 먼저 확인합니다</p>
          <p className="text-lg text-teal-400 font-semibold">보안은 선택이 아니라 OS의 기본값입니다</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityFeatures.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-xl hover:shadow-teal-500/10 transition-all border border-slate-700/50"
              >
                <div className="w-12 h-12 rounded-lg bg-teal-500/10 flex items-center justify-center mb-3">
                  <Icon className="w-6 h-6 text-teal-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-400">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Flow Diagram */}
        <div className="mt-16 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-slate-700/50">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">보안 레이어 통합 플로우</h3>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {["서명 시도", "NL Review", "AI Risk", "Firewall", "Delay", "Policy", "실행", "Panic Revoke"].map(
              (step, idx) => (
                <div key={idx} className="flex items-center">
                  <div className="bg-teal-500/10 border border-teal-500/20 text-teal-400 font-semibold px-4 py-2 rounded-lg text-sm whitespace-nowrap">
                    {step}
                  </div>
                  {idx < 7 && <div className="hidden md:block mx-2 text-teal-400">→</div>}
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
