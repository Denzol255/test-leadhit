<template>
  <v-app><HomeView /></v-app>
</template>

<script lang="ts">
import Vue from "vue";
import HomeView from "./views/HomeView.vue";
export default Vue.extend({
  name: "App",
  components: {
    HomeView,
  },

  data: () => ({
    //
  }),
});
</script>
