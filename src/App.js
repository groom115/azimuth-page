import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './views/login';
import Details from './views/details';

function App() {



  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/details" element={<Details />} />

      </Routes>
    </Router>
  );
}

export default App;
