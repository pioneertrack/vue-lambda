<template>
  <div class="bg-clouds with-navbar">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-md-offset-3 login-page forgot-password m-t-100">
          <div class="panel panel-default">
            <div class="panel-body">
              <div class="login-heading">
                Forgot Password?
              </div>
              <div class="alert alert-danger" v-show="errorMessage">
                {{ errorMessage }}
              </div>
              <form class="form-horizontal" @submit.prevent="forgotPassword">
                <!-- E-Mail Address -->
                <div class="form-group">
                  <p class="col-md-8 col-md-offset-2">Enter your email address to reset your password. You may need to check your spam folder or <br>unblock no-reply@weathercheck.co.</p>

                  <div class="col-md-8 col-md-offset-2">
                    <input type="email" class="form-control" name="email"  v-model="email" autofocus placeholder="Email">
                  </div>
                </div>
                <!-- Send Password Reset Link Button -->
                <div class="form-group login-button m-t-50">
                  <div class="col-md-4 col-md-offset-4">
                    <button type="submit" class="btn btn-green btn-block">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'forgotPassword',
  data () {
    return {
      email: '',
      errorMessage: '',
    }
  },
  methods: {
    forgotPassword () {
      this.$store.dispatch('forgotPassword', {
        username: this.email,
      }).then(() => {
        this.$router.push({
          name: 'forgotThanks',
          params: { email: this.email, },
        })
      }).catch((err) => {
        this.errorMessage = err.message
        this.protectedUI = false
      })
    },
  },
}
</script>

<style scoped>

</style>
