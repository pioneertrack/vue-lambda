<template>
    <section class="module-onboarding">
      <div class="onboarding">
        <div class="panel-body onboarding">
          <h1 class="text-center">Manually enter your properties</h1>
          <div class="properties-added"  v-for='(property, index) in properties' :key='index' style="display:flex; justify-content:space-between; align-items: center;">
            <div>
              {{ property.address }}<br/>
              {{ property.city }}, {{property.state}} {{property.zip}}
            </div>
            <div class="text-right">
              <button type="button" class="btns btns-blue" @click="remove(index)">Remove</button>
            </div>
          </div>
          <form class="payment-form" @submit.prevent="add()" autocomplete="nope">

            <!-- Street -->
            <div class="form-group col-md-8 col-md-offset-2">
              <label for="street">Street Address</label>
              <input type="text" placeholder="123 Main St" name="street" id="street" v-model="currentProperty.address" v-on:change="inputChange">
            </div>

            <!-- City -->
            <div class="form-group col-md-8 col-md-offset-2">
              <label for="city">City</label>
              <input type="text" placeholder="Louisville" name="city" id="city" v-model="currentProperty.city" v-on:change="inputChange">
            </div>

            <!-- State & Zip-->
              <div class="form-group state-zip col-md-8 col-md-offset-2">
                <div class="row">
                  <div class="col-md-6 double-section">
                    <label for="state">State</label>
                    <input type="text" placeholder="KY" name="state" id="state" v-model="currentProperty.state" v-on:change="inputChange">
                  </div>
                  <div class="col-md-6 double-section">
                    <label for="zip">Zip Code</label>
                    <input type="text" placeholder="40202" name="zip" id="zip" v-model="currentProperty.zip" v-on:change="inputChange">
                  </div>
                </div>
              </div>

            <!-- Country -->
            <div class="form-group col-md-8 col-md-offset-2">
              <label for="country">Country</label>
              <input type="text" placeholder="USA" name="country" id="country" v-model="currentProperty.country" v-on:change="inputChange">
            </div>

            <!-- Login Button -->
            <div class="form-group login-button">
              <div class="col-md-6 col-md-offset-3">
                <div v-if="showError">
                  <div class="alert alert-danger" role="alert">We could not find the address.</div>
                </div>
                <button type="button" class="blue-border btn-link btn-tranparent btns-blue m-b-15" @click="add()">
                  Add Address
                </button>
              </div>
            </div>

          </form>
          <!-- Back & Submit -->
          <div class="form-group">
            <div class="col-md-12 text-center">
              <button type="submit" class="btns btns-green" :disabled="saving" @click="done()">Done</button>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
import PropertyService from '@/services/PropertyService'

export default {
  data () {
    return {
      saving: false,
      properties: [],
      currentProperty: {
        address: null,
        city: null,
        zip: null,
        state: null,
        country: null,
      },
      showError: false,
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
    inputChange () {
      this.showError = false
    },
    add () {
      PropertyService.validate(this.currentProperty.address, this.currentProperty.city, this.currentProperty.state).then((response) => {
        if (response.isValid) {
          this.properties.push(response.property)
          this.currentProperty = {
            address: null,
            city: null,
            zip: null,
            state: null,
            country: null,
          }
        } else {
          this.showError = true
        }
      })
    },
    remove (index) {
      this.properties.splice(index, 1)
    },
    done () {
      this.saving = true
      PropertyService.addMultipleProperties(this.$store.state.teamId, this.properties).then((result) => {
        this.$emit('on-done')
      }).finally(() => {
        this.saving = false
      })
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
