import React from "react";
import { Dashboard } from "./common/Dashboard";
import { StudData } from "./apidata/StudData";
import { Login } from "./common/Login";
import { Route, Routes } from "react-router-dom";
import { Error } from "./common/Error";

function App() {
  return (<>  
  <Routes>    
    <Route exact path="/" element={ <Login />} />
    <Route path="/sing-up" element={<Dashboard /> } />
    <Route path="/dashboard" element={<StudData /> } />
    <Route path="*" element={<Error /> } />
  </Routes>   
   </>);
}

export default App;
