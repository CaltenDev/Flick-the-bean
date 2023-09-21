import { GetNonce, gameReveal } from "@/api/game";
import SetCookie from "@/hooks/cookies/setCookie";
import { FC, useState } from "react";
import AddFundModal from "../add-fund-modal/addFundModal";
import { signMessage } from "../play-modal/unisat";
import RecentFlickersModal from "../recent-flickers-modal/recentFlickersModal";
interface FlipCoinContentProps {
}

const FlipCoinContent:FC<FlipCoinContentProps> = ({  }) => {
  const[showRecentModal, setShowRecentModal] = useState(false);
  const[showAddFundModal, setShowAddFundModal] = useState(false);
	const[gameResult, setGameResult] = useState(0);
	const[acd, setAcd] = useState(0.1);
	const[loading, setLoading] = useState(false);

  const handleAddFundModal = () => {
    setShowAddFundModal(!showAddFundModal);
  }

  const handleRecentModal = () => {
    setShowRecentModal(!showRecentModal);
  }

	const startGame = async (choice: boolean) => {
		setLoading(true);
		let {commitment, gameNonce}  = await GetNonce();
		SetCookie('commitment', commitment);
		SetCookie('gameNonce', gameNonce);
		const { publicKey, signature } = await signMessage(gameNonce)

		if (publicKey != '' && signature != '') {
			const didWin = await gameReveal(gameNonce, choice, 1, publicKey.toString('hex'), signature.toString('hex'));
			if (didWin != undefined) {
				setLoading(false);
			}
			setGameResult(didWin ? 1 : 2);
			setTimeout(() => {
				setGameResult(0);
			}, 5000);
		} else {
			alert('No Public Key or signed Message');
		}
	}

  return(
    <>
      <div>
					<p className="secondary-heading text-center m-0 mb-10">Flip Responsibly!</p>
					<h1 className="heading-primary">
						#1 PLACE TO <br /><span className="heading-primary__thick">BEAN</span> FLICK AND
						<span className="heading-primary__thick">COIN</span> FLIP
					</h1>
				</div>
				<section className="btns-wrapper">
					{/* <button className="btn-outline btn-outline--big mb-20">Switch to 2x mode</button> */}
					<div className="result mb-20 h-100">
						{
							loading && (
								<video className="coin-flip-animation" src="/video/coin-animation.mp4" controls={false} autoPlay loop />
							)
						}
						{
							gameResult == 1 ? (
								<>
									<h2 className="result__title">CONGRATULATIONS <br />YOU WON!</h2>
									<div className="result__subtitle text-success">+{acd} ACD3</div>
								</>
							) : gameResult == 2 ? (
								<>
									<h2 className="result__title">YOU LOST</h2>
									<div className="result__subtitle text-alert">-{acd} ACD3</div>
								</>
							) : (<></>)
						}
					</div>

					{/* <div className="result mb-20 h-100">
						<h2 className="result__title">YOU LOST</h2>
						<div className="result__subtitle text-alert">-0.25 ACD3</div>
					</div> */}
					<div className="btns-inner-wrapper">
						<div className="score-area">
							<div className="score-area__text">Token used <span className="fw-bold">ACD3</span></div>
							<div className="score-area__text">Total balance: 0 ACD3</div>
						</div>
						<div className="btns-row mt-30">
							<button className="btn-white" id="head-btn" onClick={() => startGame(true)}>
								<img className="btn-white__avatar" src="/static/img/head.png" alt="head icon" />
								<span className="btn-white__text">Flip Heads</span>
							</button>
							<button className="btn-white btn-white--active" onClick={() => startGame(false)}>
								<img className="btn-white__avatar" src="/static/img/tails.png" alt="tail icon" />
								<span className="btn-white__text">Flip Tails</span>
							</button>
						</div>
						<div className="btns-grid mt-30">
							<button className={`btn-outline btn-outline--medium ${acd == 0.1 && 'btn-outline--medium-active' }`} onClick={() => setAcd(0.1)}>
								0.1
							</button>
							<button className={`btn-outline btn-outline--medium ${acd == 0.25 && 'btn-outline--medium-active' }`} onClick={() => setAcd(0.25)}>0.25</button>
							<button className={`btn-outline btn-outline--medium ${acd == 0.5 && 'btn-outline--medium-active' }`} onClick={() => setAcd(0.5)}>0.5</button>
							<button className={`btn-outline btn-outline--medium ${acd == 1 && 'btn-outline--medium-active' }`} onClick={() => setAcd(1)}>1</button>
							<button className={`btn-outline btn-outline--medium ${acd == 2 && 'btn-outline--medium-active' }`} onClick={() => setAcd(2)}>2</button>
							<button className={`btn-outline btn-outline--medium ${acd == 3 && 'btn-outline--medium-active' }`} onClick={() => setAcd(3)}>3</button>
						</div>
						<div className="text-center mt-30">
							<p>
								3% fees apply for every flip. Refer to <span className="fw-bold">FAQ</span> for more
								information.
							</p>
						</div>
						<div className="btn-arrow-row">
							<button className="btn-arrow" onClick={handleRecentModal}>
								Recent Flickers
								<img className="btn-arrow__icon" src="static/svgs/arrow-right.svg" alt="arrow icon" />
							</button>
						</div>
					</div>
          <RecentFlickersModal show={showRecentModal} handleModal={handleRecentModal} />
          <AddFundModal show={showAddFundModal} handleModal={handleAddFundModal} />
				</section>
    </>
  )
}

export default FlipCoinContent;