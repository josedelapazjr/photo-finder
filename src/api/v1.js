import queryString from 'query-string';
import ApiCore from './ApiCore';

export default {
    searchPhotos: (queryString) => {
        const validRequestTime = requestedTime && requestedTime !== -1;
        const query = queryString.stringify({
          query: queryString,
          page: 1,
        });
        const apiURL = `${URL}/search/photos?${query}`;
        return ApiCore.request(HTTPMethod.GET, apiURL);
    }
}