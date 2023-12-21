
import './App.css';

import InicioPagina from './paginas/InicioPagina';
import EnlacePagina from "./paginas/EnlacePagina";
import AngelesArcangelesPagina from "./paginas/AngelesArcangelesPagina";
import FrecuenciaPagina from "./paginas/FrecuenciaPagina";

import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import Menu from './Componente/menu'


function App() {
  return (
    <>
     <Router>
    <Menu />
    <div className="container pt-5 mt-5">
   
      <Routes>
      <Route path="/" element={<InicioPagina/>}/>
      <Route path="/enlace" element={<EnlacePagina/>}/>
      <Route path="/angelesarcangeles" element={<AngelesArcangelesPagina/>}/>
      <Route path="/frecuencia" element={<FrecuenciaPagina/>}/>
      </Routes>
      
     </div>
    </Router>
    </>
      );
}


export default App;
