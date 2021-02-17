<template>
  <v-app>
    <v-main class="v-main">
      <Header />
      <div class="v-main__content">
        <router-view></router-view>
      </div>
      <Footer />
    </v-main>
  </v-app>
</template>

<script>

import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  }
}
</script>

<style lang="scss">
  .v-main {
    min-height: 100vh;
    &__content {
      margin-top: 60px;
      padding: 10px 20px;
    }
  }
</style>
