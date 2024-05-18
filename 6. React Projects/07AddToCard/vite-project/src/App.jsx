import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import CardStore from "./components/CardStore";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addToCard" element={<CardStore />} />
        {/* <Route path="#" element={<Navigate to={"/"} />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
