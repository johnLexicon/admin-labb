import Vue from 'vue'
import Vuex from 'vuex'
import {usersCollection} from '../firebase';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    isUsersLoaded: false
  },
  getters: {
    isUsersLoaded: state => state.isUsersLoaded
  },
  mutations: {
    SET_USERS: (state, users) => {
      state.users = users
    },
    SET_IS_USERS_LOADED: (state, payload) => {
      state.isUsersLoaded = payload
    }
  },
  actions: {
    fetchUsers: ({commit}) => {
      commit('SET_IS_USERS_LOADED', false)
      const users = []
      usersCollection.get().then(query => {
        query.forEach(doc => {
            this.users.push(doc.data())
        })
      })
      commit('SET_USERS', users)
      commit('SET_IS_USERS_LOADED', true)
    }
  },
  modules: {
  }
})
