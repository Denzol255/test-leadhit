<template>
  <LoginForm />
</template>

<script lang="ts">
import Vue from "vue";
import LoginForm from "../components/LoginForm.vue";

export default Vue.extend({
  name: "Auth",
  components: {
    LoginForm,
  },
});
</script>
