import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import BussinessSignup from "./pages/signup/BussinessSignup";
import ProtectRouteSignup from "./components/protectedRoutes/SignupProtected";

function App() {
  return (
    <BrowserRouter>
     
      <Routes>
      
        <Route element={<ProtectRouteSignup/>}>
        <Route path="/bussines-signup" element={<BussinessSignup />} />
        </Route>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
