import { login } from '@/api/login';
import crypto from 'crypto';
const bitcoin = require('bitcoinjs-lib');


export const handleUnisat = async () => {
  // @ts-ignore
  let uniSat =  window.unisat;
  if (typeof uniSat !== 'undefined') {
    console.log('UniSat Wallet is installed!');
    try {
      let accounts = await uniSat.requestAccounts();
      console.log('connect success', accounts);
      getSignature();
    } catch (e) {
      console.log('connect failed');
    }
  }
}

const getSignature = async () => {
  let message =  crypto.randomBytes(16).toString('hex');
  let hash = bitcoin.crypto.sha256(message).toString('hex');
  let publicKey = '';
  let sign = '';

  // @ts-ignore
  let uniSat =  window.unisat;
  try {
    sign = await uniSat.signMessage(hash);
  } catch (e) {
    console.log(e);
  }

  try {
    publicKey = await uniSat.getPublicKey();
  } catch (e) {
    console.log(e);
  }
  const data = login(sign, publicKey, message, hash);

  console.log(data);
  
}