import React, { useContext, useState } from "react";
import FoodContext from "../Context/FoodContext";
import { FoodEntry } from "../interface/FoodEntry";
import { addSubmission } from "../services/FoodEntryService";

export function FoodForm() {
  const { addFood } = useContext(FoodContext);

  const [proteinAmount, setProteinAmount] = useState(0);
  const [proteinType, setProteinType] = useState('');
  const [veggiesAmount, setVeggiesAmount] = useState(0);
  const [veggiesType, setVeggiesType] = useState('');
  const [fatsAmount, setFatsAmount] = useState(0);
  const [fatsType, setFatsType] = useState('');
  const [carbsAmount, setCarbsAmount] = useState(0);
  const [carbsType, setCarbsType] = useState('');


  function onSubmit(e: any) {
    e.preventDefault();

    const newSubmission = {
      proteinAmount: proteinAmount,
      proteinType: proteinType,
      veggiesAmount: veggiesAmount,
      veggiesType: veggiesType,
      fatsAmount: fatsAmount,
      fatsType: fatsType,
      carbsAmount: carbsAmount,
      carbsType: carbsType
    }

    // addSubmission(newSubmission).then(data => addFood(data))
    addFood(newSubmission);
  }


  return (
    <form onSubmit={e => onSubmit(e)}>
      <input value={proteinAmount} onChange={(e => setProteinAmount(+e.target.value))} type="number" placeholder="Protein Amount"></input>
      <input value={proteinType} onChange={(e => setProteinType(e.target.value))} type="text" placeholder="Protein Type"></input>
      <input value={veggiesAmount} onChange={(e => setVeggiesAmount(+e.target.value))} type="number" placeholder="Veg Amount"></input>
      <input value={veggiesType} onChange={(e => setVeggiesType(e.target.value))} type="text" placeholder="Veg Type"></input>
      <input value={fatsAmount} onChange={(e => setFatsAmount(+e.target.value))} type="number" placeholder="Fats Amount"></input>
      <input value={fatsType} onChange={(e => setFatsType(e.target.value))} type="text" placeholder="Fats Type"></input>
      <input value={carbsAmount} onChange={(e => setCarbsAmount(+e.target.value))} type="number" placeholder="Carbs Amount"></input>
      <input value={carbsType} onChange={(e => setCarbsType(e.target.value))} type="text" placeholder="Carbs Type"></input>
      <button>Add Entry</button>
    </form>
  );
};
