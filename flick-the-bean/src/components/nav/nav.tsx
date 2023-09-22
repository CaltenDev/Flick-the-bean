"use client"

import { useGlobalContext } from '@/app/layout';
import GetCookie from '@/hooks/cookies/getCookie';
import RemoveCookie from '@/hooks/cookies/removeCookie';
import { usePathname, useRouter } from 'next/navigation';
import { FC, useEffect, useState } from "react";
import FaqModal from '../faq-modal/faqModal';
import ProfileModal from '../profile-modal/profileModal';

interface NavbarProps {
}

const Navbar:FC<NavbarProps> = () => {
  const pathName = usePathname();
  const router = useRouter();
  const[openNav, setOpneNav] = useState(false);
  const[showFaqModal, setShowFaqModal] = useState(false);
  const[showProfileModal, setShowProfileModal] = useState(false);
  const[pubKey, setPubkey] = useState('');
  const { isLoggedin, setIsLoggedIn } = useGlobalContext();

  useEffect(() => {
    const key = GetCookie('publicKey');
    setPubkey(`${key.slice(0, 5)}....${key.slice(-8)}`);
  }, [pubKey])

  const handleNavbar = () => {
    setOpneNav(!openNav);
  }

  const handleFaqModal = () => {
    setShowFaqModal(!showFaqModal);
  }

  const handleProfileModal = () => {
    setShowProfileModal(!showProfileModal);
  }

  const logout = () => {
		RemoveCookie('userId');
    RemoveCookie('sign');
    RemoveCookie('gameNonce');
    RemoveCookie('commitment');
    RemoveCookie('publicKey');
    setIsLoggedIn(false);
    router.push('/');
	}

  return(
    <header className="header">
      <button className="flex-shrink-0">
        <img src="/static/svgs/logo.svg" alt="logo" onClick={() => router.push('/')} />
      </button>
      <div className="header__wrap">
        <div className="header__wrap">
          { pathName === '/flip-coin' && (
            <>
              <button className="btn-outline" onClick={() => router.push('/exchange')}>Exchange Token</button>

              <div className="header__profile">
                <figure className="header__profile-figure">
                  <img
                    className="header__profile-image"
                    src="/static/svgs/profile.svg"
                    alt="profile icon"
                  />
                  <div className="header__profile-notification">
                    <img
                      className="header__profile-notification-image"
                      src="/static/svgs/leahter-circular.png"
                      alt="icon"
                    />
                  </div>
                </figure>
                <p className="header__profile-text">{pubKey}</p>
                <button className="header__profile-share" onClick={logout}>
                  <img src="/static/svgs/profile-share.svg" alt="share icon" />
                </button>
              </div>
            </>
          )}
        </div>
        <div className={`hamburger ${openNav ? 'open' : ''}`} onClick={handleNavbar}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className="header__nav">
          <ul className={`header__list  ${openNav ? 'open' : ''}`}>
            <li className="header__item" onClick={handleFaqModal}><a id="faq-link" className="header__link">Faq</a></li>
            <li className="header__item"><a className="header__link">Stats</a></li>
            <li className="header__item"><a className="header__link">Flip History</a></li>
            <li className="header__item" onClick={handleProfileModal}>
              <a id="profile-link" className="header__link">Profile</a>
            </li>
          </ul>
        </nav>
      </div>
      <FaqModal show={showFaqModal} handleModal={handleFaqModal} />
      <ProfileModal show={showProfileModal} handleModal={handleProfileModal} />
    </header>
  )
}

export default Navbar;