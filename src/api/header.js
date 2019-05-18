const ACCESS_KEY = '352bbfea634124c0a3edf416008a922e2b7475ee1d728335e9dcbc3cf93a5e40';

export const getHeaders = () => ({
  Accept: 'application/json',
  'Content-Type': 'application/json',
  Authorization: `Client-ID ${ACCESS_KEY}`
});