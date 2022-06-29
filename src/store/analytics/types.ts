import { IAnalyticsData } from "@/model/IAnalyticsData";

// Модель для состояния аналитики
export interface AnalyticsState {
  loading: boolean;
  data: Array<IAnalyticsData>;
  error: string;
}
