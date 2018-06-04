<template>
    <div class="row">
        <div id='profile' class="table-responsive col-md-12 col-lg-8">
          <h1>Individual Profile</h1>
          <table class="profileTable">
            <tr><th>Name</th><td>{{ userProfile.name }}</td><td></td></tr>
            <tr><th>Email</th><td>{{ userProfile.email }}</td><td></td></tr>
            <tr><th>Account Type</th><td>{{ userProfile.accountType }}</td><td></td></tr>
            <tr><th>Company Name</th><td>{{ userProfile.company }}</td><td></td></tr>
            <tr><th>Phone Number</th><td>{{ formattedPhoneNumber }}</td><td></td></tr>
            <tr><th>Password</th><td>&bull;&nbsp;&bull;&nbsp;&bull;&nbsp;&bull;&nbsp;&bull;&nbsp;&bull;&nbsp;&bull;&nbsp;&bull;&nbsp;&bull;&nbsp;&bull;</td><td><router-link to="/settings/profile/change-password">Change</router-link></td></tr>
        </table>
            <div style="margin:30px 0; display: flex; justify-content: center;">
                <router-link to="/settings/profile/edit" class="btn green_btn" type="submit" name="edit" value="Edit Information" @click.prevent="edit" >Edit Information</router-link>
            </div>
        </div>
    </div>
</template>

<script>

import SettingsMenu from './widgets/SettingsMenu'
import VerifyPassword from './widgets/VerifyPassword'

export default {
  name: 'userProfile',
  components: {
    SettingsMenu,
    VerifyPassword,
  },
  data () {
    return {
      userProfile: {
        name: '',
        email: '',
        accountType: '',
        company: '',
        phone: '',
        password: '**********',
      },
    }
  },
  computed: {
    formattedPhoneNumber: function () {
      return `(${this.userProfile.phone.substring(2, 5)})-${this.userProfile.phone.substring(5, 8)}-${this.userProfile.phone.substring(8, 12)}`
    }
  },
  methods: {
    getAttributes: function () {
      this.$store.dispatch('getUserAttributes').then(function (attributes) {
        this.$data.userProfile.name = attributes.name
        this.$data.userProfile.email = attributes.email
        this.$data.userProfile.phone = attributes.phone_number
        this.$data.userProfile.accountType = attributes['custom:accountType']
        this.$data.userProfile.company = attributes['custom:company']
      }.bind(this))
    },
    edit () {
      this.$router.push('/settings/profile/edit')
    },
  },
  mounted () {
    this.getAttributes()
  },
}
</script>

<style lang="scss">
.profileTable{
  width: 100%;
  font-size:16px;
  border-bottom: 1px solid #eee;
}
.profileTable th{
   padding:15px 90px;
   height:50px;
   border-top:1px solid #eee;
}
.profileTable td{
   height:50px;
   border-top:1px solid #eee;
}
#profile{
  background-color: white;
  margin:0px 10px 0px 20px;
  padding:10px 0px;
}
#profilePic{
  width:120px;
  height:120px;
  border:4px solid #8cc45e;
  border-radius: 100px;
  margin:10px 0px 25px 90px;
  float:left;
}
#profile h1{
  clear:both;
  margin: 10px 0px 10px;
  font-size: 20px;
  text-align:center;
  font-weight: bold;
}
.button{
   background-color: #8cc45e;
   color: white;
   border-radius: 2px;
   padding: 5px 10px;
   letter-spacing: 1px;
   width: 150px;
   margin:30px 315px;
}
</style>
