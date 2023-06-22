import { FoodForm } from "../FoodForm";
import { Link, Route, Routes } from "react-router-dom";
import { Login } from "../Login/Login";
import { DailyTargets } from "../DailyTargets/DailyTargets";
import Entry from "../../../../../backend/src/models/Entry"

interface HomeProps {
    entries: Entry[]; // Add entries prop

  }
  
  export function Home(props: HomeProps) {
    const { entries } = props;
  
    console.log("Entries prop:", entries); // Log entries prop
  
    return (
      <div>
         <Link to="/add-entry">Add Entry</Link>
                <Link to="/daily-targets">Daily Targets</Link>
        <div>
          {/* Add entries rendering */}
          {entries.length > 0 ? (
            entries.map((entry) => (
              <div key={entry._id?.toString()}>
                <h3>Entry ID: {entry._id?.toString()}</h3>
                <p>Protein Amount: {entry.proteinAmount}</p>
                <p>Protein Type: {entry.proteinType}</p>
                <p>Veggies Amount: {entry.veggiesAmount}</p>
                <p>Veggies Type: {entry.veggiesType}</p>
                <p>Fats Amount: {entry.fatsAmount}</p>
                <p>Fats Type: {entry.fatsType}</p>
                <p>Carbs Amount: {entry.carbsAmount}</p>
                <p>Carbs Type: {entry.carbsType}</p>
              </div>
            ))
          ) : (
            <p>No entries found.</p>
          )}
  
        </div>
      </div>
    );
  }