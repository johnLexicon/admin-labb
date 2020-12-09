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
    isUsersLoaded: state => state.isUsersLoaded,
    users: state => state.users
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
    fetchUsers: async ({commit}) => {
      commit('SET_IS_USERS_LOADED', false)
      const querySnapshot = await usersCollection.get()
      const users = []
      querySnapshot.forEach(doc => {
        users.push(doc.data())  
      })
      commit('SET_USERS', [...users])
      commit('SET_IS_USERS_LOADED', true)
    }
  },
  modules: {
  }
})
