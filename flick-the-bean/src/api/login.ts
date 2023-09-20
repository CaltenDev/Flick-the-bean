import axios from "axios";

export const login = async (sign: string, publicKey: string, message: string, hash:string) => {
  return await axios.post('https://flickthebean.onrender.com/login', {
    hash: hash,
    value: message,
    userPublicKey: publicKey,
    signedMessage: sign,
    userName: "name"
  }).catch(function (error) {
    console.log(error.toJSON());
  });
}