import axios from 'axios'
class TeamService {

  getAllTeams () {
    return axios.get(process.env.API_ENDPOINT + '/team/teams').then(response => {
      return response.data
    })
  }

}

export default new TeamService()
