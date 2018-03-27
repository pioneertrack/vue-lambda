<template>
  <div class="bg-clouds with-navbar">
    <section class="module-progress-bar">
      <div class="progress">
        <div class="progress-bar" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" style="width: 16%;">
          <span class="sr-only">16% Complete</span>
        </div>
      </div>
    </section>
    <section class="module-onboarding container">
      <div class="onboarding">
        <div class="container mg-topup">
      <div class="row">
        <div class="col-md-12">
          <div class="register-block">
            <h3>{{title}}</h3>
            <p>{{heading}}</p>
            <h6>${{amount}}/year per house:{{units}} units<span>Total: $0</span></h6>

            <!-- <form> -->
            <div class="form-in">
              <div class="form-group">
                <label>Card Holder Name</label>
                <input type="text" name="" class="form-control" placeholder="Enter card holder name" v-model="names">
                <span>{{name_err}}</span>
              </div>
              <div class="form-group">
                <label>Card Number</label>
                <input type="number" name="" class="form-control" placeholder="Enter card number" v-model="number">
                <span>{{number_err}}</span>
              </div>
              <div class="form-group">
                <div class="in-two">
                  <label>CVV</label>
                  <input type="number" name="" class="form-control" placeholder="Enter cvv number" v-model="cvv">
                  <span>{{cvv_err}}</span>
                </div>
                <div class="in-two">
                  <label>Zip</label>
                  <input type="text" name="" class="form-control" placeholder="Enter zip code" v-model="zip">
                  <span>{{zip_err}}</span>
                </div>
              </div>
              <div class="form-group">
                <div class="in-two">
                  <label>Expiration</label>
                  <br>
                  <date-picker v-model="expM" :first-day-of-week="1" lang="en" class="" format="MM" placeholder="Select month"><span class="input-group-text form-control" id="Date1"><i class="fa fa-calendar"></i></span></date-picker>
                  <!-- <input type="text" name="" class="form-control" placeholder="MM" v-model="expM" :first-day-of-week="1" lang="en"> -->

                </div>
                <div class="in-two">
                  <label>&nbsp;</label>
                  <date-picker v-model="expY" :first-day-of-week="1" lang="en" class="" format="YYYY" placeholder="Select year"><span class="input-group-text form-control" id="Date1"><i class="fa fa-calendar"></i></span></date-picker>
                  <!--   <input type="text" name="" class="form-control" placeholder="YYYY" v-model="expY"> -->
                  <span>{{date_Err}}</span>
                </div>
              </div>
              <div class="form-group">
                <label>Discount Code</label>
                <input type="text" name="" class="form-control" placeholder="Enter discount code" v-model="code">
              </div>
              <p>Payment processing done by <span>stripe</span></p>
              <div class="form-group back-next">
                <router-link v-bind:to="'/notification'">
                  <button type="button" class="tranparent_btn btn">Back</button>
                </router-link>
                <button type="submit" class="btn green_btn pull-right" v-on:click="checkForm">
                  <!--  Take me to the --> Dashboard

                </button>
              </div>
            </div>

            <!--   </form> -->
            <div class="output">
              <!--   Output: <p>Card Holder Name: {{ names }} </p><p>Card Number : {{ number }} </p><p> CVV :{{ cvv }} </p><p> Zip Code : {{ zip }} </p><p> Expiry Month : {{ expM }} </p><p> Expiry Year : {{ expY }} </p> -->
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
    </section>
  </div>
</template>

<script>
import DatePicker from 'vue2-datepicker'

export default {
  name: 'Payment',
  components: { DatePicker, },
  data () {
    return {
      title: 'Start your 7 days free trial',
      heading: 'Use the WeatherCheck platform for the next 7 days free of charge. At the end of 7 days trial period, your WeatherCheck Subscription will automatically begin and you will be billed.',
      day: 8,
      amount: 70,
      units: 0,
      errors: [],
      name_err: null,
      number_err: null,
      cvv_err: null,
      zip_err: null,
      expM_err: null,
      expY_err: null,
      expM: '',
      expY: '',
      date_Err: '',
    }
  },
  methods: {
  },
}
</script>
<style scoped>
  h1, h2 {
    font-weight: normal;
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
