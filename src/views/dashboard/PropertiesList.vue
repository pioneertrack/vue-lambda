<template>
  <div>
    <WcCard>
      <div slot="header">Properties : {{count}}
        <a class = "link-align__big" href=""> Add Properties </a>
      </div>
      <div slot="content" class="weather-table">
        <table class="properties-table">
          <thead>
            <tr>
              <th class="address-column">Address</th>
              <th class="city-column">City</th>
              <th class="state-column">State</th>
              <th class="status-column">Status</th>
              <th class="report-column"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="property in properties" v-bind:key="property.id">
              <td class="address-column">{{property.address}}</td>
              <td>{{property.city}}</td>
              <td>{{property.state}}</td>
              <td>{{property.zip}}</td>
              <td class = "report-column"><a class="link-align__small" href="/properti">View Reports</a></td>
            </tr>
          </tbody>
        </table>
        <div class="import-properties-view" v-if="noAddresses">
          <p>Ethan There are no properties associated with your account,<br/>please add one to get started.</p>
          <button class="blue-border btn-tranparent btns-blue pull-right" @click="openImport()">Add Properties</button>
        </div>
      </div>
      <div slot="footer" v-if="!noAddresses">
        <paginate
          :page-count="pages"
          :page-range="2"
          :click-handler="changePage"
          :prev-text="'Prev'"
          :next-text="'Next'"
          :container-class="'pagination'"
          :page-class="'page-item'"
          class="m-l-20"
          >
        </paginate>
      </div>
    </WcCard>
      <import-modal @on-done="importDone" :modal-name="'empty-properties-add-modal'"></import-modal>
  </div>
</template>

<script>
import WcCard from '../../components/WcCard'
import ImportModal from '../dashboard/widgets/ImportModal'

import Paginate from 'vuejs-paginate'

export default {
  name: 'properties-list',
  props: {
    'properties': Array,
    'pages': Number,
    'count': Number,
    'noAddresses': {
      default: false,
      type: Boolean,
    },
  },
  components: {
    WcCard,
    Paginate,
    ImportModal,
  },
  methods: {
    changePage: function (page) {
      this.$emit('update', { page: page, })
    },
    openImport: function (ref) {
      this.$modal.show('empty-properties-add-modal')
    },
    importDone () {
      this.$emit('properties-added')
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/sass/includes/variables";

.link-align {
  color: #1A77B9;
  font-family: $font-primary;

  &__big {
    font-size: 16px;
    float: right;
  }

  &__small {
    font-size: 14px;
  }

}

.properties-table {
  table-layout: fixed;
  width: 100%;

  td, th {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .address-column{
    width: 40%;
  }

  .city-column{
    width: 20%;
  }

  .state-column{
    width: 10%;
  }

  .status-column{
    width: 10%;
  }

  .report-column{
    width: 20%;
  }
}
.first-column {
  padding-left: 30px;
}

.import-properties-view{
  display:flex;
  width:100%;
  flex-direction:column;
  align-items:center;
  justify-content: center;

  text-align:center;
  min-height:300px;

  h1 {
      margin-top: 1em;
      margin-bottom: 0.3em;
  }
}

.view-as-map{
  float:right;
}
</style>
