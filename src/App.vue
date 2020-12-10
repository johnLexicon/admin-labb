<template>
  <div>
    <NavBar />
    <div class="container mt-5">
      <router-view/>
    </div>
  </div>
</template>

<script>
import NavBar from './components/navigation/NavBar';
export default {
  name: 'App',
  components: {
    NavBar
  },
  created(){
    this.$store.dispatch('fetchUsers')
  }
}
</script>

<style>

</style>
