import FoodForm from "../FoodForm";
import { Route, Routes } from "react-router-dom";
import { Login } from "../Login/Login";

export function Home() {



    return(
        <div>
            <Routes>
                    <Route path="/foodform" element={<FoodForm />} />
                    <Route path="/login" element={<Login />} />
            </Routes>
             <div>
                {/* stuff */}
             </div>
        </div>
    )
}