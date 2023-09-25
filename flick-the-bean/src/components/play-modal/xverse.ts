import { login } from '@/api/login';
import bitcore from 'bitcore-lib';
import crypto from 'crypto';
import { getAddress, signMessage } from 'sats-connect';


export const handleXverse = async () => {
  let message = crypto.randomBytes(16).toString('hex');
  let hash = bitcore.crypto.Hash.sha256(Buffer.from(message)).toString('hex');
  let address = '';
  let publicKey = '';

  const getAddressOptions = {
    payload: {
      purposes: ['payment'],
      message: hash,
      network: {
        type: 'Mainnet'
      },
    },
    onFinish: (response: any) => {
      address = response.addresses[0].address;
      publicKey = response.addresses[0].publicKey;
    },
    onCancel: () => alert('Request canceled'),
  };

  // @ts-ignore
  await getAddress(getAddressOptions);

  // Now use the separate function to sign the message
  const sign = await signMessageFunc(address, hash);

  const data = await login(sign, publicKey, message, hash);

  // TODO improve this
  if (data) {
    return true;
  }
};

export const signMessageFunc = async (address: any, hash: any) => {
  let sign = '';

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
    },
    onCancel: () => alert("Canceled"),
  };

  // @ts-ignore
  await signMessage(signMessageOptions);

  return sign;
};