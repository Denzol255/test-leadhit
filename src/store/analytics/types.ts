import { IAnalyticsData } from "@/model/IAnalyticsData";

export interface AnalyticsState {
  loading: boolean;
  data: Array<IAnalyticsData>;
  error: string;
}
