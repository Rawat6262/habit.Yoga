import { Route, Routes } from "react-router-dom";
import Yoga from "./Habityoga";
import HabitProfile from "./Habityoga2";


export default function App() {
  return (
    <>
    
        <Routes>
          <Route path="/" element={<Yoga />} />
          <Route path="/profile/:id" element={<HabitProfile />} />
        </Routes>
      {/* <Toaster position="top-center" richColors  /> */}
    </>
  );
}
