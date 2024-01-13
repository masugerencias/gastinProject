<template>
<div>
{{data}}
  <InitialLoadingCircle></InitialLoadingCircle>
</div>
</template>

<script>
import transactions from "../api/trasnactions.json"
import InitialLoadingCircle from "../components/InitialLoadingCircle"
export default {
  name: "Home",
  components: { InitialLoadingCircle },
  data () {
    return {
      data : transactions
    }
  }
}



</script>

<style scoped>

</style>