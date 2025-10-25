"use client"

import type React from "react"

import { PrivyProvider } from "@privy-io/react-auth"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { mainnet, polygon, avalanche, arbitrum, base } from "viem/chains"

const queryClient = new QueryClient()

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <PrivyProvider
      appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID || ""}
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
        supportedChains: [mainnet, polygon, avalanche, arbitrum, base],
      }}
    >
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </PrivyProvider>
  )
}
