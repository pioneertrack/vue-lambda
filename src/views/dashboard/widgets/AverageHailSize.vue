<template>
  <WcCard>
    <div slot="header">
      Average Hail Size
    </div>
    <div slot="content" class="wc-conent">
      <div>
        <div class="hail-description">
          <strong>Average Hail Size To Hit Portfolio</strong>
        </div>
        <div>
          <div class="hail-group">
            <div class="hail-size" v-bind:class="{'hail-active': isBetween(averageSize, 0, .5)}">
              <div class="hail-size-dot-wrapper">
                <div class="hail-size-_25"></div>
              </div>
              <div class="hail-size-label">{{averageSize}} in</div>
            </div>
            <div class="hail-size" v-bind:class="{'hail-active': isBetween(averageSize, .5, .87)}">
              <div class="hail-size-dot-wrapper">
                <div class="hail-size-_75"></div>
              </div>
              <div class="hail-size-label">{{averageSize}} in</div>
            </div>
            <div class="hail-size" v-bind:class="{'hail-active': isBetween(averageSize, .87, 1.25)}">
              <div class="hail-size-dot-wrapper">
                <div class="hail-size-1"></div>
              </div>
              <div class="hail-size-label">{{averageSize}} in</div>
            </div>
            <div class="hail-size" v-bind:class="{'hail-active': isBetween(averageSize, 1.25, 1.75)}">
              <div class="hail-size-dot-wrapper">
                <div class="hail-size-1_5"></div>
              </div>
              <div class="hail-size-label">{{averageSize}} in</div>
            </div>
            <div class="hail-size" v-bind:class="{'hail-active': isBetween(averageSize, 1.75, 2.25)}">
              <div class="hail-size-dot-wrapper">
                <div class="hail-size-2"></div>
              </div>
              <div class="hail-size-label">{{averageSize}} in</div>
            </div>
            <div class="hail-size" v-bind:class="{'hail-active': isBetween(averageSize, 2.25, 2.62)}">
              <div class="hail-size-dot-wrapper">
                <div class="hail-size-2_5"></div>
              </div>
              <div class="hail-size-label">{{averageSize}} in</div>
            </div>
            <div class="hail-size" v-bind:class="{'hail-active': isBetween(averageSize, 2.62, 2.87)}">
              <div class="hail-size-dot-wrapper">
                <div class="hail-size-2_75"></div>
              </div>
              <div class="hail-size-label">{{averageSize}} in</div>
            </div>
            <div class="hail-size" v-bind:class="{'hail-active': isBetween(averageSize, 2.87, 3.5)}">
              <div class="hail-size-dot-wrapper">
                <div class="hail-size-3" ></div>
              </div>
              <div class="hail-size-label">{{averageSize}} in</div>
            </div>
            <div class="hail-size" v-bind:class="{'hail-active': isBetween(averageSize, 3.6, 1000)}">
              <div class="hail-size-dot-wrapper">
                <div class="hail-size-4"></div>
              </div>
              <div class="hail-size-label">{{averageSize}} in</div>
            </div>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
      <div class="hail-description">
        <strong>Largest Hail Size To Hit Portfolio</strong>
      </div>
      <div>
        <div class="group">
          <div class="hail-size" v-bind:class="{'hail-active': isBetween(largestSize, 0, .5)}">
            <div class="hail-size-dot-wrapper">
              <div class="hail-size-_25"></div>
            </div>
            <div class="hail-size-label">{{largestSize}} in</div>
          </div>
          <div class="hail-size" v-bind:class="{'hail-active': isBetween(largestSize, .5, .87)}">
            <div class="hail-size-dot-wrapper">
              <div class="hail-size-_75"></div>
            </div>
            <div class="hail-size-label">{{largestSize}} in</div>
          </div>
          <div class="hail-size" v-bind:class="{'hail-active': isBetween(largestSize, .87, 1.25)}">
            <div class="hail-size-dot-wrapper">
              <div class="hail-size-1"></div>
            </div>
            <div class="hail-size-label">{{largestSize}} in</div>
          </div>
          <div class="hail-size" v-bind:class="{'hail-active': isBetween(largestSize, 1.25, 1.75)}">
            <div class="hail-size-dot-wrapper">
              <div class="hail-size-1_5"></div>
            </div>
            <div class="hail-size-label">{{largestSize}} in</div>
          </div>
          <div class="hail-size" v-bind:class="{'hail-active': isBetween(largestSize, 1.75, 2.25)}">
            <div class="hail-size-dot-wrapper">
              <div class="hail-size-2"></div>
            </div>
            <div class="hail-size-label">{{largestSize}} in</div>
          </div>
          <div class="hail-size" v-bind:class="{'hail-active': isBetween(largestSize, 2.25, 2.62)}">
            <div class="hail-size-dot-wrapper">
              <div class="hail-size-2_5"></div>
            </div>
            <div class="hail-size-label">{{largestSize}} in</div>
          </div>
          <div class="hail-size" v-bind:class="{'hail-active': isBetween(largestSize, 2.62, 2.87)}">
            <div class="hail-size-dot-wrapper">
              <div class="hail-size-2_75"></div>
            </div>
            <div class="hail-size-label">{{largestSize}} in</div>
          </div>
          <div class="hail-size" v-bind:class="{'hail-active': isBetween(largestSize, 2.87, 3.5)}">
            <div class="hail-size-dot-wrapper">
              <div class="hail-size-3" ></div>
            </div>
            <div class="hail-size-label">{{largestSize}} in</div>
          </div>
          <div class="hail-size" v-bind:class="{'hail-active': isBetween(largestSize, 3.6, 1000)}">
            <div class="hail-size-dot-wrapper">
              <div class="hail-size-4"></div>
            </div>
            <div class="hail-size-label">{{largestSize}} in</div>
          </div>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
  </WcCard>
</template>

<script>
import WcCard from '../../../components/WcCard'
export default {
  name: 'average-hail-size',
  props: [ 'averageSize', 'largestSize', ],
  components: {
    WcCard,
  },
  methods: {
    isBetween (value, a, b) {
      return value > a && value <= b
    },
  },
}
</script>

<style lang="scss" scoped>
.hail-description{
  padding:8px 24px;
}
.hail-size{
  float:left;
  margin: 0 auto;
  height:50px;
  line-height:50px;
  position:relative;
}
.hail-size-label{
  width:50px;
  text-align:center;
  position: absolute;
  bottom:-24px;
  left: -10px;
  visibility:hidden;
}
.hail-sizes{
  padding:0 12px;
  bottom:0;
  position:absolute;
}
.hail-sizes div{
  display:inline-block;
  margin: 0 -4.5px;
  visibility: hidden;
}
.hail-sizes div.hail-size-text-active{
  visibility: visible !important;
}
.hail-group{
  float:left;
  height:70px;
  width:100%;
  /*line-height:50px;*/
  padding:0 0 0 18px;
  border-bottom: 1px solid #d1d1d4;
}
.group{
  float:left;
  height:70px;
  width:100%;
  /*line-height:50px;*/
  padding:0 0 0 18px;
}
@mixin hail-size($size){
  width:$size;
  height:$size;
  border-radius:$size/2;
  background: #EDEDED;
  display:inline-block;
  vertical-align:middle;
  @media (min-width:1200px){
    margin: 0 5px;
  }
  margin: 0 3px;
  /*position:absolute; !*it can be fixed too*!*/
  /*left:0; right:0;*/
  /*top:0; bottom:0;*/
}
.hail-active .hail-size-dot-wrapper div{
  background: #004380 !important;
}
.hail-active .hail-size-label{
  visibility:visible;
}
.hail-size-dot-wrapper{
  text-align:center;
}
.hail-size-_25{
  @include hail-size(5px);
}
.hail-size-_75{
  @include hail-size(6px);
}
.hail-size-1{
  @include hail-size(9px);
}
.hail-size-1_5{
  @include hail-size(12px);
}
.hail-size-2{
  @include hail-size(14px);
}
.hail-size-2_5{
  @include hail-size(16px);
}
.hail-size-2_75{
  @include hail-size(19px);
}
.hail-size-3{
  @include hail-size(23px);
}
.hail-size-4{
  @include hail-size(27px);
}

</style>
