<template>
<div>
  <CategoryManager></CategoryManager>
</div>
</template>

<script>
import transactions from "../api/trasnactions.json"
import CategoryManager from "../components/CategoryManager"
export default {
  name: "Home",
  components: {  CategoryManager },
  data () {
    return {
      data : transactions
    }
  }
}



</script>

<style scoped>

</style>