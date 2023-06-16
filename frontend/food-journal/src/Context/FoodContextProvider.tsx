import { ReactNode, useState } from "react";
import FoodContext from './FoodContext';
import { FoodEntry } from "../interface/FoodEntry";

interface Props {
    children: ReactNode;
}

export function FoodContextProvider({ children }: Props) {
    const [entry, setEntry] = useState<FoodEntry[]>([])
    return (
        <FoodContext.Provider value={{
            foodEntry: [],
            addFood: (food: FoodEntry) => { setEntry([...entry, food]) }
        }}>{children}</FoodContext.Provider>
    )
}