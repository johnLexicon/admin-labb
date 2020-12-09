<template>
  <div>
      <h1>
          Dashboard
      </h1>
      <div v-if="!isUsersLoaded">
          <p>Retrieving users...</p>
      </div>
      <div v-else v-for="user in users" :key="user.id">
          <h2>User</h2>
          <p>{{ user.name }}</p>
          <p>{{ user.email }}</p>
          <p>{{ user.role }}</p>
      </div>
      <div class="fixed-action-btn smooth-scroll position-absolute" style="bottom: 45px; right: 24px;">
        <router-link to="add" exact class="btn-floating btn-large red">
        <i class="fas fa-user-plus"></i>
        </router-link>
      </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    created(){
        this.$store.dispatch('fetchUsers');
    },
    data() {
        return {
        }
    },
    computed: {
        ...mapGetters(['isUsersLoaded', 'users'])
    }
}
</script>

<style>

</style>