import { Module } from "vuex";
import { RootState } from "../types";
import { actions } from "./actions";
import { getters } from "./getters";
import { mutations } from "./mutations";
import { AnalyticsState } from "./types";

const state: AnalyticsState = {
  loading: true,
  data: [],
  error: "",
};

export const analytics: Module<AnalyticsState, RootState> = {
  state,
  mutations,
  actions,
  getters,
};
