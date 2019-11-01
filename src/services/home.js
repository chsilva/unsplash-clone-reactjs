import axios from "axios"
import config from "./config"

class HomeService {
  static getPhotos(params = {}) {
    const page = params.page || 1
    const perPage = params.perPage || 15
    return axios(
      `${config.UNSPLASH_API_URL}/photos?client_id=${config.UNSPLASH_CLIENT_ID}&per_page=${perPage}&page=${page}`,
    )
  }
}

export default HomeService
