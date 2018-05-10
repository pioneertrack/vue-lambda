<template>
    <div class="row" style="margin:50px 0;">
        <div class="col-lg-3 col-md-4">
            <div style="margin-left:40px;">
                <SettingsMenu></SettingsMenu>
            </div>
        </div>
        <div class="col-md-8">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import SettingsMenu from './widgets/SettingsMenu'

export default {
  name: 'Settings',
  components: {
    SettingsMenu,
  },
}
</script>

<style scoped>

</style>
