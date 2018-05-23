<template>
  <div class="row">
    <div class="weather-table">
        <h4 class="border-bottom">Weather Events</h4>
        <div class="scroll-list">
            <table class="table">
                <thead>
                <tr>
                    <th>Event</th>
                    <th>Date</th>
                    <th>Type</th>
                </tr>
                </thead>
                <tbody>
                    <tr v-for="(event, index) in weatherEvents" :key='index'>
                        <td>
                          <img class="" src=
                              "../assets/images/hail.png"><span class="event-description">{{ event.desc }}</span></td>
                        <td>{{ event.date | formatDate }}</td>
                        <td>{{ event.type }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  </div>
</template>

<script>
import PropertyService from '@/services/PropertyService'
import moment from 'moment'

export default {
  props: [ 'propertyId', ],
  data: function () {
    return {
      weatherEvents: [],
    }
  },
  mounted: function () {
    if (this.propertyId !== '') {
      PropertyService.recentWeatherAlerts(this.propertyId).then((events) => {
        this.weatherEvents = events
      })
    }
  },
  filters: {
    formatDate: function (val) {
      return moment(val).format('MMM DD, YYYY')
    },
  },
  watch: {
    propertyId: function () {
      PropertyService.recentWeatherAlerts(this.propertyId).then((events) => {
        this.weatherEvents = events
      })
    },
  },
}
</script>

<style scoped>
</style>
