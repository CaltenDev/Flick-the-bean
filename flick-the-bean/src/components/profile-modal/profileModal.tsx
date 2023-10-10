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
				<div className="profile-header">
					<div className="profile-header-left">
						<img src={"/static/img/avatar.png"} />
						<div>
							<span>
								David <br /> Copperfield
							</span>
							<span>
								0x71C.....765483920
							</span>
							<span>
								Flipping since Sep 2023
							</span>
						</div>
					</div>
					<div className="profile-header-right">
						<div>
							<span>
								Current rank
							</span>
							<span>
								14
							</span>
						</div>
						<div>
							<span>
								Highest
							</span>
							<span>
								2
							</span>
						</div>
					</div>
				</div>
				<div className="profile-value">
					<div className="profile-value-item">
						<span>
							Success in a row
						</span>
						<span>
							10
						</span>
					</div>
					<div className="profile-value-item">
						<span>
							Success in a row
						</span>
						<span>
							10
						</span>
					</div>
					<div className="profile-value-item">
						<span>
							Success in a row
						</span>
						<span>
							10
						</span>
					</div>
					<div className="profile-value-item">
						<span>
							Success in a row
						</span>
						<span>
							10
						</span>
					</div>
					<div className="profile-value-item">
						<span>
							Success in a row
						</span>
						<span>
							10
						</span>
					</div>
					<div className="profile-value-item">
						<span>
							Success in a row
						</span>
						<span>
							10
						</span>
					</div>
					<div className="profile-value-item">
						<span>
							Success in a row
						</span>
						<span>
							10
						</span>
					</div>
					<div className="profile-value-item">
						<span>
							Success in a row
						</span>
						<span>
							10
						</span>
					</div>
					
				</div>
				<div className="profile-other">
					<div className="history">
						<div className="title">
							Flip history
						</div>
						<div className="content">
							<div className="row">
								<div className="desc">
									flipped 0.1 eth and won
								</div>
								<div className="time">
									1h
								</div>
							</div>
						</div>
					</div>
					<div className="referrals">
						<div className="title">
							Referrals
						</div>
						<div className="content">
							<div className="code">

							</div>
							<div className="statistics">
								<div className="user_number">
									8
								</div>
								<div className="total_earned">
									24
								</div>
							</div>
						</div>
					</div>
					<div className="badges">
						<div className="title">
							Badges
						</div>
					</div>
				</div>
			</div>
		</Modal>
  )
}

export default ProfileModal;