import axios from "axios";
import { API } from "./consts";

export const addDataToLocalStorage = (user, tokens) => {
  localStorage.setItem('account', JSON.stringify(user))
  localStorage.setItem('tokens', JSON.stringify(tokens))
}

export const updateToken = () => {
  const updateFunc = setInterval(async () => {
    const tokens = JSON.parse(localStorage.getItem('tokens'));
    if(!tokens) return clearInterval(updateFunc)
    const Authorization = `Bearer ${tokens.access}`;
    let res = await axios.post(`${API}/account/refresh/`, {refresh: tokens.refresh }, { headers: { Authorization }});
    localStorage.setItem('tokens', JSON.stringify({ refresh: tokens, access: res.data.access }));
  }, 1000 * 60 * 24 * 28);
}

export const logout = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('tokens');
}

export const isUserLogin = () => {
  const user = localStorage.getItem('account');
  if (!user) return false;
  return true;
}

export const getAuthConfig = () => {
  const tokens = JSON.parse(localStorage.getItem('tokens'));
  if(!tokens) return false;
  const Authorization = `Bearer ${tokens.access}`;
  const config = {
    headers: {
      Authorization,
    },
  };
  return config
}