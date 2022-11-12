
import './App.css';

import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import HomePage from './Components/Home';





function App() {
  return (
  <BrowserRouter>
  <Route path='/' component={HomePage} />

  </BrowserRouter>
  );
}

export default App;
