import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Education from "./pages/Education";
import Interest from "./pages/Interest";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

const App = () => {
  return <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/education" element={<Education />}></Route>  
    <Route path="/interest" element={<Interest />}></Route>    
    <Route path="/skills" element={<Skills />}></Route>    
    <Route path="/contact" element={<Contact />}></Route>    
  </Routes>
  </BrowserRouter>;
  </>
  
};

export default App;
