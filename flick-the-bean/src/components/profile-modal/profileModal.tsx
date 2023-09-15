import { FC } from "react";
import Modal from "../modal/modal";

interface ProfileModalProps {
	show: boolean;
  handleModal: () => void;
}

const ProfileModal:FC<ProfileModalProps> = ({ show, handleModal }) => {
  return(
		<Modal customClass={'profile-modal'} show={show} handleModal={handleModal}>
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
		</Modal>
  )
}

export default ProfileModal;