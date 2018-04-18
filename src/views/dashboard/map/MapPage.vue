<template>
    <div style="width:100%; display:flex">
        <div style="width:360px;">
            <MapPropertyList :properties="properties"></MapPropertyList>
        </div>
        <div style="flex:1;">
            <gmap-map
                    :center="center"
                    @bounds_changed="onBoundsChanged"
                    :zoom="4" map-type-id="roadmap" style="height: 100vh; width:100%;" setTilt="0">
                <gmap-cluster>
                    <gmap-marker v-for="m in markers" v-bind:key="m.id" :position="m.position" :clickable="true" @click="center=m.position"></gmap-marker>
                </gmap-cluster>
            </gmap-map>
        </div>
    </div>
</template>

<script>
import MapPropertyList from './MapPropertyList'
import PropertyService from '../../../services/PropertyService'
import store from '@/store/index'
import _ from 'lodash'

let getPropertiesDebounce = null

export default {
  name: 'Map',
  components: {
    MapPropertyList,
  },
  mounted () {
    let getProperties = (southWest, northEast) => {
      PropertyService.getPropertiesInRegion(store.state.team.id,
        southWest, northEast
      ).then((properties) => {
        this.properties = properties
        let markers = []
        properties.forEach((property) => {
          markers.push({ position: { lat: parseFloat(property.lat), lng: parseFloat(property.long), }, id: property.id, })
        })
        this.markers = markers
      })
    }
    getPropertiesDebounce = _.debounce(getProperties, 500)
  },
  data () {
    return {
      properties: [
      ],
      center: { lat: 35.922934267169204, lng: -95.90968127609966, },
      markers: [],
    }
  },
  methods: {
    onBoundsChanged (bounds) {
      getPropertiesDebounce([ bounds.getSouthWest().lat(), bounds.getSouthWest().lng(), ],
        [ bounds.getNorthEast().lat(), bounds.getNorthEast().lng(), ])
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
h4{
  line-height: 22px
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
