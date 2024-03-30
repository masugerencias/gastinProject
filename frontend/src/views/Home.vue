<template>
<div>
  <NavBar
  :title="title"></NavBar>
  <h1>HOME VIEW</h1>
  <HomeCard></HomeCard>
  <v-btn
  @click="traerEmpleados"
  >load employees</v-btn>
</div>
</template>

<script>
import HomeCard from "@/components/HomeCard.vue"
import transactions from "../api/trasnactions.json"
import NavBar from "../components/NavBar"
import { mapActions,  } from 'vuex';


export default {
  name: "Home",
  components: { NavBar, HomeCard},
  data () {
    return {
      data : transactions,
      title:'Home'
    }
  },
  methods: {
    ...mapActions(['loadEmployees']),
    
    traerEmpleados(){
      this.loadEmployees()
    }
    
  }
}



</script>

<style scoped>

</style>