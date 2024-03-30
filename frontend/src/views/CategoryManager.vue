<template>
<div>
  <NavBar
  :title="title"></NavBar>
  <h1>CATEGORY MANAGER VIEW</h1>
  <CategoryManagerCard></CategoryManagerCard>
  <v-btn
      class="mx-2"
      fab
      dark
      color="indigo"
    >
      <v-icon dark>
        mdi-plus
      </v-icon>
    </v-btn>
</div>


</template>

<script>
import transactions from "../api/trasnactions.json"
import NavBar from "../components/NavBar"
import CategoryManagerCard from "../components/CategoryManagerCard"
export default {
  
  name: "CategoryManager",
  components: { NavBar, CategoryManagerCard },
  data () {
    return {
      data : transactions,
      title:'Category Manager',
    }
  }, 

}



</script>

<style scoped>

</style>