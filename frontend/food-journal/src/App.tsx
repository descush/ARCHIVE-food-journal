import React, { useState, useEffect } from "react";
import { getFood } from "./services/FoodService";
import { FoodForm } from "../src/Components/FoodForm";
import FoodContext from "../src/Context/FoodContext";
import { FoodEntry, FoodEntries } from "./interface/FoodEntry";



function App() {

  return (
    <div className="App">
      <FoodForm />
    </div>
  )
}

export default App;

