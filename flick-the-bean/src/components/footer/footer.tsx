import { FC } from "react";
import UnlockRewards from "../unlock-rewards/unlockRewards";

interface FooterProps {
}

const Footer:FC<FooterProps> = ({  }) => {
  return(
  <footer className="footer mt-0">
    <UnlockRewards />
    <h3 className="footer__heading">
      Game powered by ordinal <a href="#" className="footer__heading-number">12335432232</a>
    </h3>
    <h3 className="footer__subheading">All rights reserved to Flick the Bean ©</h3>
  </footer>
    
  )
}

export default Footer;