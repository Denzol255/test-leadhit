<template>
  <v-container>
    <AnalyticsComponentVue />
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import AnalyticsComponentVue from "@/components/AnalyticsComponent.vue";

export default Vue.extend({
  name: "Home",
  components: {
    AnalyticsComponentVue,
  },
});
</script>
