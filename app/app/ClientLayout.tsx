"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Star, CreditCard, Globe, Wallet } from "lucide-react"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [isConnected, setIsConnected] = useState(false)

  const navItems = [
    { path: "/app", label: "대시보드", icon: LayoutDashboard },
    { path: "/app/trust-score", label: "Trust Score", icon: Star },
    { path: "/app/transactions", label: "거래", icon: CreditCard },
    { path: "/app/multichain", label: "멀티체인", icon: Globe },
  ]

  return (
    <div className="min-h-screen bg-slate-950">
      {/* <CHANGE> Updated to dark theme navigation */}
      <nav className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400">
                TrustFi
              </div>
            </Link>

            {/* Nav Items */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                      pathname === item.path
                        ? "bg-teal-500/10 text-teal-400 font-semibold border border-teal-500/20"
                        : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"
                    }`}
                  >
                    {/* <CHANGE> Replaced emoji with lucide-react icon */}
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </Link>
                )
              })}
            </div>

            {/* Wallet Connection */}
            <button
              onClick={() => setIsConnected(!isConnected)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-colors ${
                isConnected
                  ? "bg-green-500/10 text-green-400 border border-green-500/20"
                  : "bg-teal-500 text-white hover:bg-teal-600"
              }`}
            >
              <Wallet className="w-4 h-4" />
              {isConnected ? "연결됨" : "지갑 연결"}
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">{children}</main>
    </div>
  )
}
