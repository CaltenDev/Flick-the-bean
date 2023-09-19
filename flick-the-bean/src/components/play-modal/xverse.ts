import crypto from 'crypto';
import { getAddress, signMessage } from 'sats-connect';
const bitcoin = require('bitcoinjs-lib');

export const handleXverse = async () => {
  let message =  crypto.randomBytes(16).toString('hex');
  let hash = bitcoin.crypto.sha256(message);
  let address = '';
  const getAddressOptions = {
    payload: {
      purposes: ['ordinals'],
      message: message,
      network: {
        type:'Mainnet'
      },
    },
    onFinish: (response: any) => {
      address = response.addresses[0].address;
      console.log("address", address);
      console.log("publicKey", response.addresses[0].publicKey);
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
      message: message,
    },
    onFinish: (response: any) => {
      // signature
      console.log("signature", response);
    },
    onCancel: () => alert("Canceled"),
  };
  // @ts-ignore
  await signMessage(signMessageOptions);

  console.log("message", message);
  console.log("hash", hash.toString('hex'));
}