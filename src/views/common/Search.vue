<template>
    <div class="container-fluid with-navbar">
        <div class="row">
            <div v-if="msg" class="alert alert-danger alert-dismissable">
                <p>{{msg}}</p>
            </div>
            <section class=" side-wrapper two-col">
                <div class="side-wrapper__left">
                    <img src="../../assets/images/laptop-book-pro-dash.png" class="image-hero">
                </div>
                <div class="side-wrapper__right">
                    <div class="form-wrapper">
                        <div class="logo-wc form"></div>
                        <p>
                            See WeatherCheck in action.<br/>
                            Check a Single property.
                        </p>
                        <form role="form" v-on:submit.prevent>
                            <input type="text" id="address" placeholder="Full Address" name="address" class="form-control" autocomplete="off" v-model="address">
                            <input class="btn" type="submit" name="submit" value="Check" @click="submit">
                        </form>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Search',
  data () {
    return {
      msg: '',
      address: '',
      lookup: '',
      propertyId: '',
    }
  },
  methods: {
    submit: function () {
      this.address = document.getElementById('address').value
      axios.get('https://us-street.api.smartystreets.com/street-address?street=' + encodeURIComponent(this.address) + '&auth-id=' + process.env.SS_AUTHID)
        .then(response => {
          this.storeProperty(response.data[0])
        })
    },
    storeProperty: function (data) {
      axios.post(process.env.API_ENDPOINT + '/properties/addAddress', {
        data,
      })
        .then(response => {
          this.propertyId = response.data['id']
          this.addressView()
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    addressView: function () {
      this.$router.push({
        name: 'address',
        params: { propertyId: this.propertyId, },
      })
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.side-wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-flow: column nowrap;
          flex-flow: column nowrap;
  -ms-flex-pack: unset;
      justify-content: space-around;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  height: calc(100vh - 56px);
  width: 100vw;
}

.side-wrapper.two-col {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-flow: row nowrap;
          flex-flow: row nowrap;
}

.image-hero {
  display: inline-block;
  width: 100%;
  height: auto;
}

.side-wrapper__left {
  -webkit-box-flex: 1;
      -ms-flex: 1 75%;
          flex: 1 75%;
}

.side-wrapper__right {
  -webkit-box-flex: 1;
      -ms-flex: 1 60%;
          flex: 1 60%;
  background: url("../../assets/images/clouds.png") no-repeat center;
  background-size: contain;
  height: 80%;
  -webkit-transform: translate(-50px, -60px);
          transform: translate(-50px, -60px);
  position: relative;
  z-index: 2;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

</style>
