# TrustFi — Web3 Trust & Security Gateway

**누구나 안전하게 Web3를 시작하고 사용할 수 있게 만드는 신뢰 기반 게이트웨이**

TrustFi는 Web3의 복잡한 보안 문제(지갑 관리, 승인 위험, 피싱, KYC 등)를 해결하기 위해 만들어진 **Trust Operating System**입니다.

## 🚀 Live Demo
[TrustFi → https://trustfi-xxx.vercel.app](링크 업데이트)

## 💡 해결하는 문제
Web3를 사용하려면 사용자가 보안 전문가가 되어야 합니다.  
TrustFi는 **"사용자가 위험을 감수하지 않아도 되는 Web3"**를 목표로 합니다.

## ✨ 핵심 기능
- **10초 온보딩** (PASS / Google / Apple 연동)
- **Signing Firewall** — 서명 전에 위험 분석 및 자연어 설명
- **Trust Score System** — 온체인 + 오프체인 신뢰도 종합 평가
- **Multi-chain Security Dashboard**
- **Trust Vault** — LST / Staking 보상 확대
- **Trust Point Economy** — 안전한 행동 → USDC / TPT 보상

## 🛠 Tech Stack
- **Frontend**: Next.js 15.2.8 + TypeScript + App Router
- **3D Visualization**: Three.js + React Three Fiber + Drei
- **UI**: shadcn/ui + Tailwind CSS + Framer Motion
- **AI**: Vercel AI SDK
- **Deployment**: Vercel

## 📍 현재 개발 단계
**MVP 1단계 (Security Dashboard + Trust Point)**  
→ 3D 대시보드, Trust Score 시각화, Vault UI, Pool Lineup, Earn 시스템 구현 완료

**다음 단계 (MVP 2)**
- Signing Firewall (트랜잭션 시뮬레이션 + 위험 분석)
- DID / Trust Score NFT 연동
- 실제 Web3 지갑 연결 (wagmi + viem)

## 🔮 Vision
TrustFi는 단순한 지갑이나 대시보드가 아닙니다.  
**Web3를 위한 신뢰 인프라**이자, **모두를 위한 Web3 Trust OS**를 목표로 합니다.

---

### 3. 당장 정리해야 할 것들

1. **불필요한 파일 삭제**
   - `app/api/news/*` 전체 삭제 (TrustFi와 전혀 관련 없음)
   - `app/api/test/route.ts` 삭제
   - 불필요한 mock 데이터 정리

2. **메인 페이지 (`app/page.tsx`)에 TrustFi 브랜딩 강화**
   - 현재 Hero는 좋지만, "TrustFi" 컨셉을 더 강하게 드러내기

3. **프로젝트 구조 정리**
   - `components/landing/` 폴더를 `components/`로 적절히 재배치
   - 불필요한 `expo`, `react-native` 관련 의존성 제거 (현재 필요 없음)

---

**지금 바로 할 일 순서**

1. 레포 이름 `TrustFi`로 변경
2. README.md 위 내용으로 교체
3. `pnpm run build` 해서 빌드 확인
4. 불필요한 `/api/news` 관련 파일 삭제 후 다시 build & push

---

원하는 부분부터 집중적으로 도와줄게요.

**지금 어떤 걸 먼저 하고 싶어?**

- A. README.md를 더 세련되게 다듬어달라
- B. 불필요 파일 정리 방법 상세 가이드
- C. Signing Firewall 페이지 스케치 + 코드 방향성
- D. 전체 프로젝트 구조 리팩토링 제안

번호나 원하는 방향 말해줘!
