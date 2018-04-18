<template>
  <div class="bg-clouds with-navbar">
    <div class="container">
      <div class="row">
        <div class="col-md-5 login-page col-md-offset-4 m-t-100">
          <div class="panel panel-default">
            <div class="panel-body">
              <div class="login-heading p-t-100 p-b-100">
                You've been successfully logged out
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
  name: 'logout',
  data () {
    return {
      msg: 'Logout',
    }
  },
  methods: {
    signOut: function () {
      this.$store.dispatch('signOut')
      localStorage.clear()
    },
  },
  mounted () {
    this.signOut()
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
