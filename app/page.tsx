import Navbar from "@/components/landing/Navbar"
import Hero from "@/components/landing/Hero"
import Features from "@/components/landing/Features"
import Security from "@/components/landing/Security"
import FutureRoadmap from "@/components/landing/FutureRoadmap"
import CTA from "@/components/landing/CTA"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Security />
      <FutureRoadmap />
      <CTA />
    </main>
  )
}
