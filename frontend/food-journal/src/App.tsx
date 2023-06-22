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
  //// The useEffect hook is used to fetch the entries from the server when the component mounts. It specifies a callback function fetchEntries to be executed.
  useEffect(() => {
    fetchEntries();
  }, []);
  //// The fetchEntries function is an asynchronous function that makes an HTTP GET request to retrieve the entries from the server using the axios library. It updates the state with the retrieved data by calling setEntries(response.data).
  const fetchEntries = async () => {
    try {
      const response = await axios.get<Entry[]>(
        "http://localhost:3000/entries"
      );
      setEntries(response.data);
    } catch (error) {
      console.error("Error fetching entries:", error);
    }
  };

  return (
    <div className="App">
      {/* Render the Header component */}
      <Header />

      <Routes>
        {/* Route for the Home component with entries prop */}
        <Route path="/" element={<Home entries={entries} />} />
        <Route path="/add-entry" element={<FoodForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/daily-targets" element={<DailyTargets />} />
      </Routes>
    </div>
  );
}

export default App;
