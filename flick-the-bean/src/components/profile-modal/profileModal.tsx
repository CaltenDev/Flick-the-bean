import { GetProfile } from "@/api/profile";
import { GetrecentFlickers } from "@/api/recent-flickers";
import { useQuery } from "@tanstack/react-query";
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
    queryFn: async () => await GetrecentFlickers()
  })
	return (
		<RecentFlickersTable classname="auto" tableData={data} />
	);
}

const ProfileModal:FC<ProfileModalProps> = ({ show, handleModal }) => {
	const {data, isLoading} = useQuery({
    queryKey: ['profile'],
    queryFn:  GetProfile
  });

  return(
		<Modal customClass={'profile-modal'} show={show} handleModal={handleModal}>
			<div className="profile">
				<div className="profile__grid">
					<div className="profile__left">
						<figure className="profile__figure">
							<img src="/static/img/avatar.png" alt="avatar" />
						</figure>
						<div className="profile__left-content">
							<div className="profile__details">
								<h1 className="profile__heading">Name <br />Last Name</h1>
								<p className="profile__text">0x71C.....7656EC7a</p>
								<p className="profile__text">Start flipping on September 2023</p>
							</div>
							<div className="profile__stats">
								<div className="profile__legend">Total Bets: {Math.round((parseFloat(data?.data.data.insights.totalAmountBet) + Number.EPSILON) * 100) / 100}</div>
								<div className="profile__legend">Total Earning: {Math.round((parseFloat(data?.data.data.insights.totalEarnings) + Number.EPSILON) * 100) / 100}</div>
							</div>
						</div>
					</div>
					<div className="profile__right">
						<h2 className="profile__subheading">Ranking</h2>
						<ul className="primary-list primary-list--auto">
							<li className="primary-list__item">
								<div className="primary-list__col">Rank 123</div>
								<div className="primary-list__col">1 week ago</div>
							</li>
							<li className="primary-list__item">
								<div className="primary-list__col">Rank 123</div>
								<div className="primary-list__col">1 week ago</div>
							</li>
							<li className="primary-list__item">
								<div className="primary-list__col">Rank 123</div>
								<div className="primary-list__col">1 week ago</div>
							</li>
							<li className="primary-list__item">
								<div className="primary-list__col">Rank 123</div>
								<div className="primary-list__col">1 week ago</div>
							</li>
							<li className="primary-list__item">
								<div className="primary-list__col">Rank 123</div>
								<div className="primary-list__col">1 week ago</div>
							</li>
							<li className="primary-list__item">
								<div className="primary-list__col">Rank 123</div>
								<div className="primary-list__col">1 week ago</div>
							</li>
							<li className="primary-list__item">
								<div className="primary-list__col">Rank 123</div>
								<div className="primary-list__col">1 week ago</div>
							</li>
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