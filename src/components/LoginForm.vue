<template>
  <v-container>
    <h1>LeadHit</h1>
    <v-row justify="center">
      <v-col cols="4">
        <v-form
          ref="form"
          v-on:submit.prevent="handleClick"
          v-model="valid"
          class="d-flex flex-column"
        >
          <v-text-field
            v-model="login"
            :rules="loginRules"
            :counter="24"
            label="Введите ID"
            required
          ></v-text-field>
          <v-btn
            :disabled="!valid || getIsButtonDisabled"
            class="align-self-center"
            color="success"
            @click="handleClick"
            >Войти</v-btn
          >
        </v-form>
      </v-col>
    </v-row>
    <Transition name="error">
      <v-alert v-if="getShowError" type="error">Указан неверный ID</v-alert>
    </Transition>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import axios, { AxiosError } from "axios";
import { IRequestData } from "../model/IRequestData";
import { mapGetters, mapMutations } from "vuex";

export default Vue.extend({
  name: "Auth",
  data: () => ({
    valid: true,
    login: "",
    loginRules: [
      (v: string) => !!v || "ID является обязательным",
      (v: string) => v.length === 24 || "ID сайта должен содержать 24 символа",
    ],
  }),
  computed: {
    ...mapGetters(["getShowError", "getIsButtonDisabled"]),
  },
  methods: {
    ...mapMutations([
      "setShowErrorTrue",
      "setShowErrorFalse",
      "setIsButtonDisabledTrue",
      "setIsButtonDisabledFalse",
    ]),
    // Валидация поля ввода и создание запроса при клике на кнопку
    handleClick(): void {
      this.validate();
      this.makeRequest();
    },
    // Валидация с ипользование vuetify
    validate(): void {
      (this.$refs.form as Vue & { validate: () => boolean }).validate();
    },
    // Запрос на сервер и вывод ошибки при неверно ID
    makeRequest(): void {
      this.setIsButtonDisabledTrue();
      axios
        .get<IRequestData>("https://track-api.leadhit.io/client/test_auth", {
          headers: {
            "Api-Key": "5f8475902b0be670555f1bb3:eEZn8u05G3bzRpdL7RiHCvrYAYo",
            "Leadhit-Site-Id": this.login,
          },
        })
        .then((response) => {
          if (response.data.message === "ok") {
            this.setIsButtonDisabledFalse();
            localStorage.setItem("leadhit-site-id", this.login);
            this.$router.push("/analytics");
          }
        })
        .catch((e: AxiosError) => {
          console.error(e.message);
          this.setShowErrorTrue();
          setTimeout(() => {
            this.setIsButtonDisabledFalse();
            this.setShowErrorFalse();
          }, 1500);
        });
    },
  },
});
</script>

<style scoped>
.v-alert {
  position: absolute;
  top: 10px;
  right: 10px;

  transition: all 0.3s ease-out;
}

.error-enter-active {
  opacity: 0;
  transform: translateX(30px);
}
.error-leave-active {
  transition: all 0.5s ease;
}
.error-enter-from,
.error-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
