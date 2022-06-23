<template>
  <v-container>
    <LoginForm />
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import LoginForm from "../components/LoginForm.vue";

export default Vue.extend({
  name: "Home",
  components: {
    LoginForm,
  },
});
</script>
