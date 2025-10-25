"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Rocket } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-4000" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-400 font-semibold text-sm mb-8">
            <Rocket className="w-4 h-4" />
            BDACS Ideathon 2025
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight text-balance">
            누구나. 어떤 체인이든.
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400">
              안전하게 한 번에
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto text-pretty">
            Security-First Multichain Gateway with Trust-Based Rewards
          </p>

          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto text-pretty">
            실명 인증부터 서명 전 보안, 멀티체인 실행, 행동 기반 보상까지.
            <br />
            TrustFi는 Web3의 신뢰 인프라입니다.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/app">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold text-lg rounded-xl shadow-lg shadow-teal-500/25 hover:shadow-2xl hover:shadow-teal-500/40 transition-all"
              >
                Launch App
              </motion.button>
            </Link>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm text-white font-bold text-lg rounded-xl shadow-md hover:shadow-xl transition-all border border-slate-700"
            >
              Learn More
            </motion.button>
          </div>

          {/* Statistics */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: "99.8%", label: "델타 중립도" },
              { value: "6-Layer", label: "Security OS" },
              { value: "10+", label: "지원 체인" },
              { value: "$0", label: "온보딩 비용" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + idx * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 shadow-md border border-slate-700/50"
              >
                <div className="text-3xl font-bold text-teal-400 mb-2">{stat.value}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
