import { MutationTree } from "vuex";
import { AuthState } from "./types";

export const mutations: MutationTree<AuthState> = {
  setShowErrorTrue(state: AuthState) {
    state.showError = true;
  },
  setShowErrorFalse(state: AuthState) {
    state.showError = false;
  },
  setIsButtonDisabledTrue(state: AuthState) {
    state.isButtonDisabled = true;
  },
  setIsButtonDisabledFalse(state: AuthState) {
    state.isButtonDisabled = false;
  },
};
