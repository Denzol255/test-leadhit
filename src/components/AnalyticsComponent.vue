<template>
  <v-container>
    <h1>Аналитика</h1>
    <div>
      <h2>Аналитика по визитам</h2>
    </div>
    <div v-if="getAnalyticsLoading">Loading...</div>
    <div v-if="getAnalyticsError">
      {{ $store.getters.getAnalyticsError }}
    </div>
    <div id="chartdiv"></div>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions, mapGetters } from "vuex";
import { disposeAllCharts } from "@amcharts/amcharts4/core";

export default Vue.extend({
  name: "Analytics",
  computed: {
    ...mapGetters([
      "getAnalyticsData",
      "getAnalyticsError",
      "getAnalyticsLoading",
    ]),
  },
  methods: {
    ...mapActions(["fetchAnalyticsData"]),
  },
  async mounted() {
    if (localStorage.getItem("leadhit-site-id")) {
      await this.fetchAnalyticsData();
    } else {
      this.$router.push("/");
    }
  },
  beforeDestroy() {
    disposeAllCharts();
  },
});
</script>

<style lang="scss" scoped>
#chartdiv {
  width: 100%;
  height: 500px;
}
</style>
