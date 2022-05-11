import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://nlw-return-impulse-server-production-0ab6.up.railway.app/'
});