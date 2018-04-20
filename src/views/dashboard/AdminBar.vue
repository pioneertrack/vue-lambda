<template>
    <div class="admin-bar" v-if="superUserEnabled">
        <h2 style="color:#ffffff">{{selectedTeam.name}}</h2>
        <select v-on:change="changeTeam()" v-model="newTeam">
            <option v-for="t in teams" v-bind:key="t.id" v-bind:value="t">{{t.name}}</option>
        </select>
    </div>
</template>

<script>
import TeamService from '../../services/TeamService'
export default {
  name: 'AdminBar',
  data: function () {
    return {
      newTeam: {},
      teams: [],
    }
  },
  mounted () {
    this.getTeams()
  },
  computed: {
    selectedTeam () {
      return this.$store.state.team
    },
    superUserEnabled () {
      return this.$store.state.superUserEnabled
    },
  },
  methods: {
    getTeams () {
      TeamService.getAllTeams().then((teams) => {
        this.teams = teams
      })
    },
    changeTeam () {
      this.$store.commit('SET_TEAM', this.newTeam)
      this.$router.go('/dashboard')
    },
  },
}
</script>

<style lang="scss" scoped>
    .admin-bar{
        background-width:100%;
        height:50px;
        position:sticky;
        top:0;
        z-index:100;
        display:flex;
        justify-content:space-between;
        padding:0 16px;
        background-color: orange;
        align-content: center;

        h2 {
            margin:10px 0 0;
            padding:0;
        }
    }
</style>
