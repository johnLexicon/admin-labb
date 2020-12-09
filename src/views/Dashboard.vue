<template>
  <div>
      <h1>
          Dashboard
      </h1>
      <div v-for="user in users" :key="user.id">
          <h2>User</h2>
          <p>{{ user.name }}</p>
          <p>{{ user.email }}</p>
          <p>{{ user.role }}</p>
      </div>
  </div>
</template>

<script>
import {usersCollection} from '../firebase';
export default {
    created(){
        usersCollection.get().then(query => {
            query.forEach(doc => {
                this.users.push(doc.data());
                const {name = name, email = email} = doc.data();
                console.log(doc.id + '=>' + name + ' ' + email);
            })
        })
    },
    data() {
        return {
            users: []
        }
    }
}
</script>

<style>

</style>