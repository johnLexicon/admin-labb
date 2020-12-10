<template>
  <div>
      <h1>
          Add User
      </h1>

<form @submit.prevent="add" class="text-center border border-light p-5">
    <!-- Name -->
    <input type="text" v-model="user.name" required class="form-control mb-4" placeholder="Name">

    <!-- Email -->
    <input type="email" v-model="user.email" required class="form-control mb-4" placeholder="E-mail">

    <!-- Sign in button -->
    <button class="btn orange btn-block" type="submit">Add</button>

</form>
    <div v-if="successMessage" class="alert alert-success fade" role="alert">
        {{ successMessage }}
    </div>
        <div v-if="errorMessage" class="alert alert-danger fade" role="alert">
        {{ successMessage }}
    </div>
  </div>
</template>

<script>
export default {
    name: 'AddUser',
    data() {
        return {
            successMessage: '',
            errorMessage: '',
            user: {
                name: '',
                email: ''
            }
        }
    },
    methods: {
        async add(){
            try{
                const userId = await this.$store.dispatch('addUser', {...this.user})
                this.successMessage = `Added user with id: ${userId}`
                this.showSuccess = true
                this.user = {name: '', email: ''}
                this.hideSuccessMessage(this.successMessage)
            }catch(err){
                this.errorMessage = err.message
                this.hideErrorMessage()
            }
        },
        hideSuccessMessage(){
            setTimeout(() => { this.successMessage = '' }, 1000 * 4)
        },
        hideErrorMessage(){
            setTimeout(() => { this.errorMessage = '' }, 1000 * 4)
        }
    }
}
</script>

<style scoped>
.fade{
    animation: fadeinout 4s linear forwards;
}
@keyframes fadeinout {
  0%,100% { opacity: 0; }
  50% { opacity: 1; }
}
</style>