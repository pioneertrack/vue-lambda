<template>
  <div class="bg-clouds with-navbar">
        <section class="module-onboarding container">
            <div class="onboarding">
              <h1 class="text-center">Reset Your Password</h1>
              <div class="form-wrapper">
                <form class="wc-form">
                    <p :class="['wc-form__err-msg', {'wc-form__err-msg--cognito' : cognitoError }]" v-if="cognitoError"> {{ cognitoError }} </p>

                    <div :class="['wc-form__block', {'wc-form__block--err': errors['email']}]">
                      <label for="email">Email</label>
                      <input type="text" class="wc-form__input" placeholder="Email" id="email" v-model="resetForm.email">
                      <p class="wc-form__err-msg">{{ errors['email'] ? errors['email'][0] : '' }}</p>
                    </div>
                    <div :class="['wc-form__block', {'wc-form__block--err': errors['code']}]">
                      <label for="code">Confirmation Code</label>
                      <input type="text" class="wc-form__input" placeholder="Confirmation Code" id="code" v-model="resetForm.code">
                      <p class="wc-form__err-msg">{{ errors['code'] ? errors['code'][0] : '' }}</p>
                    </div>

                    <div class="wc-form__block" :class="{'wc-form__block--err': errors['password']}">
                      <label for="password">Password</label>
                      <input type="password" class="wc-form__input" placeholder="Password" id="password"
                            v-model="resetForm.password" @keyup="validate">
                      <p class="wc-form__err-msg">{{ errors['password'] ? errors['password'][0] : '' }}</p>
                    </div>

                    <div class="wc-form__block" :class="{'wc-form__block--err': errors['password']}">
                      <label for="confirm-password">Confirm Password</label>
                      <input type="password" class="wc-form__input" placeholder="Confirm Password" id="passwordConfirmation"
                        v-model="resetForm.password_confirmation" @keyup="validate">
                      <p class="wc-form__err-msg">{{ errors['password'] ? errors['password'][0] : '' }}</p>
                    </div>

                    <input class="btn" type="submit" name="resetPassword" value="Reset Password" @click.prevent="resetPassword" >
                </form>
              </div>
            </div>
        </section>
    </div>
</template>

<script>
import Validator from 'validatorjs'

export default {
  data () {
    return {
      cognitoError: null,
      email: '',
      code: '',
      password: '',
      errorMessage: '',
      validationRules: {
        email: 'required|email',
        code: 'required',
        password: 'required|confirmed',
      },
      resetForm: {
        email: '',
        code: '',
        password: '',
        passwordConfirmation: '',
      },
      errors: {},
    }
  },
  mounted () {
  },
  computed: {},
  watch: {},
  methods: {
    resetPassword () {
      const { email, code, password, } = this.resetForm

      this.$store.dispatch('confirmPassword', {
        username: email,
        code: code,
        newPassword: password,
      }).then(() => {
        this.$router.push({
          name: 'resetThanks',
          params: { email: this.email, },
        })
      }).catch((err) => {
        this.errorMessage = err.message
        this.protectedUI = false
      })
    },
    validate () {
      const validator = new Validator(
        this.resetForm, this.validationRules
      )

      if (validator.fails()) {
        this.errors = validator.errors.errors
      }

      return validator.passes()
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
