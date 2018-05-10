import axios from 'axios'
class TeamService {

  getAllTeams () {
    return axios.get(process.env.API_ENDPOINT + '/team/teams').then(response => {
      return response.data
    })
  }

  getInvites (teamId) {
    return axios.get(process.env.API_ENDPOINT + '/team/' + teamId + '/invitations').then(response => {
      return response.data
    })
  }

  createInvite (teamId, email, accountType) {
    return axios.post(process.env.API_ENDPOINT + '/team/' + teamId + '/invitations', {
      email: email,
      account_type: accountType,
    })
  }

  getInvite (token) {
    return axios.get(process.env.API_ENDPOINT + '/team/invite/' + token).then(response => {
      return response.data
    })
  }

  acceptInvite (token, userId) {
    return axios.post(process.env.API_ENDPOINT + '/team/invite/' + token + '/accept', {
      user_id: userId,
    }).then(response => {
      return response.data
    })
  }

  getMembers (teamId) {
    return axios.get(process.env.API_ENDPOINT + '/team/' + teamId + '/members/').then(response => {
      return response.data
    })
  }

}

export default new TeamService()
