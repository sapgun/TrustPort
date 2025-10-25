"use client"

import { useState } from "react"
import walletData from "@/data/walletData.json"

export default function MultichainHub() {
  const [selectedChain, setSelectedChain] = useState(walletData.chains[0])

  return (
    <div className="space-y-6">
      {/* Chain Selection */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">지원 체인</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {walletData.chains.map((chain, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedChain(chain)}
              className={`p-4 rounded-lg border-2 transition-all ${
                selectedChain.id === chain.id ? "border-teal-500 bg-teal-50" : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="text-3xl mb-2">{chain.icon}</div>
              <div className="font-semibold text-sm">{chain.name}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Chain Details */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{selectedChain.name} 지갑</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
            <span className="text-gray-600">잔액</span>
            <span className="text-2xl font-bold text-gray-900">{selectedChain.balance}</span>
          </div>
          <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
            <span className="text-gray-600">USD 가치</span>
            <span className="text-xl font-semibold text-teal-600">${selectedChain.usdValue}</span>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <span className="text-gray-600 block mb-2">주소</span>
            <span className="font-mono text-sm break-all">{selectedChain.address}</span>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-3 gap-4">
        {[
          { title: "전송", icon: "📤", color: "from-blue-400 to-blue-600" },
          { title: "수신", icon: "📥", color: "from-green-400 to-green-600" },
          { title: "스왑", icon: "🔄", color: "from-purple-400 to-purple-600" },
        ].map((action, idx) => (
          <button
            key={idx}
            className={`bg-gradient-to-br ${action.color} rounded-xl p-6 text-white hover:scale-105 transition-transform shadow-lg`}
          >
            <div className="text-4xl mb-3">{action.icon}</div>
            <h3 className="text-xl font-bold">{action.title}</h3>
          </button>
        ))}
      </div>
    </div>
  )
}
