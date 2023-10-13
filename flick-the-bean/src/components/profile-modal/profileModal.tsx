import { GetProfile } from "@/api/profile";
import { GetrecentFlickers } from "@/api/recent-flickers";
import { useQuery } from "@tanstack/react-query";
import { enqueueSnackbar } from "notistack";
import { FC, useEffect } from "react";
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
	const badges_array = [
		"badge_1",
		"badge_2",
		"badge_3",
		"badge_4",
		"badge_5",
		"badge_blank",
		"badge_blank",
		"badge_blank",
		"badge_blank"
	]

	const {data, isLoading, error, isError} = useQuery({
		queryKey: ['profile'],
		queryFn:  GetProfile
	});
	
	const {data: recentData} = useQuery({
		queryKey: ['recent'],
		queryFn: async () => await GetrecentFlickers(null)
	  })

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
								Flipping since <a>Sep 2023</a>
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
						<span style={{
							color: '#5BEF43'
						}}>
							10
						</span>
					</div>
					<div className="profile-value-item">
						<span>
							Fails in a row
						</span>
						<span style={{
							color: '#EF4343'
						}}>
							8
						</span>
					</div>
					<div className="profile-value-item">
						<span>
							XP points
						</span>
						<span style={{
							color: '#FDCD00'
						}}>
							625
						</span>
					</div>
					<div className="profile-value-item">
						<span>
							Number of games
						</span>
						<span>
							10
						</span>
					</div>
					<div className="profile-value-item">
						<span>
							Total amount bet
						</span>
						<span>
							10
						</span>
					</div>
					<div className="profile-value-item">
						<span>
							Winning percentage
						</span>
						<span>
							10
						</span>
					</div>
					<div className="profile-value-item">
						<span>
							Total earnings
						</span>
						<span>
							10
						</span>
					</div>
					<div className="profile-value-item">
						<span>
							Avg. bet amount
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
							<ul className={`primary-list`}>
								<li className="primary-list__header">
									{/* <div className="primary-list__header__col">Most recent been flickers</div>
									<div className="primary-list__header__col-2">See all</div> */}
								</li>
								<li>
									<ul >
									{
									recentData ? recentData.map((item, index) => (
										<li className="primary-list__item" key={index}>
										{/* <div className="primary-list__col">{item?.public_key.slice(0, 5)}...{item?.public_key.slice(-5)}</div> */}
										<div className="primary-list__col-2">flipped <span>{Math.round((parseFloat(item.bet_amount) + Number.EPSILON) * 100) / 100} ACD3</span> and <span style={{color: item.outcome == 'lost' ? '#EF4343' : '#5BEF43'}}>{item.outcome}</span></div>
										<div className="primary-list__col-3">{item.timeAgo}</div>
										</li>
									)) : <p style={{ textAlign: 'center', marginTop: 50 }}>Loading Data</p>
									}  
									</ul>  
								</li>
								
								<div>
								</div>
							</ul>
						</div>
					</div>
					<div className="referrals">
						<div className="title">
							Referrals
						</div>
						<div className="content">
							<div className="code">
								<div>
									<span>
										Referral code
									</span>
									<span>
										mnHBqlOONO
									</span>
								</div>
								<img src="/static/img/copy.png" />
							</div>
							<div className="statistics">
								<div className="user_number">
									<span>
										Number <br /> of users <br /> referred
									</span>
									<span>
										8
									</span>
								</div>
								<div className="total_earned">
									<span>
										Total <br /> earned
									</span>
									<span>
										24
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className="badges">
						<div className="title">
							Badges
						</div>
						<div className="content">
							{
								badges_array.map(item => <div className="item">
									<img src={`/static/img/${item}.png`} />
								</div>)
							}
						</div>
					</div>
				</div>
			</div>
		</Modal>
  )
}

export default ProfileModal;