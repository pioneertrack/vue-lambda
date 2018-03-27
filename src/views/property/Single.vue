<template>
  <!-- Center Content section -->
  <div class="container-fluid center_section">
    <div class="container">
      <MapAddress/>
      <div class="row">
        <div class="col-lg-8 col-sm-12">
          <WeatherEvents/>
        </div>
        <div class="col-lg-4 col-sm-12">
          <RelevantNewsArticle/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MapAddress from '../../components/MapAddress'
import WeatherEvents from '../../components/WeatherEvents'
import RelevantNewsArticle from '../../components/RelevantNewsArticle'

export default {
  name: 'Hello',
  data () {
    return {
      msg: 'Welcome to Crypto Info',
    }
  },
  components: {
    MapAddress,
    WeatherEvents,
    RelevantNewsArticle,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .weather-form{
    background-color: #ffffff;
    padding: 20px 10px;
    margin-bottom: 30px;
  }
  .weather-form .form-inline label{
    display: block;
    width: 100%;
    text-align: left;
    -webkit-box-align: unset;
    -ms-flex-align: unset;
    align-items: unset;
    justify-content: unset;
    -ms-flex-pack: unset;
    -webkit-box-pack: unset;
    margin-bottom: 5px;
    font-size: 14px;
    color: #6a6a6a;
    font-weight: bold;
  }
  .weather-form .form-group{
    padding: 0 10px;
  }
  .weather-form .input-group{
    width: 100%;
    height: 38px;
  }
  .weather-form .input-group-text{
    background-color: transparent;
    border-left: 0;
    padding: 5px;
  }
  .weather-form .input-group-text .fa{
    color: #6a6a6a;
    font-size: 14px;
  }
  .weather-form .select .fa-map-marker{
    color: #ff0000;
    font-size: 25px;
  }
  .weather-form .form-control{
    border-right: 0 none;
    padding: 6px 5px;
    font-size: 14px;
  }
  .weather-form .form-control:focus{
    box-shadow: none;
    border-color: #ced4da;
  }
  .weather-form .select .input-group-text{
    border-right: 0 none;
    border-left: 1px solid #ced4da;
    border-top-left-radius: .25rem;
    border-bottom-left-radius: .25rem;
  }
  .weather-form .select .form-control{
    border-left: 0 none;
    border-right: 1px solid #ced4da;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background-color: transparent;
    z-index: 9;
  }
  .weather-form .select .input-group{
    position: relative;
    z-index: 9;
  }
  .weather-form .select .input-group:after{
    content: "\f107";
    font-family: 'FontAwesome';
    font-size: 19px;
    right: 10px;
    top: 5px;
    position: absolute;
    cursor: pointer;
    z-index: 0;
  }
  .weather-form .form-group.col-md-2{
    margin-top: 24px;
    text-align: center;
  }
  .weather-form .green_btn{
    margin: 0 auto;
    padding: 6px 15px;
  }
</style>
