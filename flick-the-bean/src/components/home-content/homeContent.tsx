import { FC, useState } from "react";
import PlayModal from "../play-modal/playModal";

const HomeContent:FC = () => {
  const[showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal)
  }
  return(
    <div>
      <section>
        <h1 className="heading-primary">
          #1 PLACE TO <br /><span className="heading-primary__thick">BEAN</span> FLICK AND
          <span className="heading-primary__thick"> COIN</span> FLIP
        </h1>
      </section>
      <section className="top-area">
        <button className="primary-btn" onClick={handleModal}>Play</button>
        <div className="arrow-down">
          <img className="arrow-down__figure" src="/static/img/arrow.svg" alt="arrow down icon" />
        </div>
      </section>
      <section className="center-area">
        <div className="line"></div>
        <h2 className="main__heading">MOST RECENT BEAN FLICKERS</h2>
        <ul className="primary-list primary-list--home">
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
      </section>
      <PlayModal show={showModal} handleModal={handleModal} />
    </div>
  )
}

export default HomeContent;