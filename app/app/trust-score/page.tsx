'use client';

import { usePrivy } from '@privy-io/react-auth';
import TrustScoreDisplay from '@/components/app/TrustScoreDisplay';

export default function TrustScorePage() {
  const { authenticated } = usePrivy();

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-400 to-orange-600 rounded-2xl p-8 text-white">
        <h1 className="text-4xl font-bold mb-2">Trust Score</h1>
        <p className="text-yellow-100">
          온체인 신뢰의 새로운 표준
        </p>
      </div>

      {authenticated ? (
        <TrustScoreDisplay />
      ) : (
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-8 text-center">
          <div className="text-6xl mb-4">🔐</div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            지갑 연결이 필요합니다
          </h3>
          <p className="text-gray-600">
            Trust Score를 확인하려면 먼저 지갑을 연결해주세요.
          </p>
        </div>
      )}

      {/* How to Improve */}
      <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          💪 점수 향상 방법
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4">
            <h3 className="font-bold text-gray-900 mb-2">빠른 점수 획득</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✅ PASS 실명 인증: 즉시 +300점</li>
              <li>✅ 첫 거래 실행: +10점</li>
              <li>✅ NFT 민팅: +5점</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h3 className="font-bold text-gray-900 mb-2">장기 점수 관리</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>📈 안전한 거래 유지</li>
              <li>📈 커뮤니티 활동 참여</li>
              <li>📈 기관 검증 신청</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
