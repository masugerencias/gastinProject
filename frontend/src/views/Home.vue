<template>
<div>
{{data}}
  <HomeCard></HomeCard>
</div>
</template>

<script>
import transactions from "../api/trasnactions.json"
import HomeCard from "../components/HomeCard"
export default {
  name: "Home",
  components: { HomeCard },
  data () {
    return {
      data : transactions
    }
  }
}



</script>

<style scoped>

</style>