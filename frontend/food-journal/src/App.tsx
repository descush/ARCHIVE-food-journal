import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import { getFood } from './services/FoodService';

function App() {

  const [food, setFood] = useState<any[]>([])

  useEffect(() => {
    getFood().then((data: any) => setFood(data.results))
  }, [])



 

  return (
    <div className="App">
    </div>
  );
}

export default App;
