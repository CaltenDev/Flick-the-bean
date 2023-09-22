import { login } from '@/api/login';
import GetCookie from '@/hooks/cookies/getCookie';
import SetCookie from '@/hooks/cookies/setCookie';
import bitcore from 'bitcore-lib';
import crypto from 'crypto';


export const handleUnisat = async () => {
  // @ts-ignore
  let uniSat =  window.unisat;
  let cookie = GetCookie('userId');

  console.log(cookie)
  console.log(uniSat)
  if (typeof uniSat !== 'undefined' && cookie == '') {
    console.log('UniSat Wallet is installed!');
    try {
      let accounts = await uniSat.requestAccounts();
      console.log('connect success', accounts);
      return getSignature('undefined');
    } catch (e) {
      console.log('connect failed');
    }
  } else {
    return true;
  }
}

export const getSignature = async (value:string) => {
  const message = value || crypto.randomBytes(16).toString('hex');
  const hash = bitcore.crypto.Hash.sha256(Buffer.from(message)).toString('hex');
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

  console.log(sign, publicKey);
  
  let userId = '';
  userId = await login(sign, publicKey, message, hash);
  SetCookie('userId', userId);
  SetCookie('sign', sign);
  SetCookie('publicKey', publicKey);
  if(userId) {
    return true;
  }
}

export const signMessage = async (value: string) => {
  const hash = bitcore.crypto.Hash.sha256(Buffer.from(value)).toString('hex');
  let publicKey = '';
  let sign = '';

  // @ts-ignore
  let uniSat = window.unisat;
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

  console.log(sign, publicKey);

  let userId = '';
  if(sign && publicKey && GetCookie('userId') == '') {
    userId = await login(sign, publicKey, value, hash);
    SetCookie('userId', userId);
  }
  if (userId || GetCookie('userId') != '') {
    return { publicKey: publicKey, signature: sign };
  }else{
    return { publicKey: "", signature:""};

  }
}