<template>
  <!-- Center Content section -->
  <div class="container-fluid m-b-45">
    <div class="container">
      <div class="row m-t-25">
       <div class="col-md-12">
          <CompanySummary :name="company_name" :properties-count="properties_count"></CompanySummary>
       </div>
      </div>
      <div class="row m-t-25">
        <div class="col-xl-3 col-md-3 col-sm-12">
          <div class="row">
            <div class="col-md-12">
              <PercentWidget :percent-status="percent_status"></PercentWidget>
            </div>
          </div>
          <div class="row m-t-20">
            <div class="col-md-12">
              <PortfolioValue :prop-values="portfolio_value"></PortfolioValue>
            </div>
          </div>
          <div class="row m-t-20">
            <div class="col-md-12">
              <PropertyAges :ages="property_ages"></PropertyAges>
            </div>
          </div>
          <div class="row m-t-20">
            <div class="col-md-12">
              <TopMortgageHolders :top-mortgage-holders="top_mortgage_holders"></TopMortgageHolders>
            </div>
          </div>
          <div class="row m-t-20">
            <div class="col-md-12">
              <PortfolioLtv :loan-percent="portfolio_ltv.loan_percent"></PortfolioLtv>
            </div>
          </div>
          <div class="row m-t-20">
            <div class="col-md-12">
              <AverageHailSize :average-size="hail_size.average_size" :largest-size="hail_size.largest_size"></AverageHailSize>
            </div>
          </div>
        </div>
        <div class="col-xl-9 col-md-9 col-sm-12">
          <div class="row">
            <div class="col-md-12">
              <EventStatistics :event-stats="event_statistics"></EventStatistics>
            </div>
          </div>
          <div class="row m-t-20">
            <div class="col-md-12">
              <DamagingEvents :weather-events="hail_events_by_month"></DamagingEvents>
            </div>
          </div>
          <div class="row m-t-20">
            <div class="col-md-12">
              <TopProperties :top-properties="top_properties"></TopProperties>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import AverageHailSize from './widgets/AverageHailSize'
import DamagingEvents from './widgets/DamagingEvents'
import EventStatistics from './widgets/EventStatistics'
import PercentWidget from './widgets/PercentWidget'
import PortfolioLtv from './widgets/PortfolioLtv'
import PortfolioValue from './widgets/PortfolioValue'
import PropertyAges from './widgets/PropertyAges'
import TopMortgageHolders from './widgets/TopMortgageHolders'
import WcCard from '../../components/WcCard'
import TopProperties from './widgets/TopProperties'
import CompanySummary from './widgets/CompanySummary'

export default {
  name: 'DataAudit',
  props: [ 'teamId', ],
  data () {
    return {
      company_name: '',
      properties_count: 0,
      percent_status: '',
      top_mortgage_holders: [
        {
          name: '',
          count: '',
        },
        {
          name: '',
          count: '',
        },
        {
          name: '',
          count: '',
        },
      ],
      property_ages: {},
      portfolio_ltv: {
        loan_percent: '',
      },
      hail_size: {
        average_size: '',
        largest_size: '',
      },
      portfolio_value: {
        estimate: '',
        estimate_min: '',
        estimate_max: '',
      },
      event_statistics: {
        total_weather_events: '',
        total_damaging_events: '',
        total_us_events: '',
        day_since_event: '',
        day_since_streak: '',
      },
      hail_events_by_month: [],
      top_properties: [],
    }
  },
  components: {
    AverageHailSize,
    CompanySummary,
    DamagingEvents,
    EventStatistics,
    PercentWidget,
    PortfolioLtv,
    PortfolioValue,
    PropertyAges,
    TopMortgageHolders,
    TopProperties,
    WcCard,
  },
  computed: {
    _teamId () {
      if (typeof this.teamId !== 'undefined') {
        return this.teamId
      }
      return this.$store.state.team.id
    },
  },
  mounted: function () {
    axios.get(process.env.API_ENDPOINT + '/team/' + this._teamId + '/percent-status/')
      .then(response => {
        this.percent_status = response.data.percent_status
      })
    axios.get(process.env.API_ENDPOINT + '/team/' + this._teamId + '/info')
      .then(response => {
        this.company_name = response.data.name
        this.properties_count = response.data.properties_count
      })
    axios.get(process.env.API_ENDPOINT + '/team/' + this._teamId + '/top-mortgage-holders/')
      .then(response => {
        this.top_mortgage_holders = response.data.top_mortgage_holders
      })
    axios.get(process.env.API_ENDPOINT + '/team/' + this._teamId + '/property-ages/')
      .then(response => {
        this.property_ages = response.data.property_ages
      })
    axios.get(process.env.API_ENDPOINT + '/team/' + this._teamId + '/portfolio-ltv/')
      .then(response => {
        this.portfolio_ltv = response.data.portfolio_ltv
      })
    axios.get(process.env.API_ENDPOINT + '/team/' + this._teamId + '/hail-size/')
      .then(response => {
        this.hail_size = response.data.hail_size
      })
    axios.get(process.env.API_ENDPOINT + '/team/' + this._teamId + '/portfolio-value/')
      .then(response => {
        this.portfolio_value = response.data.portfolio_value
      })
    axios.get(process.env.API_ENDPOINT + '/team/' + this._teamId + '/event-statistics/')
      .then(response => {
        this.event_statistics = response.data.event_statistics
      })
    axios.get(process.env.API_ENDPOINT + '/team/' + this._teamId + '/hail-events-by-month/')
      .then(response => {
        this.hail_events_by_month = response.data.hail_events_by_month
      })
    axios.get(process.env.API_ENDPOINT + '/team/' + this._teamId + '/top-properties/')
      .then(response => {
        this.top_properties = response.data.top_properties
      })
  },
}
</script>

<style lang="scss" scoped>
  .h4 {
    line-height: 22px;
  }
</style>
