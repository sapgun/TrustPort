"use client"

import { motion } from "framer-motion"

interface TrustScoreCardProps {
  userData: {
    name: string
    trustScore: number
    tier: string
    tierColor: string
    nextTier: string
    pointsToNextTier: number
  }
  detailed?: boolean
}

export default function TrustScoreCard({ userData, detailed = false }: TrustScoreCardProps) {
  const getTierEmoji = (tier: string) => {
    const emojiMap: { [key: string]: string } = {
      Bronze: "🥉",
      Silver: "🥈",
      Gold: "🥇",
      Platinum: "💎",
      Diamond: "💠",
    }
    return emojiMap[tier] || "⭐"
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl shadow-lg p-8"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-1">{userData.name}의 Trust Score</h2>
          <p className="text-gray-600">안전한 행동으로 신뢰를 쌓으세요</p>
        </div>
        <div className="text-5xl">{getTierEmoji(userData.tier)}</div>
      </div>

      {/* Score Display */}
      <div className="text-center mb-6">
        <div className="text-6xl font-bold text-teal-600 mb-2">{userData.trustScore}</div>
        <div className={`inline-block px-4 py-2 rounded-full font-semibold ${userData.tierColor}`}>
          {userData.tier} Tier
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>{userData.tier}</span>
          <span>{userData.nextTier}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-gradient-to-r from-teal-500 to-blue-600 h-3 rounded-full transition-all duration-500"
            style={{ width: `${userData.trustScore % 100}%` }}
          />
        </div>
        <p className="text-sm text-gray-500 mt-2 text-center">
          {userData.nextTier} 티어까지 {userData.pointsToNextTier}점 남음
        </p>
      </div>

      {detailed && (
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          {[
            { label: "안전한 거래", value: "24회", icon: "✅" },
            { label: "차단된 위험", value: "3회", icon: "🛡️" },
            { label: "획득 보상", value: "120 USDC", icon: "💰" },
          ].map((stat, idx) => (
            <div key={idx} className="bg-gray-50 rounded-lg p-4 text-center">
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  )
}
