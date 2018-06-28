<template>
    <WcCard>
        <div slot="header">Weather Events</div>
        <div slot="content" class="weather-table">
            <div class="table-responsive">
                <table cellpadding="3" cellspacing="3" class="table">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Event</th>
                        <th>Date</th>
                        <th>Type</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(event, index) in weatherEvents" :key='index'>
                        <td class="img-thumb">
                            <img src="@/assets/images/hail.png" alt="Hail">
                        </td>
                        <td>{{ event.desc }}</td>
                        <td>{{ event.date | formatDate }}</td>
                        <td>{{ event.type }}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </WcCard>
</template>

<script>
import PropertyService from '@/services/PropertyService'
import WcCard from '@/components/WcCard'
import moment from 'moment'

export default {
  props: [ 'propertyId', ],
  components: {
    WcCard,
  },
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
