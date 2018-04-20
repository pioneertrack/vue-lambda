<template>
  <div>
    <HeaderTop v-show="topHead"/>
    <Header v-show="mainHead"/>
    <Sidemenu v-show="sidemenu"/>
    <div v-bind:class="{'container-sidemenu-is-open': sidemenu}" style="display:flex; flex-direction: column;">
      <AdminBar></AdminBar>
        <div>
          <router-view></router-view>
        </div>
    </div>
    <FooterLinks v-show="!sidemenu"/>
  </div>
</template>

<script>
import 'keen-ui/dist/keen-ui.css'
import Header from './views/common/Header'
import FooterLinks from './views/common/FooterLinks'
import HeaderTop from './views/common/HeaderTop'
import Sidemenu from './views/common/Sidemenu'
import AdminBar from './views/dashboard/AdminBar'

export default {
  data () {
    return {
      loggedIn: false,
      topHead: false,
      mainHead: true,
      sidemenu: false,
    }
  },
  created () {
    if (this.$route.path.startsWith('/dashboard')) {
      this.topHead = false
      this.mainHead = false
      this.sidemenu = true
    } else {
      this.mainHead = true
      this.topHead = false
      this.sidemenu = false
    }
  },
  watch: {
    $route (to, from) {
      if (this.$route.path.startsWith('/dashboard')) {
        this.topHead = false
        this.mainHead = false
        this.sidemenu = true
      } else {
        this.mainHead = true
        this.topHead = false
        this.sidemenu = false
      }
    },
  },
  components: {
    Header,
    FooterLinks,
    HeaderTop,
    Sidemenu,
    AdminBar,
  },
}
</script>

<style>
  @import "css/app.css";
  @import "css/design-app.css";
  @import "css/sweetalert.css";
  @import "css/vendor.min.css";
  @import "css/style.css";

  *,
  *::before,
  *::after {
      box-sizing: border-box;
  }

  html {
      font-size: 100%;
  }

  .ui-modal__mask {
    z-index: 5000;
  }

  .ui-modal.has-footer .ui-modal__body {
    max-height: calc(100vh - 10.875rem);
  }

  .main {
    position: relative;
  }

  .container-sidemenu-is-open {
    margin-left: 72px;
  }
</style>
