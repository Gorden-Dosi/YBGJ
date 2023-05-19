import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
// import Calculater from './pages/Calculater';
import TransForm from "./pages/TransForm";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <switch>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/calculater" element={<Calculater/>} /> */}
          <Route path="/tranceform" element={<TransForm />} />
        </Routes>
      </switch>
    </Router>
  );
}

export default App;
