<template>
  <WcCard>
    <div slot="header">Property Ages</div>
    <div slot="content">
      <div style="width:188px; margin: 24px auto;">
        <SimplePieChart :data="data" :options="options"></SimplePieChart>
      </div>
      <table class="table property-age-table">
        <tbody>
          <tr>
            <td class="indicator-col"><span class="age-percent indicator-young">{{ages.years_old_1}}%</span></td>
            <td><strong>One year or less</strong></td>
          </tr>
          <tr>
            <td class="indicator-col border-bottom"><span class="age-percent indicator-middle-aged">{{ages.years_old_1_30}}%</span></td>
            <td><strong>1-30 years old</strong></td>
          </tr>
          <tr>
            <td class="indicator-col"><span class="age-percent indicator-old">{{ages.years_old_30_plus}}%</span></td>
            <td><strong>Older than 30 years</strong></td>
          </tr>
        </tbody>
      </table>
    </div>
  </WcCard>
</template>

<script>
import WcCard from '../../../components/WcCard'
import SimplePieChart from './SimplePieChart'

export default {
  name: 'property-ages',
  props: [ 'ages', ],
  components: {
    WcCard,
    SimplePieChart,
  },
  data () {
    return {
      options: {
        responsive: true,
        legend: {
          display: false,
        },
      },
    }
  },
  computed: {
    data: function () {
      let data = []
      if (this.ages) {
        data.push(this.ages.years_old_1)
        data.push(this.ages.years_old_1_30)
        data.push(this.ages.years_old_30_plus)
      }
      return {
        datasets: [{
          data: data,
          backgroundColor: [
            '#004380',
            '#79bfe8',
            '#D1E9F8',
          ],
          label: 'Dataset 1',
        }, ],
        labels: [
          '1 year old',
          '1-30 years old',
          '30+ years old',
        ],
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/common";
.indicator-col{
  position:relative;
  border-right: 1px solid #d1d1d4;
  padding:4px 6px 4px 12px;
}
.indicator-young:before{
  @include row-color-indicator(#004380)
}
.indicator-middle-aged:before{
  @include row-color-indicator(#79bfe8)
}
.indicator-old:before{
  @include row-color-indicator(#D1E9F8)
}
.age-percent{
  font-size:18px;
  font-family: "Roboto Bold", sans-serif;
}
.property-age-table td{
  vertical-align: middle;
}
</style>
