import Navbar from "@/components/landing/Navbar"
import Hero from "@/components/landing/Hero"
import DemoSection from "@/components/landing/DemoSection"
import Ecosystem from "@/components/landing/Ecosystem"
import Technology from "@/components/landing/Technology"
import Features from "@/components/landing/Features"
import Security from "@/components/landing/Security"
import Partnership from "@/components/landing/Partnership"
import FutureRoadmap from "@/components/landing/FutureRoadmap"
import CTA from "@/components/landing/CTA"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <DemoSection />
      <Ecosystem />
      <Technology />
      <Features />
      <Security />
      <Partnership />
      <FutureRoadmap />
      <CTA />
    </main>
  )
}
