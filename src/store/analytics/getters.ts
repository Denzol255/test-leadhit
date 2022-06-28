import { GetterTree } from "vuex";
import { RootState } from "../types";
import { AnalyticsState } from "./types";

export const getters: GetterTree<AnalyticsState, RootState> = {
  getAnalyticsData: (state: AnalyticsState) => state.data,
  getAnalyticsError: (state: AnalyticsState) => state.error,
  getAnalyticsLoading: (state: AnalyticsState) => state.loading,
};
