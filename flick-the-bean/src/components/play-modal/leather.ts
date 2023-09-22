
import { login } from '@/api/login';
import { AppConfig, UserSession, openSignatureRequestPopup, showConnect } from '@stacks/connect';
import { StacksMainnet } from '@stacks/network';
import bitcore from 'bitcore-lib';
import crypto from 'crypto';
Object.defineProperty(global, "_bitcore", {
  get() {
    return undefined;
  },
  set() { },
});
const appConfig = new AppConfig();
const userSession = new UserSession({ appConfig });
const getSignature = () => {
  let signature = localStorage.getItem('signature');
  let publickey = localStorage.getItem('publicKey');
  let message =  crypto.randomBytes(16).toString('hex');
  let hash = bitcore.crypto.Hash.sha256(Buffer.from(message)).toString('hex');
  if (userSession.isUserSignedIn()) {
    openSignatureRequestPopup({
      message: hash,
      network: new StacksMainnet(),
      appDetails: {
        name: "My App",
        icon: window.location.origin
      },
      async onFinish(data) {
        console.log('data: ', data);
        console.log("Signature: ", data.signature);
        console.log("Public Key: ", data.publicKey);
        localStorage.setItem('Signature', data.signature);
        localStorage.setItem('PublicKey', data.publicKey);
        const res = await login(data.signature, data.publicKey, message, hash);
        console.log("Res: ", res);
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