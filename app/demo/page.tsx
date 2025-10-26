import DemoContainer from "@/components/demo/DemoContainer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function DemoPage() {
  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <div className="mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">뒤로가기</span>
        </Link>
      </div>
      {/* </CHANGE> */}

      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          TrustFi 6-Layer Security OS - Interactive Demo
        </h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
          다양한 트랜잭션 시나리오를 선택하고 TrustFi의 다층 보안 시스템이 어떻게 실시간으로 위협을 탐지하고 방어하는지
          직접 체험해보세요.
        </p>
      </header>
      <main>
        <DemoContainer />
      </main>
    </div>
  )
}
