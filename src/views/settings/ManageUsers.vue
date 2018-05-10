<template>
    <div class="row">
        <div class="col-md-10 col-lg-6">
            <WcCard>
                <div slot="header" style="display: flex; justify-content: space-between; align-items:center;">
                    Manage Users
                    <button class="btn btn-green" style="line-height:18px;" @click="createNewUser()">Create New User</button>
                </div>
                <div slot="content">
                    <div style="display:flex; flex-direction:column;">
                        <div class="user-row">
                            <div class="user-col name-col"><strong>Name</strong></div>
                            <div class="user-col type-col"><strong>Type</strong></div>
                            <div class="user-col email-col"><strong>Email</strong></div>
                        </div>
                        <div class="user-row" v-for="member in members" v-bind:key="member.id">
                            <div class="user-col name-col">{{member.name}}</div>
                            <div class="user-col type-col">{{member.role | accountTypeFilter}}</div>
                            <div class="user-col email-col">{{member.email}}</div>
                        </div>
                    </div>
                </div>
                <div slot="footer">
                </div>
            </WcCard>
            <WcCard class="p-t-20">
                <div slot="header">Pending Invites</div>
                <div slot="content">
                    <div style="display:flex; flex-direction:column;">
                        <div class="user-row">
                            <div class="user-col email-col"><strong>Email</strong></div>
                            <div class="user-col type-col"><strong>Account Type</strong></div>
                            <div class="user-col name-col"><strong>Date Sent</strong></div>
                        </div>
                        <div class="user-row" v-for="invite in pendingInvites">
                            <div class="user-col email-col">{{invite.email}}</div>
                            <div class="user-col type-col">{{invite.account_type | accountTypeFilter}}</div>
                            <div class="user-col name-col">{{invite.created_at | date}}</div>
                        </div>
                    </div>
                </div>
            </WcCard>
        </div>
        <add-user-modal modal-name="add-user-modal" @on-close="onModalClose()"></add-user-modal>
    </div>
</template>

<script>
import WcCard from '../../components/WcCard'
import Pagination from '../../components/Pagination'
import AddUserModal from './widgets/AddUserModal'
import teamService from '../../services/TeamService'
import moment from 'moment'

export default {
  name: 'ManageUsers',
  components: {
    WcCard,
    Pagination,
    AddUserModal,
  },
  data: function () {
    return {
      currentPage: 1,
      pendingInvites: [],
      members: [],
    }
  },
  mounted () {
    this.getPendingInvites()
    this.getMembers()
  },
  methods: {
    onModalClose () {
      this.getPendingInvites()
    },
    pageChanged (event) {
      this.currentPage = event.page
    },
    createNewUser () {
      this.$modal.show('add-user-modal')
    },
    getPendingInvites () {
      teamService.getInvites(this.$store.state.team.id).then((response) => {
        this.pendingInvites = response
      })
    },
    getMembers () {
      teamService.getMembers(this.$store.state.team.id).then((response) => {
        this.members = response
      })
    },
  },
  filters: {
    accountTypeFilter (value) {
      if (value === 'admin') {
        return 'Admin'
      }
      if (value === 'manager') {
        return 'Manager'
      }
    },
    date (value) {
      return moment(value).format('MMM DD, YYYY')
    },
  },
}
</script>

<style lang="scss" scoped>
.user-row{
    display:flex;
    justify-content:space-around;
    flex-direction:row;
    height:3em;

    .user-col{
        display:flex;
        align-items:center;
        padding:0 1em;
    }

    .checkbox-col{
        width:40px;
        justify-content:center;
        align-content:center;
        display:flex;
        input {
            margin:0;
        }
    }

    .name-col{
        flex: 2;
    }

    .type-col{
        flex: 1;
    }

    .email-col{
        flex:2;
    }
}
.user-card-header{
    font-size: 18px;
    line-height: 22px;
    margin:0;
}
</style>
