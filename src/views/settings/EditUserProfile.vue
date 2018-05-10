<template>
    <div class="row">
      <div id='profile' class="table-responsive col-md-12 col-lg-8">
          <div style="display:flex; flex-direction:column; align-items:center;">
            <h2>Edit Individual Profile Information</h2>
            <form>
              <div :class="['wc-form__block', {'wc-form__block--err': profileForm.name.hasErrors()}]" class="vertical-form">
                <label for="name">Name</label>
                <input type="text" class="wc-form__input" placeholder="Name" id="name" v-model="profileForm.name.value" @keyup="profileForm.name.validate()" @blur="profileForm.name.validate()">
               <p class="wc-form__err-msg">{{ profileForm.name.firstError }}</p>
              </div>
              <div :class="['wc-form__block', {'wc-form__block--err': profileForm.email.hasErrors()}]" class="vertical-form">
                <label for="email">Email</label>
                <input type="text" class="wc-form__input" placeholder="Email" id="email" v-model="profileForm.email.value" @keyup="profileForm.email.validate()" @blur="profileForm.email.validate()">
                <p class="wc-form__err-msg">{{ profileForm.email.firstError }}</p>
              </div>
              <div :class="['wc-form__block', {'wc-form__block--err': profileForm.phone.hasErrors()}]" class="vertical-form">
                <label for="phone">Phone</label>
                <input type="text" class="wc-form__input" placeholder="Phone" id="phone"
                  v-model="profileForm.phone.value" @keyup="profileForm.phone.validate()" @blur="profileForm.phone.validate()">
                <p class="wc-form__err-msg">{{ profileForm.phone.firstError }}</p>
              </div>
            </form>
          </div>
        <div style="display:flex; justify-content:space-evenly; margin-bottom: 20px;">
          <button class="blue-border btn-tranparent btns-blue pull-right" style="margin:0;" @click="cancel">Cancel</button>
          <input class="btn green_btn" style="margin:0;  padding:0 2em;" type="submit" name="save" value="SAVE" @click.prevent="saveAttributes" >
        </div>
        </div>
    </div>
</template>

<script>

import SettingsMenu from './widgets/SettingsMenu'
import FormChecker from '../../lib/FormChecker/FormChecker'

let profileForm = new FormChecker({
  name: 'Profile Form',
  fields: {
    name: {
      name: 'Name',
      value: '',
      validations: {
        required: true,
      },
    },
    email: {
      name: 'Email',
      value: '',
      validations: {
        required: true,
        email: true,
      },
    },
    accountType: {
      value: '',
      name: 'Account Type',
      validations: {
        required: true,
      },
    },
    phone: {
      name: 'Phone Number',
      validations: {
        required: true,
        phone: true,
      },
    },
    company: {
      name: 'Company',
      value: '',
      validations: {
        required: false,
      },
    },
    password: {
      name: 'Password',
      value: '',
      validations: {
        required: true,
        password: {
          length: 6,
          lowerCase: 1,
          upperCase: 1,
          numbers: 1,
          symbols: 1,
        },
      },
    },
    newPassword: {
      name: 'New Password',
      value: '',
      validations: {
        required: true,
        password: {
          length: 6,
          lowerCase: 1,
          upperCase: 1,
          numbers: 1,
          symbols: 1,
        },
      },
    },
    newPasswordConfirmation: {
      name: 'New Password Confirmation',
      value: '',
      validations: {
        required: true,
        confirmation: 'newPassword',
      },
    },
  },
})

export default {
  name: 'editUserProfile',
  components: {
    SettingsMenu,
  },
  data () {
    return {
      profileForm: profileForm,
      accountTypes: [
        { id: 'reit', name: 'REIT', },
        { id: 'property_manager', name: 'Property Manager', },
        { id: 'owner', name: 'Property Owner', },
      ],
    }
  },
  mounted () {
    this.getAttributes()
    profileForm.name.value = ''
    profileForm.email.value = ''
    profileForm.accountType.value = ''
    profileForm.company.value = ''
    profileForm.phone.value = ''
    profileForm.password.value = ''
  },
  methods: {
    formReady () {
      let formReady = false
      if (profileForm.$isTouched() && profileForm.$isValid()) {
        formReady = true
      }
      return formReady
    },
    cancel () {
      this.$router.push('/settings/profile')
    },
    getAttributes () {
      this.$store.dispatch('getUserAttributes').then(function (attributes) {
        profileForm.name.value = attributes['name']
        profileForm.email.value = attributes['email']
        profileForm.phone.value = `(${attributes['phone_number'].substr(2, 3)}) ${attributes['phone_number'].substr(5, 3)}-${attributes['phone_number'].substr(8, 4)}`
        profileForm.company.value = attributes['custom:company']
        profileForm.accountType.value = attributes['custom:accountType']
      })
    },
    saveAttributes () {
      if (profileForm.$isValid()) {
        this.$store.dispatch('updateAttributes', {
          'name': profileForm.name.value,
          'custom:company': profileForm.company.value,
          'phone_number': '+1' + profileForm.phone.value.replace(/[^0-9]/g, ''),
          'custom:accountType': profileForm.accountType.value,
        }).then(response => {
          this.$router.push('/settings/profile')
        })
      }
    },
  },
}
</script>

<style lang="scss">
.wc-table{
    margin-bottom:0;
    tbody{
        tr{
            td{
                padding:16px;
            }
        }
    }
}
#profile{
  background-color: white;
  margin:0px 10px 0px 20px;
  padding:10px 0px;
}
#profile h1{
  font-size: 30px;
  font-weight: bold;
  text-align:center;
}
#profile form{
  width:288px;
  margin:30px;
  font-size: 16px;
  color:#6a6a6a;
}
#profile form input{
  height: 40px;
  border:1px solid #a4a4a4;
  border-radius: 3px;
  padding:5px 15px;
}
#button-container{
  float:left;
}
.cancel-button{
   background-color: #fff;
   border:3px solid #00457b;
   color: #00457b;
   border-radius: 4px;
   padding: 5px 10px;
   letter-spacing: 1px;
   width: 150px;
   height: 40px;
   font-size: 10px;
   font-weight: bold;
   display:inline-block;
   float: left;
}
.button{
   background-color: #8cc45e;
   color: white;
   border-radius: 5px;
   padding: 5px 10px;
   letter-spacing: 1px;
   width: 150px;
   height: 40px;
   float:right;
}
.vertical-form{
    display:flex;
    flex-direction:column;
}
.wc-form__err-msg{
    color: red;
    text-align:left;
}
</style>
