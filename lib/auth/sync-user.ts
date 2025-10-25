"use server"

import { createClient } from "@/lib/supabase/server"

export async function syncUserToSupabase(privyUser: {
  id: string
  email?: { address: string } | null
  google?: { email: string; name?: string; picture?: string } | null
  wallet?: { address: string } | null
}) {
  const supabase = await createClient()

  const email = privyUser.email?.address || privyUser.google?.email || null
  const displayName = privyUser.google?.name || email?.split("@")[0] || "사용자"
  const avatarUrl = privyUser.google?.picture || null

  // 기존 프로필 확인
  const { data: existingProfile } = await supabase
    .from("user_profiles")
    .select("*")
    .eq("privy_user_id", privyUser.id)
    .single()

  if (existingProfile) {
    // 기존 프로필 업데이트
    const { error } = await supabase
      .from("user_profiles")
      .update({
        email,
        display_name: displayName,
        avatar_url: avatarUrl,
      })
      .eq("privy_user_id", privyUser.id)

    if (error) {
      console.error("[v0] Failed to update user profile:", error)
      return { success: false, error: error.message }
    }

    return { success: true, profile: existingProfile }
  } else {
    // 새 프로필 생성
    const { data: newProfile, error } = await supabase
      .from("user_profiles")
      .insert({
        privy_user_id: privyUser.id,
        email,
        display_name: displayName,
        avatar_url: avatarUrl,
        trust_score: 0,
        trust_level: "Bronze",
      })
      .select()
      .single()

    if (error) {
      console.error("[v0] Failed to create user profile:", error)
      return { success: false, error: error.message }
    }

    return { success: true, profile: newProfile, isNew: true }
  }
}
