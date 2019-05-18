import queryString from 'query-string';
import ApiCore from './ApiCore';
import {HTTPMethod} from './ApiCore';

// export default {
//     searchPhotos: (searchString) => {
//         const query = queryString.stringify({
//           query: searchString,
//           page: 1,
//         });
//         const apiURL = `${URL}/search/photos?${query}`;
//         return ApiCore.request(HTTPMethod.GET, apiURL);
//     }
// }

class APIUtility {
  static searchPhotos = (searchString) => {
    const query = queryString.stringify({
      query: searchString,
      page: 1,
    });
    const apiURL = `${URL}/search/photos?${query}`;
    console.log('apiURL: ', apiURL)
    return ApiCore.request(HTTPMethod.GET, apiURL);
  }
}

export default APIUtility;