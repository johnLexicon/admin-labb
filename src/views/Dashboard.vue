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
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    created(){
        this.$store.dispatch('fetchUsers');
        // usersCollection.get().then(query => {
        //     query.forEach(doc => {
        //         this.users.push(doc.data());
        //         const {name = name, email = email} = doc.data();
        //         console.log(doc.id + '=>' + name + ' ' + email);
        //     })
        // })
    },
    data() {
        return {
            // users: []
        }
    },
    computed: {
        ...mapGetters(['isUsersLoaded', 'users'])
    }
}
</script>

<style>

</style>