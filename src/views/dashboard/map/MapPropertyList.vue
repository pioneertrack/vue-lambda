<template>
    <div class="map-property-list" style="display:flex; flex-direction:column;">
       <div style="
               display:flex;
               justify-content:space-between;
               align-items:center;
            " class="header">
           <h4>Properties: {{properties.length}}</h4>
           <a href="#" class="pull-right">View as list</a>
       </div>
        <!--<div class="map-search-area">-->
            <!--<div class="form-group">-->
                <!--<label for="propertySearch">Search by City, State, Zip</label>-->
                <!--<input type="text" class="form-control" id="propertySearch" placeholder="Search...">-->
            <!--</div>-->
        <!--</div>-->
       <div style="overflow-y:scroll; flex: 1;">
          <div class="map-property-element" v-for="property in properties" v-bind:key="property.id" style="display:flex;">
              <div class="map-property-thumbnail">
                <img :src="getThumbnailSource(property)"/>
              </div>
              <div style="
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content:space-between;" class="map-property-address">
                  <h4>
                      {{property.address}},<br/>
                      {{property.city}}, {{property.state}} {{property.zip}}
                  </h4>
                  <div>
                      <router-link :to="{name: 'dashboard-property-page', params: {'id': property.id}}">View Report</router-link>
                  </div>

              </div>
          </div>
       </div>
    </div>
</template>

<script>
import MapsService from '../../../services/MapsService'
export default {
  name: 'map-property-list',
  props: [
    'properties',
  ],
  mounted () {
  },
  methods: {
    getThumbnailSource (prop) {
      return MapsService.getStreetViewSrc(prop.lat, prop.long, 90, 90)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../../assets/sass/common';
.map-property-list{
    width:100%;
    background:white;
    height: 100vh;

    .header{
       @include common-bottom-border();
       padding:2px 16px;
    }

    .map-search-area{
        padding:16px;
        @include common-bottom-border();
    }

    .map-property-element{
        .map-property-thumbnail{
            width:90px;
            height:90px;
            background: #D5D5D5;
            margin-right: 20px;
        }
        padding:16px;

        .map-property-address{
            font-size: 12px;
            h4{
                margin:0;
                @include header-font();
            }
        }
    }
}
</style>
