import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./BasicExample";
import CollapsibleExample from "./Navbar";
import Services from "./Services";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <CollapsibleExample />
      <Routes>
        <Route path="cards" element={<Card />} />
        <Route path="services" element={<Services />} />
        <Route />
        <Route />
      </Routes>
    </Router>
  );
};

export default App;
