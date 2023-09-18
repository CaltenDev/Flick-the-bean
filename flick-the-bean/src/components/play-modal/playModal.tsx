import crypto from 'crypto';
import { useRouter } from "next/navigation";
import { FC } from "react";
import { getAddress, signMessage } from 'sats-connect';
import Modal from "../modal/modal";
const bitcoin = require('bitcoinjs-lib');

interface PlayModalProps {
  show: boolean;
  handleModal: () => void;
}

const PlayModal:FC<PlayModalProps> = ({ show, handleModal }) => {
  const router = useRouter();

	const handleWalletConnection = async () => {
		// @ts-ignore
		let uniSat =  window.unisat;
		if (typeof uniSat !== 'undefined') {
			console.log('UniSat Wallet is installed!');
			try {
				let accounts = await uniSat.requestAccounts();
				console.log('connect success', accounts);
				getSignature();
			} catch (e) {
				console.log('connect failed');
			}
		}
	}

	const getSignature = async () => {
		let message =  crypto.randomBytes(16).toString('hex');
    let hash = bitcoin.crypto.sha256(message);
		// @ts-ignore
		let uniSat =  window.unisat;
		try {
			let res = await uniSat.signMessage(message);
			console.log("signature", res)
		} catch (e) {
			console.log(e);
		}

		try {
			let res = await uniSat.getPublicKey();
			console.log("public: ", res)
		} catch (e) {
			console.log(e);
		}

		console.log("message: ", message);
		console.log("hash", hash.toString('hex'));
  }

	const handleXverse = async () => {
		let message =  crypto.randomBytes(16).toString('hex');
    let hash = bitcoin.crypto.sha256(message);
		let address = '';
		const getAddressOptions = {
			payload: {
				purposes: ['ordinals'],
				message: message,
				network: {
					type:'Mainnet'
				},
			},
			onFinish: (response: any) => {
				address = response.addresses[0].address;
				console.log("address", address);
				console.log("publicKey", response.addresses[0].publicKey);
			},
			onCancel: () => alert('Request canceled'),
		}
		// @ts-ignore
		await getAddress(getAddressOptions);

		const signMessageOptions = {
			payload: {
				network: {
					type: "Mainnet",
				},
				address: address,
				message: message,
			},
			onFinish: (response: any) => {
				// signature
				console.log("signature", response);
			},
			onCancel: () => alert("Canceled"),
		};
		// @ts-ignore
		await signMessage(signMessageOptions);

		console.log("message", message);
		console.log("hash", hash.toString('hex'));
		
		
	}

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
				<button className="btn-secondary" onClick={handleWalletConnection}>
					<img src="/static/img/unisat-icon.png" alt="unisat-icon" /><span>UniSat</span>
				</button>
				<button className="btn-secondary" onClick={handleXverse}>
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