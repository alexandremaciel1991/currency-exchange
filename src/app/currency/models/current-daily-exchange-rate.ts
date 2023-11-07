export interface CurrentDailyExchangeRate {
  from: string;
  lastUpdatedAt: string;
  success: boolean;
  to: string;
  data: DataCurrentDailyExchangeRate[];
}

export interface DataCurrentDailyExchangeRate {
  open: number;
  high: number;
  low: number;
  close: number;
  date: string;
}
