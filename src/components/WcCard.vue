<template>
    <div class="wc-card" v-bind:class="{'wc-card-loading':isLoading}">
        <div class="wc-card-layover" v-if="isLoading">
            <slot name="layover"></slot>
        </div>
        <div class="wc-card-inner">
            <div class="border-bottom wc-card-inner__text">
                <slot name="header"></slot>
            </div>
            <div>
                <slot name="content"></slot>
            </div>
            <div class="wc-card-footer">
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</template>

<script>

/**
   * Component for WeatherCheck card in dashboard
   */
export default {
  name: 'wc-card',
  props: {
    isLoading: {
      default: false,
      type: Boolean,
    },
  },
  mounted () {
    if (this.$slots.footer === undefined) {
      this.$el.querySelector('.wc-card-footer').remove()
    }
  }
}

</script>

<style lang="scss" scoped>
    @import "../assets/sass/includes/variables";
    @import "../assets/sass/common";

    .wc-card {
        position:relative;

        &-layover {
            position: absolute;
            display:flex;
            background: rgba(0,0,0,.4);
            top:0;
            bottom:0;
            left:0;
            right:0;
            z-index:100;
        }

        &-inner {
            @include card-mixin();

            &__text {
                font-family: $font-secondary;
                color: #37373C;
                font-size: 22px;
                font-weight: 500;
                line-height: 27px;
                margin: 0;
                padding: 12px 20px 11px;
            }
        }

        &-footer {
            @include card-mixin();

            display: flex;
            flex-direction: row;
            align-items: center;
            font-family: $font-primary;
            font-size: 16px;
            height: 42px;
            width: 100%;
        }
    }
</style>
