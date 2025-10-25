"use client"

import type React from "react"
import { PrivyProvider } from "@privy-io/react-auth"
import { WagmiProvider } from "@privy-io/wagmi"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { useState, useMemo, useEffect } from "react"
import { createConfig } from "@privy-io/wagmi"
import { http } from "wagmi"
import { mainnet, polygon, avalanche, arbitrum, base } from "wagmi/chains"

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    console.log("[v0] === Privy 초기화 디버깅 ===")
    console.log("[v0] NEXT_PUBLIC_PRIVY_APP_ID 존재:", !!process.env.NEXT_PUBLIC_PRIVY_APP_ID)
    console.log("[v0] 환경 변수 타입:", typeof process.env.NEXT_PUBLIC_PRIVY_APP_ID)
    console.log("[v0] 환경 변수 길이:", process.env.NEXT_PUBLIC_PRIVY_APP_ID?.length)
  }, [])

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: 1,
          },
        },
      }),
  )

  const wagmiConfig = useMemo(() => {
    console.log("[v0] wagmi config 생성 중...")
    const config = createConfig({
      chains: [mainnet, polygon, avalanche, arbitrum, base],
      transports: {
        [mainnet.id]: http("https://eth.llamarpc.com"),
        [polygon.id]: http("https://polygon-rpc.com"),
        [avalanche.id]: http("https://api.avax.network/ext/bc/C/rpc"),
        [arbitrum.id]: http("https://arb1.arbitrum.io/rpc"),
        [base.id]: http("https://mainnet.base.org"),
      },
      ssr: true,
    })
    console.log("[v0] wagmi config 생성 완료:", config)
    return config
  }, [])

  const privyAppId = process.env.NEXT_PUBLIC_PRIVY_APP_ID

  if (!privyAppId) {
    console.error("[v0] ❌ NEXT_PUBLIC_PRIVY_APP_ID is not set")
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-400 text-xl mb-4">설정 오류</div>
          <div className="text-slate-400">NEXT_PUBLIC_PRIVY_APP_ID 환경 변수가 설정되지 않았습니다.</div>
          <div className="text-slate-500 text-sm mt-2">Vars 섹션에서 환경 변수를 확인해주세요.</div>
        </div>
      </div>
    )
  }

  console.log("[v0] ✅ Privy Provider 렌더링 시작, appId:", privyAppId.slice(0, 10) + "...")

  return (
    <PrivyProvider
      appId={privyAppId}
      config={{
        loginMethods: ["google", "email", "wallet"],
        appearance: {
          theme: "dark",
          accentColor: "#14b8a6",
        },
        embeddedWallets: {
          createOnLogin: "users-without-wallets",
          requireUserPasswordOnCreate: false,
        },
      }}
      onSuccess={() => {
        console.log("[v0] ✅ Privy 초기화 성공")
      }}
    >
      <QueryClientProvider client={queryClient}>
        <WagmiProvider config={wagmiConfig} reconnectOnMount={false}>
          {children}
        </WagmiProvider>
      </QueryClientProvider>
    </PrivyProvider>
  )
}
