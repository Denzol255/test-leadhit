import { IAnalyticsData } from "@/model/IAnalyticsData";
import { MutationTree } from "vuex";
import { AnalyticsState } from "./types";

export const mutations: MutationTree<AnalyticsState> = {
  setAnalyticsData(state: AnalyticsState, payload: Array<IAnalyticsData>) {
    state.data = payload;
  },
  setLoading(state: AnalyticsState, payload: boolean) {
    state.loading = payload;
  },
  setError(state: AnalyticsState, payload) {
    state.error = payload;
  },
};
