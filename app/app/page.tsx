// app/app/page.tsx
"use client";

import { usePrivy } from "@privy-io/react-auth";
import LoginButton from "@/components/auth/LoginButton";

export default function DashboardPage() {
  const { ready, authenticated, user, logout } = usePrivy();

  // Wait for the Privy SDK to be ready
  if (!ready) {
    return <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">Loading...</div>;
  }

  // If the user is not authenticated, redirect to onboarding or show login
  if (ready && !authenticated) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-white">
            <div className="text-center p-8 max-w-md">
                <h1 className="text-3xl font-bold mb-4">Please Log In</h1>
                <p className="text-slate-400 mb-8">
                    You need to be logged in to access the dashboard.
                </p>
                <LoginButton />
            </div>
        </div>
    );
  }

  // If authenticated, show the dashboard
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Welcome to your Dashboard</h1>
            <button
                onClick={logout}
                className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white font-semibold rounded-lg transition-colors"
            >
                Logout
            </button>
        </div>

        {user?.wallet ? (
          <div className="bg-slate-900 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-teal-400">Your Wallet Information</h2>
            <p className="text-slate-300">
              <span className="font-medium text-slate-500">Address:</span>
              <code className="ml-2 bg-slate-800 px-2 py-1 rounded">{user.wallet.address}</code>
            </p>
          </div>
        ) : (
          <p>Could not find your wallet information.</p>
        )}
      </div>
    </div>
  );
}