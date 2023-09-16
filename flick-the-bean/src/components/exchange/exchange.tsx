import { useState } from "react";
import RecentFlickersModal from "../recent-flickers-modal/recentFlickersModal";

const Exchange = () => {
  const[showRecentModal, setShowRecentModal] = useState(false);

  const handleRecentModal = () => {
    setShowRecentModal(!showRecentModal);
  }
  return(
    <>
      <section className="exchange">
					<div className="exchange__header">
						<h3 className="exchange__title">Exchange</h3>
						<div>
							<button><img src="/static/svgs/settings.svg" alt="settings icon" /></button>
						</div>
					</div>
					<div className="exchange__panel exchange__margin-bottom">
						<div className="exchange__left">
							<p className="exchange__subtitle mb-10">You pay</p>
							<p className="exchange__score">0</p>
							<p className="exchange__total mt-15">$13.04</p>
						</div>
						<div className="exchange__right">
							<select className="exchange__select">
								<option value="btc">Btc</option>
								<option value="btc">Btc</option>
								<option value="btc">Btc</option>
							</select>
							<p className="exchange__subtitle">Balance: 10 BTC</p>
						</div>
					</div>
					<div className="exchange__arrow-down">
						<button className="exchange__arrow-btn">
							<img
								className="exchange__arrow-img"
								src="/static/svgs/arrow-down.svg"
								alt="arrow down icon"
							/>
						</button>
					</div>
					<div className="exchange__panel exchange__margin-top">
						<div className="exchange__left">
							<p className="exchange__subtitle mb-10">You pay</p>
							<p className="exchange__score">0</p>
							<p className="exchange__total mt-15">$13.04</p>
						</div>
						<div className="exchange__right">
							<select className="exchange__select">
								<option value="btc">Acd</option>
								<option value="btc">Acd</option>
								<option value="btc">Acd</option>
							</select>
							<p className="exchange__subtitle">Balance: 10 BTC</p>
						</div>
					</div>
					<div className="exchange__panel-slim">
						{/* <p className="exchange__subtitle"></p> */}
						<div className="exchange__total-wrapper">
							<img
								className="exchange__total-icon rotate"
								src="/static/svgs/loader.svg"
								alt="loader icon "
							/>
							<span className="exchange__total">Searching for the best price.</span>
						</div>
					</div>
					<div className="exchange__panel-slim">
						<p className="exchange__subtitle">
							<span>0.090 btc</span><span> = </span><span>23,56 acd3</span>
						</p>
						<div className="exchange__total-wrapper">
							<img
								className="exchange__total-icon"
								src="/static/svgs/pump.svg"
								alt="petrol pump icon"
							/>
							<span className="exchange__total">$13.04</span>
						</div>
					</div>
					<button className="exchange__btn">Exchange</button>
				</section>
				<div className="mt-30">
					<button className="btn-arrow" id="flickersBtn" onClick={handleRecentModal}>
						Recent Flickers
						<img className="btn-arrow__icon" src="/static/svgs/arrow-right.svg" alt="arrow icon" />
					</button>
				</div>

      <RecentFlickersModal show={showRecentModal} handleModal={handleRecentModal} />
    </>
  )
}

export default Exchange;