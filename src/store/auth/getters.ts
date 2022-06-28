import { GetterTree } from "vuex";
import { RootState } from "../types";
import { AuthState } from "./types";

export const getters: GetterTree<AuthState, RootState> = {
  getShowError: (state: AuthState) => state.showError,
};
