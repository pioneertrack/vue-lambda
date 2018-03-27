<template>
    <WcTitleCard>
       <div id="data-title" slot="header">
           {{name}}
           <div class="float-right">
              {{propertiesCount}} Properties
           </div>
       </div>
    </WcTitleCard>
</template>

<script>
import WcTitleCard from '../../../components/WcTitleCard'
export default {
  name: 'company-name',
  props: {
    name: {
      default: 'Data Audit',
      type: String,
    },
    propertiesCount: {
      default: 0,
      type: Number,
    },
  },
  components: {
    WcTitleCard,
  },
}
</script>

<style scoped>
    #data-title{
        border-bottom: 0;
        padding: 29px 23px;
    }
</style>
