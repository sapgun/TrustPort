"use client"

import MultichainHub from "@/components/app/MultichainHub"

export default function MultichainPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">멀티체인 허브</h1>
        <p className="text-xl text-gray-600">하나의 UX로 모든 체인을 관리하세요</p>
      </div>
      <MultichainHub />
    </div>
  )
}
