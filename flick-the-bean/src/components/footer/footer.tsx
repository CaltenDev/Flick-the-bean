"use client";

import { useGlobalContext } from "@/app/react-query-provider/reactQueryProvider";
import GetCookie from "@/hooks/cookies/getCookie";
import { usePathname } from "next/navigation";
import { FC, useEffect } from "react";
import UnlockRewards from "../unlock-rewards/unlockRewards";

interface FooterProps {
}

const Footer:FC<FooterProps> = () => {
  const router = usePathname();
  const { isLoggedin, setIsLoggedIn } = useGlobalContext();
  console.log("isLogged In",isLoggedin);
  console.log("path",router);
  useEffect(() => {
    const userId = GetCookie('userId');
    if(userId != '') {
      setIsLoggedIn(true);
    }
  }, [])
  return(
  <footer className="footer">
    { isLoggedin && <UnlockRewards /> }
    <h3 className="footer__heading">
      Game powered by ordinal <a href="#" className="footer__heading-number">12335432232</a>
    </h3>
    <h3 className="footer__subheading">All rights reserved to Flick the Bean ©</h3>
  </footer>
    
  )
}

export default Footer;