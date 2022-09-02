import http from 'utils/axios';

export const URLS = {};

export async function signUp(input) {
  const response = await http.post('signup.act', input);
  return response.data;
}
