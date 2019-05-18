import {getHeaders} from './header'; 
export const HTTPMethod = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  DELETE: 'DELETE',
};

const URL = 'https://api.unsplash.com';

class ApiCore {
  static request = (method, endpoint) => {
    return fetch(endpoint) , {
      method,
      headers: getHeaders(),
    };
  } 
}

export default ApiCore;