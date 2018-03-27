<template>
  <WcCard>
    <div slot="header">
      Portfolio LTV
    </div>
    <div slot="content" class="ltv-content">
      <div style="float:left; width:100%; padding: 8px 0;">
        <div class="loan-percent-value">{{loanPercent}}%</div>
        <div class="ownership-percent-value">{{ownerPercent}}%</div>
      </div>
      <div class="clearfix"></div>
      <div class="bar">
        <div class="progress ltv-progress-bar" style="height:14px;">
          <div class="progress-bar progress-bar-loan" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" v-bind:style="{width: loanPercent + '%'}">
            <span class="sr-only">{{loanPercent}}%</span>
          </div>
          <div class="progress-bar progress-bar-owned"  v-bind:style="{width: ownerPercent + '%'}">
            <span class="sr-only">{{ownerPercent}}%</span>
          </div>
        </div>
      </div>
      <div style="float:left; width:100%; padding: 8px 0;">
        <div class="loan-percent-label">
          Loan
        </div>
        <div class="ownership-percent-label">
          Value
        </div>
      </div>
      <div class="clearfix"></div>
    </div>
  </WcCard>
</template>

<script>
import WcCard from '../../../components/WcCard'
export default {
  name: 'portfolio-ltv',
  props: [ 'loan-percent', ],
  components: {
    WcCard,
  },
  computed: {
    ownerPercent: function () {
      return 100 - this.loanPercent
    },
  },
}
</script>

<style scoped>
.ltv-content{
  padding:10px;
}
.ltv-progress-bar{
  height:14px;
  margin:0;
}
.progress-bar-owned{
  background: #004380;
}
.progress-bar-loan{
   background: #79bfe8;
}
.ownership-percent-label{
  float:right;
}
.loan-percent-label{
  float:left;
}
.loan-percent-value{
  float:left;
  font-weight:bold;
}
.ownership-percent-value{
  float:right;
  font-weight:bold;
}
</style>
