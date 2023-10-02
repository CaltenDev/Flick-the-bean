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
				<div className="profile__grid">
					<div className="profile__left">
						<figure className="profile__figure">
							<img src="/static/img/avatar.png" alt="avatar" />
						</figure>
						<div className="profile__left-content">
							{/* <div className="profile__details">
								<h1 className="profile__heading">Name <br />Last Name</h1>
								<p className="profile__text">0x71C.....7656EC7a</p>
								<p className="profile__text">Start flipping on September 2023</p>
							</div> */}
							<div className="profile__stats">
								<div className="profile__legend">Total Bets: {Math.round((parseFloat(data?.data.data.insights.totalAmountBet) + Number.EPSILON) * 100) / 100}</div>
								<div className="profile__legend">Total Earning: {Math.round((parseFloat(data?.data.data.insights.totalEarnings) + Number.EPSILON) * 100) / 100}</div>
								<div className="profile__legend">Average Bet: {Math.round((parseFloat(data?.data.data.insights.averageBetAmount) + Number.EPSILON) * 100) / 100}</div>
								<div className="profile__legend">Winning Percentage: {data?.data.data.insights.winningPercentage}</div>
								<div className="profile__legend">Highest Number Of Flips: {data?.data.data.insights.highestNumberOfFlips}</div>
								<div className="profile__legend">Total Users Referred: {data?.data.data.referrals.total_number_of_users_referred}</div>
								<div className="profile__legend">Total Earned Through Referrals: {data?.data.data.referrals.total_earned_through_referrals}</div>
							</div>
						</div>
					</div>
					<div className="profile__right">
						<h2 className="profile__subheading">Ranking</h2>
						<ul className="primary-list primary-list--auto">
							{
								data?.data.data.formatted_games && data?.data.data.formatted_games.map((item: any) => {
									return(
										<li className="primary-list__item">
											<div className="primary-list__col">{item.bet_amount}</div>
											<div className="primary-list__col">{item.choice}</div>
											<div className="primary-list__col">{item.outcome}</div>
											<div className="primary-list__col">{item.timeAgo}</div>
										</li>
									)
								})
							}
						</ul>
					</div>
				</div>
				<div className="profile__history">
					<h2 className="profile__subheading">Flip History</h2>
					<div className="profile__seprator"></div>
					<RecentTable />
				</div>
			</div>
		</Modal>
  )
}

export default ProfileModal;