"use client"

import { useState } from "react"
import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { ArrowRight, Shield, Wallet, Globe, Users, Mail, Download, Play, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { InteractiveBackground } from "@/components/interactive-background"
import { ScrollBasedAnimation, ParallaxSection } from "@/components/scroll-based-animation"
import { EnhancedThreeScene } from "@/components/enhanced-three-scene"
import { Footer } from "@/components/footer" // Declare the Footer variable before using it

export default function TrustPortLanding() {
  const { scrollYProgress } = useScroll()
  const scrollProgress = useTransform(scrollYProgress, [0, 1], [0, 1])
  const [mounted, setMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setMounted(true)

    // 모바일 감지
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white relative">
      {mounted && <InteractiveBackground scrollProgress={scrollProgress.get()} />}
      <Header />
      <HeroSection isMobile={isMobile} />
      <FeaturesSection />
      <UseCasesSection />
      <TechnologySection />
      <TeamSection />
      <CTASection />
      <Footer />
    </div>
  )
}

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md border-b border-[#00C2A8]/20" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div className="text-2xl font-bold text-white" whileHover={{ scale: 1.05 }}>
          <span className="text-[#00C2A8]">Trust</span>Port
        </motion.div>

        <div className="hidden md:flex items-center space-x-8">
          {["Features", "Use Cases", "Technology", "Team", "Start"].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-white/80 hover:text-[#00C2A8] transition-colors"
              whileHover={{ y: -2 }}
            >
              {item}
            </motion.a>
          ))}
        </div>

        <Button className="bg-[#00C2A8] hover:bg-[#00A693] text-white border border-[#00C2A8]/50">Get Started</Button>
      </nav>
    </motion.header>
  )
}

function HeroSection({ isMobile }: { isMobile: boolean }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* 텍스트 뒤 애니메이션 배경 */}
      <div className="absolute inset-0 z-0">
        <HeroBackgroundAnimation />
      </div>

      <motion.div style={{ y, opacity }} className="container mx-auto px-6 text-center relative z-10">
        <motion.h1
          className="text-6xl lg:text-8xl font-bold mb-8 leading-tight relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Web3 실명 인증의{" "}
          <motion.span
            className="text-[#00C2A8] relative"
            animate={{
              textShadow: [
                "0 0 20px rgba(0, 194, 168, 0.5)",
                "0 0 40px rgba(0, 194, 168, 0.8)",
                "0 0 20px rgba(0, 194, 168, 0.5)",
              ],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            게이트웨이
            {/* 게이트웨이 텍스트 주변 특별 효과 */}
            <motion.div
              className="absolute -inset-4 border border-[#00C2A8]/30 rounded-lg"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            />
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-xl lg:text-2xl mb-12 text-gray-300 leading-relaxed max-w-4xl mx-auto relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          PASS 기반 실명 인증부터 DID 생성, Web3 온체인 참여까지
          <br />
          신뢰할 수 있는 디지털 신원의 새로운 표준
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Button
            size="lg"
            className="bg-[#00C2A8] hover:bg-[#00A693] text-white group px-8 py-4 text-lg border border-[#00C2A8]/50"
          >
            지금 시작하기
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg"
          >
            <Play className="mr-2 h-5 w-5" />
            데모 보기
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <ChevronDown className="h-8 w-8 text-[#00C2A8]" />
      </motion.div>
    </section>
  )
}

function HeroBackgroundAnimation() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* 네트워크 노드들 */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`node-${i}`}
            className="absolute w-3 h-3 bg-[#00C2A8]/40 rounded-full"
            style={{
              left: `${10 + (i % 4) * 25}%`,
              top: `${20 + Math.floor(i / 4) * 30}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      {/* 연결선들 */}
      <svg className="absolute inset-0 w-full h-full">
        {[...Array(8)].map((_, i) => (
          <motion.line
            key={`line-${i}`}
            x1={`${15 + (i % 3) * 30}%`}
            y1={`${25 + Math.floor(i / 3) * 25}%`}
            x2={`${35 + (i % 3) * 30}%`}
            y2={`${35 + Math.floor(i / 3) * 25}%`}
            stroke="#00C2A8"
            strokeWidth="1"
            opacity="0.3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.5,
            }}
          />
        ))}
      </svg>

      {/* 플로팅 데이터 블록들 */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`block-${i}`}
            className="absolute w-8 h-8 border border-[#00C2A8]/30 bg-[#00C2A8]/10"
            style={{
              left: `${5 + i * 15}%`,
              top: `${10 + (i % 2) * 60}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotateY: [0, 180, 360],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.8,
            }}
          />
        ))}
      </div>

      {/* 인증 체크마크들 */}
      <div className="absolute inset-0">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`check-${i}`}
            className="absolute text-[#00C2A8] text-2xl"
            style={{
              left: `${20 + i * 20}%`,
              top: `${15 + (i % 2) * 50}%`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1.2, 1, 0],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 1.5,
            }}
          >
            ✓
          </motion.div>
        ))}
      </div>

      {/* 방패 아이콘들 */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`shield-${i}`}
            className="absolute text-[#00C2A8]/50 text-xl"
            style={{
              left: `${30 + i * 25}%`,
              top: `${40 + (i % 2) * 20}%`,
            }}
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 10, -10, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 2,
            }}
          >
            🛡️
          </motion.div>
        ))}
      </div>

      {/* 데이터 플로우 파티클들 */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-[#00C2A8] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* 원형 펄스 효과 */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`pulse-${i}`}
            className="absolute border border-[#00C2A8]/20 rounded-full"
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.1, 0.2],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 2,
            }}
          />
        ))}
      </div>

      {/* 키워드 플로팅 텍스트 */}
      <div className="absolute inset-0">
        {["PASS", "DID", "Web3", "Trust", "KYC", "DAO"].map((text, i) => (
          <motion.div
            key={`text-${i}`}
            className="absolute text-[#00C2A8]/20 text-sm font-mono"
            style={{
              left: `${10 + (i % 3) * 30}%`,
              top: `${20 + Math.floor(i / 3) * 40}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 1.2,
            }}
          >
            {text}
          </motion.div>
        ))}
      </div>

      {/* 그리드 라인 효과 */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-[url('data:image/svg+xml,%3Csvg width%3D%2240%22 height%3D%2240%22 viewBox%3D%220 0 40 40%22 xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg fill%3D%22none%22 fillRule%3D%22evenodd%22%3E%3Cg stroke%3D%22%2300C2A8%22 strokeWidth%3D%221%22%3E%3Cpath d%3D%22M0 40L40 0M40 40L0 0%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
    </div>
  )
}

function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: Shield,
      title: "PASS 기반 실명 인증",
      description: "정부 공인 PASS 인증을 통한 안전하고 신뢰할 수 있는 신원 확인",
      details: ["본인인증 API 연동", "개인정보 보호", "법적 효력 보장"],
    },
    {
      icon: Wallet,
      title: "DID 생성 & 신뢰 지갑",
      description: "탈중앙화 신원증명과 개인 키 관리를 위한 보안 지갑 발급",
      details: ["Self-Sovereign Identity", "키 복구 시스템", "멀티체인 지원"],
    },
    {
      icon: Globe,
      title: "Trust Score & 활동 이력",
      description: "온체인 활동 기반 신뢰도 점수와 투명한 이력 관리",
      details: ["활동 기반 점수", "이력 추적", "평판 시스템"],
    },
    {
      icon: Users,
      title: "Web3 서비스 연결",
      description: "DAO 투표, NFT, 결제 등 다양한 Web3 서비스와의 원활한 연동",
      details: ["DAO 거버넌스", "NFT 인증", "DeFi 연동"],
    },
  ]

  return (
    <section id="features" ref={ref} className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1C1F2A]/50 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <ScrollBasedAnimation>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">핵심 기능</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              실명 인증부터 Web3 참여까지, 모든 과정을 하나의 플랫폼에서
            </p>
          </div>
        </ScrollBasedAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <ScrollBasedAnimation key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="h-full bg-black/40 border-[#00C2A8]/20 backdrop-blur-sm hover:border-[#00C2A8]/50 transition-all duration-300 group">
                  <CardHeader>
                    <motion.div
                      className="w-12 h-12 bg-[#00C2A8]/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#00C2A8]/40 transition-colors"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <feature.icon className="h-6 w-6 text-[#00C2A8]" />
                    </motion.div>
                    <CardTitle className="text-white">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4 text-gray-300">{feature.description}</CardDescription>
                    <ul className="space-y-2">
                      {feature.details.map((detail, i) => (
                        <li key={i} className="text-sm text-gray-400 flex items-center">
                          <div className="w-1.5 h-1.5 bg-[#00C2A8] rounded-full mr-2" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </ScrollBasedAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}

function UseCasesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const useCases = [
    {
      title: "DAO 거버넌스",
      description: "실명 인증된 사용자만 참여 가능한 투명한 DAO 투표",
      icon: "🏛️",
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "복지금 지급",
      description: "중복 수령 방지와 투명한 복지금 분배 시스템",
      icon: "💰",
      color: "from-green-500 to-green-600",
    },
    {
      title: "NFT 인증",
      description: "실명 기반 NFT 발행과 소유권 증명",
      icon: "🎨",
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "에어드랍",
      description: "시빌 어택 방지를 위한 검증된 에어드랍",
      icon: "🪂",
      color: "from-orange-500 to-orange-600",
    },
    {
      title: "DeFi 결제",
      description: "KYC 완료된 사용자 대상 안전한 금융 서비스",
      icon: "💳",
      color: "from-teal-500 to-teal-600",
    },
  ]

  return (
    <section id="use-cases" ref={ref} className="py-20 relative">
      <ParallaxSection speed={0.3}>
        <div className="absolute inset-0 bg-gradient-to-r from-[#00C2A8]/5 to-[#1C1F2A]/5" />
      </ParallaxSection>

      <div className="container mx-auto px-6 relative z-10">
        <ScrollBasedAnimation>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">활용 시나리오</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">다양한 Web3 서비스에서 TrustPort가 제공하는 가치</p>
          </div>
        </ScrollBasedAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <ScrollBasedAnimation key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group cursor-pointer"
              >
                <Card className="h-full overflow-hidden bg-black/40 border-[#00C2A8]/20 backdrop-blur-sm hover:border-[#00C2A8]/50 transition-all duration-300">
                  <div className={`h-2 bg-gradient-to-r ${useCase.color}`} />
                  <CardHeader className="text-center">
                    <motion.div className="text-4xl mb-4" whileHover={{ scale: 1.2, rotate: 10 }}>
                      {useCase.icon}
                    </motion.div>
                    <CardTitle className="text-white group-hover:text-[#00C2A8] transition-colors">
                      {useCase.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center mb-4 text-gray-300">{useCase.description}</CardDescription>
                    <Button
                      variant="outline"
                      className="w-full border-[#00C2A8]/30 text-white hover:bg-[#00C2A8] hover:text-white hover:border-[#00C2A8] transition-all"
                    >
                      자세히 보기
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </ScrollBasedAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}

function TechnologySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="technology" ref={ref} className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1C1F2A]/80 to-black/80" />

      <div className="container mx-auto px-6 relative z-10">
        <ScrollBasedAnimation>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">기술 구조</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              최신 블록체인 기술과 보안 프로토콜을 기반으로 구축
            </p>
          </div>
        </ScrollBasedAnimation>

        <ScrollBasedAnimation>
          <div className="relative max-w-4xl mx-auto mb-12">
            <EnhancedThreeScene />
          </div>
        </ScrollBasedAnimation>

        <ScrollBasedAnimation>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { icon: Shield, title: "PASS 인증", desc: "정부 공인 본인인증" },
              { icon: Wallet, title: "DID & ZK", desc: "영지식 증명 기반 신원" },
              { icon: Globe, title: "Cross-Chain", desc: "멀티체인 상호운용성" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="space-y-4"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="w-16 h-16 bg-[#00C2A8]/20 rounded-full flex items-center justify-center mx-auto border border-[#00C2A8]/30">
                  <item.icon className="h-8 w-8 text-[#00C2A8]" />
                </div>
                <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </ScrollBasedAnimation>
      </div>
    </section>
  )
}

function TeamSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const team = [
    { name: "김개발", role: "Lead Developer", image: "/placeholder.svg?height=200&width=200" },
    { name: "이블록", role: "Blockchain Engineer", image: "/placeholder.svg?height=200&width=200" },
    { name: "박디자인", role: "UI/UX Designer", image: "/placeholder.svg?height=200&width=200" },
    { name: "최보안", role: "Security Specialist", image: "/placeholder.svg?height=200&width=200" },
  ]

  const partners = ["PASS 인증기관", "블록체인 파트너", "정부기관", "금융기관"]

  return (
    <section id="team" ref={ref} className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1C1F2A]/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <ScrollBasedAnimation>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">팀 & 파트너</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Web3와 보안 전문가들이 함께 만들어가는 신뢰의 생태계
            </p>
          </div>
        </ScrollBasedAnimation>

        {/* 팀 소개 */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">팀</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <ScrollBasedAnimation key={index}>
                <motion.div
                  className="text-center group"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-2 border-[#00C2A8]/30 group-hover:border-[#00C2A8] transition-colors">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-semibold text-white">{member.name}</h4>
                  <p className="text-gray-400">{member.role}</p>
                </motion.div>
              </ScrollBasedAnimation>
            ))}
          </div>
        </div>

        {/* 파트너 */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">파트너</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <ScrollBasedAnimation key={index}>
                <motion.div
                  className="bg-black/40 p-6 rounded-lg border border-[#00C2A8]/20 text-center hover:border-[#00C2A8]/50 transition-all backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 bg-[#00C2A8]/20 rounded-lg mx-auto mb-4 flex items-center justify-center border border-[#00C2A8]/30">
                    <span className="text-2xl">🏢</span>
                  </div>
                  <p className="font-medium text-white">{partner}</p>
                </motion.div>
              </ScrollBasedAnimation>
            ))}
          </div>
        </div>

        {/* IR 자료 */}
        <ScrollBasedAnimation>
          <div className="text-center">
            <Button
              size="lg"
              variant="outline"
              className="border-[#00C2A8] text-[#00C2A8] hover:bg-[#00C2A8] hover:text-white px-8 py-4"
            >
              <Download className="mr-2 h-4 w-4" />
              IR 자료 다운로드
            </Button>
          </div>
        </ScrollBasedAnimation>
      </div>
    </section>
  )
}

function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="start" ref={ref} className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1C1F2A] to-black" />

      <div className="container mx-auto px-6 relative z-10">
        <ScrollBasedAnimation>
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">지금 시작하세요</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              TrustPort와 함께 안전하고 신뢰할 수 있는 Web3 여정을 시작하세요
            </p>
          </div>
        </ScrollBasedAnimation>

        <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* KYC 시뮬레이터 */}
          <ScrollBasedAnimation>
            <Card className="bg-black/40 border-[#00C2A8]/30 text-white backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl">KYC 시뮬레이터</CardTitle>
                <CardDescription className="text-gray-300">
                  PASS 인증 기반 실명 확인 과정을 체험해보세요
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button size="lg" className="w-full bg-[#00C2A8] hover:bg-[#00A693] text-white">
                  <Play className="mr-2 h-4 w-4" />
                  데모 체험하기
                </Button>
              </CardContent>
            </Card>
          </ScrollBasedAnimation>

          {/* 문의 양식 */}
          <ScrollBasedAnimation>
            <Card className="bg-black/40 border-[#00C2A8]/30 text-white backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl">기관 문의</CardTitle>
                <CardDescription className="text-gray-300">
                  TrustPort 도입에 관심이 있으시다면 연락주세요
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  placeholder="이메일 주소"
                  className="bg-black/20 border-[#00C2A8]/30 text-white placeholder:text-gray-400"
                />
                <Textarea
                  placeholder="문의 내용"
                  className="bg-black/20 border-[#00C2A8]/30 text-white placeholder:text-gray-400"
                />
                <Button size="lg" className="w-full bg-[#00C2A8] hover:bg-[#00A693] text-white">
                  <Mail className="mr-2 h-4 w-4" />
                  문의하기
                </Button>
              </CardContent>
            </Card>
          </ScrollBasedAnimation>
        </div>
      </div>
    </section>
  )
}
