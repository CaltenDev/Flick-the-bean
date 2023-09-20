import GetCookie from "@/hooks/cookies/getCookie";
import axios from "axios";

export const GetNounce = async () => {
  const val = GetCookie('userId');
  const userId = parseInt(val != undefined ? val : '0');
  if(userId != undefined) {
    return await axios.post('https://flickthebean.onrender.com/game/commitment', {
      userId: userId,
    }).then(function (res) {
      console.log(res);
    }).catch(function (error) {
      console.log(error.toJSON());
    });
  } else {
    console.log('No User Id');
  }
}