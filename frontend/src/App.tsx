import "./App.css";

import { Router, Route, Routes } from "react-router-dom";
import Signup from "./pages/signup/Signup";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
    <Route path="/" element={<Signup/>}/>
    <Route path="/login" element={<Login/>}/>
    </Routes>
  );
}

export default App;
