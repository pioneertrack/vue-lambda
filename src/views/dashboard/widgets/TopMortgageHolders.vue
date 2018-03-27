<template>
  <WcCard>
    <div slot="header">Top 3 Mortgage Holders</div>
    <div slot="content">
      <div v-for="(holder, index) in topMortgageHolders" v-bind:key="index"  class="tidbit">
          <div style="flex:4; align-self: center;" class="mortgage-name">
            <div>
              {{holder.name}}
            </div>
          </div>
          <div style="flex:1; text-align:center;">
            <span class="properties-count">{{holder.count}}</span>
          </div>
      </div>
    </div>
  </WcCard>
</template>
<script>
import WcCard from '../../../components/WcCard'
export default {
  name: 'top-mortgage-holders',
  props: [ 'top-mortgage-holders', ],
  components: {
    WcCard,
  },
}
</script>

<style lang="scss" scoped>
.tidbit{
  display:flex;
  line-height:60px;
  border-bottom: 1px solid #d1d1d4;
  font-family: "Roboto Regular", sans-serif;
  color: #6a6a6a;
  font-size: 14px;
  padding:0 20px;

  .mortgage-name {
    line-height:16px;
  }

  >.properties-count{
    font-size: 20px;
    float:right;
  }
}
.tidbit:last-child{
  border-bottom: 0px;
}

</style>
