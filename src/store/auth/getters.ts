import { GetterTree } from "vuex";
import { RootState } from "../types";
import { AuthState } from "./types";

// Геттеры для отображения ошибки, блокировки кнопки
export const getters: GetterTree<AuthState, RootState> = {
  getShowError: (state: AuthState) => state.showError,
  getIsButtonDisabled: (state: AuthState) => state.isButtonDisabled,
};
