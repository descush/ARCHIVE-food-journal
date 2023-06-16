export interface FoodEntry {
  _id?: string;
  proteinAmount: number;
  proteinType: string;
  veggiesAmount: number;
  veggiesType: string;
  fatsAmount: number;
  fatsType: string;
  carbsAmount: number;
  carbsType: string;
}

export interface FoodEntries {
  [date: string]: FoodEntry[];
}
