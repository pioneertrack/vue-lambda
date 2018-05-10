<template>
    <div>
        <Header/>
        <router-view></router-view>
        <FooterLinks/>
    </div>
</template>

<script>
import Header from '../common/Header'
import FooterLinks from '../common/FooterLinks'
import HeaderTop from '../common/HeaderTop'
export default {
  name: 'Onboarding',
  components: {
    HeaderTop,
    Header,
    FooterLinks,
  },
}
</script>

<style scoped>

</style>
