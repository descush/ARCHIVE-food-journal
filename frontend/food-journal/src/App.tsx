import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import { getFood } from "./services/FoodService";

function App() {
  const [food, setFood] = useState<any[]>([]);

  useEffect(() => {
    getFood().then((data: any) => setFood(data.foods));
    
  }, [food]);

  console.log(food)
  

  return (
    <div className="App">
      {/* <ul>
        {food?.map((getFood) => (
          <li key={food.description}>
           {} 
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default App;
