"use client"

import { useState, useEffect } from "react"

export function useIsMobile() {
  // 기본값을 false로 설정하여 서버와 클라이언트 간 불일치 방지
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // 클라이언트 사이드에서만 실행
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // 초기 체크
    checkDevice()

    // 리사이즈 이벤트 리스너
    window.addEventListener("resize", checkDevice)

    return () => {
      window.removeEventListener("resize", checkDevice)
    }
  }, [])

  return isMobile
}

export function useIsTouch() {
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    // 클라이언트 사이드에서만 실행
    setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0)
  }, [])

  return isTouch
}
