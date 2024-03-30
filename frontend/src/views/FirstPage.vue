<template>
  <div>
<NavBar></NavBar>

<h1>FIRST PAGE</h1>

  </div>
</template>
<script>
import NavBar from "../components/NavBar"

export default {
  name: "FirstPage",
  components: {  NavBar },
  created () {
    console.log('hitory', this.$router)
  }
}
</script>


<style scoped>

</style>