import { GetrecentFlickers } from "@/api/recent-flickers";
import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
import Modal from "../modal/modal";
import RecentFlickersTable from "../recent-flickers-table/recentFlickerTable";

interface RecentFlickersModalProps {
	show: boolean;
  handleModal: () => void;
  data: Array;
}


const RecentFlickersModal:FC<RecentFlickersModalProps> = ({ show, handleModal, data }) => {
  return(
		<Modal customClass={'flickers-modal'} show={show} handleModal={handleModal}>
			<RecentFlickersTable tableData={data} />
		</Modal>
  )
}

export default RecentFlickersModal;