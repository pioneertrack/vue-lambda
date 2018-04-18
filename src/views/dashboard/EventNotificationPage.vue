<template>
    <div class="container-fluid m-b-45">
        <div class="container">
           <div class="row m-t-30">
               <div class="col-md-12">
                   <RecentWeatherEvents :events="weatherEvents"></RecentWeatherEvents>
               </div>
           </div>
        </div>
    </div>
</template>

<script>
import RecentWeatherEvents from './widgets/RecentWeatherEvents'
import axios from 'axios'

export default {
  name: 'event-notification-page',
  components: {
    RecentWeatherEvents,
  },
  mounted () {
    this.getWeatherEvents()
  },
  data () {
    return {
      weatherEvents: [],
    }
  },
  methods: {
    getWeatherEvents () {
      axios.get(process.env.API_ENDPOINT + '/team/' + this.$store.state.team.id + '/weather-events', { params: { limit: 10000, }, })
        .then(response => {
          this.weatherEvents = response.data
        })
    },
  },
}
</script>

<style scoped>

</style>
