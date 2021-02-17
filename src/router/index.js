import Vue from 'vue'
import VueRouter from 'vue-router'
import DayStory from '../components/DayStory'
import Asteroids from "@/components/Asteroids";

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'hash',
  routes: [
    {
      name: 'DayStory',
      path: '/',
      component: DayStory,
    },
    {
      name: 'Asteroids',
      path: '/',
      component: Asteroids,
    }
  ]
});
