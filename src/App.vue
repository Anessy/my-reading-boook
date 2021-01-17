<template>
  <v-app>
    <v-main class="v-main">
      <Header/>
      <HelloWorld/>
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Header from './components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Footer,
    Header,
    HelloWorld
  }
}
</script>

<style lang="scss">
  .v-main {
    min-height: 100vh;
    font-family: Arial
  }
</style>
