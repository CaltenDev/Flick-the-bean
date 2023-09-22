"use client"

import FlipCoinContent from "@/components/flip-coin-content/flipCoinContent";
import GetCookie from "@/hooks/cookies/getCookie";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function FlipCoin() {
  const router = useRouter();
  useEffect(() => {
    const userId = GetCookie('userId');
		if (userId == '') {
      router.push('/');
		}
  }, [])
  return (
    <>
      <FlipCoinContent />
    </>
  )
}
