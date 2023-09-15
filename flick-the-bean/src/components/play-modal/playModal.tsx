import { useRouter } from "next/navigation";
import { FC } from "react";
import Modal from "../modal/modal";

interface PlayModalProps {
  show: boolean;
  handleModal: () => void;
}

const PlayModal:FC<PlayModalProps> = ({ show, handleModal }) => {
  const router = useRouter();
  return(
		<Modal customClass={'play-modal'} show={show} handleModal={handleModal}>
			<h1 className="modal__heading text-center">Connect your wallet to play</h1>
			<p className="modal__text text-center">
				If you dont have a wallet, you can select a provider <br />
				and <a href="#" className="modal__anchor">create one now</a>
			</p>
			<div className="modal__seprator"></div>
			<div className="modal__btn-wrapper">
				<button className="btn-secondary" onClick={() => router.push('/flip-coin')}>
					<img src="/static/img/leather-icon.png" alt="leather-icon" /><span>Leather</span>
				</button>
				<button className="btn-secondary" onClick={() => router.push('/flip-coin')}>
					<img src="/static/img/unisat-icon.png" alt="unisat-icon" /><span>UniSat</span>
				</button>
				<button className="btn-secondary" onClick={() => router.push('/flip-coin')}>
					<img src="/static/img/xverse-icon.png" alt="xverse-icon" /><span>Xverse</span>
				</button>
				<button className="btn-secondary" onClick={() => router.push('/flip-coin')}>
					<img src="/static/img/okx-icon.png" alt="okx-icon" /><span>OKX</span>
				</button>
			</div>
		</Modal>
  )
}

export default PlayModal;