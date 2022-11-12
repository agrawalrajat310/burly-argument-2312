
import './App.css';

import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import HomePage from './Components/Home';


import Header from './Components/Header';


function App() {
  return (
  <BrowserRouter>
  <Header />
  <Route path='/' component={HomePage} />

  </BrowserRouter>
  );
}

export default App;
