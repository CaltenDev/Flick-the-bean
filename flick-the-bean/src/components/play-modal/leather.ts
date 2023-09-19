
import { AppConfig, UserSession, openSignatureRequestPopup, showConnect } from '@stacks/connect';
import { StacksMainnet } from '@stacks/network';
import crypto from 'crypto';
const bitcoin = require('bitcoinjs-lib');

const appConfig = new AppConfig();
const userSession = new UserSession({ appConfig });
let message =  '';
let hash;
if (!userSession.isUserSignedIn()) {
  message =  crypto.randomBytes(16).toString('hex');
  hash = bitcoin.crypto.sha256(message);
}
const getSignature = () => {
  let signature = localStorage.getItem('signature');
  let publickey = localStorage.getItem('publicKey');
  if (userSession.isUserSignedIn()) {
    openSignatureRequestPopup({
      message,
      network: new StacksMainnet(),
      appDetails: {
        name: "My App",
        icon: window.location.origin
      },
      onFinish(data) {
        console.log('data: ', data);
        console.log("Signature: ", data.signature);
        console.log("Public Key: ", data.publicKey);
        localStorage.setItem('signature', data.signature);
        localStorage.setItem('publicKey', data.publicKey);
      },
      userSession
    });
  } else {
    console.log("signature: ", signature);
    console.log("publickey: ", publickey);
  }
}

export const handleLeather = () => {
  let signature = localStorage.getItem('signature');
  let publickey = localStorage.getItem('publicKey');
  if (!userSession.isUserSignedIn() && signature == null && publickey == null) {
    showConnect({
        userSession,
        appDetails: {
          name: 'App Name',
          icon: window.location.origin + '/svgs/bitcoin.svg',
        },
        onFinish: () => {
          getSignature();
        },
        onCancel: () => {
          // handle if user closed connection prompt
        },
    });
  } else {
    console.log('user signed in:', userSession.loadUserData().profile);
    if (signature == null && publickey == null) {
      getSignature();
    } else {
      console.log("signature: ", signature);
      console.log("publickey: ", publickey);
    }
  }
}

  // const disconnectWallet = () => {
//   if (userSession.isUserSignedIn()) {
//     userSession.signUserOut("/")
//     localStorage.removeItem('signature');
//     localStorage.removeItem('publickey');
//   }
// }

// signature: 05ff110c578f3f274d34acf2c6d05c8e652b5dabe0fe15280286ba066024dca7584f88c1ed1d86b981a8a08ee43ed7ec42e790984398a99f769e2d465297571701
// pubkey: 023950d1c1da1055da229cf006cac3a4a809605c39ae8e13a05361ed421f7958ad