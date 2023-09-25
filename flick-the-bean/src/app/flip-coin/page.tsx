"use client"

import Error from "@/components/error/error";
import FlipCoinContent from "@/components/flip-coin-content/flipCoinContent";
import GetCookie from "@/hooks/cookies/getCookie";
import { useEffect, useState } from "react";

export default function FlipCoin() {
  const[isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const userId = GetCookie('userId');
		if (userId == '') {
      setIsLoggedIn(false);
		} else {
      setIsLoggedIn(true);
    }
  }, [])
  return (
    <>
      {isLoggedIn ? (
        <FlipCoinContent />
      ) : (
        <Error
          message={'Please login first to access this page'}
          route={'/'}
          icon={'svgs/stop.svg'}
        />
      )}
    </>
  )
}
