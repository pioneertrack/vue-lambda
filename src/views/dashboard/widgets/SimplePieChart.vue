<script>
import {Pie, } from 'vue-chartjs'

export default {
  name: 'simple-pie-chart',
  extends: Pie,
  props: [ 'data', 'options', ],
  mounted () {
    this.renderPieChart()
  },
  computed: {
    chartData: function () {
      return this.data
    },
  },
  methods: {
    renderPieChart: function () {
      this.renderChart(this.data, this.options)
    },
  },
  watch: {
    data: function () {
      this.renderPieChart()
    },
  },
}
</script>

<style scoped>

</style>
