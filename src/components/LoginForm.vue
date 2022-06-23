<template>
  <v-container>
    <h1>LeadHit</h1>
    <v-row justify="center">
      <v-col cols="4">
        <v-form ref="form" v-model="valid" class="d-flex flex-column">
          <v-text-field
            v-model="login"
            :rules="loginRules"
            :counter="24"
            label="Введите ID"
            required
            validate-on-blur
          ></v-text-field>
          <v-btn
            :disabled="!valid"
            class="align-self-center"
            color="success"
            @click="handleClick"
            >Войти</v-btn
          >
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import { IRequestData } from "../model/IRequestData";

export default Vue.extend({
  data: () => ({
    valid: true,
    login: "",
    loginRules: [
      (v: string) => !!v || "ID является обязательным",
      (v: string) => v.length === 24 || "ID должен быть равен 24 символам",
    ],
  }),
  methods: {
    handleClick(): void {
      this.validate();
      this.makeRequest();
    },
    validate(): void {
      (this.$refs.form as Vue & { validate: () => boolean }).validate();
    },
    makeRequest(): void {
      axios
        .get<IRequestData>("https://track-api.leadhit.io/client/test_auth", {
          headers: {
            "Api-Key": "5f8475902b0be670555f1bb3:eEZn8u05G3bzRpdL7RiHCvrYAYo",
            "Leadhit-Site-Id": this.login,
            // 5f8475902b0be670555f1bb3
          },
        })
        .then((response) => {
          if (response.data.message === "ok") {
            localStorage.setItem("leadhit-site-id", this.login);
          }
          // Прокинуть ошибку в catch, сделать обработку ошибок в catch, сделать перенаправление на аналитику
        });
    },
  },
});
</script>

<style scoped></style>
