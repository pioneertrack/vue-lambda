<template>
    <div class="container-fluid m-b-45">
        <div class="container">
            <div class="row m-t-25">
                <div class="col-sm-12">
                  <WcCard>
                      <div slot="header" style="display: flex; justify-content: space-between;">
                          <h1 style="flex:1;">Your Properties</h1>
                            <button class="btn" @click="openImport()" v-if="$store.getters.isAdmin">ADD NEW PROPERTIES</button>
                      </div>
                  </WcCard>
                </div>
            </div>
            <div class="row m-t-25">
                <div class="col-sm-12">
                    <PropertiesList
                            :properties="properties"
                            :count="propertiesCount"
                            :pages="propertyPages"
                            :no-addresses="importRequired"
                            @properties-added="propertiesAdded"
                            v-on:update="getProperties"></PropertiesList>
                </div>
            </div>
        </div>
        <import-modal @on-done="refreshProperties" :modal-name="'add-new-properties-modal'"></import-modal>
    </div>
</template>

<script>
import axios from 'axios'
import PropertiesList from './PropertiesList'
import store from '@/store/index'
import WcCard from '@/components/WcCard'
import ImportModal from './widgets/ImportModal'

export default {
  name: 'properties-list-page',
  components: {
    PropertiesList,
    WcCard,
    ImportModal,
  },
  data () {
    return {
      importRequired: false,
      properties: [],
      propertyPages: 1,
      propertiesCount: 4,
    }
  },
  beforeRouteEnter (to, from, next) {
    axios.get(process.env.API_ENDPOINT + '/team/' + store.state.team.id + '/properties',
      {
        params: { per_page: 20, page: 1, },
      })
      .then(response => {
        let propertyPages = parseInt(response.headers['x-pagination-pages'])
        let properties = response.data
        let propertiesCount = parseInt(response.headers['x-pagination-count'])
        next(vm => {
          vm.propertyPages = propertyPages
          vm.properties = properties
          vm.propertiesCount = propertiesCount
          vm.importRequired = propertiesCount === 0
        })
      })
  },
  methods: {
    getProperties (event) {
      axios.get(process.env.API_ENDPOINT + '/team/' + this.$store.state.team.id + '/properties',
        {
          params: { per_page: 20, page: event.page, },
        })
        .then(response => {
          this.propertyPages = parseInt(response.headers['x-pagination-pages'])
          this.properties = response.data
          this.propertiesCount = parseInt(response.headers['x-pagination-count'])
          this.importRequired = this.propertiesCount === 0
        })
    },
    openImport: function (ref) {
      this.$modal.show('add-new-properties-modal')
    },
    refreshProperties () {
      this.getProperties({ page: 1, })
    },
    propertiesAdded () {
      this.getProperties({ page: 1, })
    },
  },
}
</script>

<style scoped>

</style>
