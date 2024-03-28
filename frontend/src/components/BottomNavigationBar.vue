<template>
  <v-footer class="bg-grey-lighten-1">
    <v-row justify="center" no-gutters>
      <RouterLink
          v-for="link in links"
          :key="link"
       to="firstPage">

        <v-btn
            class="mx-2"
            color="white"
            variant="text"
        >
          {{ link }}
        </v-btn>
      </RouterLink>


    </v-row>
  </v-footer>
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