import { GetProfile } from "@/api/profile";
import { GetrecentFlickers } from "@/api/recent-flickers";
import { useQuery } from "@tanstack/react-query";
import { enqueueSnackbar } from "notistack";
import { FC } from "react";
import Modal from "../modal/modal";
import RecentFlickersTable from "../recent-flickers-table/recentFlickerTable";

interface ProfileModalProps {
	show: boolean;
  handleModal: () => void;
}

const RecentTable = () => {
	const {data} = useQuery({
    queryKey: ['recent'],
    queryFn: async () => await GetrecentFlickers(null)
  })
	return (
		<RecentFlickersTable classname="auto" tableData={data} />
	);
}

const ProfileModal:FC<ProfileModalProps> = ({ show, handleModal }) => {
	const {data, isLoading, error, isError} = useQuery({
		queryKey: ['profile'],
		queryFn:  GetProfile
	});
	
	if(isError) {
		enqueueSnackbar("Server Error", {variant: 'error', anchorOrigin: {horizontal: 'left', vertical: 'top'}})
	}

  return(
		<Modal customClass={'profile-modal'} show={show} handleModal={handleModal}>
			<div className="profile">
				Proflie
			</div>
		</Modal>
  )
}

export default ProfileModal;