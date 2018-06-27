<template>
  <div class="bg-clouds with-navbar">
    <section class="module-progress-bar">
      <div class="progress">
        <div class="progress-bar" role="progressbar" aria-valuenow="38" aria-valuemin="0" aria-valuemax="100" style="width: 38%;">
          <span class="sr-only">38% Complete</span>
        </div>
      </div>
    </section>
    <section class="module-onboarding container">
      <div class="onboarding wrapper">
        <div class="card-body onboarding">
          <h1 class="onboarding-title text-center">Manually enter your properties</h1>
          <div class="properties-added"  v-for='(property, index) in properties' :key='index'>
            <div>
              {{ property.name }} -  {{ property.street }} - {{ property.city }}
            </div>
            <div class="text-right">
              <button type="button">Edit</button>
              <button type="button">Remove</button>
            </div>
          </div>
          <form class="payment-form" @submit.prevent="submit()">

            <!-- Name -->
            <div class="form-group col-md-8 col-md-offset-2">
              <label for="name">Name</label>
              <input type="text" placeholder="123 Main St" name="name" id="name" v-model="currentProperty.name">
            </div>

            <!-- Street -->
            <div class="form-group col-md-8 col-md-offset-2">
              <label for="name">Street Address</label>
              <input type="text" placeholder="123 Main St" name="street" id="street" v-model="currentProperty.street">
            </div>

            <!-- City -->
            <div class="form-group col-md-8 col-md-offset-2">
              <label for="city">City</label>
              <input type="text" placeholder="Louisville" name="city" id="city" v-model="currentProperty.city">
            </div>

            <!-- State & Zip-->
            <div class="form-group double-container col-md-8 col-md-offset-2">
              <div class="form-group state-zip col-md-8 col-md-offset-2">
                <div class="col-md-6 double-section">
                  <label for="state">State</label>
                  <input type="text" placeholder="KY" name="state" id="state" v-model="currentProperty.state">
                </div>
                <div class="col-md-6 double-section">
                  <label for="zip">Zip Code</label>
                  <input type="text" placeholder="40202" name="zip" id="zip" v-model="currentProperty.zip">
                </div>
              </div>
            </div>

            <!-- Country -->
            <div class="form-group col-md-8 col-md-offset-2">
              <label for="country">Country</label>
              <input type="text" placeholder="USA" name="country" id="country" v-model="currentProperty.country">
            </div>

            <!-- Login Button -->
            <div class="form-group login-button add-button">
              <div class="col-md-6 col-md-offset-3">
                <button type="button" class="blue-border btn-link btn-tranparent btns-blue m-b-15" @click="add()">
                  Add Another Address
                </button>
              </div>
            </div>

            <!-- Back & Submit -->
            <div class="form-group">
              <div class="col-md-12">
                <a class="blue-border btn-link btn-tranparent btns-blue" href="/">Back</a>
                <button type="submit" class="btns btns-green pull-right">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      properties: [],
      currentProperty: {
        name: null,
        street: null,
        city: null,
        zip: null,
        state: null,
        country: null,
      },
    }
  },
  mounted () {
    //
  },
  computed: {

  },
  watch: {

  },
  methods: {
    add () {
      this.properties.push(this.currentProperty)
      this.currentProperty = {
        name: null,
        street: null,
        city: null,
        zip: null,
        state: null,
        country: null,
      }
    },
    submit () {
      this.busy = true

      setTimeout(() => {
        // this.busy = false;
        window.location.href = '/import'
      }, 2000)
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .properties-added{
    background-color: #F3F4FA;
  }
</style>
