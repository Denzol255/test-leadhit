import { MutationTree } from "vuex";
import { AuthState } from "./types";

export const mutations: MutationTree<AuthState> = {
  setShowErrorTrue(state) {
    state.showError = true;
  },
  setShowErrorFalse(state) {
    state.showError = false;
  },
};
