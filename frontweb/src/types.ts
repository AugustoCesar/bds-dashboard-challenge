export type Gender = 'MALE' | 'FEMALE' | 'OTHER';

export type Store = {
  id: number;
  name: string;
};

export type StoreFilterData = {
  store: Store | null;
};

export type SalesSummaryData = {
  sum: number;
  min: number;
  max: number;
  avg: number;
  count: number;
};

export type SalesByGender = {
  gender: Gender;
  sum: number;
};

export type PieChartConfig = {
  labels: string[];
  series: number[];
};