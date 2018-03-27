<template>
  <WcCard>
    <div slot="header">
      Estimated<br/>Portfolio Value
    </div>
    <div slot="content">
      <div class="range-value-estimate value-estimate text-center border-bottom">
        $ {{propValues.estimate}}
      </div>
      <div class="range-value-estimate text-center border-bottom">
        <span class="range-value-minmax">Min</span><span class="range-value-number">$ {{propValues.estimate_min}}</span>
      </div>
      <div class="range-value-estimate text-center">
        <span class="range-value-minmax">Max </span><span class="range-value-number">$ {{propValues.estimate_max}}</span>
      </div>
    </div>
  </WcCard>
</template>

<script>
import WcCard from '../../../components/WcCard'
export default {
  name: 'portfolio-value',
  props: [ 'prop-values', ],
  components: {
    WcCard,
  },
}
</script>

<style scoped>
.value-estimate{
  font-family: "Roboto Bold", sans-serif;
  font-size: 20px;
}
.range-value-estimate{
  line-height:60px;
}
.range-value-number{
  font-family: "Roboto Regular", sans-serif;
  font-size: 14px;
  color: #6a6a6a;
}
.range-value-minmax{
  font-family: "Roboto Medium", sans-serif;
  font-size: 14px;
  color:#6a6a6a;
  padding-right: 8px;
}
</style>
