import Vue from 'vue'
import Vuex from 'vuex'
import {usersCollection} from '../firebase';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: []
  },
  mutations: {
    SET_USERS: (state, users) => {
      state.users = users
    }
  },
  actions: {
    fetchUsers: ({commit}) => {
      const users = []
      usersCollection.get().then(query => {
        query.forEach(doc => {
            this.users.push(doc.data())
        })
      })
      commit('SET_USERS', users)
    }
  },
  modules: {
  }
})
