"use client"

import TrustScoreCard from "@/components/app/TrustScoreCard"
import trustScoreData from "@/data/trustScoreData.json"

export default function TrustScorePage() {
  const userData = trustScoreData.users[0]

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Trust Score</h1>
        <p className="text-xl text-gray-600">안전한 행동으로 신뢰를 쌓고 보상을 받으세요</p>
      </div>

      <TrustScoreCard userData={userData} detailed />

      {/* How to Improve */}
      <div className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Trust Score 올리는 방법</h2>
        <div className="space-y-4">
          {[
            { action: "실명 인증 완료", points: "+50점", icon: "🔐" },
            { action: "안전한 거래 실행", points: "+10점", icon: "✅" },
            { action: "위험한 거래 차단", points: "+5점", icon: "🛡️" },
            { action: "멀티체인 거래 성공", points: "+15점", icon: "🌐" },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="text-2xl">{item.icon}</div>
                <div className="font-semibold text-gray-900">{item.action}</div>
              </div>
              <div className="text-teal-600 font-bold">{item.points}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
