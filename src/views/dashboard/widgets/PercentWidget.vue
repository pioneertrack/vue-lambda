<template>
  <div class="percent-widget">
    <div class="circle"></div>
    <div class="percent-widget__content">
      <div class="icon">
        <div v-if="percentStatus > 75">
          <img src="@/assets/images/happy-sun.svg">
        </div>
        <div v-else-if="percentStatus > 50">
          <img src="@/assets/images/neutral-sun.svg">
        </div>
        <div v-else>
          <img src="@/assets/images/sad-sun.svg">
        </div>
      </div>
      <div class="percentage">{{percentStatus}}%</div>
      <div class="label">of your properties are in good shape</div>
    </div>
  </div>
</template>

<script>
import ProgressBar from 'progressbar.js';

// TODO enable template svg when imgs available
export default {
  name: 'percent-widget',
  props: ['percent-status'],
  mounted () {
    let color;

    if (this.percentStatus === 100) {
      color = '#8ec549';
    } else if (this.percentStatus > 75) {
      color = '#D0D31B';
    } else if (this.percentStatus > 50) {
      color = '#F8C105';
    } else {
      color = '#D81414';
    }

    this.bar = new ProgressBar.Circle(this.$el.querySelector('.circle'), {
      color,
      duration: 1000,
      easing: 'easeInOut',
      strokeWidth: 5,
      trailColor: '#EDEDED',
    });
    this.bar.animate(this.percentStatus / 100);
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
  @import "../../../assets/sass/includes/variables";

  .percent-widget {
    &__content {
      @include flex-col-center();
      @include pos-absolute-full();
      margin: -10px;
      height: 252px;
      left: 12px;
      z-index: 10;
    }

    .icon {
      width: 40px;
      margin-bottom: 10px;
    }

    .percentage {
      color: $black-0;
      font-family: $font-primary;
      font-size: 80px;
      line-height: 80px;
      text-align: center;
    }

    .label {
      width: 65%;
      color: $black-0;
      font-family: $font-primary;
      font-size: 18px;
      text-align: center;
    }
  }
</style>
