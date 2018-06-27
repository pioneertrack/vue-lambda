<template>
    <div class="bg-clouds with-navbar">
        <div class="container">
            <div class="row">
                <div class="col-md-5 login-page col-md-offset-4 m-t-100">
                    <div class="card card-default">

                        <div class="card-body">
                            <div class="login-heading">
                                Join {{team.name}}?
                            </div>

                            <!-- Login Button -->
                            <div class="form-group login-button">
                                <div class="col-md-4 col-md-offset-4">
                                    <button type="submit" class="btn btn-green btn-block" @click="acceptInvite">
                                        Accept
                                    </button>
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
import TeamService from '../../services/TeamService'
import store from '../../store'

export default {
  name: 'InviteAccept',
  data () {
    return {
      team: {},
      invite: {},
    }
  },
  beforeRouteEnter (to, from, next) {
    store.dispatch('getCurrentUser').then((user) => {
      TeamService.getInvite(to.params.token).then((invite) => {
        next(vm => {
          vm.team = invite.team
          vm.invite = invite.invite
        })
      }).catch(() => {
        next({ path: '/', })
      })
    }).catch(() => {
      next({ path: '/', })
    })
  },
  methods: {
    acceptInvite () {
      TeamService.acceptInvite(this.$route.params.token, store.state.cognito.user.username).then((status) => {
      }).catch(() => {
      })
    },
  },
}
</script>

<style scoped>

</style>
