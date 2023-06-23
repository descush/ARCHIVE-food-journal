export interface FoodEntry {
  fdcId: number;
  description: string;
  servingAmount?: number;
  servingType?: string;
  foodNutrients?: {
    nutrientId: number;
    nutrientName: string;
    nutrientNumber: string;
    unitName: string;
    derivationCode: string;
    derivationDescription: string;
    derivationId: number;
    value: number;
    foodNutrientSourceId: number;
    foodNutrientSourceCode: string;
    foodNutrientSourceDescription: string;
    rank: number;
    indentLevel: number;
    foodNutrientId: number;
    percentDailyValue?: number;
  }[];
}



export interface FoodEntries {
  [date: string]: FoodEntry[];
}