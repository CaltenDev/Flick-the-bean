import { GetProfile } from "@/api/profile";
import GetCookie from '@/hooks/cookies/getCookie';
import { GetrecentFlickers } from "@/api/recent-flickers";
import { useQuery } from "@tanstack/react-query";
import { enqueueSnackbar } from "notistack";
import { FC, useState, useEffect } from "react";
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
	const[pubKey, setPubkey] = useState('');
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

	useEffect(() => {
		console.log('@@@', data);
		const key = GetCookie('publicKey');
    	setPubkey(`${key.slice(0, 5)}....${key.slice(-8)}`);
	}, [data])

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
								{pubKey}
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
								{data?.data.data.insights.highestNumberOfFlips}
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
							{data?.data.data.points}
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
							{Math.round((parseFloat(data?.data.data.insights.totalAmountBet) + Number.EPSILON) * 100) / 100}
						</span>
					</div>
					<div className="profile-value-item">
						<span>
							Winning percentage
						</span>
						<span>
							{data?.data.data.insights.winningPercentage}
						</span>
					</div>
					<div className="profile-value-item">
						<span>
							Total earnings
						</span>
						<span>
							{Math.round((parseFloat(data?.data.data.insights.totalEarnings) + Number.EPSILON) * 100) / 100}
						</span>
					</div>
					<div className="profile-value-item">
						<span>
							Avg. bet amount
						</span>
						<span>
							{Math.round((parseFloat(data?.data.data.insights.averageBetAmount) + Number.EPSILON) * 100) / 100}
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
										{data?.data.data.referrals.referral_code}
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
										{data?.data.data.referrals.total_number_of_users_referred}
									</span>
								</div>
								<div className="total_earned">
									<span>
										Total <br /> earned
									</span>
									<span>
										{data?.data.data.referrals.total_earned_through_referrals}
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