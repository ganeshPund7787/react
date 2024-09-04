import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={<h1 className="text-2xl font-bold">About</h1>}
        />
        <Route
          path="/contact"
          element={<h1 className="text-2xl font-bold">Contact</h1>}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
