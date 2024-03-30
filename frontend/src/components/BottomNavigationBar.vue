<template>
  <div>
 <p>Enlace para ir al first page via url <router-link to="/first-page">first-page</router-link></p>
    <p>Enlace para ir al first page via router name <router-link :to="{ name: 'first-page'}">first-page</router-link></p> 
  </div>
</template>
<script>
export default {
  name: "BottomNavigationBar",

  data: () => ({
    links: [
      'FirstPage',
      'Home',
      'SecondPage',

    ],
  }),
}
</script>
<style scoped>

</style>