import axios from "axios";

export const login = async (message: string , hash: string, sign: string, publicKey: string, name: string) => {
  console.log("message: ", message);
  console.log("hash", hash);
  console.log("sign: ", sign);
  console.log("publicKey: ", publicKey);
  return await axios.post('https://flickthebean.onrender.com/login', {
    hash: hash,
    value: message,
    userPublicKey: publicKey,
    signedMessage: sign,
    userName: name
  }).catch(function (error) {
    console.log(error.toJSON());
  });
}