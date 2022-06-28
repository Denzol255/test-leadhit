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
    <Transition name="slide-fade">
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
      (v: string) => v.length === 24 || "ID должен быть равен 24 символам",
    ],
  }),
  computed: {
    ...mapGetters(["getShowError"]),
  },
  methods: {
    ...mapMutations(["setShowErrorTrue"]),
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
            this.$router.push("/analytics");
          }
          // Прокинуть ошибку в catch, сделать обработку ошибок в catch, сделать перенаправление на аналитику, переименовать страницу авторизации
        })
        .catch((e: AxiosError) => {
          console.error(e.message);
          this.setShowErrorTrue();
        });
    },
  },
});
</script>

<style scoped>
.v-alert {
  position: absolute;
  top: 10px;
  right: 0;
  transform: translateX(-20px);
  transition: all 0.3s ease-out;
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
