<template>
  <v-sheet class="asteroids">
   <div class="title d-flex justify-center py-3">
     NeoWs (Near Earth Object Web Service)
   </div>
    <v-divider></v-divider>
    <div class="asteroids__text">
      It is a web service for near earth Asteroid information. With NeoWs a user can:
    </div>

    <v-form v-model="valid">
      <v-container>
        <v-row>
          <div class="d-flex align-center">
            <v-icon
              light
              color="blue"
              right>
              mdi-checkbox-marked-circle
            </v-icon>
            <div class="ml-2"> Search for Asteroids based on their closest approach date to Earth. Enter the date you are interested in, please.</div>
          </div>
        </v-row>
        <v-row class="mt-2">
          <v-col cols="4">
            <v-text-field
              v-model="year"
              :rules="yearRules"
              :counter="4"
              label="Year YYYY"
              required
              height="40"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <v-autocomplete
              v-model="value"
              :items="items"
              dense
              filled
              background-color="white"
              height="40"
              label="Month"
              required
            ></v-autocomplete>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <v-text-field
              v-model="day"
              :rules="dayRules"
              :counter="2"
              label="Day YY"
              height="40"
              required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>

    <div>
      <v-icon
        light
        color="blue"
        right>
        mdi-checkbox-marked-circle
      </v-icon>
      lookup a specific Asteroid with its NASA JPL small body id, as well as
    </div>
    <div>
      <v-icon
        light
        color="blue"
        right>
        mdi-checkbox-marked-circle
      </v-icon>
      browse the overall data-set.
    </div>
  </v-sheet>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'DayStory',
    data () {
      return {
        asteroidsData : [],
        valid: false,
        year: '',
        day: '',
        yearRules: [
          v => !!v || 'Input is required',
          v => v.length = 4 || 'Year must be 4 characters',
        ],
        dayRules: [
          v => !!v || 'Input is required',
          v => v.length = 2 || 'Day must be 2 characters',
        ],
        items: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December'
        ],
        value: null,
      }
    },
    mounted() {
      axios.get('https://api.nasa.gov/neo/rest/v1/feed?start_date=START_DATE&end_date=END_DATE&api_key=1IwCo8znXscRmzzF0A57wWOe1sThE2UUpKIQc5nf')
        .then(response => (this.asteroidsData = response.data))
        .catch(error => console.log(error));
    },
  }
</script>

<style scoped lang="scss">
  .asteroids {
    padding: 10px 20px;
    &__text {
      text-align: justify;
      padding: 20px 0;
    }
  }


</style>
