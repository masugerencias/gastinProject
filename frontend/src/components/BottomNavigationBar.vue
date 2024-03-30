<template>
  <div>
 <p>Enlace para ir al first page via url <router-link to="/firstPage">first-page</router-link></p>
    <p>Enlace para ir al first page via router name <router-link :to="{ name: 'firstPage'}">first-page</router-link></p> 
  </div>
</template>
<script>
export default {
  name: "BottomNavigationBar",

  data: () => ({
    links: [
      'firstPage',
      'Home',
      'SecondPage',

    ],
  }),
}
</script>
<style scoped>

</style>