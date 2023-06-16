import React, { useState, useEffect } from "react";
import { getFood } from "./services/FoodService";
import FoodForm from "./Components/FoodForm";
import FoodContext from "../src/Context/FoodContext";
import { FoodEntry, FoodEntries } from "./interface/FoodEntry";
import { Header } from "./Components/Header/Header";
import { Home } from "./Components/Home/Home";



function App() {

  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;

