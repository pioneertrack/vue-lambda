<template>
    <WcCard>
        <div slot="header">Recent Weather Events</div>
        <div slot="content" class="weather-table">
            <div class="table-responsive">
                <table cellpadding="3" cellspacing="3" class="table">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Weather</th>
                        <th>Date</th>
                        <th>Property Affected</th>
                    </tr>
                    </thead>
                    <tbody>
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

<style scoped>

</style>
