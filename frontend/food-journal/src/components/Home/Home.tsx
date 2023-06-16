import { FoodForm } from "../FoodForm";
import { Link, Route, Routes } from "react-router-dom";
import { Login } from "../Login/Login";
import { DailyTargets } from "../DailyTargets/DailyTargets";

export function Home() {



    return (
        <div>
            <Routes>
                <Route path="/add-entry" element={<FoodForm />} />
                <Route path="/login" element={<Login />} />
                <Route path="/daily-targets" element={<DailyTargets />} />
            </Routes>
            <div>
                {/* stuff */}
                <Link to="/add-entry">Add Entry</Link>
                <Link to="/daily-targets">Daily Targets</Link>
            </div>
        </div>
    )
}