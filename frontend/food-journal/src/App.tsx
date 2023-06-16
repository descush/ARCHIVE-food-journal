import React, { useState, useEffect } from "react";
import { getFood } from "./services/FoodService";
import FoodForm from "./components/FoodForm";
import { FoodContext } from "./components/FoodContext";
import { FoodEntry, FoodEntries } from "./interface/FoodEntry";
import { Header } from "./components/header/Header";



function App() {
  const [foodEntries, setFoodEntries] = useState<FoodEntries>({});

  useEffect(() => {
    const storedEntries = localStorage.getItem("foodEntries");
    if (storedEntries) {
      setFoodEntries(JSON.parse(storedEntries));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("foodEntries", JSON.stringify(foodEntries));
  }, [foodEntries]);

  const addFood = (newFood: FoodEntry) => {
    const date = new Date().toLocaleDateString();
    const updatedEntries: FoodEntries = {
      ...foodEntries,
      [date]: [...(foodEntries[date] || []), newFood]
    };
    setFoodEntries(updatedEntries);
  };

  return (
    <div className="App">
      <Header />
      <FoodContext.Provider value={{ addFood }}>
        <FoodForm />
      </FoodContext.Provider>

      <div className="Log">
        {Object.entries(foodEntries).map(([date, entries]) => (
          <div key={date}>
            <h2>{date}</h2>
            <ul>
              {entries.map((item: FoodEntry, index: number) => (
                <li key={index}>
                  <div>Protein: {item.protein}</div>
                  <div>Veggies: {item.veggies}</div>
                  <div>Fat: {item.fat}</div>
                  <div>Carbs: {item.carbs}</div>
                  <hr />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

