import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Addplant from "./components/Addplant/Addplant";


function App() {

  return(
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Dashboard/>} />
    <Route path="/addplant" element={<Addplant/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}


export default App;
