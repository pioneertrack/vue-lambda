<template>
<div id='settingsMenu'>
  <h1>Settings</h1>
  <ul>
    <li :class="{active:$route.path.startsWith('/settings/profile')}">
      <router-link to="/settings/profile">Individual Profile</router-link>
    </li>
    <li :class="{active:$route.path.startsWith('/settings/manage-users')}" v-if="$store.getters.isAdmin">
      <router-link to="/settings/manage-users">Manage Users</router-link>
    </li>
  </ul>
</div>
</template>
<script>

export default {
  name: 'SettingsMenu',
  components: {
  },
  data () {
    return {
      active: null,
    }
  },
  methods: {
  },
  mounted () {
  },
}
</script>
<style scoped>
#settingsMenu{
  font-family: "Roboto Regular", sans-serif;
  font-size: 15px;
  letter-spacing:1px;
  color: #6a6a6a;
  background-color: #fff;
  border-radius: 3px;
  padding:20px 0px;
  border-bottom: 1px solid rgb(222, 226, 230);
}
#settingsMenu h1{
  font-family: "Montserrat Regular", sans-serif;
  font-size: 20px;
  margin:0px 0px 20px 25px;
  width:200px;
}
#settingsMenu ul{
  list-style-type: none;
  padding:0;
}
#settingsMenu li{
  color: #6a6a6a;
  padding:5px 25px;
}
#settingsMenu li a{
  color: #6a6a6a;
}
#settingsMenu li.active{
  background-color: #00457b;
  color: white;
}
#settingsMenu li.active a{
  color: white;
}
</style>
