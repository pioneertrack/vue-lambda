import axios from 'axios'

export default {
  get (count = 3) {
    return axios.get(process.env.API_ENDPOINT + '/weather-news/get_news', { params: { feedLength: count, }, })
      .then(response => {
        return response.data
      })
  },
}
