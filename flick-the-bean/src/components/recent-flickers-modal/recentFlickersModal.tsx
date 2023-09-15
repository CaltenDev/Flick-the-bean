import { FC } from "react";
import Modal from "../modal/modal";

interface RecentFlickersModalProps {
	show: boolean;
  handleModal: () => void;
}


const RecentFlickersModal:FC<RecentFlickersModalProps> = ({ show, handleModal }) => {
  return(
		<Modal customClass={'flickers-modal'} show={show} handleModal={handleModal}>
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
	</Modal>
  )
}

export default RecentFlickersModal;