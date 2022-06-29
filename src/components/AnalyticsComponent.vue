<template>
  <v-container>
    <h1 class="mb-4">Аналитика</h1>
    <h2 class="ps-4 mb-4">Аналитика по визитам</h2>
    <div v-if="getAnalyticsLoading" class="d-flex justify-center pt-10">
      <Loader />
    </div>
    <div class="d-flex justify-center py-4 red--text" v-if="getAnalyticsError">
      Ошибка при получении данных - {{ $store.getters.getAnalyticsError }}
    </div>
    <div id="chartdiv"></div>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions, mapGetters } from "vuex";
import { disposeAllCharts } from "@amcharts/amcharts4/core";
import Loader from "../components/Loader.vue";

export default Vue.extend({
  name: "Analytics",
  components: {
    Loader,
  },
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
  mounted() {
    if (localStorage.getItem("leadhit-site-id")) {
      this.fetchAnalyticsData();
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
