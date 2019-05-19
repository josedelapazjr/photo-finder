import queryString from 'query-string';
import ApiCore from './ApiCore';
import { HTTPMethod } from './constants';

export default {
    searchPhotos: (searchString) => {
        const query = queryString.stringify({
          query: searchString,
          page: 1,
          per_page: 30,
        });
        return ApiCore.request(HTTPMethod.GET, `/search/photos?${query}`);
    },
    getFeaturedPhotos: () => {
      const query = queryString.stringify({
        page: 1,
        per_page: 30,
      });
      return ApiCore.request(HTTPMethod.GET, `/collections/featured?${query}`);
    }
}
