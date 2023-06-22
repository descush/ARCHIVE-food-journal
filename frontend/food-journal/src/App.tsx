import React, { useState, useEffect } from "react";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import axios from "axios";
import Entry from "../../../backend/src/models/Entry";

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
      <Home entries={entries} /> 
    </div>
  );
}

export default App;

