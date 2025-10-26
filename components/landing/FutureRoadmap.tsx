"use client"

import { motion } from "framer-motion"
import { TrendingUp, CreditCard, Building2, Shield, Sparkles, ArrowRight } from "lucide-react"

export default function FutureRoadmap() {
  const financialProducts = [
    {
      icon: CreditCard,
      title: "신용 대출",
      description: "온체인 Trust Score 기반 무담보 대출",
      features: ["낮은 금리", "빠른 승인", "유연한 상환"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Building2,
      title: "DeFi 신용카드",
      description: "하이브리드 신용평가로 발급되는 Web3 신용카드",
      features: ["암호화폐 결제", "리워드 적립", "글로벌 사용"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Shield,
      title: "보험 상품",
      description: "신뢰도 기반 맞춤형 보험 및 보장",
      features: ["스마트 계약", "자동 청구", "투명한 보상"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: TrendingUp,
      title: "투자 상품",
      description: "Trust Score 기반 투자 한도 및 우대 조건",
      features: ["높은 수익률", "낮은 수수료", "전문가 관리"],
      color: "from-orange-500 to-red-500",
    },
  ]

  return (
    <section className="py-32 bg-black border-t border-slate-900 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-teal-500/5 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/30 rounded-full px-4 py-2 mb-6"
          >
            <Sparkles className="w-4 h-4 text-teal-400" />
            <span className="text-sm font-medium text-teal-400">Coming Soon</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            하이브리드 신용평가 모델
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 max-w-3xl mx-auto"
          >
            온체인 Trust Score와 오프체인 신용점수를 결합하여
            <br />
            <span className="text-teal-400 font-semibold">차세대 금융 서비스</span>를 제공합니다
          </motion.p>
        </div>

        {/* Hybrid Model Explanation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-slate-950 to-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12 mb-16"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-teal-500/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-teal-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">온체인 Trust Score</h3>
              <p className="text-slate-400 text-sm">거래 내역, NFT 보유, 지갑 활동 등 블록체인 데이터 기반 신뢰도</p>
            </div>

            <div className="flex items-center justify-center">
              <div className="text-4xl font-bold text-teal-400">+</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">오프체인 신용점수</h3>
              <p className="text-slate-400 text-sm">기존 금융 기관의 신용 정보, 소득, 자산 등 전통적 신용평가</p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-800 text-center">
            <ArrowRight className="w-6 h-6 text-teal-400 mx-auto mb-3" />
            <h4 className="text-2xl font-bold text-white mb-2">하이브리드 신용평가</h4>
            <p className="text-slate-300">두 세계의 장점을 결합하여 더 정확하고 공정한 신용평가를 실현합니다</p>
          </div>
        </motion.div>

        {/* Financial Products */}
        <div className="grid md:grid-cols-2 gap-6">
          {financialProducts.map((product, idx) => {
            const Icon = product.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group bg-slate-950 border border-slate-800 hover:border-teal-500/50 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/10"
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${product.color} bg-opacity-10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">{product.title}</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">{product.description}</p>

                <div className="space-y-2">
                  {product.features.map((feature, featureIdx) => (
                    <div key={featureIdx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                      <span className="text-sm text-slate-400">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-400 mb-4">
            하이브리드 신용평가 모델은 현재 개발 중이며, 2025년 하반기 출시 예정입니다
          </p>
          <div className="inline-flex items-center gap-2 text-teal-400 font-medium">
            <span>업데이트 소식을 받아보세요</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
