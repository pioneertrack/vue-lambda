<template>
    <div class="wc-card" v-bind:class="{'wc-card-loading':isLoading}">
        <div class="wc-card-layover">
            <slot name="layover"></slot>
        </div>
        <div class="wc-card-inner">
            <h4 class="border-bottom">
                <slot name="header"></slot>
            </h4>
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
    if (this.isLoading) {
      this.$el.querySelector('.wc-card-layover').style.display = 'flex'
    } else {
      this.$el.querySelector('.wc-card-layover').style.display = 'none'
    }
  },
  watch: {
    isLoading (val) {
      if (this.isLoading) {
        this.$el.querySelector('.wc-card-layover').style.display = 'flex'
      } else {
        this.$el.querySelector('.wc-card-layover').style.display = 'none'
      }
    },
  },
}

</script>

<style lang="scss" scoped>
    @import "../assets/sass/common";

    .wc-card {
        position:relative;

        .wc-card-layover {
            position: absolute;
            display:flex;
            top:0;
            bottom:0;
            left:0;
            right:0;
            z-index:100;
        }

        &.wc-card-loading{
            .wc-card-inner{
            }
        }

        .wc-card-inner {
            @include card-mixin();

            > h4 {
                margin: 0;
                padding: 13px 23px;
            }
            .wc-card-footer {
                border-top: 1px solid #dee2e6;
            }

        }
    }
</style>
