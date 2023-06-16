//import the component
import { FoodEntry, FoodEntries } from '../interface/FoodEntry'
import { createContext } from 'react';

interface FoodContextModel {
    foodEntry: FoodEntry[],
    addFood: (food: FoodEntry) => void;
}

const defaultValues: FoodContextModel = {
    foodEntry: [],
    addFood: () => { }
}

const FoodContext = createContext(defaultValues);
export default FoodContext;
