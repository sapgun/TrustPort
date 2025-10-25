"use client"

import TransactionReview from "@/components/app/TransactionReview"

export default function TransactionsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">거래 실행</h1>
        <p className="text-xl text-gray-600">6-Layer Security OS가 보호합니다</p>
      </div>
      <TransactionReview />
    </div>
  )
}
