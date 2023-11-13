import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Game from './pages/Game.tsx';
import Garage from './pages/Garage.tsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/garage" element={<Garage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
