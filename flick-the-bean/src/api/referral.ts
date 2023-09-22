import GetCookie from "@/hooks/cookies/getCookie";
import axios from "axios";

export const GetReferral = async () => {
  const userId = parseInt(GetCookie('userId'));
  if(userId) {
    return await axios.post('https://flickthebean.onrender.com/ref', {
      userId: userId,
    }).then(function (res) {
      return res.data.data.referral_code;
    }).catch(function (error) {
      console.log(error.toJSON());
    });
  }
}