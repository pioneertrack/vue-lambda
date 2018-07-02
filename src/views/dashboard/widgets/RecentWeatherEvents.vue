<template>
  <WcCard>
    <div slot="header">Weather Alerts + Events</div>
    <div slot="content" class="weather-table">
      <div class="table-responsive">
        <table>
          <thead>
          <tr>
            <th></th>
            <th>Weather</th>
            <th>Date</th>
            <th>Property Affected</th>
          </tr>
          </thead>
          <tbody >
          <tr v-for='(value, index) in reducedEvents' :key='index'>
            <td class="img-thumb">
              <img v-if='value.description<1' src="@/assets/images/hail-ok.svg" alt="Hail">
              <img v-else-if='value.description<2' src="@/assets/images/hail-yellow.svg" alt="Hail">
              <img v-else src="@/assets/images/hail-red.svg" alt="Hail">
            </td>
            <td>{{ value.description }}</td>
            <td>{{ value.date }}</td>
            <td><router-link :to="{name: 'dashboard-property-page', params: {id: value.property_id}}">{{ value.address }}</router-link></td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div  slot="footer"><a class="link-align" href = "/home">All notifications</a></div>
  </WcCard>
</template>

<script>
import WcCard from '@/components/WcCard'
export default {
  name: 'recent-weather-events',
  components: {
    WcCard,
  },
  props: [ 'events', ],
  data: function() {
    return {
      reducedEvents: [],
    }
  },
  created: function(){
    console.log(this.events.length)
    if (this.events.length < 3) {
        this.reducedEvents = this.events;
    } else {
    this.reducedEvents = this.events.slice(0, 3);
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../../assets/sass/includes/variables";

  .link-align {
    position: absolute;
    margin-top: -10px;
    right: 20px;
    color: #1A77B9;
  }
</style>
