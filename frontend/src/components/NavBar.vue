<template>
  <div>
    <v-app-bar
      color="white-smock"
      dense
      dark
    >
    <div class="leftSideNavBar">

      <v-btn
        icon
        @click="goBack"
        :disabled="homeRoute"
      >
        <v-icon>mdi-arrow-left-bold</v-icon>
      </v-btn>

      <v-btn
        icon
        @click="goHome"
        :disabled="homeRoute"
      >
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-toolbar-title>{{ title }}</v-toolbar-title>
    </div>


      <div class="rightIconNavbar">
        <v-btn
        icon
        @click="goToSettings"
    
      >
        <v-icon>mdi-multiplication</v-icon>
      </v-btn>


      </div>
     
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    title: {
      type: String,
      default:'title page default'
    },
  },
  data() {
    return {
      homeRoute: undefined,
    };
  },
  created() {
    if (this.$route.name === "home") {
      this.homeRoute = true;
      this.homeRoute = true

    }
  },
  methods: {
    goHome() {
      if (this.$route.name!== "home") {
        this.$router.push({ name: "home" });
        this.homeRoute = false

      }
    },
    goBack() {
      if (this.$route.name!== "home") {
        this.$router.go(-1);
        this.homeRoute = false
      }
    },
    goToSettings() {
        this.$router.push({ name: "settings" })
    },
  },
};
</script>
<style scoped>



.rightIconNavbar {
display: flex;
background-color: red;

}

.leftSideNavBar {
  display: flex;
  background-color: green;
  align-items: center;
}


</style>