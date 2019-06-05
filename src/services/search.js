import axios from "axios";
import config from "./config";

class SearchService {
  static search({ query, page, perPage }) {
    page = page || 1;
    perPage = perPage || 30;
    return axios(
      `${config.UNSPLASH_API_URL}/search/photos?client_id=${
        config.UNSPLASH_CLIENT_ID
      }&query=${query}&per_page=${perPage}&page=${page}`
    );
  }
}

export default SearchService;
