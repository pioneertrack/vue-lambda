<template>
    <div>
        <WcCard>
            <div style="position:relative;" slot="header">Properties : {{count}}</div>
            <div slot="content">
                <div class="table-responsive">
                    <table class="table wc-table">
                        <thead>
                            <tr>
                                <th style="padding-left:16px;">Address</th>
                                <th style="padding-left:16px;">City</th>
                                <th style="padding-left:16px;">State</th>
                                <th style="padding-left:16px;">Zip code</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="property in properties" v-bind:key="property.id">
                                <td><router-link :to="{name: 'dashboard-property-page', params: {'id': property.id}}">{{property.address}}</router-link></td>
                                <td>{{property.city}}</td>
                                <td>{{property.state}}</td>
                                <td>{{property.zip}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
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
.wc-table{
    margin-bottom:0;
    tbody{
        tr{
            td{
                padding:16px;
            }
        }
    }
}

</style>
