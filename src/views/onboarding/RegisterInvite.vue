<template>
  <div class="bg-clouds with-navbar">
        <section class="module-onboarding container">
            <div class="onboarding">
              <h1 class="text-center m-t-30">Welcome to WeatherCheck</h1>
                <h3 class="text-center m-b-30">You have been invited to manage {{team.name}}</h3>
              <div class="form-wrapper">
                <form class="wc-form">
                    <p :class="['wc-form__err-msg', {'wc-form__err-msg--cognito' : cognitoError }]" v-if="cognitoError"> {{ cognitoError }} </p>
                    <div :class="['wc-form__block', {'wc-form__block--err': registrationForm.name.hasErrors()}]">
                        <label for="name">Name</label>
                        <input type="text" class="wc-form__input" placeholder="Name" id="name" v-model="registrationForm.name.value" @keyup="registrationForm.name.validate()" @blur="registrationForm.name.validate()">
                        <p class="wc-form__err-msg">{{ registrationForm.name.firstError }}</p>
                    </div>
                    <div :class="['wc-form__block', {'wc-form__block--err': registrationForm.email.hasErrors()}]">
                      <label for="email">Email</label>
                      <input type="text" class="wc-form__input" placeholder="Email" id="email" v-model="registrationForm.email.value" @keyup="registrationForm.email.validate()" @blur="registrationForm.email.validate()">
                      <p class="wc-form__err-msg">{{ registrationForm.email.firstError }}</p>
                    </div>

                    <div :class="['wc-form__block', {'wc-form__block--err': registrationForm.accountType.hasErrors()}]">
                        <label for="name">I am a...</label>
                        <div>
                            <select name="account_type" class="wc-form__input" v-model="registrationForm.accountType.value" @change="registrationForm.accountType.validate()"
                              @blur="registrationForm.accountType.validate()">
                                <option selected value="" disabled hidden>Please select...</option>
                                <option value="reit">REIT</option>
                                <option value="property_manager">Property Manager</option>
                                <option value="owner">Owner</option>
                            </select>
                        </div>
                        <p class="wc-form__err-msg">{{ registrationForm.accountType.firstError }}</p>
                    </div>
                    <div :class="['wc-form__block', {'wc-form__block--err': registrationForm.company.hasErrors()}]">
                      <label for="company">Company</label>
                      <input type="text" class="wc-form__input" placeholder="Company" id="company"
                             v-model="registrationForm.company.value" @keyup="registrationForm.company.validate()" @blur="registrationForm.company.validate()">
                      <p  class="wc-form__err-msg">{{ registrationForm.company.firstError }}</p>
                    </div>

                    <div :class="['wc-form__block', {'wc-form__block--err': registrationForm.phone.hasErrors()}]">
                      <label for="phone">Phone</label>
                      <input type="text" class="wc-form__input" placeholder="Phone" id="phone"
                            v-model="registrationForm.phone.value" @keyup="registrationForm.phone.validate()" @blur="registrationForm.phone.validate()">
                      <p class="wc-form__err-msg">{{ registrationForm.phone.firstError }}</p>
                    </div>
                    <div class="wc-form__block" :class="{'wc-form__block--err': registrationForm.password.hasErrors()}">
                      <label for="password">Password</label>
                      <input type="password" class="wc-form__input" placeholder="Password" id="password"
                            v-model="registrationForm.password.value" @keyup="registrationForm.password.validate()" @blur="registrationForm.password.validate()">
                      <p class="wc-form__err-msg">{{ registrationForm.password.firstError }}</p>
                    </div>

                    <div class="wc-form__block" :class="{'wc-form__block--err': registrationForm.passwordConfirmation.hasErrors()}">
                      <label for="confirm-password">Confirm Password</label>
                      <input type="password" class="wc-form__input" placeholder="Confirm Password" id="passwordConfirmation"
                        v-model="registrationForm.passwordConfirmation.value" @keyup="registrationForm.passwordConfirmation.validate()" @blur="registrationForm.passwordConfirmation.validate()">
                      <p class="wc-form__err-msg">{{ registrationForm.passwordConfirmation.firstError }}</p>
                    </div>

                    <div class="checkbox">
                        <input type="checkbox" v-model="acceptFirstTerms" id="firstTerms" />
                        <label for="firstTerms" class="checkbox">
                            <span> I accept the <a target="_blank" href="https://weathercheck.co/terms/">terms and conditions</a></span>
                        </label>
                    </div>
                    <span class="help-block error-terms" style="color: red; display: none;">
                        You must accept the terms and conditions to continue.
                    </span>
                    <input class="btn" type="submit" name="submit" value="Create Account"
                           :disabled="! formReady()" @click.prevent="signup" >
                </form>
              </div>
                <div class="text-center m-b-30">
                    <router-link :to="{name: 'inviteLogin', params: $route.params}">Already have a WeatherCheck account? Log In</router-link>
                </div>
            </div>
            <vue-modal name="monitoring-notice"
                       height="auto"
            >
                <div style="display:flex; flex-direction: column; height:100%;">
                    <h2 style="align-self:center; flex:1; font-size:24px;">INSTALLATION OF SENSORY EQUIPMENT</h2>
                    <h4 style="align-self:center; flex:1;" class="m-b-20">Effective as of November 13, 2017</h4>
                    <div style="margin: 0 4em; padding:1em; background: #F5F6FA; overflow-y:scroll; max-height:300px;">
                        <ol>
                            <li>
                                We may need access to the physical premises of the property address you provided to the
                                Company Website.
                            </li>
                            <li>
                                If such access is needed and we have secured your agreement with such need on a specific
                                portion of the Company WebSite, you hereby grant us a non- exclusive license to an install and
                                affix sensory equipment (the Equipment) to the Premises, together with the right to
                                Company, its successors, assigns, contractors, and agents, to construct, install, operate,
                                maintain, inspect, repair, renew, remove, and relocate the Equipment and to doing anything
                                necessary or useful or convenient in connection with the foregoing
                            </li>
                            <li>
                                If you don't own the Premises, you are solely responsible for securing the required
                                permission for installation to take place on the Premises as outlined above. You may be asked
                                to provide written evidence that you have requested and been afforded all necessary
                                permissions to complete the installation and you should be prepared to present said evidence
                                at any time.
                            </li>
                            <li>
                                We will make every effort to install the Equipment consistent with the aesthetics and
                                construction of the Premises
                            </li>
                            <li>
                                The Equipment will at all times remain the personal property of Company, its successors or
                                assigns, and may be removed by Company upon the termination of this TOS.
                            </li>
                        </ol>
                    </div>
                    <div style="align-self:center; flex:1;" class="m-b-15 m-t-15">
                        <button type="button" class="btn" style="background-color:#8ec549;" :disabled="!canSubmit" @click="sendRegistration">Accept</button>
                    </div>
                </div>
            </vue-modal>
        </section>
    </div>
</template>

<script>
import FormChecker from '../../lib/FormChecker/FormChecker'
import store from '../../store'
import TeamService from '../../services/TeamService'

let registrationForm = new FormChecker({
  name: 'Registration Form',
  fields: {
    name: {
      value: '',
      name: 'Name',
      validations: {
        required: true,
      },
    },

    email: {
      value: '',
      name: 'Email',
      validations: {
        required: true,
        email: true,
      },
    },
    accountType: {
      value: '',
      name: 'Account Role',
      validations: {
        required: true,
      },
    },
    company: {
      value: '',
      name: 'Company',
      validations: {
        required: true,
      },
    },
    phone: {
      name: 'Phone Number',
      value: '',
      validations: {
        required: true,
        phone: true,
      },
    },
    password: {
      value: '',
      name: 'Password',
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
    passwordConfirmation: {
      value: '',
      name: 'Password Confirmation',
      validations: {
        required: true,
        confirmation: 'password',
      },
    },
  },
})

export default {
  data () {
    return {
      showTermsModal: false,
      acceptFirstTerms: false,
      acceptSecondTerms: false,
      cognitoError: null,
      registrationForm: registrationForm,
      collectionScrollBottom: false,
      submitting: false,
      team: {},
      invite: {},
    }
  },
  mounted () {
  },
  computed: {
    canSubmit () {
      return !this.submitting
    },
  },
  watch: {},
  beforeRouteEnter (to, from, next) {
    store.dispatch('getCurrentUser').then((user) => {
      next({ name: 'inviteAccept', params: to.params, })
    }).catch(() => {
      TeamService.getInvite(to.params.token).then((invite) => {
        next(vm => {
          vm.team = invite.team
          vm.invite = invite.invite
        }).catch(() => {
          next({ path: '/', })
        })
      }).catch(() => {
        next({ path: '/', })
      })
    })
  },
  methods: {
    formReady () {
      let formReady = false
      if (this.acceptFirstTerms && registrationForm.$isTouched() && registrationForm.$isValid()) {
        formReady = true
      }
      return formReady
    },
    signup () {
      this.registrationForm.$validate('force')
      this.cognitoError = null

      if (registrationForm.$isValid()) {
        this.$modal.show('monitoring-notice')
      }
    },
    sendRegistration () {
      this.submitting = true
      if (this.acceptFirstTerms) {
        this.$store.dispatch('signUp', {
          username: registrationForm.email.value,
          password: registrationForm.password.value,
          attributes: {
            email: registrationForm.email.value,
            name: registrationForm.name.value,
            phone_number: '+1' + registrationForm.phone.value.replace(/[^0-9]/g, ''),
            'custom:company': registrationForm.company.value,
            'custom:accountType': registrationForm.accountType.value,
            'custom:channel': 'team-invite',
          },
        }).then((user) => {

          this.submitting = false
          let firstName, lastName
          if (this.registrationForm.name.value) {
            let nameSpace = this.registrationForm.name.value.indexOf(' ')
            if (nameSpace > 0) {
              firstName = this.registrationForm.name.value.substr(0, nameSpace)
              lastName = this.registrationForm.name.value.substr(nameSpace + 1)
            } else {
              lastName = this.registrationForm.name.value
            }
          }

          this.$gtm.trackEvent({
            event: 'RegisteredUserSignup',
            category: 'Signup',
            action: 'click',
            label: 'New User Registration Signup',
            email: this.registrationForm.email.value,
            firstName: firstName,
            lastName: lastName,
            noninteraction: true,
          })
          this.authenticateUser()
        }).catch(error => {
          this.$modal.hide('monitoring-notice')
          this.submitting = false
          this.cognitoError = error.message
          window.scrollTo(0, 0)
        })
      }
    },
    authenticateUser () {
      // after signing up the user, wait a moment,
      // then authenticate them
      setTimeout(() => {
        this.$store.dispatch('authenticateUser', {
          username: registrationForm.email.value,
          password: registrationForm.password.value,
        }).then(() => {
          TeamService.acceptInvite(this.$route.params.token, store.state.cognito.user.username).then((status) => {
            this.$router.push('/dashboard')
          }).catch(() => {
          })
        })
      }, 500)
    },
  },
}
</script>

<style lang="scss" scoped>
    .page--ui-modal {
        .page__demo-group {
            margin-bottom: 16px;
        }
        .ui-button {
            margin-bottom: 8px;
        }
    }
  .module-onboarding .onboarding {

    .wc-form {

      &__block {
        &--err {
          .wc-form__input {
            border-color: lighten(red, 10);
          }

          .wc-form__err-msg {
            display: block;
            margin-top: -13px;
          }
        }
      }

      &__input {
        margin-bottom: 15px;
        margin-left: 0;

      }

      &__err-msg {
        margin: 0px;
        text-align: left;
        color: lighten(red, 10);
        font-size: 12px;

        &--cognito {
          text-align: center;
        }
      }
    }

  }
  ol, ul {
      margin-top: 0;
      margin-bottom: 11px;
  }
</style>
