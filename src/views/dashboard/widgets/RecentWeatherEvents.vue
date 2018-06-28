<template>
    <WcCard>
        <div slot="header">Weather Alerts + Events</div>
        <div slot="content" class="weather-table">
            <div class="table-responsive">
                <table>
                    <thead class="cell-format">
                    <tr>
                        <th></th>
                        <th>Weather</th>
                        <th>Date</th>
                        <th>Property Affected</th>
                    </tr>
                    </thead>
                    <tbody >
                    <tr v-for='(value, index) in events' :key='index'>
                        <td class="img-thumb">
                            <img src="@/assets/images/hail.png" alt="Hail">
                        </td>
                        <td>{{ value.description }}</td>
                        <td>{{ value.date }}</td>
                        <td><router-link :to="{name: 'dashboard-property-page', params: {id: value.property_id}}">{{ value.address }}</router-link></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </WcCard>
</template>

<script>
import WcCard from '@/components/WcCard'
export default {
  name: 'recent-weather-events',
  components: {
    WcCard,
  },
  props: [ 'events', ],
}
</script>

<style lang="scss" scoped>
    @import "../../../assets/sass/includes/variables";

    .cell-format {
        height: 43px;
        color: #212529;
        font-family: $font-primary;
    }

</style>
