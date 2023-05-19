import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import TransForm from './pages/TransForm';
// import Calculater from './pages/Calculater';

function App() {
  
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/calculater" element={<Calculater/>} /> */}
        <Route path='/tranceform' element={<TransForm/>} />
      </Routes>
    </Router>
  );
}

export default App;
