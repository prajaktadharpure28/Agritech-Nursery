import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Addplant from "./components/Addplant/Addplant";
import Showplant from "./components/Showplant/Showplant";


function App() {

  return(
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Dashboard/>} />
    <Route path="/addplant" element={<Addplant/>} />
    <Route path="/showplant" element={<Showplant/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}


export default App;
