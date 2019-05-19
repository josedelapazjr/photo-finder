import { ACCESS_KEY } from './constants';
 
export const getHeaders = () => ({
  Accept: 'application/json',
  'Content-Type': 'application/json',
  Authorization: `Client-ID ${ACCESS_KEY}`
});