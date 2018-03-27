<template>
    <div class="container-fluid">
        <div class="container">
            <div class="row m-t-50">
                <div class="col-md-12">
                    <template v-if="markers[0].position.lat !== ''">
                        <gmap-map :center="center" :zoom="19" map-type-id="satellite" style="height: 450px" setTilt="0">
                            <gmap-marker v-for="m in markers"
                                         v-bind:data="m"
                                         v-bind:key="m.position.lat"
                                         :position="m.position"
                                         :clickable="true"
                                         :draggable="true"
                                         @click="center=m.position">
                            </gmap-marker>
                        </gmap-map>
                        <div class="property-name" style="width:100%; display:flex; justify-content:center;">
                            {{property.address}} {{property.city}}, {{property.state}} {{property.zip}}
                        </div>
                    </template>
                    <template v-else>
                        <div style="width:500px; height:450px;"></div>
                    </template>
                </div>
            </div>
            <div class="row m-t-20">
                <div class="col-md-8">
                    <WeatherEventsForProperty :propertyId="$route.params.id"></WeatherEventsForProperty>
                </div>
                <div class="col-md-4">
                    <WeatherNews :news="news"></WeatherNews>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import WeatherNews from './widgets/WeatherNews'
import NewsService from '@/services/NewsService'
import PropertyService from '@/services/PropertyService'
import WeatherEventsForProperty from './widgets/WeatherEventsForProperty'

export default {
  name: 'property-page',
  components: {
    WeatherNews,
    WeatherEventsForProperty,
  },
  mounted () {
    this.getNews()
    this.getMarkers()
    this.getProperty()
  },
  data () {
    return {
      property: {},
      news: [],
      markers: [{
        position: { lat: '', lng: '', },
      }, ],
      center: { lat: '', lng: '', },
      weatherEvents: [],
    }
  },
  methods: {
    getNews () {
      NewsService.get().then((news) => { this.news = news })
    },
    getMarkers () {
      PropertyService.getMarkerLocation(this.$route.params.id).then((location) => {
        this.markers = [ { position: location, }, ]
        this.center = location
      })
    },
    getProperty () {
      PropertyService.getProperty(this.$route.params.id).then((property) => {
        this.property = property
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/sass/common.scss";

    .property-name{
        background: white;
        @include header-font();
        font-size:24px;
        padding:.8em;
    }
</style>
