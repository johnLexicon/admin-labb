<template>
  <div>
    <NavBar />
    <div class="container">
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
  }
}
</script>

<style>

</style>
