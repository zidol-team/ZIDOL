import axios, { AxiosInstance } from 'axios';

// ----------------------------------------------------------------------

const BASE_URL = 'http://localhost:3000/';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json;charset=UTF-8'
  }
});

export default axiosInstance;
