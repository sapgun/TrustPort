"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/navigation"

export default function OnboardingFlow() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  const steps = [
    {
      title: "소셜 로그인",
      description: "Google, Twitter, Discord 중 선택",
      icon: "🔐",
      action: "Google로 로그인",
    },
    {
      title: "지갑 연결",
      description: "MetaMask, WalletConnect 지원",
      icon: "👛",
      action: "지갑 연결",
    },
    {
      title: "Trust Score 생성",
      description: "초기 50점으로 시작",
      icon: "⭐",
      action: "Trust Score 생성",
    },
  ]

  const handleNext = async () => {
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))

    if (step < steps.length) {
      setStep(step + 1)
      setIsLoading(false)
    } else {
      router.push("/app")
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          {steps.map((_, idx) => (
            <div
              key={idx}
              className={`w-full h-2 rounded-full mx-1 ${idx + 1 <= step ? "bg-teal-500" : "bg-gray-200"}`}
            />
          ))}
        </div>
        <p className="text-sm text-gray-600 text-center">
          Step {step} of {steps.length}
        </p>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="text-center"
        >
          <div className="text-6xl mb-6">{steps[step - 1].icon}</div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{steps[step - 1].title}</h2>
          <p className="text-xl text-gray-600 mb-8">{steps[step - 1].description}</p>

          <button
            onClick={handleNext}
            disabled={isLoading}
            className="px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-2xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "처리 중..." : steps[step - 1].action}
          </button>
        </motion.div>
      </AnimatePresence>

      {/* Skip Button */}
      {step < steps.length && (
        <div className="text-center mt-6">
          <button onClick={() => router.push("/app")} className="text-gray-500 hover:text-gray-700 underline">
            건너뛰기
          </button>
        </div>
      )}
    </div>
  )
}
