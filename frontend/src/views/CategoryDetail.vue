<template>
<div>
  <NavBar
  :title="title"></NavBar>
  <h1>CategoryDetail view</h1>
</div>
</template>

<script>
import transactions from "../api/trasnactions.json"
import NavBar from "../components/NavBar"
export default {
  name: "CategoryDetail",
  components: { NavBar },
  data () {
    return {
      data : transactions,
      title:'settings',
    }
  }, 

}



</script>

<style scoped>

</style>