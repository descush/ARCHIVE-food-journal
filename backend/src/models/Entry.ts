import { ObjectId } from "mongodb";


//firebase user id?

export default interface Entry {
    _id?: ObjectId;
    // firbaseid
    proteinAmount: number;
    proteinType: string;
    veggiesAmount: number;
    veggiesType: string;
    fatsAmount: number;
    fatsType: string;
    carbsAmount: number;
    carbsType: string;
  }