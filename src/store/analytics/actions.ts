import { setChart } from "@/functions/setChart";
import { IAnalyticsData } from "@/model/IAnalyticsData";
import axios, { AxiosError } from "axios";
import { ActionTree } from "vuex";
import { RootState } from "../types";
import { AnalyticsState } from "./types";

export const actions: ActionTree<AnalyticsState, RootState> = {
  fetchAnalyticsData: ({ commit }) => {
    setTimeout(async () => {
      await axios
        .get<IAnalyticsData[]>("data.json")
        .then((response) => {
          commit("setAnalyticsData", response.data);
          commit("setLoading", false);
          setChart(response.data);
        })
        .catch((e: AxiosError) => {
          commit("setError", e.message);
          console.error(e.message);
          commit("setLoading", false);
        });
    }, 1000);
  },
};
