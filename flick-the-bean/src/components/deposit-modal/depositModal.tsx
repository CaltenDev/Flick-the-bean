import { GetrecentFlickers } from "@/api/recent-flickers";
import { useQuery } from "@tanstack/react-query";
import { FC, useEffect } from "react";
import Modal from "../modal/modal";
interface DepositModalProps {
	show: boolean;
  handleModal: () => void;
}


const DepositModal:FC<DepositModalProps> = ({ show, handleModal }) => {
	useEffect(() => {
		
	})
  return(
		<Modal customClass={'deposit-modal'} show={show} handleModal={handleModal}>
			<div className="deposit">
				<div className="title">
					Deposit
				</div>
				<img src="/static/svgs/close.svg" onClick={handleModal}/>
				<div className="content">
					<input type="text" />
					<div className="coin-box">
						<div className="coin-box-display">
							<div>SATS</div>
							<img src="/static/svgs/arrow-down.svg" />
						</div>
						<div className="coin-box-content">
							
						</div>
					</div>
				</div>
				<div className="btn-outline text-center">
					Deposit
				</div>
			</div>
		</Modal>
  )
}

export default DepositModal;