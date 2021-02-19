<template>
  <v-sheet class="day-story ">
    <div class="page-title d-flex justify-center py-3">
      {{dayStory.title}}
    </div>
    <v-divider></v-divider>
    <div class="day-story__story">
      {{dayStory.explanation}}
    </div>
    <v-sheet v-if="dayStory['media_type'] === 'video'">

      <iframe
        width="560"
        height="315"
        :src="dayStory.url"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
    </v-sheet>
    <v-sheet v-else class="d-flex justify-center">
      <img :src="dayStory.hdurl" alt="" style="width: 90%">
    </v-sheet>
  </v-sheet>

</template>

<script>
  import axios from 'axios'

  export default {
    name: 'DayStory',
    data () {
      return {
        dayStory : []
      }
    },
    mounted() {
      axios.get('https://api.nasa.gov/planetary/apod?api_key=1IwCo8znXscRmzzF0A57wWOe1sThE2UUpKIQc5nf')
        .then(response => (this.dayStory = response.data))
        .catch(error => console.log(error));
    },
  }
</script>

<style scoped lang="scss">
.day-story {
  &__story {
    text-align: justify;
    padding: 20px 0;

  }
}


.page-title {
  font-size: 2rem;
  font-weight: 600;
}
</style>
