<template>
<!-- Default form login -->
<form class="text-center border border-light p-5" @submit.prevent="login">

    <p class="h4 mb-4">Sign in</p>

    <!-- Email -->
    <input v-model="email" type="email" required id="defaultLoginFormEmail" class="form-control mb-4" placeholder="E-mail">

    <!-- Password -->
    <input v-model="password" type="password" required id="defaultLoginFormPassword" class="form-control mb-4" placeholder="Password">

    <!-- Sign in button -->
    <button class="btn orange btn-block my-4" type="submit">Sign in</button>

</form>
<!-- Default form login -->
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    computed: {
        admin: {
            get() {
                return this.$store.getters.admin
            },
            set(newValue) {
                this.$store.dispatch('setAdmin', newValue)
            }
        }
    },
    methods: {
        login(){
            if(this.admin.email === this.email && this.admin.password === this.password){
                this.admin = {...this.admin, loggedIn: true}
                this.$router.push('/dashboard')
            } else {
                alert('Wrong credentials')
            }
        }
    }
}
</script>

<style>

</style>