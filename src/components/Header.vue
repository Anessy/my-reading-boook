<template>
  <v-app-bar fixed>
    <v-card>
      <v-tabs show-arrows>
        <v-tabs-slider></v-tabs-slider>

        <v-tab @click="goToDayStory">
          <span>Day Story</span>
        </v-tab>
        <v-tab @click="goToAsteroids">
          <span>Asteroids</span>
        </v-tab>
      </v-tabs>
    </v-card>

  </v-app-bar>
</template>
<script>
export default {
  name: 'Header',
  methods: {
    goToDayStory(){
      this.$router.push({name: 'DayStory'})
    },
    goToAsteroids(){
      this.$router.push({name: 'Asteroids'})
    }
  }
}
</script>
<style scoped lang="scss">

</style>
