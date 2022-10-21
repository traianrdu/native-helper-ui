import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./containers/Home"
import AndroidToIOS from "./containers/AndroidToIOS"

/*
background-image: linear-gradient(128deg,#00897c,#1ea69b);  // gradient idea
*/

export default function App() {
  return (
    <Router>
      <Navbar/>
      <div className="container">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/android-to-ios' element={<AndroidToIOS />} />
        </Routes>
      </div>
    </Router>
  );
}