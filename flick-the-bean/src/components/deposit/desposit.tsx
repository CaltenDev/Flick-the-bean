import { DepositBTC } from "@/api/deposit";
// import { WithdrawBtc } from "@/api/withdraw";
import GetCookie from "@/hooks/cookies/getCookie";
import { useRouter } from "next/navigation";
import { enqueueSnackbar } from "notistack";
import { ChangeEvent, useState, useEffect } from "react";
import { sendBtcTransaction } from "sats-connect";
import {
	useBalanceStore,
} from '../../store'

const Deposit = () => {
  const[tab, setTab] = useState(0);
  const router = useRouter();
  const[amount, setAmount] = useState('');
  const[focus, setFocus] = useState(false);
  const[displayAmount, setDisplayAmount] = useState('');
  const[wallet, setWallet] = useState(GetCookie('wallet'));
  const updateBalance = useBalanceStore(state => state.updateBalance);
  const handleAmount = (e: ChangeEvent<HTMLInputElement>) => {
    console.log('@@@', e.target.value)
    setAmount(e.target.value);
    // @ts-ignore
    setDisplayAmount((e.target.value) / 100000000);
  }

  const handleWithdraw = () => {
    const withdrawAmount = amount.includes('.') ? parseFloat(amount) : parseInt(amount);
    // WithdrawBtc(withdrawAmount);
  }

  const handleUnisatTransaction = async () => {
    const despitAmount = amount.includes('.') ? parseFloat(amount) : parseInt(amount);
    const accountAddress = 'bc1pdlee90dye598q502hytgm5nnyxjt46rz9egkfurl5ggyqgx49cssjusy3k';
    if (amount != '') {
      // @ts-ignore
      if(amount < 1000) {
        enqueueSnackbar('Less amount', {variant: 'error', anchorOrigin: {horizontal: 'left', vertical: 'top'}});
        return;
      }
      try {
        // @ts-ignore
        let txid = await window.unisat.sendBitcoin(accountAddress, despitAmount);
        if(txid) {
          // DepositBTC(false, txid);
          let result = await DepositBTC(false, txid);
          console.log(result)
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
    const accountAddress = 'bc1pdlee90dye598q502hytgm5nnyxjt46rz9egkfurl5ggyqgx49cssjusy3k';
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
        onFinish: (response: any) => {
          alert(response);
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
    const accountAddress = 'bc1pdlee90dye598q502hytgm5nnyxjt46rz9egkfurl5ggyqgx49cssjusy3k';
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
        console.log(resp.result.txid)
      } catch(e) {
        console.log(e);
        enqueueSnackbar('Dismissed', {variant: 'error', anchorOrigin: {horizontal: 'left', vertical: 'top'}});
      }
    } else {
      enqueueSnackbar('Wallet address missing', {variant: 'error', anchorOrigin: {horizontal: 'left', vertical: 'top'}});
    }
  }

  useEffect(() => {
    const currentBalance = GetCookie('balance');
		// @ts-ignore
		updateBalance(currentBalance)
  })

  return(
    <>
      <div className="tabs">
        <button onClick={() => setTab(0)} className={`tabs__tab ${tab == 0 ? 'tabs__tab--active' : ''}`}>Desposit</button>
        <button onClick={() => setTab(1)} className={`tabs__tab ${tab == 1 ? 'tabs__tab--active' : ''}`}>Withdraw</button>
      </div>
      {
        tab == 0 ? (
          <section className="deposit">
            <div className="deposit__header-wrapper">
              <button className="deposit__back-btn" onClick={() => router.push('/flip-coin')}>
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <title/>
                  <g data-name="Layer 2" id="Layer_2">
                    <path d="M10.1,23a1,1,0,0,0,0-1.41L5.5,17H29.05a1,1,0,0,0,0-2H5.53l4.57-4.57A1,1,0,0,0,8.68,9L2.32,15.37a.9.9,0,0,0,0,1.27L8.68,23A1,1,0,0,0,10.1,23Z"/>
                  </g>
                </svg>
              </button>
              <h3 className="deposit__title">Deposit</h3>
            </div>
            <div className="deposit__panel deposit__margin-bottom">
              <div className="deposit__input-groupt">
                <input step="any" type="number" className="deposit__textfield" onChange={handleAmount}/>
                <div className="deposit__textfield-sufix">BTC</div>
              </div>
            </div>
            <button
              className="deposit__btn"
              onClick={
                wallet == 'unisat' ?
                  handleUnisatTransaction :
                  wallet == 'xverse' ?
                    handleXverseTransaction :
                    handleLeatherTransaction
              }
              disabled={amount == '' ? true : false}
            >
              Deposit
            </button>
          </section>
        ) : (
          <section className="deposit">
            <div className="deposit__header-wrapper">
              <button className="deposit__back-btn" onClick={() => router.push('/flip-coin')}>
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <title/>
                  <g data-name="Layer 2" id="Layer_2">
                    <path d="M10.1,23a1,1,0,0,0,0-1.41L5.5,17H29.05a1,1,0,0,0,0-2H5.53l4.57-4.57A1,1,0,0,0,8.68,9L2.32,15.37a.9.9,0,0,0,0,1.27L8.68,23A1,1,0,0,0,10.1,23Z"/>
                  </g>
                </svg>
              </button>
              <h3 className="deposit__title">Withdraw</h3>
            </div>
            <div className="deposit__panel deposit__margin-bottom">
              <div className="deposit__input-groupt">
                <input step="any" type="number" className="deposit__textfield" onChange={handleAmount}/>
                <div className="deposit__textfield-sufix">BTC</div>
              </div>
            </div>
            <button
              className="deposit__btn"
              onClick={handleWithdraw}
              disabled={amount == '' ? true : false}
            >
              Withdraw
            </button>
          </section>
        )
      }
    </>
  )
}

export default Deposit;