import { GetrecentFlickers } from "@/api/recent-flickers";
import { useQuery } from "@tanstack/react-query";
import { FC, useEffect } from "react";
import Modal from "../modal/modal";
import Exchange from "@/components/exchange/exchange"

interface DepositModalProps {
	show: boolean;
  handleModal: () => void;
}


const DepositModal:FC<DepositModalProps> = ({ show, handleModal }) => {
	useEffect(() => {
		// console.log('@@@', tableData)
	})
  return(
		<Modal customClass={'deposit-modal'} show={show} handleModal={handleModal}>
			<Exchange />
		</Modal>
  )
}

export default DepositModal;