"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Sparkles, Lock, Coins } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-teal-500 to-cyan-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">30초면 충분합니다</h2>
          <p className="text-xl text-teal-100 mb-12 text-pretty">
            소셜 로그인부터 Trust Score 확인, 안전한 거래 실행까지
            <br />
            지금 바로 체험하세요
          </p>

          <Link href="/app/onboarding">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-white text-teal-600 font-bold text-xl rounded-xl shadow-2xl hover:shadow-3xl transition-all"
            >
              Start Demo
            </motion.button>
          </Link>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
            {[
              { icon: Sparkles, text: "무료 온보딩" },
              { icon: Lock, text: "6-Layer 보안" },
              { icon: Coins, text: "행동 기반 보상" },
            ].map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="w-10 h-10 mx-auto rounded-lg bg-white/10 flex items-center justify-center mb-2">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="font-semibold">{item.text}</div>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
