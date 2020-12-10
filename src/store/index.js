/* eslint-disable no-unused-vars */
import Vue from 'vue'
import Vuex from 'vuex'
import {usersCollection} from '../firebase';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    isUsersLoaded: false,
    admin: {
      email: 'someone@email.com',
      password: 'secret',
      loggedIn: false
    }
  },
  getters: {
    isUsersLoaded: state => state.isUsersLoaded,
    users: state => state.users,
    admin: state => state.admin
  },
  mutations: {
    SET_USERS: (state, users) => {
      state.users = users
    },
    SET_IS_USERS_LOADED: (state, payload) => {
      state.isUsersLoaded = payload
    },
    ADD_USER: (state, user) => {
      state.users.push(user)
    },
    REMOVE_USER: (state, userId) => {
      state.users = state.users.filter(user => user.id !== userId)
    },
    SET_ADMIN: (state, admin) => {
      state.admin = admin
    }
  },
  actions: {
    fetchUsers: async ({commit}) => {
      commit('SET_IS_USERS_LOADED', false)
      const querySnapshot = await usersCollection.get()
      const users = []
      querySnapshot.forEach(doc => {
        let user = {...doc.data(), id: doc.id}
        users.push(user)  
      })
      commit('SET_USERS', [...users])
      commit('SET_IS_USERS_LOADED', true)
    },
    addUser: async ({commit}, user) => {
      try{
        const doc = await usersCollection.add(user)
        commit('ADD_USER', {...user, id: doc.id})
        return doc.id
      } catch(err){
        console.error(err.message)
        throw new Error(err)
      }
    },
    removeUser: async ({commit}, userId) => {
      try{
        await usersCollection.doc(userId).delete()
        commit('REMOVE_USER', userId)
      }catch(err){
        console.error(err.message)
        throw new Error(err.message)
      }
    },
    setAdmin: ({commit}, admin) => {
      commit('SET_ADMIN', admin)
    }
  },
  modules: {
  }
})
