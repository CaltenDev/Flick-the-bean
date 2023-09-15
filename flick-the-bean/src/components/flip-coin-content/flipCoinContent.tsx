import { FC, useState } from "react";
import AddFundModal from "../add-fund-modal/addFundModal";
import RecentFlickersModal from "../recent-flickers-modal/recentFlickersModal";

interface FlipCoinContentProps {
}

const FlipCoinContent:FC<FlipCoinContentProps> = ({  }) => {
  const[showRecentModal, setShowRecentModal] = useState(false);
  const[showAddFundModal, setShowAddFundModal] = useState(false);

  const handleAddFundModal = () => {
    setShowAddFundModal(!showAddFundModal);
  }

  const handleRecentModal = () => {
    setShowRecentModal(!showRecentModal);
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
        <div className="btns-inner-wrapper mt-40">
          <div className="score-area">
            <div className="score-area__text">Token used <span className="fw-bold">ACD3</span></div>
            <div className="score-area__text">Total balance: 0 ACD3</div>
          </div>
          <div className="btns-row mt-30">
            <button className="btn-white" id="head-btn" onClick={handleAddFundModal}>
              <img className="btn-white__avatar" src="/static/img/head.png" alt="head icon" />
              <span className="btn-white__text">Flip Heads</span>
            </button>
            <button className="btn-white btn-white--active" onClick={handleAddFundModal}>
              <img className="btn-white__avatar" src="/static/img/tails.png" alt="tail icon" />
              <span className="btn-white__text">Flip Tails</span>
            </button>
          </div>
          <div className="btns-grid mt-30">
            <button className="btn-outline btn-outline--medium btn-outline--medium-active">
              0.1
            </button>
            <button className="btn-outline btn-outline--medium">0.25</button>
            <button className="btn-outline btn-outline--medium">0.5</button>
            <button className="btn-outline btn-outline--medium">1</button>
            <button className="btn-outline btn-outline--medium">2</button>
            <button className="btn-outline btn-outline--medium">3</button>
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
              <img className="btn-arrow__icon" src="/static/svgs/arrow-right.svg" alt="arrow icon" />
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