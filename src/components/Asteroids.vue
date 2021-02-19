<template>
  <v-sheet class="asteroids">
    <div class="page-title d-flex justify-center py-3">
      NeoWs (Near Earth Object Web Service)
    </div>
    <v-divider></v-divider>
    <v-row no-gutters>
      <v-col class="px-1 my-1">
        <img src="./../assets/1.jpg" alt="" class="asteroids__image">
      </v-col>
      <v-col class="px-1 my-1">
        <img src="./../assets/2.jpg" alt="" class="asteroids__image">
      </v-col>
      <v-col class="px-1 my-1">
        <img src="./../assets/3.jpg" alt="" class="asteroids__image">
      </v-col>
      <v-col class="px-1 my-1">
        <img src="./../assets/4.jpg" alt="" class="asteroids__image">
      </v-col>
      <v-col class="px-1 my-1">
        <img src="./../assets/5.jpg" alt="" class="asteroids__image">
      </v-col>
      <v-col class="px-1 my-1">
        <img src="./../assets/6.jpg" alt="" class="asteroids__image">
      </v-col>
      <v-col cols="12">
        <p>These are examples of asteroid images. They were taken at different times from the orbit of the earth.</p>
      </v-col>
    </v-row>
    <div class="asteroids__text">
      It is a web service for near earth Asteroid information. With NeoWs a user can:
    </div>

    <v-form
      v-model="valid">
      <v-container fluid>
        <v-row>
          <div class="d-flex align-center">
            <v-icon
              light
              color="blue"
              right>
              mdi-checkbox-marked-circle
            </v-icon>
            <div class="ml-2"> Search for Asteroids based on their closest approach date to Earth. Enter the date you
              are interested in, please.
            </div>
          </div>
        </v-row>
        <v-row class="mt-2">
          <v-col sm="12" md="8" lg="6" xl="6">
            <v-text-field
              v-model="year"
              :counter="4"
              label="Year: 1940-2021"
              required
              height="40"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col sm="12" md="8" lg="6" xl="6">
            <v-autocomplete
              v-model="autocompleteValue"
              :items="autocompleteItems"
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
          <v-col sm="12" md="8" lg="6" xl="6">
            <v-text-field
              v-model="day"
              :counter="2"
              label="Day: 01-31"
              height="40"
              required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
      <v-row justify="end">
        <v-btn
          :disabled="isButtonDisabled"
          @click="getDataForAsteroidsByData">
          {{ buttonName }}
        </v-btn>
      </v-row>
    </v-form>

      <v-progress-linear
        class="loader mt-10"
        v-if="isShowLoader"
        indeterminate
        color="blue"
      ></v-progress-linear>


    <v-sheet
      v-if="asteroidsDataFromApi.length != 0"
      class="asteroids__wrapper">
      An observation period: from {{startDate}} to {{endDate}}
      <div
        v-for="(item, index) in nearEarthObjectsDate"
        :key="index"
        class="asteroids__wrapper-group">
        <div>
          <div v-for="(element, i) in item"
               :key="i"
               class="asteroids__wrapper-day">
            <v-row class="asteroids__wrapper-day-name">
              <v-col>
                name: {{ element.name }}
              </v-col>
            </v-row>
            <v-row class="asteroids__wrapper-day-img">
              <v-col>
                see the data about this object:
              </v-col>
              <v-col>
                <a :href="element.nasa_jpl_url" target="_blank">link</a>
              </v-col>
            </v-row>
            <v-row class="asteroids__wrapper-day-distance">
              <v-col>estimated diameter max:</v-col>
              <v-col>{{ element.estimated_diameter.kilometers.estimated_diameter_max }} kilometers</v-col>
            </v-row>
           <v-row class="asteroids__wrapper-day-distance">
             <v-col> estimated diameter min:</v-col>
             <v-col>{{ element.estimated_diameter.kilometers.estimated_diameter_min }} kilometers</v-col>
           </v-row>
          </div>
          <v-divider class="mt-8"></v-divider>
        </div>
      </div>
      <v-row>
        <v-col cols="6">
          <img src="./../assets/7.jpg" alt="" class="asteroids__image">
        </v-col>
        <v-col cols="6">
          <p>Psyche was discovered by Italian astronomer Annibale de Gasparis on March 17, 1852. He named the asteroid for Psyche, the Greek goddess of the soul who was born mortal and married Eros (Roman Cupid), the god of Love.</p>
        </v-col>
      </v-row>
    </v-sheet>

  </v-sheet>
</template>

<script>
  import axios from 'axios'
  import {mapState} from 'vuex';

  export default {
    name: 'DayStory',
    data() {
      return {
        asteroidsDataFromApi: [],
        valid: false,
        year: '',
        day: '',
        autocompleteItems: [],
        autocompleteValue: null,
        monthCount: 31,
        buttonName: 'Find asteroids',
        startDate: '',
        endDate: '',
        isShowLoader: false

      }
    },
    created() {
      this.month.forEach((item, index) => {
        this.autocompleteItems[index] = item.name
      })

    },
    watch: {
      asteroidsDataFromApi() {
        if(this.asteroidsDataFromApi.length != 0) {
          this.isShowLoader = false
        }
      }
    },

    computed: {
      ...mapState(['month']),
      isButtonDisabled () {
        if (this.day != '' && this.year != '' && this.autocompleteValue != null) {
          if (this.monthCount > this.day && this.year >= 1940 && this.year <= 2021 && this.day.length === 2) {
            this.buttonName = 'Find asteroids'
            return false
          } else {
            this.buttonName = 'Wrong data'
            return true
          }
        } else {
          this.buttonName = 'Find asteroids'
          return true
        }

      },
      nearEarthObjectsDate() {
        return this.asteroidsDataFromApi.near_earth_objects
      }
    },
    methods: {
      getDataForAsteroidsByData() {
        this.isShowLoader = true;

        let monthForAsteroid;
        this.month.forEach((item) => {
          if (item.name === this.autocompleteValue) {
            monthForAsteroid = item.value;
            this.monthCount = item.count;
          }
        })

        this.startDate = this.year + '-' + monthForAsteroid +'-'+ this.day
        let endDay = Number(this.day) + 1;
        if (endDay > this.monthCount) {
          this.endDate = this.year + '-' + (Number(monthForAsteroid) + 1) +'-'+ (endDay - this.monthCount);
        } else {
          this.endDate = this.year + '-' + monthForAsteroid +'-'+ endDay;
        }

          axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${this.startDate}&end_date=${this.endDate}&api_key=1IwCo8znXscRmzzF0A57wWOe1sThE2UUpKIQc5nf`)
            .then(response => (this.asteroidsDataFromApi = response.data))
            .catch(error => console.log(error))

      },
    }
  }
</script>

<style scoped lang="scss">
  .asteroids {
    padding: 10px 20px;
    &__image {
      width: 100%;
    }

    &__text {
      text-align: justify;
      padding: 20px 0;
    }
    &__wrapper{
      margin-top: 40px;
      padding: 20px 0px 40px 0px;
      &-group {
        margin: 32px 0px;
      }
      &-day {
        border: 1px solid #66D6F8;
        margin: 5px 0px;
        padding: 5px 10px;
        &-name {
          font-weight: 500;

        }

      }
    }
  }
  .page-title {
    font-size: 2rem;
    font-weight: 600;
  }

  .v-btn:not(.v-btn--round).v-size--default {
    height: auto;
    min-width: 64px;
    padding: 12px 16px;
  }

</style>
