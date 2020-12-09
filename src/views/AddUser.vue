<template>
  <div>
      <h1>
          Add User
      </h1>
      <!-- Default form subscription -->
<form @submit.prevent="add" class="text-center border border-light p-5">
    <div class="alert alert-success" role="alert">
        User added successfully
    </div>
    <!-- Name -->
    <input type="text" v-model="user.name" required class="form-control mb-4" placeholder="Name">

    <!-- Email -->
    <input type="email" v-model="user.email" required class="form-control mb-4" placeholder="E-mail">

    <!-- Sign in button -->
    <button class="btn orange btn-block" type="submit">Add</button>


</form>
<!-- Default form subscription -->
  </div>
</template>

<script>
export default {
    name: 'AddUser',
    data() {
        return {
            user: {
                name: '',
                email: ''
            }
        }
    },
    methods: {
        async add(){
            try{
                const user = await this.$store.dispatch('addUser', {...this.user})
                alert(user)
                this.user = {name: '', email: ''}
            }catch(err){
                alert(err.message)
            }
        }
    }
}
</script>

<style>

</style>