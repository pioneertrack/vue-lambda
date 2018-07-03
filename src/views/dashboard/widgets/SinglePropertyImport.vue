<template>
  <section class="module-onboarding">
    <div class="onboarding">
      <div class="card-body onboarding">
        <h1 class="modal-title text-center">Manually enter your properties</h1>
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
          <!-- Name -->
          <div class="form-group col-md-8 col-md-offset-2">
            <label for="street">Name</label>
            <input type="text" placeholder="Name" name="name" id="name" v-model="currentProperty.name" v-on:change="inputChange">
          </div>
          <!-- Street -->
          <div class="form-group col-md-8 col-md-offset-2">
            <label for="street">Street Address</label>
            <input type="text" placeholder="Street Address" name="street" id="street" v-model="currentProperty.address" v-on:change="inputChange">
          </div>
          <!-- City -->
          <div class="form-group col-md-8 col-md-offset-2">
            <label for="city">City</label>
            <input type="text" placeholder="City" name="city" id="city" v-model="currentProperty.city" v-on:change="inputChange">
          </div>
          <!-- State & Zip-->
          <div class="form-group state-zip col-md-8 col-md-offset-2">
            <div class="row">
              <div class="col-md-6 double-section">
                <label for="state">State</label>
                <input type="text" placeholder="State" name="state" id="state" v-model="currentProperty.state" v-on:change="inputChange">
              </div>
              <div class="col-md-6 double-section">
                <label for="zip">Zip Code</label>
                <input type="text" placeholder="Zip" name="zip" id="zip" v-model="currentProperty.zip" v-on:change="inputChange">
              </div>
            </div>
          </div>
          <!-- Login Button -->
          <div class="form-group login-button">
            <div v-if="showError" class="col-md-8 col-md-offset-2" style="text-align:center;">
                <div class="alert alert-danger" role="alert">We could not find the address.</div>
            </div>
          </div>
        </form>
        <!-- Back & Submit -->
        <div class="form-group">
          <div class="col-md-12 text-center">
            <button type="submit" class="btn btn-success submit-button" :disabled="saving" @click="done()">Submit</button>
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
      PropertyService.addMultipleProperties(this.$store.state.team.id, this.properties).then((result) => {
        this.$emit('on-done')
      }).finally(() => {
        this.saving = false
      })
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../../../assets/sass/includes/variables";

.modal-title {
  color: #37373C;
  font-family: $font-primary;
  font-size: 28px;
  font-weight: 500;
  margin-top: 20px
}

.form-group {
  margin: auto;
}

.properties-added {
  background-color: #F3F4FA;
}

.onboarding input {
  color : #6a6a6a !important;
}

.onboarding input::placeholder {
  color: #cacaca !important;
}

#name, #street, #city, #state, #zip {
  margin-left: 0;
}

.submit-button {
  margin-top: 30px;
}
</style>
