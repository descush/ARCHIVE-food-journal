import React, { useState, useEffect } from "react";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import axios from "axios";
import Entry from "../../../backend/src/models/Entry";
import { Route, Routes } from "react-router-dom";
import { DailyTargets } from "./components/DailyTargets/DailyTargets";
import { FoodForm } from "./components/FoodForm";
import { Login } from "./components/Login/Login";

export function App() {
  const [entries, setEntries] = useState<Entry[]>([]);

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    
    try {
      const response = await axios.get<Entry[]>('http://localhost:3000/entries');
      setEntries(response.data);
    } catch (error) {
      console.error("Error fetching entries:", error);
    }
    
  };

  return (
    <div className="App">
      <Header />
      
      <Routes>
      <Route path="/" element={<Home entries={entries}/>} />
          <Route path="/add-entry" element={<FoodForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/daily-targets" element={<DailyTargets />} />
        </Routes>
      
    </div>
  );
}

export default App;

