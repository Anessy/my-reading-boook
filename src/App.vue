<template>
  <v-app>
    <v-main class="v-main">
      <DayStory/>
      <MainContent/>
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import MainContent from './components/MainContent'
import DayStory from './components/DayStory'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Footer,
    DayStory,
    MainContent
  }
}
</script>

<style lang="scss">
  .v-main {
    min-height: 100vh;
  }
</style>
