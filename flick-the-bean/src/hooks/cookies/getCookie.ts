import Cookies from 'js-cookie';

const GetCookie = (cookieName: string) => {
  return Cookies.get(cookieName) != undefined ? Cookies.get(cookieName) : '';
}

export default GetCookie;