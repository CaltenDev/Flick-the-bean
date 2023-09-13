"use client"

import { useEffect } from "react";

export default function FlipCoin() {
  useEffect(() => {
    const hamburgerMenu = document.querySelector(".hamburger");
    const list = document.querySelector(".header__list");
    const playModal = document.querySelector(".play-modal");
    const faqModal = document.querySelector(".faq-modal");
    const profileModal = document.querySelector(".profile-modal");
    const modalPlayBtn = document.querySelector(".primary-btn");
    const modalCloseBtns = document.querySelectorAll(".modal__btn");
    const faqLink = document.querySelector("#faq-link");
    const profileLink = document.querySelector("#profile-link");

    hamburgerMenu?.addEventListener("click", () => {
      hamburgerMenu.classList.toggle("open");
      list?.classList.toggle("open");
    });

    modalPlayBtn?.addEventListener("click", () => {
      modalPlayBtn.classList.add("primary-btn--active");
      document.body.classList.add("overflow-hidden");
      playModal?.classList.add("show");
    });

    modalCloseBtns.forEach((modalCloseBtn) => {
      modalCloseBtn.addEventListener("click", () => {
        document.body.classList.remove("overflow-hidden");
        playModal?.classList.remove("show");
        faqModal?.classList.remove("show");
        profileModal?.classList.remove("show");
      });
    });

    faqLink?.addEventListener("click", (e) => {
      e.preventDefault();
      document.body.classList.add("overflow-hidden");
      faqModal?.classList.add("show");
    });

    profileLink?.addEventListener("click", (e) => {
      e.preventDefault();
      document.body.classList.add("overflow-hidden");
      profileModal?.classList.add("show");
    });
  }, []);
  return (
    <>
      <div className="bg-wrapper">
        <header className="header">
          <a href="#" className="flex-shrink-0">
            <img src="/static/svgs/logo.svg" alt="logo" />
          </a>
          <div className="header__wrap">
            <div className="header__wrap">
              <button className="btn-outline">Exchange Token</button>

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
                <p className="header__profile-text">0x71c....7656ec7a</p>
                <a href="#" className="header__profile-share">
                  <img src="/static/svgs/profile-share.svg" alt="share icon" />
                </a>
              </div>
            </div>
            <div className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <nav className="header__nav">
              <ul className="header__list">
                <li className="header__item"><a href="#" id="faq-link" className="header__link">Faq</a></li>
                <li className="header__item"><a href="#" className="header__link">Stats</a></li>
                <li className="header__item"><a href="#" className="header__link">Flip History</a></li>
                <li className="header__item">
                  <a href="#" id="profile-link" className="header__link">Profile</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <div className="mt-60">
          <p className="secondary-heading text-center m-0 mb-10">Flip Responsibly!</p>
          <h1 className="heading-primary">
            #1 PLACE TO <br /><span className="heading-primary__thick">BEAN</span> FLICK AND
            <span className="heading-primary__thick">COIN</span> FLIP
          </h1>
        </div>
        <section className="btns-wrapper">
          <button className="btn-outline btn-outline--big mb-20">Switch to 2x mode</button>
          <div className="btns-inner-wrapper">
            <div className="score-area">
              <div className="score-area__text">Token used <span className="fw-bold">ACD3</span></div>
              <div className="score-area__text">Total balance: 0 ACD3</div>
            </div>
            <div className="btns-grid">
              <button className="btn-outline btn-outline--medium">0.1</button>
              <button className="btn-outline btn-outline--medium">0.25</button>
              <button className="btn-outline btn-outline--medium">0.5</button>
              <button className="btn-outline btn-outline--medium">1</button>
              <button className="btn-outline btn-outline--medium">2</button>
              <button className="btn-outline btn-outline--medium">3</button>
              <button className="btn-outline btn-outline--medium">4</button>
              <button className="btn-outline btn-outline--medium">5</button>
            </div>
            <div className="btns-row mt-40">
              <button className="btn-white">
                <img className="btn-white__avatar" src="/static/img/head.png" alt="head icon" />
                <span className="btn-white__text">Flip Heads</span>
              </button>
              <button className="btn-white btn-white--active">
                <img className="btn-white__avatar" src="/static/img/tails.png" alt="tail icon" />
                <span className="btn-white__text">Flip Tails</span>
              </button>
            </div>
            <div className="text-center mt-30">
              <p>
                3% fees apply for every flip. Refer to <span className="fw-bold">FAQ</span> for more
                information.
              </p>
            </div>
            <div className="btn-arrow-row">
              <button className="btn-arrow">
                Recent Flickers
                <img className="btn-arrow__icon" src="/static/svgs/arrow-right.svg" alt="arrow icon" />
              </button>
            </div>
            <footer className="footer">
              <h3 className="footer__heading">
                Game powered by ordinal <a href="#" className="footer__heading-number">12335432232</a>
              </h3>
              <h3 className="footer__subheading">All rights reserved to Flick the Bean ©</h3>
            </footer>
          </div>
        </section>
      </div>

      <div className="modal play-modal">
        <div className="modal__content text-center">
          <button className="modal__btn"><img src="/static/svgs/close.svg" alt="close" /></button>
          <h1 className="modal__heading">Connect your wallet to play</h1>
          <p className="modal__text">
            If you dont have a wallet, you can select a provider <br />
            and <a href="#" className="modal__anchor">create one now</a>
          </p>
          <div className="modal__seprator"></div>
          <div className="modal__btn-wrapper">
            <button className="btn-secondary">
              <img src="/static/img/leather-icon.png" alt="leather-icon" /><span>Leather</span>
            </button>
            <button className="btn-secondary">
              <img src="/static/img/unisat-icon.png" alt="unisat-icon" /><span>UniSat</span>
            </button>
            <button className="btn-secondary">
              <img src="/static/img/xverse-icon.png" alt="xverse-icon" /><span>Xverse</span>
            </button>
            <button className="btn-secondary">
              <img src="/static/img/okx-icon.png" alt="okx-icon" /><span>OKX</span>
            </button>
          </div>
        </div>
      </div>

      <div className="modal faq-modal">
        <div className="modal__content">
          <button className="modal__btn"><img src="/static/svgs/close.svg" alt="close" /></button>
          <div className="faq">
            <div className="faq__wrapper">
              <h1 className="faq__heading">What tokens can I flip?</h1>
              <p className="faq__text">
                You can flip Solana or select a token from our constantly growing list.
              </p>
            </div>
            <div className="faq__wrapper">
              <h1 className="faq__heading">What are the fees?</h1>
              <p className="faq__text">
                We charge 3% per flip irrespective of winning or losing. For example, flipping 1 SOL
                will cost a total for 1.03 SOL.
              </p>
            </div>
            <div className="faq__wrapper">
              <h1 className="faq__heading">How do I collect my winnings?</h1>
              <p className="faq__text">The winning amount will be automatically transferred by us.</p>
            </div>
            <div className="faq__wrapper">
              <h1 className="faq__heading">What's the max amount I can bet?</h1>
              <p className="faq__text">
                Every token has it's own max limit based on our treasury size. You can bet any amount
                upto the max limit!
              </p>
            </div>
            <div className="faq__wrapper">
              <h1 className="faq__heading">
                Why is the balance shown slightly less than my actual wallet balance?
              </h1>
              <p className="faq__text">We have calculated your balance to compensate for 3% fees.</p>
            </div>
            <div className="faq__wrapper">
              <h1 className="faq__heading">What are the onchain addresses?</h1>
              <p className="faq__text">
                Program: 72D3En8GQycjtunxf9mgyR8onzYdPqYFsKp4myUzhaRZ Treasury:
                ByjcyGru3RTeAheTjoFJi7mL8knNmzHz1twuoqjbjRtF
              </p>
            </div>
            <div className="faq__wrapper">
              <h1 className="faq__heading">How do I know Flick the Bean is fair?</h1>
              <p className="faq__text">
                All flips can be checked onchain through our program address above or by tracking our
                flipping wallet:
              </p>
              <p className="faq__text">
                FFFzSCxKWZZvetfW86JbvMRUJxjkMAwMu35cEe4HDyaN. You can also hit our
                <a href="#" className="faq__anchor">API</a> to examine the odds yourself.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="modal profile-modal">
        <div className="modal__content">
          <button className="modal__btn"><img src="/static/svgs/close.svg" alt="close" /></button>
          <div className="profile">
            <div className="profile__grid">
              <div className="profile__left">
                <figure className="profile__figure">
                  <img src="/static/img/avatar.png" alt="avatar" />
                </figure>
                <div className="profile__left-content">
                  <div className="profile__details">
                    <h1 className="profile__heading">Name <br />Last Name</h1>
                    <p className="profile__text">0x71C.....7656EC7a</p>
                    <p className="profile__text">Start flipping on September 2023</p>
                  </div>
                  <div className="profile__stats">
                    <div className="profile__legend">Success in a row: 10</div>
                    <div className="profile__legend">Fails in a row: 230</div>
                  </div>
                </div>
              </div>
              <div className="profile__right">
                <h2 className="profile__subheading">Ranking</h2>
                <ul className="primary-list primary-list--auto">
                  <li className="primary-list__item">
                    <div className="primary-list__col">Rank 123</div>
                    <div className="primary-list__col">1 week ago</div>
                  </li>
                  <li className="primary-list__item">
                    <div className="primary-list__col">Rank 123</div>
                    <div className="primary-list__col">1 week ago</div>
                  </li>
                  <li className="primary-list__item">
                    <div className="primary-list__col">Rank 123</div>
                    <div className="primary-list__col">1 week ago</div>
                  </li>
                  <li className="primary-list__item">
                    <div className="primary-list__col">Rank 123</div>
                    <div className="primary-list__col">1 week ago</div>
                  </li>
                  <li className="primary-list__item">
                    <div className="primary-list__col">Rank 123</div>
                    <div className="primary-list__col">1 week ago</div>
                  </li>
                  <li className="primary-list__item">
                    <div className="primary-list__col">Rank 123</div>
                    <div className="primary-list__col">1 week ago</div>
                  </li>
                  <li className="primary-list__item">
                    <div className="primary-list__col">Rank 123</div>
                    <div className="primary-list__col">1 week ago</div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="profile__history">
              <h2 className="profile__subheading">Flip History</h2>
              <div className="profile__seprator"></div>
              <ul className="primary-list primary-list--auto">
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
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
