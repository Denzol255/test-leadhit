import { Module } from "vuex";
import { RootState } from "../types";
import { getters } from "./getters";
import { mutations } from "./mutations";
import { AuthState } from "./types";

const state: AuthState = {
  showError: false,
};

export const auth: Module<AuthState, RootState> = {
  state,
  getters,
  mutations,
};
