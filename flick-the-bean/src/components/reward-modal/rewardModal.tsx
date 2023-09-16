import { FC } from "react";
import Modal from "../modal/modal";

interface RewardModalProps {
  show: boolean;
  handleModal: () => void;
}

const RewardModal:FC<RewardModalProps> = ({ show, handleModal }) => {
  return(
		<Modal customClass={'rewards-modal'} show={show} handleModal={handleModal}>
			<div className="refer">
					<h1 className="refer__title">Refer to earn rewards</h1>
					<ul className="refer__list">
						<li className="refer__item">
							<p className="refer__text">Refer id</p>
							<div className="refer__right-content">
								<p>Arcd2_90039</p>
								<img src="/static/svgs/copy.svg" alt="copy icon" />
							</div>
						</li>
						<li className="refer__item">
							<p className="refer__text">Refer link</p>
							<div className="refer__right-content">
								<p>https://www....433</p>
								<img src="/static/svgs/copy.svg" alt="copy icon" />
							</div>
						</li>
					</ul>
					<button className="refer__btn">Invite Friends</button>
					<ul className="refer__social-list">
						<li className="refer__social-item">
							<a href="#" className="refer__social-link">
								<img src="/static/svgs/facebook.svg" alt="facebook icon" />
							</a>
						</li>
						<li className="refer__social-item">
							<a href="#" className="refer__social-link">
								<img src="/static/svgs/instagram.svg" alt="instagram icon" />
							</a>
						</li>
						<li className="refer__social-item">
							<a href="#" className="refer__social-link">
								<img src="/static/svgs/twitter.svg" alt="twitter icon" />
							</a>
						</li>
						<li className="refer__social-item">
							<a href="#" className="refer__social-link">
								<img src="/static/svgs/whatsapp.svg" alt="whatsapp icon" />
							</a>
						</li>
						<li className="refer__social-item">
							<a href="#" className="refer__social-link">
								<img src="/static/img/telegram.png" alt="telegram icon" />
							</a>
						</li>
					</ul>
				</div>
		</Modal>
  )
}

export default RewardModal;