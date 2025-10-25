# Trustport website guide

*Automatically synced with your [v0.dev](https://v0.dev) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/trenchclub/v0-trustport-website-guide)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.dev-black?style=for-the-badge)](https://v0.dev/chat/projects/IeZba12wCfl)

## Overview

This repository will stay in sync with your deployed chats on [v0.dev](https://v0.dev).
Any changes you make to your deployed app will be automatically pushed to this repository from [v0.dev](https://v0.dev).

## Deployment

Your project is live at:

**[https://vercel.com/trenchclub/v0-trustport-website-guide](https://vercel.com/trenchclub/v0-trustport-website-guide)**

## Build your app

Continue building your app on:

**[https://v0.dev/chat/projects/IeZba12wCfl](https://v0.dev/chat/projects/IeZba12wCfl)**

## How It Works

1. Create and modify your project using [v0.dev](https://v0.dev)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository

---

## 아키텍처 분석 보고서

### 1. 기술 스택 및 프로젝트 구성

*   **프로젝트 생성**: `v0.dev`를 통해 자동 생성되었으며, Vercel에 배포됩니다.
*   **핵심 프레임워크**: **Next.js (v16.0.0)** 및 **React (v19.2.0)** 기반의 최신 웹 애플리케이션입니다.
*   **언어**: **TypeScript**를 사용하여 타입 안정성을 확보하고 있으며, `@/*`와 같은 경로 별칭을 지원합니다.
*   **UI 및 스타일링**:
    *   **Tailwind CSS (v4.1.9)** 를 사용하여 UI 스타일을 관리합니다.
    *   **Radix UI** 라이브러리를 적극 활용하여 접근성 높은 UI 컴포넌트를 구축합니다.
    *   `clsx`와 `tailwind-merge`로 클래스 이름을 동적으로 관리합니다.
*   **폼 처리**: **React Hook Form**과 **Zod**를 사용하여 폼 상태 및 유효성 검사를 효율적으로 처리합니다.
*   **애니메이션**: **Framer Motion**을 사용하여 풍부하고 동적인 UI 애니메이션을 구현합니다.
*   **아이콘**: **Lucide React**를 통해 일관된 디자인의 아이콘 시스템을 사용합니다.

### 2. 디렉토리 구조

Next.js의 표준을 따르는 잘 분리된 구조를 가지고 있습니다.

*   **`app/`**: Next.js App Router의 핵심 디렉토리로, 라우팅, 페이지(`page.tsx`), 공통 레이아웃(`layout.tsx`)을 관리합니다.
*   **`components/`**: 재사용 가능한 React 컴포넌트 디렉토리입니다.
    *   **`landing/`**: 랜딩 페이지에서만 사용되는 특정 컴포넌트들이 모여있어 구조가 명확합니다.
*   **`data/`**: `*.json` 형태의 정적 데이터를 저장하여 API 없이 프론트엔드에서 데이터를 관리합니다.
*   **`lib/`**: `utils.ts`와 같이 프로젝트 전반에서 사용되는 공통 유틸리티 함수를 관리합니다.
*   **`public/`**: 이미지, 폰트 등 정적 에셋을 관리합니다.
*   **`styles/`**: `globals.css` 등 전역 스타일 시트를 관리합니다.

### 3. 랜딩 페이지 분석

랜딩 페이지는 사용자의 행동을 자연스럽게 유도하는 논리적인 흐름으로 구성되어 있습니다.

*   **진입점**: `app/page.tsx`
*   **컴포넌트 구조**: 5개의 핵심 컴포넌트가 순차적으로 렌더링됩니다.
    1.  **`Navbar`**: 최상단 네비게이션 및 앱 진입('시작하기') 기능.
    2.  **`Hero`**: 서비스의 핵심 가치와 첫인상을 전달.
    3.  **`Features`**: 서비스의 4가지 주요 기능(아키텍처)을 상세히 설명.
    4.  **`Security`**: 서비스의 6단계 보안 기능을 집중적으로 부각.
    5.  **`CTA`**: '데모 시작하기' 버튼으로 사용자의 최종 행동을 유도.
*   **특징**: 모든 컴포넌트가 `framer-motion`을 활용한 풍부한 애니메이션을 포함하여 동적인 사용자 경험을 제공합니다.

### 4. 확장성 및 모듈 추가 제안

현재 구조는 매우 확장성이 좋으며, 아래 가이드라인에 따라 효율적으로 모듈을 추가할 수 있습니다.

*   **신규 페이지 추가**: `app` 디렉토리 내에 `app/새페이지/page.tsx`와 같은 폴더 기반 라우팅을 사용합니다.
*   **공용 컴포넌트 추가**: 버튼, 모달 등 범용적인 컴포넌트는 `components/ui/` 디렉토리를 신설하여 관리하는 것을 추천합니다. (shadcn/ui 방식)
*   **상태 관리**: 여러 컴포넌트가 공유하는 상태가 필요할 경우, **Zustand**나 **Jotai**와 같은 가벼운 전역 상태 관리 라이브러리 도입을 권장합니다.
*   **데이터 연동**: 외부 API 연동이 필요할 경우, 데이터 캐싱 및 재검증에 강점이 있는 **SWR** 또는 **React Query (TanStack Query)** 사용을 추천합니다.
*   **품질 개선 제안**: 장기적인 안정성을 위해 `next.config.mjs`의 `eslint` 및 `typescript` 오류 무시 설정을 점진적으로 해결하고 제거하는 것을 권장합니다.
