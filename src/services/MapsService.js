class MapsService {

  getStreetViewSrc (lat, long, width, height) {
    let key = 'AIzaSyBV1CpMWuEjNthxFfQ6lUg-VPDI7D0aYjA'
    return `https://maps.googleapis.com/maps/api/streetview?size=${width}x${height}&location=${lat},${long}&key=${key}`
  }

}

export default new MapsService()
