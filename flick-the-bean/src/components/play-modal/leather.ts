import { login } from '@/api/login';
import { AppConfig, UserSession, openSignatureRequestPopup, showConnect } from '@stacks/connect';
import bitcore from 'bitcore-lib';
import crypto from 'crypto';

const appConfig = new AppConfig(['store_write', 'publish_data']);
const userSession = new UserSession({ appConfig });

const getSignature = async () => {
  let message = crypto.randomBytes(16).toString('hex');
  let hash = bitcore.crypto.Hash.sha256(Buffer.from(message)).toString('hex');
  let user;

  if (userSession.isUserSignedIn()) {
    // Wrap the signature request in a Promise so we can await it
    const userResult = await new Promise((resolve) => {
      openSignatureRequestPopup({
        message: hash,
        async onFinish(data) {
          user = await login(data.signature, data.publicKey, message, hash);
          console.log(user);
          resolve(user);  // Resolve the promise with the user data
        },
      });
    });

    if (userResult) {
      console.log("user is not null");
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};


export const handleLeather = async () => {
  // Wrap the asynchronous part in a Promise
  const data = await new Promise((resolve) => {
    showConnect({
      appDetails: {
        name: 'My App',
        icon: window.location.origin + '/my-app-logo.svg',
      },
      onFinish: async () => {
        userSession.loadUserData();
        const signatureData = await getSignature();
        console.log(signatureData);
        resolve(signatureData);  // Resolve the promise
      },
      userSession: userSession,
    });
  });

  console.log("done");

  if (data) {
    console.log("data is not null");
    return true;
  } else {
    return false;
  }
};
