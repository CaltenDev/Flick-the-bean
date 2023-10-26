import { DepositBTC } from "@/api/deposit";
import { GetExchangeAddress } from "@/api/exchange";
import { GetrecentFlickers } from "@/api/recent-flickers";
import { useQuery } from "@tanstack/react-query";
import { FC, useState, useEffect } from "react";
import GetCookie from "@/hooks/cookies/getCookie";
import { sendBtcTransaction } from "sats-connect";
import { enqueueSnackbar } from "notistack";
import Modal from "../modal/modal";
interface DepositModalProps {
	show: boolean;
  handleModal: () => void;
}


const DepositModal:FC<DepositModalProps> = ({ show, handleModal }) => {
	const [amount, setAmount] = useState("");
	const changeAmount = (value: string) => {
		setAmount(value);
	}

	const handleUnisatTransaction = async () => {
		const despitAmount = amount.includes('.') ? parseFloat(amount) : parseInt(amount);
		let res = await GetExchangeAddress();
		let accountAddress = res.data.data;
		if (amount != '') {
		  // @ts-ignore
		  if(amount < 1000) {
			enqueueSnackbar('Less amount', {variant: 'error', anchorOrigin: {horizontal: 'left', vertical: 'top'}});
			return;
		  }
		  try {
			// @ts-ignore
			let txid = await window.unisat.sendBitcoin(accountAddress, despitAmount);
			console.log("@@@@", txid)
			if(txid) {
			  // DepositBTC(false, txid);
			  let result = await DepositBTC(txid, accountAddress);
			  console.log("@@@@", result)
			  if(result?.status == 202) {
			  	enqueueSnackbar('Transaction Success', {variant: 'success', anchorOrigin: {horizontal: 'left', vertical: 'top'}})
				handleModal();
			  } else {
			    enqueueSnackbar('Transaction Failure', {variant: 'error', anchorOrigin: {horizontal: 'left', vertical: 'top'}});
			  }
			}
			console.log(txid)
		  } catch (e) {
			enqueueSnackbar('Dismissed', {variant: 'error', anchorOrigin: {horizontal: 'left', vertical: 'top'}});
		  }
		} else {
		  enqueueSnackbar('Wallet address missing', {variant: 'error', anchorOrigin: {horizontal: 'left', vertical: 'top'}});
		}
	
	  }
	
	  const handleXverseTransaction = async () => {
		const despitAmount = amount.includes('.') ? parseFloat(amount) : parseInt(amount);
		let res = await GetExchangeAddress();
		let accountAddress = res.data.data;
		const senderAddress = GetCookie('address');
		if (senderAddress != '' && amount != '') {
		  // @ts-ignore
		  if(amount < 1000) {
			enqueueSnackbar('Less amount', {variant: 'error', anchorOrigin: {horizontal: 'left', vertical: 'top'}});
			return;
		  }
		  const sendBtcOptions = {
			payload: {
			  network: {
				type: "mainnet",
			  },
			  recipients: [
				{
				  address: accountAddress,
				  amountSats: despitAmount,
				},
			  ],
			  senderAddress: accountAddress,
			},
			onFinish: async (response: any) => {
				let result = await DepositBTC(response?.txId, accountAddress);
				if(result?.status == 202) {
					enqueueSnackbar('Transaction Success', {variant: 'success', anchorOrigin: {horizontal: 'left', vertical: 'top'}})
				  handleModal();
				} else {
				  enqueueSnackbar('Transaction Failure', {variant: 'error', anchorOrigin: {horizontal: 'left', vertical: 'top'}});
				}
			},
			onCancel: () =>  enqueueSnackbar('Dismissed', {variant: 'error', anchorOrigin: {horizontal: 'left', vertical: 'top'}}),
		  };
		  // @ts-ignore
		  await sendBtcTransaction(sendBtcOptions);
		} else {
		  enqueueSnackbar('Wallet address missing', {variant: 'error', anchorOrigin: {horizontal: 'left', vertical: 'top'}});
		}
	
	  }
	
	  const handleLeatherTransaction = async () => {
		const despitAmount = amount.includes('.') ? parseFloat(amount) : parseInt(amount);

		// get wallet from /exchange/generate_address with payload userId
		let res = await GetExchangeAddress();
		let accountAddress = res.data.data;
		console.log('@@@', accountAddress)
		// --- end ---
		// const accountAddress = 'bc1pdlee90dye598q502hytgm5nnyxjt46rz9egkfurl5ggyqgx49cssjusy3k';
		if (amount != '') {
		  // @ts-ignore
		  if(amount < 1000) {
			enqueueSnackbar('Less amount', {variant: 'error', anchorOrigin: {horizontal: 'left', vertical: 'top'}});
			return;
		  }
		  try {
			// @ts-ignore
			const resp = await window.btc?.request('sendTransfer', {
			  address: accountAddress,
			  amount: despitAmount
			});
			console.log("@@@@", resp.result.txid)

			if(resp.result.txid) {
				let result = await DepositBTC(resp.result.txid, accountAddress);
				if(result?.status == 202) {
					enqueueSnackbar('Transaction Success', {variant: 'success', anchorOrigin: {horizontal: 'left', vertical: 'top'}})
					handleModal();
				} else {
					enqueueSnackbar('Transaction Failure', {variant: 'error', anchorOrigin: {horizontal: 'left', vertical: 'top'}});
				}
			}
		  } catch(e) {
			console.log(e);
			enqueueSnackbar('Dismissed', {variant: 'error', anchorOrigin: {horizontal: 'left', vertical: 'top'}});
		  }
		} else {
		  enqueueSnackbar('Wallet address missing', {variant: 'error', anchorOrigin: {horizontal: 'left', vertical: 'top'}});
		}
	  }

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
					<input 
						type="text" 
						value={amount}
						onChange={(e) => {
							changeAmount(e.target.value);
						}}
					/>
					<div className="coin-box">
						<div className="coin-box-display">
							<div>SATS</div>
							<img src="/static/svgs/arrow-down.svg" />
						</div>
						<div className="coin-box-content">
							
						</div>
					</div>
				</div>
				<button 
					className="btn-outline text-center" 
					onClick={() => {
						const wallet = GetCookie('wallet');
						wallet == 'unisat' ?
						  handleUnisatTransaction() :
						  wallet == 'xverse' ?
							handleXverseTransaction() :
							handleLeatherTransaction();
						}
					}			
					disabled={amount == "" ? true : false}
				>
					Deposit
				</button>
			</div>
		</Modal>
  )
}

export default DepositModal;