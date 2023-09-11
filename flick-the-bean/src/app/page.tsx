"use client"

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    let hamburgerMenu = document.querySelector(".hamburger");
    const list = document.querySelector(".header__list");
    hamburgerMenu?.addEventListener("click", () => {
      hamburgerMenu?.classList.toggle("open");
      list?.classList.toggle("open");
    });
  }, []);
  return (
    <div className="bg-wrapper">
			<header className="header">
				<a href="#">
					<img src="./../../static/svgs/logo.svg" alt="logo" />
				</a>
				<div className="hamburger">
					<span></span>
					<span></span>
					<span></span>
				</div>
				<nav className="header__nav">
					<ul className="header__list">
						<li className="header__item"><a href="#" className="header__link">Faq</a></li>
						<li className="header__item"><a href="#" className="header__link">Stats</a></li>
						<li className="header__item"><a href="#" className="header__link">Flip History</a></li>
						<li className="header__item"><a href="#" className="header__link">Profile</a></li>
					</ul>
				</nav>
			</header>
			<h1 className="heading-primary">
				#1 PLACE TO <br /><span className="heading-primary__thick">BEAN</span> FLICK AND
				<span className="heading-primary__thick">COIN</span> FLIP
			</h1>
			<section className="top-area">
				<button className="primary-btn">Play</button>
				<div className="arrow-down">
					<img className="arrow-down__figure" src="./../../static/svgs/arrow.svg" alt="arrow down icon" />
				</div>
			</section>
			<main className="main">
				<div className="line"></div>
				<h2 className="main__heading">MOST RECENT BEAN FLICKERS</h2>
				<ul className="primary-list">
					<li className="primary-list__item">
						<div className="primary-list__col">8Y2M...QKrQ</div>
						<div className="primary-list__col-2">flipped 0.1 eth and lost.</div>
						<div className="primary-list__col">an hr ago</div>
					</li>
					<li className="primary-list__item">
						<div className="primary-list__col">8Y2M...QKrQ</div>
						<div className="primary-list__col-2">flipped 0.2 eth and doubled.</div>
						<div className="primary-list__col">an hr ago</div>
					</li>
					<li className="primary-list__item">
						<div className="primary-list__col">8Y2M...QKrQ</div>
						<div className="primary-list__col-2">flipped 0.1 eth and lost.</div>
						<div className="primary-list__col">an hr ago</div>
					</li>
					<li className="primary-list__item">
						<div className="primary-list__col">8Y2M...QKrQ</div>
						<div className="primary-list__col-2">flipped 0.2 eth and doubled.</div>
						<div className="primary-list__col">an hr ago</div>
					</li>
					<li className="primary-list__item">
						<div className="primary-list__col">8Y2M...QKrQ</div>
						<div className="primary-list__col-2">flipped 0.1 eth and lost.</div>
						<div className="primary-list__col">an hr ago</div>
					</li>
					<li className="primary-list__item">
						<div className="primary-list__col">8Y2M...QKrQ</div>
						<div className="primary-list__col-2">flipped 0.2 eth and doubled.</div>
						<div className="primary-list__col">an hr ago</div>
					</li>
					<li className="primary-list__item">
						<div className="primary-list__col">8Y2M...QKrQ</div>
						<div className="primary-list__col-2">flipped 0.1 eth and lost.</div>
						<div className="primary-list__col">an hr ago</div>
					</li>
					<li className="primary-list__item">
						<div className="primary-list__col">8Y2M...QKrQ</div>
						<div className="primary-list__col-2">flipped 0.2 eth and doubled.</div>
						<div className="primary-list__col">an hr ago</div>
					</li>
				</ul>
				<h2 className="secondary-heading">Flip Responsibly!</h2>
				<footer className="footer">
					<h3 className="footer__heading">
						Game powered by ordinal <a href="#" className="footer__heading-number">12335432232</a>
					</h3>
					<h3 className="footer__subheading">All rights reserved to Flick the Bean ©</h3>
				</footer>
			</main>
		</div>
  )
}
