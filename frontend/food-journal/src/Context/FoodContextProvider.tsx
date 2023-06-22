import { ReactNode, useState } from "react";
import FoodContext from './FoodContext';
import { FoodEntry } from "../interface/FoodEntry";

interface Props {
  children: ReactNode; // Children components passed to the provider
}

export function FoodContextProvider({ children }: Props) {
  const [entry, setEntry] = useState<FoodEntry[]>([]); // State to store the food entries

  return (
    <FoodContext.Provider value={{
      foodEntry: [], // Set the foodEntry value to an empty array
      addFood: (food: FoodEntry) => { setEntry([...entry, food]) } // Function to add a new food entry to the state
    }}>
      {children} {/* Render the children components */}
    </FoodContext.Provider>
  );
}
