import Cookies from 'js-cookie';

interface CookiesProps {
  cookieName: string;
}

const RemoveCookie = ({cookieName}: CookiesProps) => {
  Cookies.remove(cookieName);
}

export default RemoveCookie;