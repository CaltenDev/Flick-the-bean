import { GetrecentFlickers } from "@/api/recent-flickers";
import { useQuery } from "@tanstack/react-query";
import { FC, useEffect } from "react";
import Modal from "../modal/modal";

interface UsernameModalProps {
	show: boolean;
  handleModal: () => void;
}


const UsernameModal:FC<UsernameModalProps> = ({ show, handleModal }) => {
	useEffect(() => {
		// console.log('@@@', tableData)
	})
  return(
		<Modal customClass={'username-modal'} show={show} handleModal={handleModal}>
			<div className="username">
				<img src="/static/svgs/close.svg" />
				<div className="username-title">
					Choose a your <br />username
				</div>
				<input type="text" />
				<button className="btn-outline">Done</button>
			</div>
		</Modal>
  )
}

export default UsernameModal;