import { login } from '@/api/login';
import bitcore from 'bitcore-lib';
import crypto from 'crypto';
import { getAddress, signMessage } from 'sats-connect';

export const handleXverse = async () => {
  let message =  crypto.randomBytes(16).toString('hex');
  let hash = bitcore.crypto.Hash.sha256(Buffer.from(message)).toString('hex');
  let address = '';
  let publicKey = '';
  let sign = '';
  const getAddressOptions = {
    payload: {
      purposes: ['ordinals', 'payment'],
      message: hash,
      network: {
        type:'Mainnet'
      },
    },
    onFinish: (response: any) => {
      address = response.addresses[0].address;
      publicKey = response.addresses[0].publicKey;
      console.log("res", response);
    },
    onCancel: () => alert('Request canceled'),
  }
  // @ts-ignore
  await getAddress(getAddressOptions);

  const signMessageOptions = {
    payload: {
      network: {
        type: "Mainnet",
      },
      address: address,
      message: hash,
    },
    onFinish: (response: any) => {
      // signature
      sign = response;
      console.log("signature", response);
    },
    onCancel: () => alert("Canceled"),
  };
  // @ts-ignore
  await signMessage(signMessageOptions);

  console.log("message", message);
  console.log("hash", hash);
  const data = await login(sign, publicKey, message, hash);

  console.log(data);
}