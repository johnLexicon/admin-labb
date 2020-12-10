<template>
  <div>
      <h1>
          Users
      </h1>
      <div v-if="!isUsersLoaded">
          <p>Retrieving users...</p>
      </div>
      <div v-else v-for="user in users" :key="user.id">
          <Card :user="user"/>
      </div>
      <div id="addUser" class="fixed-action-btn smooth-scroll position-fixed hoverable" style="bottom: 45px; right: 24px;">
        <router-link to="add" exact>
        <i class="fas fa-user-plus fa-2x"></i>
        </router-link>
      </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import Card from '../components/cards/Card';
export default {
    name: 'Dashboard',
    components: {
        Card
    },
    created(){
        this.$store.dispatch('fetchUsers');
    },
    data() {
        return {
        }
    },
    computed: {
        ...mapGetters(['isUsersLoaded', 'users'])
    },
}
</script>

<style>
  .card {
    margin:1rem;
    background-color: orange;
    display: flex;
    color: #fff;
  }
  #addUser {
      width: 75px;
      height: 75px;
      border-radius: 50%;
      background: orange;
      text-align: center;
      vertical-align: middle;
  }
  #addUser a{
      color:#fff;
  }
  #addUser i{
    padding-top: 20px;
    padding-left: 5px;
  }
</style>