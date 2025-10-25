import Hero from "@/components/landing/Hero"
import Features from "@/components/landing/Features"
import Security from "@/components/landing/Security"
import CTA from "@/components/landing/CTA"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Security />
      <CTA />
    </main>
  )
}
