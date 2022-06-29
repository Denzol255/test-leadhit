import { MutationTree } from "vuex";
import { AuthState } from "./types";

// Мутации для отображения ошибки, блокировки кнопки
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
