<template>
  <div class="text-center">
    <v-progress-circular
        :size="100"
        :width="10"
        color="purple"
        indeterminate
    ></v-progress-circular>
  </div>
</template>

<script>
export default {
  name: "InitialLoadingCircle",
};
</script>

<style scoped>
</style>
