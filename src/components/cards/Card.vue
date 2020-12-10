<template>
  <div class="card">
      <p>ID: {{ user.id }}</p>
      <p>NAME: {{ user.name }}</p>
      <p>EMAIL: {{ user.email }}</p>
      <a @click.prevent="remove(user.id)" href="#"><i id="delIco" class="fas fa-user-times fa-2x"></i></a>
  </div>
</template>

<script>
export default {
  name: 'UserCard',
  props: ['user'],
  methods: {
      async remove(userId){
          try{
            this.$store.dispatch('removeUser', userId)
          }catch(err){
              alert(err.message)
          }
      }
  }
}
</script>

<style scoped>
  .card {
    border: 1px solid #000;
    border-radius: 5px;
    padding: 2rem;
  }
  #delIco{
      color: rgb(180, 11, 11)
  }
</style>