<template>
  <!-- Center Content section -->
  <div class="container-fluid m-b-45">
    <div class="container">
    <template v-if="!importRequired">
        <div class="row m-t-25">
            <div class="col-xl-3 col-md-3 col-sm-12">
                <PercentWidget :percent-status="percent_status"></PercentWidget>
            </div>
            <div class="col-xl-9 col-md-9 col-sm-12">
                <RecentWeatherEvents :events="weatherEvents"></RecentWeatherEvents>
            </div>
        </div>
    </template>
      <div class="row m-t-25">
          <div class="col-sm-8">
            <PropertiesList
                    :properties="properties"
                    :count="propertiesCount"
                    :pages="propertyPages"
                    :no-addresses="importRequired"
                    @update="getProperties"
                    @properties-added="propertiesAdded"></PropertiesList>
          </div>
          <div class="col-sm-4">
              <WeatherNews :news="weatherNews"></WeatherNews>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import PropertiesList from './PropertiesList'
import RecentWeatherEvents from './widgets/RecentWeatherEvents'
import PercentWidget from './widgets/PercentWidget'
import WeatherNews from './widgets/WeatherNews'
import store from '@/store/index'
import NewsService from '@/services/NewsService'

export default {
  name: 'Dashboard',
  components: {
    PropertiesList,
    RecentWeatherEvents,
    PercentWidget,
    WeatherNews,
  },
  mounted () {
    this.getWeatherEvents()
    this.getPercentStatus()
    this.getWeatherNews()
  },
  data () {
    return {
      importRequired: false,
      properties: [
      ],
      weatherNews: [
      ],
      propertyPages: 1,
      propertiesCount: 4,
      percent_status: '100',
      unread: 3,
      weatherEvents: [
      ],
      checkedNames: [],
      allCheckbox: 'no',
    }
  },
  beforeRouteEnter (to, from, next) {
    axios.get(process.env.API_ENDPOINT + '/team/' + store.state.teamId + '/properties',
      {
        params: { per_page: 20, page: 1, },
      })
      .then(response => {
        let propertyPages = parseInt(response.headers['x-pagination-pages'])
        let properties = response.data
        let propertiesCount = parseInt(response.headers['x-pagination-count'])
        next(vm => {
          vm.propertyPages = propertyPages
          vm.properties = properties
          vm.propertiesCount = propertiesCount
          vm.importRequired = propertiesCount === 0
        })
      })
  },
  methods: {
    selectAll () {
      if (this.checkedNames.length === this.propertiesArray.length) {
        this.checkedNames = []
      } else {
        this.checkedNames = []
        for (let property in this.propertiesArray) {
          this.checkedNames.push(this.propertiesArray[property].address)
        }
        this.allCheckbox = 'yes'
      }
    },
    getProperties (event) {
      axios.get(process.env.API_ENDPOINT + '/team/' + this.$store.state.teamId + '/properties',
        {
          params: { per_page: 20, page: event.page, },
        })
        .then(response => {
          this.propertyPages = parseInt(response.headers['x-pagination-pages'])
          this.properties = response.data
          this.propertiesCount = parseInt(response.headers['x-pagination-count'])
          this.importRequired = this.propertiesCount === 0
        })
    },
    getWeatherEvents () {
      axios.get(process.env.API_ENDPOINT + '/team/' + this.$store.state.teamId + '/weather-events')
        .then(response => {
          this.weatherEvents = response.data
        })
    },
    getPercentStatus () {
      axios.get(process.env.API_ENDPOINT + '/team/' + this.$store.state.teamId + '/percent-status/')
        .then(response => {
          this.percent_status = response.data.percent_status
        })
    },
    getWeatherNews () {
      NewsService.get().then((news) => {
        this.weatherNews = news
      })
    },
    propertiesAdded () {
      this.getWeatherEvents()
      this.getPercentStatus()
      this.getProperties({ page: 1, })
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
