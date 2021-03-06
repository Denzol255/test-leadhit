import { GetterTree } from "vuex";
import { RootState } from "../types";
import { AnalyticsState } from "./types";

// Геттеры для данных аналитики, лоадера, ошибки
export const getters: GetterTree<AnalyticsState, RootState> = {
  getAnalyticsData: (state: AnalyticsState) => state.data,
  getAnalyticsError: (state: AnalyticsState) => state.error,
  getAnalyticsLoading: (state: AnalyticsState) => state.loading,
};
