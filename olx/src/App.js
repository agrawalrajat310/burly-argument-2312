import React from "react";
import "./App.css";

import "./Props.css";

import { BrowserRouter, Route, Link } from "react-router-dom";
import HomePage from "./Routes/Home";
import AddItem from "./Components/AddItem";
// import Header from "./Components/Header";
import Navbar from "../src/Components/Navbar";
import AllRoutes from "../src/Routes/AllRoutes";
import Footer from "./Components/Footer";

import Api from "./Components/Api";

function App() {
  return (
    <>
      {/* <Header /> */}
      <Navbar />
      <AllRoutes />
      {/* <HomePage /> */}
      {/* <Api /> */}

      <Footer />
    </>
  );
}

export default App;