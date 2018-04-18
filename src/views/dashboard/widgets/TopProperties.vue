<template>
  <WcCard>
    <div slot="header">Top 5 Effected Properties</div>
    <div slot="content">
      <div class="table-responsive">
        <table class="table wc-table">
          <thead>
            <tr>
              <th style="padding-left:16px;">Property</th>
              <th class="text-center">Damaging Events</th>
              <th class="text-center">Minor Events</th>
              <th class="text-center">Average</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="property in topProperties" v-bind:key="property.name">
              <td>{{property.property}}</td>
              <td class="text-center">{{property.damaging_events}}</td>
              <td class="text-center">{{property.minor_events}}</td>
              <td class="text-center">{{property.average}}</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </WcCard>
</template>

<script>
import WcCard from '../../../components/WcCard'
export default {
  name: 'top-properties',
  props: [ 'top-properties', ],
  components: {
    WcCard,
  },
  filters: {
    capitalizeFirst: function (value) {
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
  },
}
</script>

<style lang="scss" scoped>
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
