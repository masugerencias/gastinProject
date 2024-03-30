<template>
<div>
  <h1>estamos en el home´</h1>
  <CategoryManager></CategoryManager>
  <BottomNavigationBar></BottomNavigationBar>
</div>
</template>

<script>
import transactions from "../api/trasnactions.json"
import CategoryManager from "../components/CategoryManager"
import BottomNavigationBar from "../components/BottomNavigationBar"
export default {
  name: "Home",
  components: {  CategoryManager, BottomNavigationBar},
  data () {
    return {
      data : transactions
    }
  }
}



</script>

<style scoped>

</style>