export interface FoodEntry {
  protein: string;
  veggies: string;
  fat: string;
  carbs: string;
}

export interface FoodEntries {
  [date: string]: FoodEntry[];
}
