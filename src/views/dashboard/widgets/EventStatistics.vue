<template>
  <WcCard>
    <div slot="header">Event Statistics</div>
    <div slot="content">
      <div class="row">
        <div class="col-md-2 text-center col-md-offset-1">
          <span class="stat-number">
            {{eventStats.total_weather_events}}
          </span>
          <p class="stat-description">
            Total Weather
            Events Against
            Portfolio
          </p>
        </div>
        <div class="col-md-2 text-center">
          <span class="stat-number">
            {{eventStats.total_damaging_events}}
          </span>
          <p class="stat-description">
            Total Damaging Events Against Portfolio
          </p>
        </div>
        <div class="col-md-2 text-center">
          <span class="stat-number">
            {{eventStats.total_us_events}}
          </span>
          <p class="stat-description">
            Total Weather Events Across
            <br/>the US
          </p>
        </div>
        <div class="col-md-2 text-center">
          <span class="stat-number">
            {{eventStats.day_since_event}}
          </span>
          <p class="stat-description">
            Days Since<br/>Damaging<br/>Event
          </p>
        </div>
        <div class="col-md-2 text-center">
          <span class="stat-number">
            {{eventStats.damaging_event_frequency}}
          </span>
          <p class="stat-description">
            Average<br/>Hail Event<br/>Frequency
          </p>
        </div>
      </div>
    </div>
  </WcCard>
</template>

<script>
import WcCard from '../../../components/WcCard'
export default {
  name: 'event-statistics',
  props: [ 'event-stats', ],
  components: {
    WcCard,
  },
}
</script>

<style lang="scss" scoped>
  .stat-number{
    font-size:40px;
    color:#004380;
    font-family: "Roboto Regular", sans-serif;
    font-weight: bold;
  }
  .stat-description{
    margin: .2em 0 1em;
    font-family: "Roboto Regular", sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.6;
  }
</style>
