<template>
  <!--Navbar -->
<nav class="mb-1 navbar navbar-expand-lg navbar-dark orange lighten-1">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-555"
    aria-controls="navbarSupportedContent-555" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent-555">
    <ul class="navbar-nav mr-auto">
      <li v-if="!admin.loggedIn" class="nav-item">
        <router-link exact to="/" class="nav-link">Log in
          <span class="sr-only">(current)</span>
        </router-link>
      </li>
      <li v-if="admin.loggedIn" class="nav-item">
        <a @click.prevent="logOut" href="#" class="nav-link">Log out
          <span class="sr-only">(current)</span>
        </a>
      </li>
      <li v-if="admin.loggedIn" class="nav-item">
        <router-link exact to="/users" class="nav-link">Users</router-link>
      </li>
    </ul>
    <ul v-if="admin.loggedIn" class="navbar-nav ml-auto nav-flex-icons">
      <li class="nav-item mr-3 mt-1 text-white">{{ admin.email }}</li>
      <li class="nav-item avatar">
        <a class="nav-link p-0" href="#">
          <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg" class="rounded-circle z-depth-0"
            alt="avatar image" height="35">
        </a>
      </li>
    </ul>
  </div>
</nav>
<!--/.Navbar -->
</template>

<script>
export default {
  name: 'NavBar',
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
    logOut() {
      const admin = {...this.admin, loggedIn: false}
      this.admin = admin
      this.$router.replace('/')
    }
  }
}
</script>

<style>

</style>