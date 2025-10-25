'use client';

import { usePrivy } from '@privy-io/react-auth';
import TransactionReview from '@/components/app/TransactionReview';

export default function TransactionsPage() {
  const { authenticated } = usePrivy();

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
        <h1 className="text-4xl font-bold mb-2">거래 보안 검토</h1>
        <p className="text-blue-100">
          6-Layer Security OS로 완벽하게 보호됩니다
        </p>
      </div>

      {authenticated ? (
        <TransactionReview />
      ) : (
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-8 text-center">
          <div className="text-6xl mb-4">🔐</div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            지갑 연결이 필요합니다
          </h3>
          <p className="text-gray-600">
            거래를 실행하려면 먼저 지갑을 연결해주세요.
          </p>
        </div>
      )}
    </div>
  );
}