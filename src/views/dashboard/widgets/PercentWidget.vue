<template>
  <div class="percent-card">
    <div class="circle"></div>
    <!--<div class="c100 p25 big center green">-->
      <div class="sun-icon">
        <img src="@/assets/images/sun.svg">
      </div>
    <div class="percent-description">
        <div>
          <span class="percentage">{{percentStatus}}%</span>
          <span class="label">of properties are unaffected by weather</span>
        </div>
    </div>
  </div>
</template>

<script>
import UiProgressCircular from 'keen-ui/src/UiProgressCircular'
import ProgressBar from 'progressbar.js'

export default {
  name: 'percent-widget',
  props: [ 'percent-status', ],
  components: {
    UiProgressCircular,
  },
  mounted: function () {
    this.bar = new ProgressBar.Circle(this.$el.querySelector('.circle'), {
      color: '#8ec549',
      duration: 1000,
      easing: 'easeInOut',
      strokeWidth: 6,
      trailColor: '#cccccc',
    })
    this.bar.animate(this.percentStatus / 100)
  },
  watch: {
    percentStatus: function () {
      this.bar.animate(this.percentStatus / 100)
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/common";

.percent-card{
  @include card-mixin();
  padding: 1em;
}

.percent-description {
  position: absolute;
  top:25%;
  bottom:0;
  left:0;
  right:0;
  font-size: 5rem;
  margin: 0 auto;
  z-index: 10;
  text-align: center;
  vertical-align: middle;
}
.percent-description span {
  display: block;
  white-space: normal;
}
.percent-description .percentage {
  font-size: .75em;
  line-height: 140px;
  height: 80px;
  color: #6a6a6a;
}
.percent-description .label {
  color: #6a6a6a;
  font-size: 14px;
  font-weight: 400;
  width: 160px;
  margin: 5px auto 0;
  line-height:18px;
  padding-top: 10px;
}
.sun-icon{
  position: absolute;
  left: 50%;
  top: 15%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  width: 20%;
}
</style>
