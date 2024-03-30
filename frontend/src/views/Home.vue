<template>
<div>
  <h1>HOMEVIEW</h1>
  <v-icon>
fa-trash
  </v-icon>
<p>kmon</p>
  <BottomNavigationBar></BottomNavigationBar>
</div>
</template>

<script>
import transactions from "../api/trasnactions.json"
import BottomNavigationBar from "../components/BottomNavigationBar"
export default {
  name: "Home",
  components: {  BottomNavigationBar},
  data () {
    return {
      data : transactions
    }
  }
}



</script>

<style scoped>

</style>