import http from '../utils/axios';
import { API_GATEWAY_URL } from './config';

export const URLS = {
  //GET

  //POST
  GET_ME: `/sign-in.act`,
  SIGN_UP: `/sign-up.act`
};

// export async function signUp(input) {
//   const response = await http.post('signup.act', input);
//   return response.data;
// }
