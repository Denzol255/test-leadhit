import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { analytics } from "./analytics";
import { auth } from "./auth";
import { RootState } from "./types";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {},
  modules: {
    analytics,
    auth,
  },
};
export default new Vuex.Store<RootState>(store);
