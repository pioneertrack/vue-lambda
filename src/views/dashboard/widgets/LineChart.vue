<script>
import {Line, } from 'vue-chartjs'

export default {
  name: 'line-chart',
  extends: Line,
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
