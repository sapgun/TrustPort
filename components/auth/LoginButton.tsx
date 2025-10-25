// components/auth/LoginButton.tsx
"use client";
import { usePrivy } from "@privy-io/react-auth";

export default function LoginButton() {
  const { login } = usePrivy();

  return (
    <button
      onClick={login}
      className="px-6 py-3 bg-teal-500 hover:bg-teal-400 text-black font-semibold rounded-lg transition-colors"
    >
      Login with Privy
    </button>
  );
}