<template>
  <div>
    <v-app-bar
      color="primary"
      dense
      dark
    >
<div class="container">
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
      <v-spacer></v-spacer>

<div class="right">
        <v-btn
        :disabled="settingsRoute"
        icon
        @click="goToSettings"
    
      >
        <v-icon>mdi-adjust</v-icon>
      </v-btn>

    </div>
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
      settingsRoute: undefined,
    };
  },
  created() {

    switch(this.$route.name) {
  case 'home':
  this.homeRoute = true;    
    break;
  case 'settings':
this.settingsRoute = true;    

    break;
  default:
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
.right{
  display: flex;
  flex-direction: row-reverse;
  ;
}
.container{
  width: 100%;
  display: flex;
  align-items: center;
}



</style>