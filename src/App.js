import React from "react";
import "./App.css";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Signin from "./Pages/Signin/Signin";
import Signup from "./Pages/Signup/Signup";
import Saved from "./Components/Saved/Saved";




function App() {
  return (
   
  
    <BrowserRouter>

   
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/saved" element={<Saved />} />
       
      </Routes>
      
    </BrowserRouter>
 
  );
}

export default App;
