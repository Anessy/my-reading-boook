
<template>
    <v-app-bar
      absolute
      color="#6A76AB"
      dark
      prominent
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <div style="font-size: 3rem; margin-top: 50px">
        Welcome to the NASA portal.
      </div>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab @click="goToDayStory">Day Story</v-tab>
          <v-tab @click="goToAsteroids">Asteroids</v-tab>
          <v-tab>Tab 3</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
</template>

<script>
  export default {
    name: 'Header',
    methods: {
      goToDayStory() {
        this.$router.push({name: 'DayStory'})
      },
      goToAsteroids() {
        this.$router.push({name: 'Asteroids'})
      }
    }
  }
</script>
<style scoped lang="scss">
  .v-main__content {
    margin-top: 230px;
  }
  .tabs {
    background-color: #c4ebf6;
  }
  .v-sheet.v-card:not(.v-sheet--outlined) {
    box-shadow: none;
  }
</style>
