import { getHeaders } from './header'; 
import {URL} from './constants';

class ApiCore {
  static request = (method, endpoint) => {
    return fetch(`${URL}${endpoint}` , {
      method,
      headers: getHeaders(),
    })
    .then(response => response.json());
  } 
}

export default ApiCore;