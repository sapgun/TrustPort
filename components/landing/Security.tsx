"use client"

import { motion } from "framer-motion"
import { Search, Shield, Clock, AlertTriangle, Bot, Settings } from "lucide-react"

export default function Security() {
  const securityFeatures = [
    {
      title: "자연어 리뷰",
      description: "복잡한 트랜잭션을 사람이 이해할 수 있는 언어로 번역",
      icon: Search,
    },
    {
      title: "트랜잭션 방화벽",
      description: "위험 기준을 충족하는 트랜잭션을 즉시 차단",
      icon: Shield,
    },
    {
      title: "지연 보호",
      description: "고위험 트랜잭션에 대한 5초 타이머 + 재확인",
      icon: Clock,
    },
    {
      title: "긴급 취소",
      description: "서명 후 30초 이내 긴급 취소 가능",
      icon: AlertTriangle,
    },
    {
      title: "AI 위험 가드",
      description: "실시간 위험 점수 분석 및 경고",
      icon: Bot,
    },
    {
      title: "정책 엔진",
      description: "맞춤형 보안 규칙 설정",
      icon: Settings,
    },
  ]

  return (
    <section className="py-32 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">6단계 보안 OS</h2>
          <p className="text-xl text-slate-400 mb-4">TrustFi는 서명 전에 검증합니다</p>
          <p className="text-lg text-teal-400 font-medium">보안은 선택이 아닌 기본입니다</p>
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
          <h3 className="text-2xl font-bold text-white mb-8 text-center">통합 보안 플로우</h3>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {["서명 시도", "자연어 리뷰", "AI 위험", "방화벽", "지연", "정책", "실행", "긴급 취소"].map((step, idx) => (
              <div key={idx} className="flex items-center">
                <div className="bg-teal-500/10 border border-teal-500/30 text-teal-400 font-medium px-4 py-2 rounded-lg text-sm whitespace-nowrap">
                  {step}
                </div>
                {idx < 7 && <div className="mx-2 text-teal-500/50">→</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
