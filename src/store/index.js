import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    month: [
      {
        name: 'January',
        value: '01',
        count: 31
      },
      {
        name: 'February',
        value: '02',
        count: 28
      },
      {
        name: 'March',
        value: '03',
        count: 31
      },
      {
        name: 'April',
        value: '04',
        count: 30
      },
      {
        name: 'May',
        value: '05',
        count: 31
      },
      {
        name: 'June',
        value: '06',
        count: 30
      },
      {
        name: 'July',
        value: '07',
        count: 31
      },
      {
        name: 'August',
        value: '08',
        count: 31
      },
      {
        name: 'September',
        value: '09',
        count: 30
      },
      {
        name: 'October',
        value: '10',
        count: 31
      },
      {
        name: 'November',
        value: '11',
        count: 30
      },
      {
        name: 'December',
        value: '12',
        count: 31
      }
    ]
  },
  mutations: {

  },
  actions: {

  },
  modules: {
  }
})
