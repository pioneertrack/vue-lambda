<template>
  <div class="bg-clouds with-navbar">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-md-offset-3 login-page forgot-password m-t-100">
          <div class="card card-default">
            <div class="card-body">
              <div class="login-heading">
                Password Reset
              </div>

              <div class="form-group">
                <label class="col-md-8 col-md-offset-3 control-label">Your password has been changed.<br/>Please login using your new password.</label>
              </div>

              <div class="form-group login-button">
                <div class="col-md-4 col-md-offset-4">
                  <router-link class="btn btn-green" to="/login"> Continue To Login</router-link>
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
  name: 'resetThanks',
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
