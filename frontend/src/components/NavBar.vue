<template>
  <div>
    <v-app-bar
      color="green"
      dense
      dark
    >

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
      console.log(this.homeRoute);
      console.log(this.homeRoute);
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
  },
};
</script>