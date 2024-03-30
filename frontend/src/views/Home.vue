<template>
<div>
  <NavBar
  :title="title"></NavBar>
  <h1>HOME VIEW</h1>
  <CategoryManager></CategoryManager>
  <BottomNavigationBar></BottomNavigationBar>
</div>
</template>

<script>
import transactions from "../api/trasnactions.json"
import CategoryManager from "../components/CategoryManager"
import BottomNavigationBar from "../components/BottomNavigationBar"
import NavBar from "../components/NavBar"
export default {
  name: "Home",
  components: {  CategoryManager, BottomNavigationBar, NavBar},
  data () {
    return {
      data : transactions,
      title:'Inicio'
    }
  }
}



</script>

<style scoped>

</style>