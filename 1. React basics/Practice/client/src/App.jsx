import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Signup from "./components/Signup";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {/* <Route path="/" element={ } /> */}
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
