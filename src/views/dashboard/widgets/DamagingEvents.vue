<template>
  <WcCard>
    <div slot="header">Damaging Hail Events</div>
    <div slot="content">
      <div style="margin: 23px 0;">
        <LineChart :data="data" :options="options"></LineChart>
      </div>
      <div class="table-responsive">
        <table class="table damage-events-table">
          <tbody>
            <tr v-for="event in displayList" v-bind:key="event.id">
              <td><strong>{{event.month}}</strong> {{event.year}}</td>
              <td><strong>{{event.events}}</strong> Events</td>
              <td><strong>{{event.damaging_events}}</strong> Damaging Hail Events</td>
              <td><strong>{{event.minor_events }}</strong> Minor Events</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </WcCard>
</template>

<script>
import WcCard from '../../../components/WcCard'
import LineChart from './LineChart'

export default {
  name: 'damaging-events',
  props: [ 'weather-events', ],
  components: {
    WcCard,
    LineChart,
  },
  computed: {
    displayList: function () {
      return this.weatherEvents.slice().reverse()
    },
    data: function () {
      // collect data in an array
      let dataPoints = []
      var months = []
      this.weatherEvents.forEach(function (event) {
        dataPoints.push(event.damaging_events)
        months.push(event.month + ' ' + event.year)
      })
      return {
        datasets: [{
          fill: true,
          data: dataPoints,
          borderColor: '#004380',
          backgroundColor: '#D1E9F8',
          label: 'Hail',
          lineTension: 0,
        }, ],
        labels: months,
      }
    },
  },
  data: function () {
    return {
      options: {
        legend: {
          display: false,
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            type: 'time',
            time: {
              parser: 'MMMM YYYY',
              // round: 'day'
              tooltipFormat: 'MMM YYYY',
              unit: 'month',
              displayFormats: {
                'month': 'MMM YY',
              },
            },
            scaleLabel: {
              display: true,
              labelString: 'Month',
            },
          }, ],
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Events',
            },
          }, ],
        },
      },
    }
  },
  filters: {
    capitalizeFirst: function (value) {
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
  },
}
</script>

<style lang="scss" scoped>
.damage-events-table{
  margin-bottom:0;
  tbody{
    tr{
      td{
        padding: 18px;
      }
    }
  }
}
</style>
