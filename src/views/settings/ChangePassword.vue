<template>
    <div class="row">
        <div id='profile' class="table-responsive col-md-12 col-lg-8 change-password-card">
            <div style="display:flex; flex-direction:column; align-items:center;">
                <h2>Update Password</h2>
                <p v-if="error.length > 0" class="wc-form__err-msg">Incorrect Password</p>
                <form>
                    <div class="vertical-form" :class="{'wc-form__block': profileForm.currentPassword.hasErrors()}">
                        <label for="currentPassword">Current Password</label>
                        <input type="password" class="wc-form__input" placeholder="Current Password" id="currentPassword"
                               v-model="profileForm.currentPassword.value" @keyup="profileForm.currentPassword.validate()"
                               @blur="profileForm.currentPassword.validate()">
                        <p class="wc-form__err-msg">{{ profileForm.currentPassword.firstError }}</p>
                    </div>
                    <div class="vertical-form" :class="{'wc-form__block': profileForm.newPassword.hasErrors()}">
                        <label for="newPassword">New Password</label>
                        <input type="password" class="wc-form__input" placeholder="New Password" id="newPassword"
                               v-model="profileForm.newPassword.value" @keyup="profileForm.newPassword.validate()"
                               @blur="profileForm.newPassword.validate()">
                        <p class="wc-form__err-msg">{{ profileForm.newPassword.firstError }}</p>
                    </div>

                    <div class="vertical-form"
                         :class="{'wc-form__block': profileForm.newPasswordConfirmation.hasErrors()}">
                        <label for="newPasswordConfirmation">Confirm Password</label>
                        <input type="password" class="wc-form__input" placeholder="Confirm Password"
                               id="newPasswordConfirmation"
                               v-model="profileForm.newPasswordConfirmation.value"
                               @keyup="profileForm.newPasswordConfirmation.validate()"
                               @blur="profileForm.newPasswordConfirmation.validate()">
                        <p class="wc-form__err-msg">{{ profileForm.newPasswordConfirmation.firstError }}</p>
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
import FormChecker from '../../lib/FormChecker/FormChecker'
import WcCard from '../../components/WcCard'

let profileForm = new FormChecker({
  name: 'Profile Form',
  fields: {
    currentPassword: {
      name: 'Current Password',
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
  name: 'changePassword',
  components: {
    WcCard,
  },
  data () {
    return {
      profileForm: profileForm,
      error: '',
    }
  },
  mounted () {
    this.profileForm.currentPassword.value = ''
    this.profileForm.newPassword.value = ''
    this.profileForm.newPasswordConfirmation.value = ''
  },
  methods: {
    cancel () {
      this.$router.push('/settings/profile')
    },
    saveAttributes () {
      if (profileForm.$isValid()) {
        this.$store.dispatch('changePassword', {
          'oldPassword': profileForm.currentPassword.value,
          'newPassword': profileForm.newPassword.value,
        }).then(response => {
          this.$router.push('/settings/profile')
          this.error = ''
        }).catch(e => {
          this.error = 'Incorrect Password'
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/sass/common";
.change-password-card{
    @include card-mixin();
}
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
