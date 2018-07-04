<!-- Center Content section -->
<template>
  <div style="background-color: #F5F6FA;" class="container-fluid m-b-45">
    <div class="container">
      <!-- <template v-if = "!importRequired"> -->
      <template>
        <div class="row m-t-25">
          <div class="col-xl-3 col-md-3 col-sm-12">
            <PercentWidget :percent-status="78"></PercentWidget>
          </div>
          <div class="col-xl-9 col-md-9 col-sm-12">
            <!-- <RecentWeatherEvents :events="weatherEvents"></RecentWeatherEvents> -->
            <RecentWeatherEvents :events="[{ description: '1.3', date: 234, property_id: 'ewdse', address: 'wer'}, { description: '0.6', date: 22432, property_id: 23, address: 'wertew'}, { description: '', date: 22432, property_id: 23, address: 'weerr' },{},{}]"></RecentWeatherEvents>
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
            @properties-added="propertiesAdded">
          </PropertiesList>
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
    console.log('env:', process.env)
  },
  data () {
    return {
      importRequired: true,
      properties: [
        {
          id: 1,
          address:'new yorkdafrwerewrewedsfgsdgwefewfwwefr',
          city: 'New York',
          state: 'NY',
          zip: 234
        },
        {
          id: 2,
          address:'here',
          city: 'Virginia',
          state: 'NY',
          zip: 223
        },
        {
          id: 3,
          address:'ISa',
          city: 'Tokyo',
          state: 'TK',
          zip: 44
        }
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
    axios.get(process.env.API_ENDPOINT + '/team/' + store.state.team.id + '/properties',
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
          // vm.importRequired = propertiesCount === 0
          // vm.importRequired = propertiesCount === 0
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
      axios.get(process.env.API_ENDPOINT + '/team/' + this.$store.state.team.id + '/properties',
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
      axios.get(process.env.API_ENDPOINT + '/team/' + this.$store.state.team.id + '/weather-events')
        .then(response => {
          this.weatherEvents = response.data
        })
    },
    getPercentStatus () {
      axios.get(process.env.API_ENDPOINT + '/team/' + this.$store.state.team.id + '/percent-status/')
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
      // this.getProperties({ page: 1, })
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
