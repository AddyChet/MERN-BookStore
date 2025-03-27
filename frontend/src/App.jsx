import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/home/home";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen max-w-screen-xl mx-auto px-4 py-4 font-primary">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<h1>about</h1>} />
          <Route path="/orders" element={<h1>orders</h1>} />
        </Routes>
      </main>

      <Footer />
    </>
  );
};

export default App;
