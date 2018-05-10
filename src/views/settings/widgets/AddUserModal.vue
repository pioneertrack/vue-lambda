<template>
    <vue-modal
            :name="modalName"
            :adaptive="true"
            height="auto"
            :scrollable="true"
            @before-open="beforeOpen"
            @closed="closed()"
    >
        <div style="display:flex; flex-direction:column; align-items:center;">
            <h1 style="margin-top:20px;">Invite a new user</h1>
            <div style="max-width:280px;">
                <form @submit.prevent="save">
                    <div>
                        <div class="vertical-form">
                            <label>Account Type</label>
                            <select class="wc-form__input" v-model="accountType">
                                <option value="manager">Manager</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>
                        <div class="m-b-30" v-if="accountType == ''">
                        </div>
                        <p class="account-type-help-text" v-if="accountType == 'manager'">
                            <strong>Managers</strong> can see all properties and change their notifications. They cannot
                            add new properties, add new users or view billing.
                        </p>
                        <p class="account-type-help-text" v-if="accountType == 'admin'">
                            <strong>Admins</strong> can handle billing, add new users, see all properties and change notifications.
                        </p>
                    </div>
                    <div class="vertical-form">
                        <label>
                            Enter User Email
                        </label>
                        <input type="text" name="email" v-model="email"/>
                    </div>
                </form>
                <div style="display:flex; justify-content:space-between; margin: 26px 0;">
                    <button class="blue-border btn-tranparent btns-blue pull-right" style="margin:0;" @click="cancel">
                        Cancel
                    </button>
                    <input class="btn green_btn" style="margin:0;  padding:0 2em;" type="submit" name="save" @click="save" :disabled="processing" value="SAVE">
                </div>
            </div>
        </div>
    </vue-modal>
</template>

<script>
import teamService from '../../../services/TeamService'

export default {
  name: 'AddUserModal',
  props: [ 'modalName', ],
  data () {
    return {
      email: '',
      accountType: '',
      processing: false,
    }
  },
  computed: {
    valid () {
      return this.email.length > 0 && this.accountType.length > 0
    },
  },
  methods: {
    closed () {
      this.$emit('on-close')
    },
    beforeOpen () {
      this.email = ''
      this.accountType = ''
    },
    save () {
      if (!this.valid) {
        return
      }
      this.processing = true
      teamService.createInvite(this.$store.state.team.id, this.email, this.accountType).then((response) => {
        this.processing = false
        if (typeof response.data.error !== 'undefined') {
          return
        }
        if (typeof response.data.warning !== 'undefined') {
          return
        }
        if (typeof response.data.info !== 'undefined') {
          this.$modal.hide(this.modalName)
          return
        }
        this.$modal.hide(this.modalName)

      })
    },
    cancel () {
      this.$modal.hide(this.modalName)
    },
  },
}
</script>

<style lang="scss" scoped>
    form input{
        height: 40px;
        border:1px solid #a4a4a4;
        border-radius: 3px;
        padding:5px 15px;
        width:100%;
    }
    form select{
        height: 40px;
        border:1px solid #a4a4a4;
        border-radius: 3px;
        padding:5px 15px;
        width:100%;
    }

    .account-type-help-text {
        padding:0 10px;
        text-align:initial;
        font-size:12px;
        line-height:16px;

        strong {
            color: #22497C;
        }
    }

</style>
