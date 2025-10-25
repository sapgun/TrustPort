"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import transactionData from "@/data/transactionData.json"

export default function TransactionReview() {
  const [selectedTx, setSelectedTx] = useState(transactionData.scenarios[0])
  const [currentLayer, setCurrentLayer] = useState(0)
  const [isExecuting, setIsExecuting] = useState(false)

  const securityLayers = [
    { name: "NL Review", icon: "🔍", status: "checking" },
    { name: "AI Risk", icon: "🤖", status: "pending" },
    { name: "Firewall", icon: "🛡️", status: "pending" },
    { name: "Delay", icon: "⏱️", status: "pending" },
    { name: "Policy", icon: "⚙️", status: "pending" },
    { name: "Execute", icon: "✅", status: "pending" },
  ]

  const handleExecute = async () => {
    setIsExecuting(true)
    for (let i = 0; i < securityLayers.length; i++) {
      setCurrentLayer(i)
      await new Promise((resolve) => setTimeout(resolve, 1000))
    }
    setIsExecuting(false)
    setCurrentLayer(0)
  }

  return (
    <div className="space-y-6">
      {/* Transaction Selection */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">거래 선택</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {transactionData.scenarios.map((tx, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedTx(tx)}
              className={`p-4 rounded-lg border-2 transition-all text-left ${
                selectedTx.id === tx.id ? "border-teal-500 bg-teal-50" : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-gray-900">{tx.type}</span>
                <span
                  className={`px-2 py-1 rounded text-xs font-semibold ${
                    tx.riskLevel === "low"
                      ? "bg-green-100 text-green-700"
                      : tx.riskLevel === "medium"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                  }`}
                >
                  {tx.riskLevel.toUpperCase()}
                </span>
              </div>
              <p className="text-sm text-gray-600">{tx.description}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Transaction Details */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">거래 상세</h2>
        <div className="space-y-3">
          <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
            <span className="text-gray-600">From:</span>
            <span className="font-mono text-sm">{selectedTx.from}</span>
          </div>
          <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
            <span className="text-gray-600">To:</span>
            <span className="font-mono text-sm">{selectedTx.to}</span>
          </div>
          <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
            <span className="text-gray-600">Amount:</span>
            <span className="font-semibold">{selectedTx.amount}</span>
          </div>
          <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
            <span className="text-gray-600">Chain:</span>
            <span className="font-semibold">{selectedTx.chain}</span>
          </div>
        </div>
      </div>

      {/* Security Layers */}
      {isExecuting && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-md p-6"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">보안 검사 진행 중</h2>
          <div className="space-y-3">
            {securityLayers.map((layer, idx) => (
              <div
                key={idx}
                className={`flex items-center justify-between p-4 rounded-lg ${
                  idx < currentLayer ? "bg-green-50" : idx === currentLayer ? "bg-blue-50" : "bg-gray-50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{layer.icon}</span>
                  <span className="font-semibold">{layer.name}</span>
                </div>
                {idx < currentLayer && <span className="text-green-600">✅</span>}
                {idx === currentLayer && <span className="text-blue-600">⏳</span>}
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Execute Button */}
      <button
        onClick={handleExecute}
        disabled={isExecuting}
        className="w-full px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-2xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isExecuting ? "보안 검사 중..." : "거래 실행"}
      </button>
    </div>
  )
}
