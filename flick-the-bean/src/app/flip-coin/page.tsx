"use client"

import FlipCoinContent from "@/components/flip-coin-content/flipCoinContent";
import GetCookie from "@/hooks/cookies/getCookie";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function FlipCoin() {
  const router = useRouter();
  useEffect(() => {
    const sign = GetCookie('sign');
		const publicKey = GetCookie('publicKey');
		if (sign == '' && publicKey == '') {
      alert('No Public Key or signed Message')
      router.push('/');
		}
  }, [])
  return (
    <>
      <FlipCoinContent />
    </>
  )
}
