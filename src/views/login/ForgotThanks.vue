<template>
  <div class="bg-clouds with-navbar">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-md-offset-3 login-page forgot-password m-t-100">
          <div class="panel panel-default">
            <div class="panel-body">
              <div class="login-heading">
                Thank You
              </div>

              <div class="form-group">
                <label class="col-md-8 col-md-offset-2 control-label">If weatherCheck account exists for {{ email }}, an e-mail will be sent with further  instructions, You may need to check your spam folder  or unblock <br>no-reply@weathercheck.co</label>
              </div>

              <div class="form-group login-button">
                <div class="col-md-5 col-md-offset-4">
                  <router-link class="btn btn-green" to="/resetpassword">Continue</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'passwordReset',
  created () {
    this.email = this.$route.params.email
  },
  data () {
    return {
      email: '',
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
