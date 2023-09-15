import { FC } from "react";
import Modal from "../modal/modal";

interface FaqModalProps {
  show: boolean;
  handleModal: () => void;
}

const FaqModal:FC<FaqModalProps> = ({ show, handleModal }) => {
  return(
		<Modal customClass={'faq-modal'} show={show} handleModal={handleModal}>
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
		</Modal>
  )
}

export default FaqModal;