// app/app/onboarding/page.tsx
import LoginButton from "@/components/auth/LoginButton";

export default function OnboardingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-white">
      <div className="text-center p-8 max-w-md">
        <h1 className="text-4xl font-bold mb-4">Welcome to TrustFi</h1>
        <p className="text-slate-400 mb-8">
          Login with your social account to create a secure wallet and get started.
        </p>
        <LoginButton />
      </div>
    </div>
  );
}