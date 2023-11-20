import React from "react";
import './App.css';
import Menu from './Componente/menu'

import AngelesArcangelesPagina from "./paginas/AngelesArcangelesPagina";


import { Routes, Route, BrowserRouter as Router } from "react-router-dom";






function App() {
  return (
    <>
    <Router>
    <Menu />
    <div className="container pt-5 mt-5">
    

      <Routes>
      <Route path="/" element={<AngelesArcangelesPagina/>}/>
      </Routes>

         

    </div>
    </Router>
    </>
      );
}

export default App;