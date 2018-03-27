import axios from 'axios'

export default {
  getProperty (propertyId) {
    return axios.post(process.env.API_ENDPOINT + '/properties/singleAddress', {
      id: propertyId,
    }).then(response => {
      return response.data.property[0]
    })
  },
  getMarkerLocation (propertyId) {
    return axios.post(process.env.API_ENDPOINT + '/properties/singleAddress', {
      id: propertyId,
    }).then(response => {
      this.property = response.data.property[0]
      return axios.get(process.env.API_ENDPOINT + '/google-maps/geometry', {params: {
        address: this.property.address + ' ' + this.property.city + ' ' + this.property.state,
      },
      }).then(gresponse => {
        return gresponse.data.location
      })
    })
  },
  recentWeatherAlerts (propertyId) {
    return axios.post(process.env.API_ENDPOINT + '/weather-events/property', {
      id: propertyId,
    }).then(response => {
      return response.data.weatherEvents
    })
  },

  getProperties (teamId) {
    return axios.get(process.env.API_ENDPOINT + '/team/' + teamId + '/properties').then(response => {
      return response.data.properties
    })
  },

  getPropertiesInRegion (teamId, southWest, northEast) {
    return axios.get(process.env.API_ENDPOINT + '/team/' + teamId + '/properties', {params: {
      southWest: `${southWest[0]}, ${southWest[1]}`,
      northEast: `${northEast[0]}, ${northEast[1]}`,
    }, }).then(response => {
      return response.data
    })
  },

  validate (address, city, state) {
    return axios.get(process.env.API_ENDPOINT + '/properties-bulk/validate-address', { params: { address: address, city: city, state: state, }, }).then(response => {
      return response.data
    })
  },

  addMultipleProperties (teamId, properties) {
    return axios.post(process.env.API_ENDPOINT + '/properties-bulk/add-multiple', {
      teamId: teamId,
      properties: properties,
    }).then(response => {
      return response.data
    })

  },

}
