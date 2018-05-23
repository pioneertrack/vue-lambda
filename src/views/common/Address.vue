<template>
    <div class="container-fluid single-address-map">
        <div class="row">
            <template v-if="markers[0].position.lat !== ''">
                <gmap-map :center="center" :zoom="17" map-type-id="satellite" style="height: 350px" setTilt="0">
                    <gmap-marker v-for="m in markers"
                                 v-bind:data="m"
                                 v-bind:key="m.position.lat"
                                 icon="/static/images/map-marker-blue.png"
                                 :position="m.position"
                                 :clickable="true"
                                 :draggable="true"
                                 @click="center=m.position">
                    </gmap-marker>
                </gmap-map>
            </template>
            <template v-else>
                <div style="width: 100%; height:350px;"></div>
            </template>
        </div>
        <div class="row">
            <section class="module-map-address">
                <h3 class="text-center">
                    {{ property.address}}, {{ property.city}} {{ property.state}}
                </h3>
            </section>
        </div>
        <div class="row">
            <section class="module-newsletter col-xs-12 col-md-3 hidden-xs hidden-sm">
                <div v-if="signupForm.sumbit">
                    <h2 class="text-center">Thank you!</h2>
                    <p>Thank you for signing up! We'll let you know when you can monitor the weather!</p>
                </div>
                <div  v-else class="form-wrapper">
                    <div class="title">Weather Events</div>
                    <div>The new full version will be unveiled soon. Be the first to find out.</div>
                    <form class="wc-form">
                        <div :class="['wc-form__block', {'wc-form__block--err': errors['first_name']}]">
                            <input type="text" class="wc-form__input" placeholder="First Name" id="first_name" name="first_name"
                                   v-model="signupForm.first_name" @keyup="validate">
                            <p class="wc-form__err-msg">{{ errors['first_name'] ? errors['first_name'][0] : '' }}</p>
                        </div>
                        <div :class="['wc-form__block', {'wc-form__block--err': errors['last_name']}]">
                            <input type="text" class="wc-form__input" placeholder="Last Name" id="last_name" name="last_name"
                                   v-model="signupForm.last_name" @keyup="validate">
                            <p class="wc-form__err-msg">{{ errors['last_name'] ? errors['last_name'][0] : '' }}</p>
                        </div>
                        <div :class="['wc-form__block', {'wc-form__block--err': errors['email']}]">
                            <input type="email" class="wc-form__input" placeholder="E-mail" id="email" name="email"
                                   v-model="signupForm.email" @keyup="validate">
                            <p class="wc-form__err-msg">{{ errors['email'] ? errors['email'][0] : '' }}</p>
                        </div>
                        <input class="btn" type="submit" name="submit" value="Keep Me Posted" @click.prevent="signup" >
                    </form>
                </div>
            </section>
            <section class="module-weather-events col-xs-12 col-md-9">
                <weather-events :propertyId="propertyId"></weather-events>
            </section>
          <section class="module-newsletter col-xs-12 col-md-3 hidden-md hidden-lg m-b-50">
            <div v-if="signupForm.sumbit">
              <h2 class="text-center">Thank you!</h2>
              <p>Thank you for signing up! We'll let you know when you can monitor the weather!</p>
            </div>
            <div  v-else class="form-wrapper">
              <div class="title">Weather Events</div>
              <div>The new full version will be unveiled soon. Be the first to find out.</div>
              <form class="wc-form">
                <div :class="['wc-form__block', {'wc-form__block--err': errors['first_name']}]">
                  <input type="text" class="wc-form__input" placeholder="First Name" id="first_name" name="first_name"
                         v-model="signupForm.first_name" @keyup="validate">
                  <p class="wc-form__err-msg">{{ errors['first_name'] ? errors['first_name'][0] : '' }}</p>
                </div>
                <div :class="['wc-form__block', {'wc-form__block--err': errors['last_name']}]">
                  <input type="text" class="wc-form__input" placeholder="Last Name" id="last_name" name="last_name"
                         v-model="signupForm.last_name" @keyup="validate">
                  <p class="wc-form__err-msg">{{ errors['last_name'] ? errors['last_name'][0] : '' }}</p>
                </div>
                <div :class="['wc-form__block', {'wc-form__block--err': errors['email']}]">
                  <input type="email" class="wc-form__input" placeholder="E-mail" id="email" name="email"
                         v-model="signupForm.email" @keyup="validate">
                  <p class="wc-form__err-msg">{{ errors['email'] ? errors['email'][0] : '' }}</p>
                </div>
                <input class="btn" type="submit" name="submit" value="Keep Me Posted" @click.prevent="signup" >
              </form>
            </div>
          </section>
        </div>
    </div>
</template>

<script>
import Validator from 'validatorjs'
import WeatherEvents from '../../components/WeatherEvents.vue'
import axios from 'axios'

export default {
  name: 'Address',
  components: {
    WeatherEvents,
  },
  data () {
    return {
      propertyId: '',
      property: '',
      center: { lat: '', lng: '', },
      markers: [{
        position: { lat: '', lng: '', },
      }, ],
      signupForm: {
        first_name: '',
        last_name: '',
        email: '',
        sumbit: false,
      },
      validationRules: {
        first_name: 'required',
        last_name: 'required',
        email: 'required|email',
      },
      errors: {},
    }
  },
  mounted: function () {
    this.address = this.$route.query.address
    axios.get('https://us-street.api.smartystreets.com/street-address?street=' + encodeURIComponent(this.$route.query.address) + '&auth-id=' + process.env.SS_AUTHID)
      .then(response => {
        this.storeProperty(response.data[0])
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  methods: {
    validate () {
      const validator = new Validator(
        this.signupForm, this.validationRules
      )
      if (validator.fails()) {
        this.errors = validator.errors.errors
      }
      return validator.passes()
    },
    signup () {
      this.errors = {}
      this.signupForm.sumbit = true
      axios.post(process.env.API_ENDPOINT + '/email-signup/signup', {
        firstName: this.signupForm.first_name,
        lastName: this.signupForm.last_name,
        emailAddress: this.signupForm.email,
      })

      this.$gtm.trackEvent({
        event: 'EarlyNoticeSignup',
        category: 'Signup',
        action: 'click',
        label: 'Early Notice Signup',
        email: this.signupForm.email,
        firstName: this.signupForm.first_name,
        lastName: this.signupForm.last_name,
        noninteraction: true,
      })
    },
    storeProperty: function (data) {
      axios.post(process.env.API_ENDPOINT + '/properties/addAddress', {
        data,
      })
        .then(response => {
          this.propertyId = response.data['id']
          this.lookupProperty(this.propertyId)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    lookupProperty: function (propertyId) {
      axios.post(process.env.API_ENDPOINT + '/properties/singleAddress', {
        id: propertyId,
      }).then(response => {
        this.property = response.data.property[0]
        axios.get(process.env.API_ENDPOINT + '/google-maps/geometry', {params: {
          address: this.property.address + ' ' + this.property.city + ' ' + this.property.state,
        },
        }).then(gresponse => {
          this.markers = [{
            position: gresponse.data.location,
          }, ]
          this.center = gresponse.data.location
        })
      })
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .wc-form {

            &__block {
                &--err {
                    .wc-form__input {
                        border-color: lighten(red, 10);
                    }

                    .wc-form__err-msg {
                        display: block;
                    }
                }
            }

            &__input {
                margin-bottom: 5px;
                margin-left: 0;
            }

            &__err-msg {
                margin: 0 0 5px;
                text-align: left;
                color: lighten(red, 10);
                font-size: 12px;

                &--cognito {
                    text-align: center;
                }
            }
        }
    ol, ul {
        margin-top: 0;
        margin-bottom: 11px;
    }
</style>
