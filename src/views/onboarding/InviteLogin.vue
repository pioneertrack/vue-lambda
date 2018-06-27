<template>
    <div class="bg-clouds with-navbar">
        <div class="container">
            <div class="row">
                <div class="col-md-5 login-page col-md-offset-4 m-t-100">
                    <div class="card card-default">

                        <div class="card-body">
                            <div class="alert alert-success" v-show="successMessage">
                                {{ successMessage }}
                            </div>
                            <div class="alert alert-danger" v-show="errorMessage">
                                {{ errorMessage }}
                            </div>
                            <div class="login-heading">
                                Welcome to WeatherCheck
                            </div>
                            <form class="form-horizontal" @submit.prevent="login">
                                <!-- E-Mail Address -->
                                <div class="form-group">

                                    <div class="col-md-8 col-md-offset-2">
                                        <input type="text" class="form-control" name="email" value="" placeholder="Email" v-model="email" autofocus>
                                    </div>
                                </div>

                                <!-- Password -->
                                <div class="form-group">

                                    <div class="col-md-8 col-md-offset-2">
                                        <input type="password" class="form-control" name="password" placeholder="Password" v-model="password">
                                    </div>
                                </div>

                                <!-- Remember Me -->
                                <div class="form-group">
                                    <div class="col-md-8 col-md-offset-2">
                                        <div class="checkbox">
                                            <label>
                                                <input type="checkbox" name="remember" v-model="rememberMe">Remember Me
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <!-- Login Button -->
                                <div class="form-group login-button">
                                    <div class="col-md-4 col-md-offset-4">
                                        <button type="submit" class="btn btn-green btn-block">
                                            Login
                                        </button>
                                    </div>
                                </div>

                                <!-- Forgot Password -->
                                <div class="form-group m-t-50">
                                    <div class="col-md-10 col-md-offset-1">
                                        <router-link class="btn-link" :to="{ name: 'forgotPassword'}">
                                            Forgot Password?
                                        </router-link>
                                        <router-link class="btn-link pull-right" :to="{ name: 'register'}">
                                            Create an Account
                                        </router-link>
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
import store from '../../store'
import TeamService from '../../services/TeamService'

export default {
  name: 'login',
  data () {
    return {
      errorMessage: null,
      successMessage: null,
      disableAllInputs: false,
      protectedUI: false,
      email: '',
      password: '',
      rememberMe: false,
      team: {},
      invite: {},
    }
  },
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
    login () {
      this.$store.dispatch('authenticateUser', {
        username: this.email,
        password: this.password,
        rememberMe: this.rememberMe,
      }).then(() => {
        TeamService.acceptInvite(this.$route.params.token, store.state.cognito.user.username).then((status) => {
          this.disableAllInputs = true
          this.password = ''
          this.errorMessage = null
          this.$router.push('dashboard')
        }).catch(() => {
        })
      }).catch((err) => {
        this.errorMessage = err.message
        this.protectedUI = false
      })
    },
  },
}
</script>

<style >
    .tanya {

    }
</style>
