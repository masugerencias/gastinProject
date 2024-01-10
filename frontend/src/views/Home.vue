<template>
<div>
  <h3>este es HOME VIEW</h3>
{{data}}
</div>
</template>

<script>
import transactions from "../api/trasnactions.json"
export default {
  name: "Home",
  data () {
    return {
      data : transactions
    }
  }
}



</script>

<style scoped>

</style>